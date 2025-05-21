// routes/product.routes.js
import express from "express";
import {
  createProduct,
  updateProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
  updateStock,
  getProductsByCategory
} from "../controllers/product.controller.js";
import { verifyAdmin } from "../middlewares/admin.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

// Public routes
router.get("/",getAllProducts);
router.get("/:productId",getProductById);
router.get("/category/:category",getProductsByCategory);

// Admin-only routes
router.post(
  "/",
  upload.single("image"),
  createProduct
);

router.patch(
  "/:productId",
  upload.single("image"),
  updateProduct
);

router.delete(
  "/:productId",
  deleteProduct
);

router.patch(
  "/stock/:productId",
  updateStock
);

export default router;
