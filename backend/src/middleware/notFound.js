import ErrorResponse from "../utils/errorResponse.js";

const notFound = (req, res, next) => {
  const error = new ErrorResponse(`Not Found - ${req.originalUrl}`, 404);
  next(error);
};

export { notFound };
