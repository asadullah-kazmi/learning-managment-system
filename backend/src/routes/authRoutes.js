import express from "express";
import {
  login,
  logout,
  getMe,
  updatePassword,
  forgotPassword,
  resetPassword,
  verifyEmail,
  refreshToken,
} from "../controllers/authController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// Public routes
router.post("/login", login);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resettoken", resetPassword);
router.get("/verify/:token", verifyEmail);
router.post("/refresh", refreshToken);

// Protected routes
router.use(protect);
router.post("/logout", logout);
router.get("/me", getMe);
router.put("/updatepassword", updatePassword);

export default router;
