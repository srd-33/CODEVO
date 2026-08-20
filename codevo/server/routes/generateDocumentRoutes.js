import express from "express";
import { generateOfferLetter, generateCertificate, } from "../controllers/generateDocumentController.js";

const router = express.Router();

router.get("/offer/:studentId", generateOfferLetter);
router.get("/certificate/:studentId", generateCertificate);

export default router;