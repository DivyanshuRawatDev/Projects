const express = require("express");
const authRouter = require("./routes/authRouter");
require("dotenv").config();
const cors=require('cors')
const { connection } = require("./models/dbConnection");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use(cors());
app.get("/", async (req, res) => {
  try {
    res.send("Running");
  } catch (error) {
    console.log(error);
  }
});

app.use("/auth", authRouter);

app.listen(PORT, () => {
  connection();
  console.log("SERVER is running", PORT);
});
