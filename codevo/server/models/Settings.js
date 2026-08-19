import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema(
  {
    webinarTitle: {
      type: String,
      default: "CODEVO Internship Orientation",
    },

   webinarDate: {
  type: String,
  default: "",
},

    meetLink: {
      type: String,
      default: "",
    },

    whatsappLink: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Settings = mongoose.model("Settings", settingsSchema);

export default Settings;