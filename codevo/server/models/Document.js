import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      enum: ["offer", "assignment", "certificate"],
      required: true,
    },

    fileUrl: {
      type: String,
      required: true,
    },

    publicId: {
      type: String,
      required: true,
    },

    published: {
      type: Boolean,
      default: true,
    },
    originalName: {
  type: String,
},
  },
  { timestamps: true }
);

export default mongoose.model("Document", documentSchema);