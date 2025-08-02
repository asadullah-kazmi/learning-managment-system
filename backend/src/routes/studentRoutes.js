import express from "express";
import {
  registerStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
  enrollInAcademy,
  purchaseCourse,
  updateCourseProgress,
  getStudentStats,
} from "../controllers/studentController.js";
import { protect, authorize } from "../middleware/auth.js";

const router = express.Router();

// Public routes
router.post("/register", registerStudent);

// Protected routes
router.use(protect);
router.get("/", authorize("academy"), getStudents);
router.get("/:id", getStudent);
router.put("/:id", updateStudent);
router.delete("/:id", authorize("academy"), deleteStudent);
router.post("/enroll/:academyId", authorize("student"), enrollInAcademy);
router.post("/purchase/:courseId", authorize("student"), purchaseCourse);
router.put("/progress/:courseId", authorize("student"), updateCourseProgress);
router.get("/stats", authorize("student"), getStudentStats);

export default router;
