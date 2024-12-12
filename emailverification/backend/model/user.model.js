const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  isVerified: { type: String, default: false },
  verificationCode: { type: String, default: null },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
