import Student from "../models/Student.js";

export const registerStudent = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message: "Name and Email are required",
      });
    }

    const existing = await Student.findOne({ email });

    if (existing) {
      return res.status(409).json({
        message: "Email already registered",
      });
    }

    const student = await Student.create({
      name,
      email,
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

export const getStudents = async (req, res) => {
  const students = await Student.find().sort({ createdAt: -1 });

  res.json(students);
};