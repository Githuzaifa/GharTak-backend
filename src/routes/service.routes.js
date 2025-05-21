// routes/service.routes.js
import express from "express";
import {
  createService,
  updateService,
  getAllServices,
  getServiceById,
  deleteService,
  getServicesByCategory
} from "../controllers/service.controller.js";
import { verifyAdmin } from "../middlewares/admin.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

// Secure routes
router.get("/",  getAllServices);
router.get("/:serviceId", getServiceById);
router.get("/category/:category", getServicesByCategory);

// Admin-only routes
router.post(
  "/",
  upload.single("image"),
  createService
);

router.patch(
  "/:serviceId",
  upload.single("image"),
  updateService
);

router.delete(
  "/:serviceId",
  deleteService
);

export default router;
