// importing nodemailer
const nodemailer = require('nodemailer');

// Configure nodemailer
async function sendMail(){

    // 1. Create a email transporter -> takes our mail to mail server and then from server it get sent to user
    // -> using SMTP protocol
    // we can do both 1. manual configuration of SMTP server or 2. we can use third party to provide email service
    // -> using google mail service

    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'shreyanshsaagar@gmail.com',
            pass:"xodnmhvmjiuifozw"
        }
    })

    // 2. Configure email content
    const mailOptions = {
        from:'shreyanshsaagar@gmail.com',
        to:'vaibhavsharma.et83@gmail.com',
        subject:'Hello Bhoiiii',
        text:`I am good fine thank u`
    }

    // 3. send mail
    try {
        const result = await transporter.sendMail(mailOptions);
        console.log("Success!");
    } catch (error) {
        console.log(error);
    }
    
}

sendMail()