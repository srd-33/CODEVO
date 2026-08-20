import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "codevo-documents",
    resource_type: "raw",
    allowed_formats: ["pdf", "docx"],
  },
});

const upload = multer({ storage });

export default upload;
