import { Router } from "express";
import {
  changeCurrentPassword,
  getCurrentUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  deleteUser,
  updateUserProfile,
  updateUserLocation,
  updateUserCredits,
  getAllUsers
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { verifyAdmin } from "../middlewares/admin.middleware.js";

const router = Router();

// Public routes
router.route("/login").post(loginUser);
router.route("/refresh-token").post(refreshAccessToken);

// Protected routes
router.route("/logout").post( logoutUser);
router.route("/change-password").post( changeCurrentPassword);
router.route("/current-user").get( getCurrentUser);
router.route("/update-profile").patch(updateUserProfile);
router.route("/update-location").patch(updateUserLocation);

// Admin protected routes
router.route("/register").post(registerUser);
// router.route("/credits/:userId").patch(verifyJWT, verifyAdmin, updateUserCredits);
router.route("/users").get(getAllUsers);
router.route("/:id").delete(deleteUser);

export default router;
