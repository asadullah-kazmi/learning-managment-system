import { Academy } from "../models/index.js";
import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/errorResponse.js";

// @desc    Register new academy
// @route   POST /api/v1/academies
// @access  Public
const registerAcademy = asyncHandler(async (req, res, next) => {
  const {
    name,
    email,
    phone,
    password,
    address,
    businessType,
    description,
    message,
    administrators,
  } = req.body;

  // Check if academy already exists
  const existingAcademy = await Academy.findOne({ email });
  if (existingAcademy) {
    return next(
      new ErrorResponse("Academy with this email already exists", 400)
    );
  }

  // Create academy
  const academy = await Academy.create({
    name,
    email,
    phone,
    password,
    address,
    businessType,
    description,
    message,
    administrators,
  });

  // Remove password from response
  academy.password = undefined;

  res.status(201).json({
    success: true,
    data: academy,
    message: "Academy registered successfully. Please wait for verification.",
  });
});

// @desc    Get all academies
// @route   GET /api/v1/academies
// @access  Public
const getAcademies = asyncHandler(async (req, res, next) => {
  const { page = 1, limit = 10, status, businessType, city } = req.query;

  // Build filter object
  const filter = {};
  if (status) filter.status = status;
  if (businessType) filter.businessType = businessType;
  if (city) filter["address.city"] = { $regex: city, $options: "i" };

  // Only show active and verified academies for public access
  if (!req.user || req.userType !== "academy") {
    filter.status = "active";
    filter.isVerified = true;
  }

  const academies = await Academy.find(filter)
    .select("-password -administrators")
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .sort({ createdAt: -1 });

  const total = await Academy.countDocuments(filter);

  res.status(200).json({
    success: true,
    data: academies,
    pagination: {
      page: parseInt(page),
      limit: parseInt(limit),
      total,
      pages: Math.ceil(total / limit),
    },
  });
});

// @desc    Get single academy
// @route   GET /api/v1/academies/:id
// @access  Public
const getAcademy = asyncHandler(async (req, res, next) => {
  const academy = await Academy.findById(req.params.id).select("-password");

  if (!academy) {
    return next(new ErrorResponse("Academy not found", 404));
  }

  // Check if user can access this academy
  if (req.user && req.userType !== "academy") {
    if (academy.status !== "active" || !academy.isVerified) {
      return next(new ErrorResponse("Academy not found", 404));
    }
  }

  res.status(200).json({
    success: true,
    data: academy,
  });
});

// @desc    Update academy
// @route   PUT /api/v1/academies/:id
// @access  Private (Academy only)
const updateAcademy = asyncHandler(async (req, res, next) => {
  let academy = await Academy.findById(req.params.id);

  if (!academy) {
    return next(new ErrorResponse("Academy not found", 404));
  }

  // Check if user owns this academy
  if (req.user._id.toString() !== academy._id.toString()) {
    return next(
      new ErrorResponse("Not authorized to update this academy", 403)
    );
  }

  // Remove sensitive fields from update
  const { password, email, status, isVerified, ...updateData } = req.body;

  academy = await Academy.findByIdAndUpdate(req.params.id, updateData, {
    new: true,
    runValidators: true,
  }).select("-password");

  res.status(200).json({
    success: true,
    data: academy,
    message: "Academy updated successfully",
  });
});

// @desc    Delete academy
// @route   DELETE /api/v1/academies/:id
// @access  Private (Academy only)
const deleteAcademy = asyncHandler(async (req, res, next) => {
  const academy = await Academy.findById(req.params.id);

  if (!academy) {
    return next(new ErrorResponse("Academy not found", 404));
  }

  // Check if user owns this academy
  if (req.user._id.toString() !== academy._id.toString()) {
    return next(
      new ErrorResponse("Not authorized to delete this academy", 403)
    );
  }

  await academy.deleteOne();

  res.status(200).json({
    success: true,
    message: "Academy deleted successfully",
  });
});

// @desc    Get academy statistics
// @route   GET /api/v1/academies/:id/stats
// @access  Private (Academy only)
const getAcademyStats = asyncHandler(async (req, res, next) => {
  const academy = await Academy.findById(req.params.id);

  if (!academy) {
    return next(new ErrorResponse("Academy not found", 404));
  }

  // Check if user owns this academy
  if (req.user._id.toString() !== academy._id.toString()) {
    return next(
      new ErrorResponse("Not authorized to view this academy stats", 403)
    );
  }

  // Get statistics from related collections
  const stats = {
    totalStudents: academy.totalStudents,
    totalTeachers: academy.totalTeachers,
    totalCourses: academy.totalCourses,
    adminCount: academy.adminCount,
    status: academy.status,
    isVerified: academy.isVerified,
    createdAt: academy.createdAt,
  };

  res.status(200).json({
    success: true,
    data: stats,
  });
});

// @desc    Add administrator to academy
// @route   POST /api/v1/academies/:id/administrators
// @access  Private (Academy only)
const addAdministrator = asyncHandler(async (req, res, next) => {
  const academy = await Academy.findById(req.params.id);

  if (!academy) {
    return next(new ErrorResponse("Academy not found", 404));
  }

  // Check if user owns this academy
  if (req.user._id.toString() !== academy._id.toString()) {
    return next(new ErrorResponse("Not authorized to add administrators", 403));
  }

  const { name, lastName, email, phone } = req.body;

  // Check if administrator already exists
  const existingAdmin = academy.administrators.find(
    (admin) => admin.email === email
  );

  if (existingAdmin) {
    return next(
      new ErrorResponse("Administrator with this email already exists", 400)
    );
  }

  academy.administrators.push({
    name,
    lastName,
    email,
    phone,
  });

  await academy.save();

  res.status(200).json({
    success: true,
    message:
      "Administrator added successfully. They will receive an email invitation.",
  });
});

// @desc    Remove administrator from academy
// @route   DELETE /api/v1/academies/:id/administrators/:adminId
// @access  Private (Academy only)
const removeAdministrator = asyncHandler(async (req, res, next) => {
  const academy = await Academy.findById(req.params.id);

  if (!academy) {
    return next(new ErrorResponse("Academy not found", 404));
  }

  // Check if user owns this academy
  if (req.user._id.toString() !== academy._id.toString()) {
    return next(
      new ErrorResponse("Not authorized to remove administrators", 403)
    );
  }

  const adminIndex = academy.administrators.findIndex(
    (admin) => admin._id.toString() === req.params.adminId
  );

  if (adminIndex === -1) {
    return next(new ErrorResponse("Administrator not found", 404));
  }

  academy.administrators.splice(adminIndex, 1);
  await academy.save();

  res.status(200).json({
    success: true,
    message: "Administrator removed successfully",
  });
});

// @desc    Upload academy logo
// @route   POST /api/v1/academies/:id/logo
// @access  Private (Academy only)
const uploadLogo = asyncHandler(async (req, res, next) => {
  const academy = await Academy.findById(req.params.id);

  if (!academy) {
    return next(new ErrorResponse("Academy not found", 404));
  }

  // Check if user owns this academy
  if (req.user._id.toString() !== academy._id.toString()) {
    return next(new ErrorResponse("Not authorized to upload logo", 403));
  }

  if (!req.file) {
    return next(new ErrorResponse("Please upload a file", 400));
  }

  // Update logo URL (assuming file upload service)
  academy.logo = req.file.path;
  await academy.save();

  res.status(200).json({
    success: true,
    data: { logo: academy.logo },
    message: "Logo uploaded successfully",
  });
});

export {
  registerAcademy,
  getAcademies,
  getAcademy,
  updateAcademy,
  deleteAcademy,
  getAcademyStats,
  addAdministrator,
  removeAdministrator,
  uploadLogo,
};
