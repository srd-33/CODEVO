import Document from "../models/Document.js";
import cloudinary from "../config/cloudinary.js";

// Upload Document
export const uploadDocument = async (req, res) => {
  try {
    const { title, type } = req.body;

    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    const document = await Document.create({
      title,
      type,
      fileUrl: req.file.path,
      publicId: req.file.filename,
       originalName: req.file.originalname,   // ADD THIS
      published: true,
    });

    res.status(201).json(document);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Upload failed",
    });
  }
};

// Get Documents
export const getDocuments = async (req, res) => {
  try {
    const docs = await Document.find().sort({
      createdAt: -1,
    });

    res.json(docs);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch documents",
    });
  }
};

// Delete Document
export const deleteDocument = async (req, res) => {
  try {
    const doc = await Document.findById(req.params.id);

    if (!doc) {
      return res.status(404).json({
        message: "Document not found",
      });
    }

    await cloudinary.uploader.destroy(doc.publicId, {
      resource_type: "raw",
    });

    await Document.findByIdAndDelete(req.params.id);

    res.json({
      message: "Document deleted",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Delete failed",
    });
  }
};