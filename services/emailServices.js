const transporter = require("../config/mailConfig")
require("dotenv").config()

async function sendEmail({ to , subject ,html}) {
    try {
        // mail bhejne ka kaam
        let info = await transporter.sendMail({
            from:'"Loan Application"<${process.env.EMAIL_USER}>', // sender mail
            to,  // reciver email (company mail)
            subject, // email subject 
            html // email ka body (HTML format me)
        })

        console.log("Email sent:",info.messageId)
        return info; // success hone par info return karega
    }
    catch (err){
        console.err("Email sending failed" ,err)
        throw err; // error ko aage bhej denge
    }
}


module.exports = {sendEmail}