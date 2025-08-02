import express from "express";
import {
  registerTeacher,
  getTeachers,
  getTeacher,
  updateTeacher,
  deleteTeacher,
  joinAcademy,
  createCourse,
  getTeacherStats,
  uploadResume,
} from "../controllers/teacherController.js";
import { protect, authorize } from "../middleware/auth.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// Public routes
router.post("/register", registerTeacher);

// Protected routes
router.use(protect);
router.get("/", authorize("academy"), getTeachers);
router.get("/:id", getTeacher);
router.put("/:id", updateTeacher);
router.delete("/:id", authorize("academy"), deleteTeacher);
router.post("/join/:academyId", authorize("teacher"), joinAcademy);
router.post("/courses", authorize("teacher"), createCourse);
router.get("/stats", authorize("teacher"), getTeacherStats);
router.post(
  "/resume",
  authorize("teacher"),
  upload.single("resume"),
  uploadResume
);

export default router;
