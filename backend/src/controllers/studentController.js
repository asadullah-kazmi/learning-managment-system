import { Student, Academy, Course } from '../models/index.js';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/errorResponse.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// @desc    Register new student
// @route   POST /api/v1/students
// @access  Public
const registerStudent = asyncHandler(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    password,
    dateOfBirth,
    gender,
    educationLevel,
    currentInstitution,
    grade,
    major,
    address
  } = req.body;

  // Check if student already exists
  const existingStudent = await Student.findOne({ email });
  if (existingStudent) {
    return next(new ErrorResponse('Student with this email already exists', 400));
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create student
  const student = await Student.create({
    firstName,
    lastName,
    email,
    phone,
    password: hashedPassword,
    dateOfBirth,
    gender,
    educationLevel,
    currentInstitution,
    grade,
    major,
    address
  });

  // Remove password from response
  student.password = undefined;

  // Generate JWT token
  const token = jwt.sign(
    { id: student._id, userType: 'student' },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE || '30d' }
  );

  res.status(201).json({
    success: true,
    data: student,
    token,
    message: 'Student registered successfully'
  });
});

// @desc    Get all students (Academy only)
// @route   GET /api/v1/students
// @access  Private (Academy only)
const getStudents = asyncHandler(async (req, res, next) => {
  const { page = 1, limit = 10, status, educationLevel, academyId } = req.query;

  // Build filter object
  const filter = {};
  if (status) filter.status = status;
  if (educationLevel) filter.educationLevel = educationLevel;
  if (academyId) {
    filter['academies.academy'] = academyId;
    filter['academies.isActive'] = true;
  }

  const students = await Student.find(filter)
    .select('-password')
    .populate('academies.academy', 'name email')
    .populate('purchasedCourses.course', 'title thumbnail')
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .sort({ createdAt: -1 });

  const total = await Student.countDocuments(filter);

  res.status(200).json({
    success: true,
    data: students,
    pagination: {
      page: parseInt(page),
      limit: parseInt(limit),
      total,
      pages: Math.ceil(total / limit)
    }
  });
});

// @desc    Get single student
// @route   GET /api/v1/students/:id
// @access  Private
const getStudent = asyncHandler(async (req, res, next) => {
  const student = await Student.findById(req.params.id)
    .select('-password')
    .populate('academies.academy', 'name email logo')
    .populate('purchasedCourses.course', 'title thumbnail price')
    .populate('purchasedCourses.academy', 'name');

  if (!student) {
    return next(new ErrorResponse('Student not found', 404));
  }

  res.status(200).json({
    success: true,
    data: student
  });
});

// @desc    Update student
// @route   PUT /api/v1/students/:id
// @access  Private
const updateStudent = asyncHandler(async (req, res, next) => {
  let student = await Student.findById(req.params.id);

  if (!student) {
    return next(new ErrorResponse('Student not found', 404));
  }

  // Check if user can update this student
  if (req.userType === 'student' && req.user._id.toString() !== student._id.toString()) {
    return next(new ErrorResponse('Not authorized to update this student', 403));
  }

  // Remove sensitive fields from update
  const { password, email, ...updateData } = req.body;

  student = await Student.findByIdAndUpdate(req.params.id, updateData, {
    new: true,
    runValidators: true
  }).select('-password');

  res.status(200).json({
    success: true,
    data: student,
    message: 'Student updated successfully'
  });
});

// @desc    Delete student
// @route   DELETE /api/v1/students/:id
// @access  Private (Academy only)
const deleteStudent = asyncHandler(async (req, res, next) => {
  const student = await Student.findById(req.params.id);

  if (!student) {
    return next(new ErrorResponse('Student not found', 404));
  }

  await student.deleteOne();

  res.status(200).json({
    success: true,
    message: 'Student deleted successfully'
  });
});

// @desc    Enroll student in academy
// @route   POST /api/v1/students/enroll/:academyId
// @access  Private (Student only)
const enrollInAcademy = asyncHandler(async (req, res, next) => {
  const { academyId } = req.params;
  const { role = 'student' } = req.body;

  // Check if academy exists
  const academy = await Academy.findById(academyId);
  if (!academy) {
    return next(new ErrorResponse('Academy not found', 404));
  }

  // Check if academy is active and verified
  if (academy.status !== 'active' || !academy.isVerified) {
    return next(new ErrorResponse('Academy is not available for enrollment', 400));
  }

  // Enroll student
  await req.user.enrollInAcademy(academyId, role);

  res.status(200).json({
    success: true,
    message: 'Successfully enrolled in academy'
  });
});

// @desc    Purchase course
// @route   POST /api/v1/students/purchase/:courseId
// @access  Private (Student only)
const purchaseCourse = asyncHandler(async (req, res, next) => {
  const { courseId } = req.params;
  const { academyId, price, paymentMethod } = req.body;

  // Check if course exists
  const course = await Course.findById(courseId);
  if (!course) {
    return next(new ErrorResponse('Course not found', 404));
  }

  // Check if course is published
  if (course.status !== 'published') {
    return next(new ErrorResponse('Course is not available for purchase', 400));
  }

  // Check if student has access to the academy
  const hasAcademyAccess = req.user.academies.some(academy => 
    academy.academy.toString() === academyId && academy.isActive
  );

  if (!hasAcademyAccess) {
    return next(new ErrorResponse('You must be enrolled in the academy to purchase this course', 403));
  }

  // Purchase course
  await req.user.purchaseCourse(courseId, academyId, price, paymentMethod);

  res.status(200).json({
    success: true,
    message: 'Course purchased successfully'
  });
});

// @desc    Update course progress
// @route   PUT /api/v1/students/progress/:courseId
// @access  Private (Student only)
const updateCourseProgress = asyncHandler(async (req, res, next) => {
  const { courseId } = req.params;
  const { progress } = req.body;

  if (progress < 0 || progress > 100) {
    return next(new ErrorResponse('Progress must be between 0 and 100', 400));
  }

  await req.user.updateCourseProgress(courseId, progress);

  res.status(200).json({
    success: true,
    message: 'Course progress updated successfully'
  });
});

// @desc    Get student statistics
// @route   GET /api/v1/students/stats
// @access  Private (Student only)
const getStudentStats = asyncHandler(async (req, res, next) => {
  const student = await Student.findById(req.user._id)
    .populate('academies.academy', 'name')
    .populate('purchasedCourses.course', 'title progress');

  const stats = {
    totalAcademies: student.activeAcademiesCount,
    totalCourses: student.activeCoursesCount,
    learningStats: student.learningStats,
    academies: student.academies.filter(a => a.isActive),
    courses: student.purchasedCourses.filter(c => c.isActive)
  };

  res.status(200).json({
    success: true,
    data: stats
  });
});

export {
  registerStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
  enrollInAcademy,
  purchaseCourse,
  updateCourseProgress,
  getStudentStats
}; 