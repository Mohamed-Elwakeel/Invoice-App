const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("DB Connected");
  } catch (er) {
    console.log("DB Connection Error");
  }
};

module.exports = { db };
