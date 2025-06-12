import express from "express";
import { verifyAdmin } from "../middlewares/admin.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

import {upload} from "../middlewares/multer.middleware.js";
import {
    createPayment,
    getPaymentHistory,
    updatePaymentStatus,
    getAllPayments,
    getPaymentById
} from "../controllers/payment.controller.js";

const router = express.Router();

// User routes
router.post(
    "/",
    upload.single("screenshot"),
    createPayment
);

router.get(
    "/history",
    verifyJWT,
    getPaymentHistory
);

// Admin routes
router.get(
    "/",
    getAllPayments
);

router.get(
    "/:paymentId",
    verifyJWT,
    verifyAdmin,
    getPaymentById
);

router.patch(
    "/:paymentId/status",
    updatePaymentStatus
);

export default router;
