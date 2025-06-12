// multer.config.js
import multer from "multer";

const storage = multer.memoryStorage(); // file will be available in req.file.buffer

export const upload = multer({ storage });
