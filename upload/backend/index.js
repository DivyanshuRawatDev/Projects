const express = require("express");
const multer = require("multer");
const path = require("path");
var cors = require("cors");

const app = express();

app.use(cors({ origin: "*" }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(file);
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

app.post("/profile", upload.single("avatar"), function (req, res, next) {
  res.send({
    message: "File uploaded successfully",
    filePath: `http://localhost:8080/uploads/${req.file.filename}`,
  });
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(8080, () => {
  console.log("Server running on 8080");
});
