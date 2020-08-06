require('dotenv').config();
const express = require('express');
const models = require('./models');
const routes = require('./routes');

async function bootstrap() {
    await models.sequelize.authenticate();
    await models.sequelize.sync();

    const app = express();
    routes(app);

    app.get('/', (req, res) => {
        res.send("Hello World");
    });

    app.listen(process.env.PORT, () => {
        console.log(`Example app listening on port ${process.env.PORT}`);
    });
}

bootstrap();
