import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

import connectDB from "./config/db.js";
import Admin from "./models/Admin.js";

dotenv.config();

const createAdmin = async () => {
  await connectDB();

  const hashed = await bcrypt.hash("admin123", 10);

  const exists = await Admin.findOne({
    email: "admin@codevo.in",
  });

  if (exists) {
    console.log("Admin already exists");
    process.exit();
  }

  await Admin.create({
    email: "admin@codevo.in",
    password: hashed,
  });

  console.log("Admin Created");
  process.exit();
};

createAdmin();