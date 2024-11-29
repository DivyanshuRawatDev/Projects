const { default: mongoose } = require("mongoose");


const DB_URL = process.env.DB_URL;

const connection = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("DB is connected")
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connection };
