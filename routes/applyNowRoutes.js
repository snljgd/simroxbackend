// routes/applyNowRoutes.js
const express = require("express");
const router = express.Router();
const { sendEmail } = require("../services/emailService");

router.post("/apply-now", async (req, res) => {
  try {
    const { name, number, loanType, loanAmount, city, state, message } = req.body;

    // email body bana lete hain
    const htmlContent = `
      <h2>New Loan Application</h2>
      <table border="1" cellspacing="0" cellpadding="8">
        <tr><td><b>Name</b></td><td>${name}</td></tr>
        <tr><td><b>Number</b></td><td>${number}</td></tr>
        <tr><td><b>Loan Type</b></td><td>${loanType}</td></tr>
        <tr><td><b>Loan Amount</b></td><td>${loanAmount}</td></tr>
        <tr><td><b>City</b></td><td>${city}</td></tr>
        <tr><td><b>State</b></td><td>${state}</td></tr>
        <tr><td><b>Message</b></td><td>${message}</td></tr>
      </table>
    `;

    await sendEmail({
      to: process.env.RECEIVER_EMAIL,
      subject: "New Loan Application Received",
      html: htmlContent,
    });

    res.status(200).json({ success: true, message: "Application submitted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Something went wrong!" });
  }
});

module.exports = router;
