const bodyParser = require('body-parser');
const AuthController = require('../controllers').AuthController;

module.exports = function(app) {

    app.post('/auth/register', bodyParser.json(), async (req, res) => {
        if(req.body.firstname && req.body.lastname && req.body.login && req.body.password && req.body.email) {
            try {
                const user = await AuthController.register(req.body.firstname,
                                                            req.body.lastname,
                                                            req.body.login,
                                                            req.body.password,
                                                            req.body.email);
                res.status(201).json(user);
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

}