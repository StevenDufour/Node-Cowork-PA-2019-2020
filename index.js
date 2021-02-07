require('dotenv').config();
const express = require('express');
const models = require('./models');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: true,
    credentials: true
}));
app.options("*", cors());

routes(app);

async function bootstrap() {
    await models.sequelize.authenticate();
    await models.sequelize.sync();


    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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
