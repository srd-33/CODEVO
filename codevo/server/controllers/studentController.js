import Student from "../models/Student.js";
import bcrypt from "bcrypt";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleLogin = async (req, res) => {
  try {
    const { token, phone, college, usn, semester, domain } = req.body;

    console.log("Backend Client ID:", process.env.GOOGLE_CLIENT_ID);

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    const email = payload.email;
    const name = payload.name;
    const googleId = payload.sub;

    let student = await Student.findOne({
  $or: [{ googleId }, { email }],
});

if (student && !student.googleId) {
  student.googleId = googleId;
  await student.save();
}

    if (!student) {
      student = await Student.create({
        name,
        email,
        googleId,
        phone,
        college,
        usn: usn.toUpperCase(),
        semester,
        domain,
      });
    }

    res.status(200).json({
      message: "Login Successful",
      student,
    });
  } catch (error) {
    console.error("Google Error:", error);
    res.status(401).json({
      message: "Google authentication failed",
    });
  }
};

// REGISTER
export const registerStudent = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      college,
      usn,
      semester,
      domain,
      password,
    } = req.body;

    const existing = await Student.findOne({
      $or: [{ email }, { phone }, { usn }],
    });

    if (existing) {
      return res.status(400).json({
        message: "Student already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const student = await Student.create({
      name,
      email,
      phone,
      college,
      usn,
      semester,
      domain,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Registration Successful",
      student,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: err.message,
    });
  }
};

// LOGIN
export const loginStudent = async (req, res) => {
  try {
    const { usn, password } = req.body;

    const student = await Student.findOne({
      usn: usn.toUpperCase(),
    });

    if (!student) {
      return res.status(404).json({
        message: "Invalid USN",
      });
    }

    const valid = await bcrypt.compare(password, student.password);

    if (!valid) {
      return res.status(401).json({
        message: "Incorrect password",
      });
    }

    res.status(200).json({
      message: "Login Successful",
      student,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// GET ALL STUDENTS
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.json(students);
  } catch {
    res.status(500).json({ message: "Server Error" });
  }
};

// GET STUDENT BY ID
export const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).select("-password");

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.json(student);
  } catch {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// UPDATE STATUS
export const updateStudentStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(student);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to update status",
    });
  }
};

// DELETE
export const deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);

    res.json({
      message: "Student deleted successfully",
    });
  } catch {
    res.status(500).json({
      message: "Failed to delete student",
    });
  }
};

export const googleStudentLogin = async (req, res) => {
  try {
    const { token } = req.body;

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    const student = await Student.findOne({
      email: payload.email,
    });

    if (!student) {
      return res.status(404).json({
        message: "Please register first",
      });
    }

    res.json({
      message: "Login Successful",
      student,
    });
  } catch (error) {
    res.status(401).json({
      message: "Google authentication failed",
    });
  }
};
