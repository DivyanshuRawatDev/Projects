const mongoose = require("mongoose");

const connection = async () => {
  mongoose.connect(
    "mongodb+srv://divyanshurawatdev:ML05a09d%40123@cluster0.2larfwk.mongodb.net/emailVerfication"
  );
};
module.exports = connection;
