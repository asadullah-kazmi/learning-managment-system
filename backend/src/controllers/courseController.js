import { Course, Academy, Teacher } from '../models/index.js';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/errorResponse.js';

// @desc    Create new course
// @route   POST /api/v1/courses
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
    targetAudience
  } = req.body;

  // Check if teacher has access to the academy
  const hasAcademyAccess = req.user.academies.some(academy => 
    academy.academy.toString() === academyId && academy.isActive
  );

  if (!hasAcademyAccess) {
    return next(new ErrorResponse('You must be a member of the academy to create courses', 403));
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
    targetAudience
  });

  res.status(201).json({
    success: true,
    data: course,
    message: 'Course created successfully'
  });
});

// @desc    Get all courses
// @route   GET /api/v1/courses
// @access  Public
const getCourses = asyncHandler(async (req, res, next) => {
  const { 
    page = 1, 
    limit = 10, 
    status, 
    category, 
    level, 
    academyId,
    teacherId,
    minPrice,
    maxPrice,
    search
  } = req.query;

  // Build filter object
  const filter = {};
  if (status) filter.status = status;
  if (category) filter.category = category;
  if (level) filter.level = level;
  if (academyId) filter.academy = academyId;
  if (teacherId) filter.teacher = teacherId;
  if (minPrice || maxPrice) {
    filter.price = {};
    if (minPrice) filter.price.$gte = minPrice;
    if (maxPrice) filter.price.$lte = maxPrice;
  }
  if (search) {
    filter.$or = [
      { title: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } }
    ];
  }

  // Only show published courses for public access
  if (!req.user || req.userType !== 'teacher') {
    filter.status = 'published';
  }

  const courses = await Course.find(filter)
    .populate('academy', 'name email logo')
    .populate('teacher', 'firstName lastName email')
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .sort({ createdAt: -1 });

  const total = await Course.countDocuments(filter);

  res.status(200).json({
    success: true,
    data: courses,
    pagination: {
      page: parseInt(page),
      limit: parseInt(limit),
      total,
      pages: Math.ceil(total / limit)
    }
  });
});

// @desc    Get single course
// @route   GET /api/v1/courses/:id
// @access  Public
const getCourse = asyncHandler(async (req, res, next) => {
  const course = await Course.findById(req.params.id)
    .populate('academy', 'name email logo')
    .populate('teacher', 'firstName lastName email bio');

  if (!course) {
    return next(new ErrorResponse('Course not found', 404));
  }

  // Check if user can access this course
  if (req.user && req.userType !== 'teacher') {
    if (course.status !== 'published') {
      return next(new ErrorResponse('Course not found', 404));
    }
  }

  res.status(200).json({
    success: true,
    data: course
  });
});

// @desc    Update course
// @route   PUT /api/v1/courses/:id
// @access  Private (Teacher only)
const updateCourse = asyncHandler(async (req, res, next) => {
  let course = await Course.findById(req.params.id);

  if (!course) {
    return next(new ErrorResponse('Course not found', 404));
  }

  // Check if user owns this course
  if (req.user._id.toString() !== course.teacher.toString()) {
    return next(new ErrorResponse('Not authorized to update this course', 403));
  }

  course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  }).populate('academy', 'name');

  res.status(200).json({
    success: true,
    data: course,
    message: 'Course updated successfully'
  });
});

// @desc    Delete course
// @route   DELETE /api/v1/courses/:id
// @access  Private (Teacher only)
const deleteCourse = asyncHandler(async (req, res, next) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    return next(new ErrorResponse('Course not found', 404));
  }

  // Check if user owns this course
  if (req.user._id.toString() !== course.teacher.toString()) {
    return next(new ErrorResponse('Not authorized to delete this course', 403));
  }

  await course.deleteOne();

  res.status(200).json({
    success: true,
    message: 'Course deleted successfully'
  });
});

// @desc    Publish course
// @route   PUT /api/v1/courses/:id/publish
// @access  Private (Teacher only)
const publishCourse = asyncHandler(async (req, res, next) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    return next(new ErrorResponse('Course not found', 404));
  }

  // Check if user owns this course
  if (req.user._id.toString() !== course.teacher.toString()) {
    return next(new ErrorResponse('Not authorized to publish this course', 403));
  }

  // Check if course has required content
  if (!course.modules || course.modules.length === 0) {
    return next(new ErrorResponse('Course must have at least one module to be published', 400));
  }

  course.status = 'published';
  course.publishedAt = Date.now();
  await course.save();

  res.status(200).json({
    success: true,
    data: course,
    message: 'Course published successfully'
  });
});

// @desc    Add module to course
// @route   POST /api/v1/courses/:id/modules
// @access  Private (Teacher only)
const addModule = asyncHandler(async (req, res, next) => {
  const { title, description, order } = req.body;

  const course = await Course.findById(req.params.id);

  if (!course) {
    return next(new ErrorResponse('Course not found', 404));
  }

  // Check if user owns this course
  if (req.user._id.toString() !== course.teacher.toString()) {
    return next(new ErrorResponse('Not authorized to modify this course', 403));
  }

  await course.addModule(title, description, order);

  res.status(200).json({
    success: true,
    data: course,
    message: 'Module added successfully'
  });
});

// @desc    Add lesson to module
// @route   POST /api/v1/courses/:id/modules/:moduleId/lessons
// @access  Private (Teacher only)
const addLesson = asyncHandler(async (req, res, next) => {
  const { title, description, content, videoUrl, duration, isFree, order } = req.body;

  const course = await Course.findById(req.params.id);

  if (!course) {
    return next(new ErrorResponse('Course not found', 404));
  }

  // Check if user owns this course
  if (req.user._id.toString() !== course.teacher.toString()) {
    return next(new ErrorResponse('Not authorized to modify this course', 403));
  }

  await course.addLesson(req.params.moduleId, title, description, content, videoUrl, duration, isFree, order);

  res.status(200).json({
    success: true,
    data: course,
    message: 'Lesson added successfully'
  });
});

// @desc    Get course statistics
// @route   GET /api/v1/courses/:id/stats
// @access  Private (Teacher only)
const getCourseStats = asyncHandler(async (req, res, next) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    return next(new ErrorResponse('Course not found', 404));
  }

  // Check if user owns this course
  if (req.user._id.toString() !== course.teacher.toString()) {
    return next(new ErrorResponse('Not authorized to view this course stats', 403));
  }

  const stats = {
    totalStudents: course.stats.totalStudents,
    totalRevenue: course.stats.totalRevenue,
    averageRating: course.stats.averageRating,
    totalReviews: course.stats.totalReviews,
    completionRate: course.stats.completionRate,
    modules: course.modules.length,
    lessons: course.totalLessonsCount,
    duration: course.totalDurationHours
  };

  res.status(200).json({
    success: true,
    data: stats
  });
});

// @desc    Upload course thumbnail
// @route   POST /api/v1/courses/:id/thumbnail
// @access  Private (Teacher only)
const uploadThumbnail = asyncHandler(async (req, res, next) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    return next(new ErrorResponse('Course not found', 404));
  }

  // Check if user owns this course
  if (req.user._id.toString() !== course.teacher.toString()) {
    return next(new ErrorResponse('Not authorized to upload thumbnail', 403));
  }

  if (!req.file) {
    return next(new ErrorResponse('Please upload a file', 400));
  }

  course.thumbnail = req.file.path;
  await course.save();

  res.status(200).json({
    success: true,
    data: { thumbnail: course.thumbnail },
    message: 'Thumbnail uploaded successfully'
  });
});

// @desc    Upload course video
// @route   POST /api/v1/courses/:id/video
// @access  Private (Teacher only)
const uploadVideo = asyncHandler(async (req, res, next) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    return next(new ErrorResponse('Course not found', 404));
  }

  // Check if user owns this course
  if (req.user._id.toString() !== course.teacher.toString()) {
    return next(new ErrorResponse('Not authorized to upload video', 403));
  }

  if (!req.file) {
    return next(new ErrorResponse('Please upload a file', 400));
  }

  course.previewVideo = req.file.path;
  await course.save();

  res.status(200).json({
    success: true,
    data: { previewVideo: course.previewVideo },
    message: 'Video uploaded successfully'
  });
});

export {
  createCourse,
  getCourses,
  getCourse,
  updateCourse,
  deleteCourse,
  publishCourse,
  addModule,
  addLesson,
  getCourseStats,
  uploadThumbnail,
  uploadVideo
};
