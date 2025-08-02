import express from "express";
import {
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
  uploadVideo,
} from "../controllers/courseController.js";
import { protect, authorize } from "../middleware/auth.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// Public routes
router.get("/", getCourses);
router.get("/:id", getCourse);

// Protected routes
router.use(protect);
router.post("/", authorize("teacher"), createCourse);
router.put("/:id", authorize("teacher"), updateCourse);
router.delete("/:id", authorize("teacher"), deleteCourse);
router.put("/:id/publish", authorize("teacher"), publishCourse);
router.post("/:id/modules", authorize("teacher"), addModule);
router.post("/:id/modules/:moduleId/lessons", authorize("teacher"), addLesson);
router.get("/:id/stats", authorize("teacher"), getCourseStats);
router.post(
  "/:id/thumbnail",
  authorize("teacher"),
  upload.single("thumbnail"),
  uploadThumbnail
);
router.post(
  "/:id/video",
  authorize("teacher"),
  upload.single("video"),
  uploadVideo
);

export default router;
