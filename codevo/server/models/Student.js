import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
      unique: true,
    },

    college: {
      type: String,
      required: true,
    },

    usn: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
    },


    semester: {
      type: Number,
      required: true,
    },

    domain: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Pending", "Approved", "Completed"],
      default: "Pending",
    },
    googleId: {
  type: String,
  unique: true,
},
webinarDate: {
  type: String,
  default: "",
},

whatsappLink: {
  type: String,
  default: "",
},
  },
  { timestamps: true }
);

export default mongoose.model("Student", studentSchema);