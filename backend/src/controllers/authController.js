import { Academy, Student, Teacher } from '../models/index.js';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/errorResponse.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// @desc    Login user
// @route   POST /api/v1/auth/login
// @access  Public
const login = asyncHandler(async (req, res, next) => {
  const { email, password, userType } = req.body;

  // Validate email & password
  if (!email || !password) {
    return next(new ErrorResponse('Please provide an email and password', 400));
  }

  if (!userType || !['academy', 'student', 'teacher'].includes(userType)) {
    return next(new ErrorResponse('Please provide a valid user type', 400));
  }

  // Check for user
  let user;
  switch (userType) {
    case 'academy':
      user = await Academy.findOne({ email }).select('+password');
      break;
    case 'student':
      user = await Student.findOne({ email }).select('+password');
      break;
    case 'teacher':
      user = await Teacher.findOne({ email }).select('+password');
      break;
  }

  if (!user) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  // Check if password matches
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  // Check if user is active
  if (user.status !== 'active') {
    return next(new ErrorResponse('Account is not active', 401));
  }

  // Remove password from response
  user.password = undefined;

  // Generate JWT token
  const token = jwt.sign(
    { id: user._id, userType },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE || '30d' }
  );

  res.status(200).json({
    success: true,
    data: user,
    token,
    userType
  });
});

// @desc    Logout user
// @route   POST /api/v1/auth/logout
// @access  Private
const logout = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: 'Logged out successfully'
  });
});

// @desc    Get current logged in user
// @route   GET /api/v1/auth/me
// @access  Private
const getMe = asyncHandler(async (req, res, next) => {
  let user;
  
  switch (req.userType) {
    case 'academy':
      user = await Academy.findById(req.user._id).select('-password');
      break;
    case 'student':
      user = await Student.findById(req.user._id)
        .select('-password')
        .populate('academies.academy', 'name email logo')
        .populate('purchasedCourses.course', 'title thumbnail');
      break;
    case 'teacher':
      user = await Teacher.findById(req.user._id)
        .select('-password')
        .populate('academies.academy', 'name email logo')
        .populate('createdCourses.course', 'title thumbnail status');
      break;
  }

  res.status(200).json({
    success: true,
    data: user,
    userType: req.userType
  });
});

// @desc    Update password
// @route   PUT /api/v1/auth/updatepassword
// @access  Private
const updatePassword = asyncHandler(async (req, res, next) => {
  const { currentPassword, newPassword } = req.body;

  if (!currentPassword || !newPassword) {
    return next(new ErrorResponse('Please provide current and new password', 400));
  }

  // Get user with password
  let user;
  switch (req.userType) {
    case 'academy':
      user = await Academy.findById(req.user._id).select('+password');
      break;
    case 'student':
      user = await Student.findById(req.user._id).select('+password');
      break;
    case 'teacher':
      user = await Teacher.findById(req.user._id).select('+password');
      break;
  }

  // Check current password
  const isMatch = await bcrypt.compare(currentPassword, user.password);
  if (!isMatch) {
    return next(new ErrorResponse('Current password is incorrect', 401));
  }

  // Hash new password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(newPassword, salt);
  await user.save();

  res.status(200).json({
    success: true,
    message: 'Password updated successfully'
  });
});

// @desc    Forgot password
// @route   POST /api/v1/auth/forgotpassword
// @access  Public
const forgotPassword = asyncHandler(async (req, res, next) => {
  const { email, userType } = req.body;

  if (!email || !userType) {
    return next(new ErrorResponse('Please provide email and user type', 400));
  }

  // Check for user
  let user;
  switch (userType) {
    case 'academy':
      user = await Academy.findOne({ email });
      break;
    case 'student':
      user = await Student.findOne({ email });
      break;
    case 'teacher':
      user = await Teacher.findOne({ email });
      break;
  }

  if (!user) {
    return next(new ErrorResponse('User not found', 404));
  }

  // Generate reset token
  const resetToken = jwt.sign(
    { id: user._id, userType },
    process.env.JWT_SECRET,
    { expiresIn: '10m' }
  );

  // TODO: Send email with reset token
  // For now, just return the token
  res.status(200).json({
    success: true,
    message: 'Password reset email sent',
    resetToken
  });
});

// @desc    Reset password
// @route   PUT /api/v1/auth/resetpassword/:resettoken
// @access  Public
const resetPassword = asyncHandler(async (req, res, next) => {
  const { resetToken } = req.params;
  const { password } = req.body;

  if (!password) {
    return next(new ErrorResponse('Please provide a new password', 400));
  }

  try {
    // Verify reset token
    const decoded = jwt.verify(resetToken, process.env.JWT_SECRET);
    
    // Get user
    let user;
    switch (decoded.userType) {
      case 'academy':
        user = await Academy.findById(decoded.id).select('+password');
        break;
      case 'student':
        user = await Student.findById(decoded.id).select('+password');
        break;
      case 'teacher':
        user = await Teacher.findById(decoded.id).select('+password');
        break;
    }

    if (!user) {
      return next(new ErrorResponse('Invalid reset token', 400));
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    res.status(200).json({
      success: true,
      message: 'Password reset successfully'
    });
  } catch (error) {
    return next(new ErrorResponse('Invalid reset token', 400));
  }
});

// @desc    Verify email
// @route   GET /api/v1/auth/verify/:token
// @access  Public
const verifyEmail = asyncHandler(async (req, res, next) => {
  const { token } = req.params;

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Get user
    let user;
    switch (decoded.userType) {
      case 'academy':
        user = await Academy.findById(decoded.id);
        break;
      case 'student':
        user = await Student.findById(decoded.id);
        break;
      case 'teacher':
        user = await Teacher.findById(decoded.id);
        break;
    }

    if (!user) {
      return next(new ErrorResponse('Invalid verification token', 400));
    }

    // Update user verification status
    user.isEmailVerified = true;
    await user.save();

    res.status(200).json({
      success: true,
      message: 'Email verified successfully'
    });
  } catch (error) {
    return next(new ErrorResponse('Invalid verification token', 400));
  }
});

// @desc    Refresh token
// @route   POST /api/v1/auth/refresh
// @access  Public
const refreshToken = asyncHandler(async (req, res, next) => {
  const { token } = req.body;

  if (!token) {
    return next(new ErrorResponse('Please provide a token', 400));
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Get user
    let user;
    switch (decoded.userType) {
      case 'academy':
        user = await Academy.findById(decoded.id).select('-password');
        break;
      case 'student':
        user = await Student.findById(decoded.id).select('-password');
        break;
      case 'teacher':
        user = await Teacher.findById(decoded.id).select('-password');
        break;
    }

    if (!user) {
      return next(new ErrorResponse('User not found', 404));
    }

    // Generate new token
    const newToken = jwt.sign(
      { id: user._id, userType: decoded.userType },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE || '30d' }
    );

    res.status(200).json({
      success: true,
      data: user,
      token: newToken,
      userType: decoded.userType
    });
  } catch (error) {
    return next(new ErrorResponse('Invalid token', 401));
  }
});

export {
  login,
  logout,
  getMe,
  updatePassword,
  forgotPassword,
  resetPassword,
  verifyEmail,
  refreshToken
};
