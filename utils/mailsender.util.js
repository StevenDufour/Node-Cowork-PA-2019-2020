const AWS = require('nodemailer');

class MailsenderUtil {

    static async sendCreatedProductMail() {

        const transporter = AWS.createTransport({
            host: process.env.AWS_SMTP_HOST,
            secure: process.env.AWS_SMTP_SECURE,
            port: process.env.AWS_SMTP_PORT,
            auth: {
                user: process.env.AWS_SMTP_USERNAME,
                pass: process.env.AWS_SMTP_PASSWORD
            }

        });
        await transporter.sendMail({
            from: process.env.AWS_SMTP_ADRESS, // sender address
            to: "kbelmajdoub1@myges.fr, sdufour6@myges.fr", // list of receivers
            subject: "New product was Created ", // Subject line
            text: "Hello we would love to inform you that a new product was created", // plain text body
        });


    }
}

module.exports = MailsenderUtil;