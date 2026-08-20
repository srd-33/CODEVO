import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      enum: ["offer", "certificate"],
      required: true,
    },

    fileUrl: String,
    publicId: String,
    originalName: String,

    published: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Document", documentSchema);