const AWS = require('nodemailer');


class MailsenderUtil {

    static async sendCreatedProductMail(name) {

        const transporter = AWS.createTransport({
            host: "email-smtp.eu-west-3.amazonaws.com",
            secure: false,
            port: "587",
            auth: {
                user: "AKIAV37KVRO3V44RUAYE",
                pass: "BFXyV1o/SiuKIEEswnW+E34R8zrWTh6S3Vpme7cW4ZzY"
            }

        });
        const message = {
            from:"belmajkarim29@gmail.com",
            to: "kbelmajdoub1@myges.fr, sdufour6@myges.fr",
            subject: "Product Created",
            text:"A product " +name+" was created by a user"
        };
        await transporter.sendMail(message, function (err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else console.log(data);           // successful response
            /*
            data = {
             MessageId: "EXAMPLE78603177f-7a5433e7-8edb-42ae-af10-f0181f34d6ee-000000"
            }
            */
        });


    }
}

module.exports = MailsenderUtil;
