import express from "express";
import {
  registerAcademy,
  getAcademies,
  getAcademy,
  updateAcademy,
  deleteAcademy,
  getAcademyStats,
  addAdministrator,
  removeAdministrator,
  uploadLogo,
} from "../controllers/academyController.js";
import { protect, authorize } from "../middleware/auth.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// Public routes
router.post("/register", registerAcademy);
router.get("/", getAcademies);
router.get("/:id", getAcademy);

// Protected routes
router.use(protect);
router.put("/:id", authorize("academy"), updateAcademy);
router.delete("/:id", authorize("academy"), deleteAcademy);
router.get("/:id/stats", authorize("academy"), getAcademyStats);
router.post("/:id/administrators", authorize("academy"), addAdministrator);
router.delete(
  "/:id/administrators/:adminId",
  authorize("academy"),
  removeAdministrator
);
router.post(
  "/:id/logo",
  authorize("academy"),
  upload.single("logo"),
  uploadLogo
);

export default router;
