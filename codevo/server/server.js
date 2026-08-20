import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/studentRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import settingsRoutes from "./routes/settingsRoutes.js";
import documentRoutes from "./routes/documentRoutes.js";
import generateDocumentRoutes from "./routes/generateDocumentRoutes.js";

dotenv.config();
connectDB();

const app = express();



app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://codevo-fcpi.vercel.app",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/students", studentRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/documents", documentRoutes);
app.use("/api/generate", generateDocumentRoutes);

app.get("/", (req, res) => {
  res.json({ message: "CODEVO Backend Running 🚀" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});