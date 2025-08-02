import { Teacher, Academy, Course } from "../models/index.js";
import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/errorResponse.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// @desc    Register new teacher
// @route   POST /api/v1/teachers
// @access  Public
const registerTeacher = asyncHandler(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    password,
    dateOfBirth,
    gender,
    qualification,
    specialization,
    experience,
    bio,
    address,
  } = req.body;

  // Check if teacher already exists
  const existingTeacher = await Teacher.findOne({ email });
  if (existingTeacher) {
    return next(
      new ErrorResponse("Teacher with this email already exists", 400)
    );
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create teacher
  const teacher = await Teacher.create({
    firstName,
    lastName,
    email,
    phone,
    password: hashedPassword,
    dateOfBirth,
    gender,
    qualification,
    specialization,
    experience,
    bio,
    address,
  });

  // Remove password from response
  teacher.password = undefined;

  // Generate JWT token
  const token = jwt.sign(
    { id: teacher._id, userType: "teacher" },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE || "30d" }
  );

  res.status(201).json({
    success: true,
    data: teacher,
    token,
    message: "Teacher registered successfully",
  });
});

// @desc    Get all teachers (Academy only)
// @route   GET /api/v1/teachers
// @access  Private (Academy only)
const getTeachers = asyncHandler(async (req, res, next) => {
  const { page = 1, limit = 10, status, specialization, academyId } = req.query;

  // Build filter object
  const filter = {};
  if (status) filter.status = status;
  if (specialization) filter.specialization = { $in: [specialization] };
  if (academyId) {
    filter["academies.academy"] = academyId;
    filter["academies.isActive"] = true;
  }

  const teachers = await Teacher.find(filter)
    .select("-password")
    .populate("academies.academy", "name email")
    .populate("createdCourses.course", "title thumbnail status")
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .sort({ createdAt: -1 });

  const total = await Teacher.countDocuments(filter);

  res.status(200).json({
    success: true,
    data: teachers,
    pagination: {
      page: parseInt(page),
      limit: parseInt(limit),
      total,
      pages: Math.ceil(total / limit),
    },
  });
});

// @desc    Get single teacher
// @route   GET /api/v1/teachers/:id
// @access  Private
const getTeacher = asyncHandler(async (req, res, next) => {
  const teacher = await Teacher.findById(req.params.id)
    .select("-password")
    .populate("academies.academy", "name email logo")
    .populate("createdCourses.course", "title thumbnail status stats")
    .populate("createdCourses.academy", "name");

  if (!teacher) {
    return next(new ErrorResponse("Teacher not found", 404));
  }

  res.status(200).json({
    success: true,
    data: teacher,
  });
});

// @desc    Update teacher
// @route   PUT /api/v1/teachers/:id
// @access  Private
const updateTeacher = asyncHandler(async (req, res, next) => {
  let teacher = await Teacher.findById(req.params.id);

  if (!teacher) {
    return next(new ErrorResponse("Teacher not found", 404));
  }

  // Check if user can update this teacher
  if (
    req.userType === "teacher" &&
    req.user._id.toString() !== teacher._id.toString()
  ) {
    return next(
      new ErrorResponse("Not authorized to update this teacher", 403)
    );
  }

  // Remove sensitive fields from update
  const { password, email, ...updateData } = req.body;

  teacher = await Teacher.findByIdAndUpdate(req.params.id, updateData, {
    new: true,
    runValidators: true,
  }).select("-password");

  res.status(200).json({
    success: true,
    data: teacher,
    message: "Teacher updated successfully",
  });
});

// @desc    Delete teacher
// @route   DELETE /api/v1/teachers/:id
// @access  Private (Academy only)
const deleteTeacher = asyncHandler(async (req, res, next) => {
  const teacher = await Teacher.findById(req.params.id);

  if (!teacher) {
    return next(new ErrorResponse("Teacher not found", 404));
  }

  await teacher.deleteOne();

  res.status(200).json({
    success: true,
    message: "Teacher deleted successfully",
  });
});

// @desc    Join academy
// @route   POST /api/v1/teachers/join/:academyId
// @access  Private (Teacher only)
const joinAcademy = asyncHandler(async (req, res, next) => {
  const { academyId } = req.params;
  const { role = "teacher", permissions = [] } = req.body;

  // Check if academy exists
  const academy = await Academy.findById(academyId);
  if (!academy) {
    return next(new ErrorResponse("Academy not found", 404));
  }

  // Check if academy is active and verified
  if (academy.status !== "active" || !academy.isVerified) {
    return next(new ErrorResponse("Academy is not available for joining", 400));
  }

  // Join academy
  await req.user.joinAcademy(academyId, role, permissions);

  res.status(200).json({
    success: true,
    message: "Successfully joined academy",
  });
});

// @desc    Create course
// @route   POST /api/v1/teachers/courses
// @access  Private (Teacher only)
const createCourse = asyncHandler(async (req, res, next) => {
  const {
    title,
    description,
    category,
    subcategory,
    level,
    price,
    academyId,
    requirements,
    whatYouWillLearn,
    targetAudience,
  } = req.body;

  // Check if teacher has access to the academy
  const hasAcademyAccess = req.user.academies.some(
    (academy) => academy.academy.toString() === academyId && academy.isActive
  );

  if (!hasAcademyAccess) {
    return next(
      new ErrorResponse(
        "You must be a member of the academy to create courses",
        403
      )
    );
  }

  // Create course
  const course = await Course.create({
    title,
    description,
    category,
    subcategory,
    level,
    price,
    academy: academyId,
    teacher: req.user._id,
    requirements,
    whatYouWillLearn,
    targetAudience,
  });

  // Add course to teacher's created courses
  await req.user.createCourse(course._id, academyId);

  res.status(201).json({
    success: true,
    data: course,
    message: "Course created successfully",
  });
});

// @desc    Get teacher statistics
// @route   GET /api/v1/teachers/stats
// @access  Private (Teacher only)
const getTeacherStats = asyncHandler(async (req, res, next) => {
  const teacher = await Teacher.findById(req.user._id)
    .populate("academies.academy", "name")
    .populate("createdCourses.course", "title status stats");

  const stats = {
    totalAcademies: teacher.activeAcademiesCount,
    totalCourses: teacher.activeCoursesCount,
    teachingStats: teacher.teachingStats,
    academies: teacher.academies.filter((a) => a.isActive),
    courses: teacher.createdCourses.filter((c) => c.isActive),
  };

  res.status(200).json({
    success: true,
    data: stats,
  });
});

// @desc    Upload teacher resume
// @route   POST /api/v1/teachers/resume
// @access  Private (Teacher only)
const uploadResume = asyncHandler(async (req, res, next) => {
  if (!req.file) {
    return next(new ErrorResponse("Please upload a file", 400));
  }

  // Update teacher resume
  await Teacher.findByIdAndUpdate(req.user._id, {
    resume: req.file.path,
  });

  res.status(200).json({
    success: true,
    data: { resume: req.file.path },
    message: "Resume uploaded successfully",
  });
});

export {
  registerTeacher,
  getTeachers,
  getTeacher,
  updateTeacher,
  deleteTeacher,
  joinAcademy,
  createCourse,
  getTeacherStats,
  uploadResume,
};
