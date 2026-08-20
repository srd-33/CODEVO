import express from "express";
import upload from "../middleware/upload.js";

import {
  uploadDocument,
  getDocuments,
  deleteDocument,
} from "../controllers/documentController.js";
import { downloadDocument } from "../controllers/documentController.js";

const router = express.Router();

router.post("/", upload.single("file"), uploadDocument);
router.get("/", getDocuments);
router.delete("/:id", deleteDocument);
router.get("/download/:id", downloadDocument);

export default router;