const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "divyanshurawattest@gmail.com",
    pass: "wkkt eutn zbej ekbt",
  },
});

const emailVerification = async (email,name,code) => {
  try {
    const info = await transporter.sendMail({
      from: "divyanshurawattest@gmail.com",
      to: email,
      subject: `Hello ${name} ✔`,
      text: "This is your verification code",
      html: `<b>Your Verfication code is : ${code}</b>`,
    });

    console.log("Message sent: %s", info?.messageId);
  } catch (error) {
    console.log(error?.message);
  }
};

module.exports = { emailVerification };
