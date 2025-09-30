// routes/contactRoutes.js
const express = require("express");
const router = express.Router();
const { sendEmail } = require("../services/emailService");

router.post("/contact", async (req, res) => {
  try {
    const { name, email,  phone ,  message } = req.body;

    const htmlContent = `
      <h2>New Contact Message</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>phone:</b> ${phone}</p>
      <p><b>Message:</b> ${message}</p>
    `;

    await sendEmail({
      to: process.env.RECEIVER_EMAIL,
      subject: "New Contact Form Submission",
      html: htmlContent,
    });

    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Something went wrong!" });
  }
});

module.exports = router;
