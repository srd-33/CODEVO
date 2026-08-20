import express from "express";

import {
  registerStudent,
  loginStudent,
  googleLogin,
  googleStudentLogin,
  getStudents,
  getStudentById,
  updateStudentStatus,
  deleteStudent,
} from "../controllers/studentController.js";

const router = express.Router();

// Authentication
router.post("/register", registerStudent);
router.post("/login", loginStudent);
router.post("/google", googleLogin);
router.post("/google/login", googleStudentLogin);

// Student Management
router.get("/", getStudents);
router.get("/:id", getStudentById);
router.put("/:id/status", updateStudentStatus);
router.delete("/:id", deleteStudent);

export default router;