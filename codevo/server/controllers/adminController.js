import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(401).json({
        message: "Invalid Email",
      });
    }

    const match = await bcrypt.compare(password, admin.password);

    if (!match) {
      return res.status(401).json({
        message: "Invalid Password",
      });
    }

    res.json({
      message: "Login Successful",
      admin: {
        email: admin.email,
      },
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};