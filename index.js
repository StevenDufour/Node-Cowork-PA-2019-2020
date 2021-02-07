require('dotenv').config();
const express = require('express');
const models = require('./models');
const routes = require('./routes');

async function bootstrap() {
    await models.sequelize.authenticate();
    await models.sequelize.sync();

    const app = express();
    routes(app);

    app.use(function (req , res, next) {
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,POST,DELETE,PUT,OPTIONS");
        next();
    });

    app.get('/', (req, res) => {
        res.send("Hello World");
    });

    app.listen(process.env.PORT, () => {
        console.log(`Example app listening on port ${process.env.PORT}`);
    });
}

bootstrap();
