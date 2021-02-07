const AWS = require('nodemailer');

class MailsenderUtil {

    static async sendCreatedProductMail() {

        const transporter = AWS.createTransport({
            host: "email-smtp.eu-west-3.amazonaws.com",
            secure: true,
            port: "587",
            auth: {
                user: "AKIAV37KVRO3V44RUAYE",
                pass: "BFXyV1o/SiuKIEEswnW+E34R8zrWTh6S3Vpme7cW4ZzY"
            }

        });
        await transporter.sendMail({
            from: "belmajkarim29@gmail.com", // sender address
            to: "kbelmajdoub1@myges.fr, sdufour6@myges.fr", // list of receivers
            subject: "New product was Created ", // Subject line
            text: "Hello we would love to inform you that a new product was created", // plain text body
        });


    }
}

module.exports = MailsenderUtil;
