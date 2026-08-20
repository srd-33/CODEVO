import express from "express";
import {
  registerStudent,
  getStudents,
  deleteStudent,
   updateStudentStatus,
   loginStudent,
     getStudentById,googleLogin,
       googleStudentLogin,  loginStudent,
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/register", registerStudent);
router.post("/login", loginStudent);
router.post("/google", googleLogin);
router.post("/google/login", googleStudentLogin);

router.get("/", getStudents);
router.get("/:id", getStudentById);

router.delete("/:id", deleteStudent);
router.put("/:id/status", updateStudentStatus);


export default router;