const transporter = require("../config/mailConfig");
require("dotenv").config();

async function sendEmail({ to, subject, html }) {
  try {
    let info = await transporter.sendMail({
      from: `"Loan Application" <${process.env.EMAIL_USER}>`, // ✅ backticks use
      to,       // receiver email
      subject,  // email subject
      html,     // email body (HTML format)
    });

    console.log("✅ Email sent:", info.messageId);
    return info;
  } catch (err) {
    console.error("❌ Email sending failed:", err); // ✅ console.error
    throw err;
  }
}

module.exports = { sendEmail };
