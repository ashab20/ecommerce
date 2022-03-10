const nodeMailer = require('nodemailer');

async function sendMail(options){


const transporter = nodeMailer.createTransport({
        host: process.env.SMPT_HOST,
        port:process.env.SMPT_PORT,
        secure: false, 
        service:process.env.SMPT_SERVICE,
        auth:{
            user:process.env.SMPT_MAIL,
            pass:process.env.SMPT_PASS
        }
    })


    const mailOPtions = {
        from: process.env.SMPT_MAIL,
        to:options.email,
        subject:options.subject,
        text:options.message,
    }

    await transporter.sendMail(mailOPtions);

}

module.exports = sendMail;