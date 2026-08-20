import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";

import Student from "../models/Student.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ================= OFFER LETTER =================
export const generateOfferLetter = async (req, res) => {
  try {
    const student = await Student.findById(req.params.studentId);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const templatePath = path.join(
      __dirname,
      "../templates/OfferLetterTemplate.docx"
    );

    const content = fs.readFileSync(templatePath);

    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    const today = new Date().toLocaleDateString("en-IN");

    const offerId = `CV-2026-${student._id
      .toString()
      .slice(-6)
      .toUpperCase()}`;

    doc.render({
      NAME: student.name,
      USN: student.usn,
      COLLEGE: student.college,
      DOMAIN: student.domain,
      DATE: today,
      OFFER_ID: offerId,
    });

    const buffer = doc.getZip().generate({ type: "nodebuffer" });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    );

    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${student.name.replace(/\s+/g, "_")}_Offer_Letter.docx"`
    );

    res.send(buffer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// ================= CERTIFICATE =================
export const generateCertificate = async (req, res) => {

    console.log("=== Certificate API Hit ===");
  try {
    const student = await Student.findById(req.params.studentId);

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    // Allow only completed students
    if (student.status !== "Completed") {
      return res.status(403).json({
        message: "Certificate is available only after completion",
      });
    }

    // Load Certificate template
    const templatePath = path.join(
      __dirname,
      "../templates/CertificateTemplate.docx"
    );

    const content = fs.readFileSync(templatePath);

    const zip = new PizZip(content);

    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    const today = new Date().toLocaleDateString("en-IN");

   console.log(student);
    console.log("USN:", student.usn);
    // Replace placeholders
    doc.render({
      NAME: student.name,
      USN: student.usn,
      DOMAIN: student.domain,
      DATE: today,
    });

    const buffer = doc.getZip().generate({
      type: "nodebuffer",
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    );

    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${student.name.replace(
        /\s+/g,
        "_"
      )}_Certificate.docx"`
    );

    res.send(buffer);
  } catch (error) {
    console.error("CERTIFICATE ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};