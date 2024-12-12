const express = require("express");
const connection = require("./database/db");
const UserModel = require("./model/user.model");
const cors = require("cors");
const app = express();
const { emailVerification } = require("./utils/emailconfig");

app.use(express.json());
app.use(cors({ origin: "*" }));
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.send("Please fill all the fileds");
    }

    const user = await UserModel.findOne({ email });
    const code = Math.trunc(Math.random() * 1000000);

    if (user) {
      return res.send("User Already exists");
    }

    const newUser = new UserModel({
      name,
      email,
      password,
      verificationCode: code,
    });

    await newUser.save();

    emailVerification(email, name, code);
    return res.json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
  }
});

app.post("/verification", async (req, res) => {
  const { email, code } = req.body;
  try {
    if (!email || !code) {
      return res.send("Please fill all the fields");
    }
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.send("User not found");
    }
    console.log(code == user.verificationCode);
    if (code != user?.verificationCode) {
      return res.status(401).json({ message: "Wrong Code ! not verified" });
    }

    user.isVerified = true;
    user.verificationCode = undefined;

    await user.save();

    return res.json({ message: "Now You are verified" });
  } catch (error) {
    console.log(error);
  }
});

connection()
  .then(() => {
    console.log("Database is connected");
    app.listen(3000, () => {
      console.log("Server is running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
