import Settings from "../models/Settings.js";

// GET SETTINGS
export const getSettings = async (req, res) => {
  try {
    let settings = await Settings.findOne();

    if (!settings) {
      settings = await Settings.create({
        webinarTitle: "CODEVO Internship Orientation",
        webinarDate: "",
        meetLink: "",
        whatsappLink: "",
      });
    }

    res.status(200).json(settings);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch settings",
    });
  }
};

// UPDATE SETTINGS
export const updateSettings = async (req, res) => {
  try {
    let settings = await Settings.findOne();

    if (!settings) {
      settings = await Settings.create(req.body);
    } else {
      settings = await Settings.findByIdAndUpdate(
        settings._id,
        req.body,
        { new: true }
      );
    }

    res.status(200).json(settings);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update settings",
    });
  }
};