import Document from "../models/Document.js";
import cloudinary from "../config/cloudinary.js";
import axios from "axios";


export const uploadDocument = async (req, res) => {
  try {
    const { title, type } = req.body;

    // Replace old Offer/Certificate template
    if (type === "offer" || type === "certificate") {
      const oldDoc = await Document.findOne({ type });

      if (oldDoc) {
        if (oldDoc.publicId) {
          await cloudinary.uploader.destroy(oldDoc.publicId, {
            resource_type: "raw",
          });
        }

        await Document.findByIdAndDelete(oldDoc._id);
      }
    }

    const document = await Document.create({
      title,
      type,
      fileUrl: req.file.path,
      publicId: req.file.filename,
      originalName: req.file.originalname,
      published: true,
    });

    res.status(201).json(document);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

export const getDocuments = async (req, res) => {
  try {
    const docs = await Document.find({ published: true }).sort({
      createdAt: -1,
    });

    res.json(docs);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

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
      message: "Deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};





export const downloadDocument = async (req, res) => {
  try {
    const doc = await Document.findById(req.params.id);

    if (!doc) {
      return res.status(404).json({ message: "Document not found" });
    }

    // Convert Cloudinary URL into a download URL
    const downloadUrl = doc.fileUrl.replace(
      "/upload/",
      "/upload/fl_attachment/"
    );

    return res.redirect(downloadUrl);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Download failed" });
  }
};