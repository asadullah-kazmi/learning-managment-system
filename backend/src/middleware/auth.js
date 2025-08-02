import jwt from "jsonwebtoken";
import { Academy, Student, Teacher } from "../models/index.js";
import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

// Protect routes
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  // Make sure token exists
  if (!token) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get user based on userType
    let user;
    switch (decoded.userType) {
      case "academy":
        user = await Academy.findById(decoded.id);
        break;
      case "student":
        user = await Student.findById(decoded.id);
        break;
      case "teacher":
        user = await Teacher.findById(decoded.id);
        break;
      default:
        return next(new ErrorResponse("Invalid user type", 401));
    }

    if (!user) {
      return next(new ErrorResponse("User not found", 401));
    }

    req.user = user;
    req.userType = decoded.userType;
    next();
  } catch (err) {
    return next(new ErrorResponse("Not authorized to access this route", 401));
  }
});

// Grant access to specific roles
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.userType)) {
      return next(
        new ErrorResponse(
          `User type '${req.userType}' is not authorized to access this route`,
          403
        )
      );
    }
    next();
  };
};

// Check if user has access to specific academy
const checkAcademyAccess = asyncHandler(async (req, res, next) => {
  const { academyId } = req.params;

  // Academy owners can access their own academy
  if (req.userType === "academy" && req.user._id.toString() === academyId) {
    return next();
  }

  // Students and teachers can access academies they're enrolled in
  if (req.userType === "student" || req.userType === "teacher") {
    const hasAccess = req.user.academies.some(
      (academy) => academy.academy.toString() === academyId && academy.isActive
    );

    if (!hasAccess) {
      return next(
        new ErrorResponse("Not authorized to access this academy", 403)
      );
    }
  }

  next();
});

export { protect, authorize, checkAcademyAccess };
