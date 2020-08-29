const bodyParser = require('body-parser');
const AuthController = require('../controllers').AuthController;
const AuthMiddleware = require('../middlewares').AuthMiddleware;

module.exports = function(app) {

    app.post('/api/auth/register', bodyParser.json(), async (req, res) => {
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

    app.post('/api/auth/login', bodyParser.json(), async (req, res) => {
        if(req.body.email && req.body.password) {
            try  {
                const session = await AuthController.login(req.body.email, req.body.password);
                if(session) {
                    res.status(201).json(session);
                } else {
                    res.status(401).end();
                }
            } catch(err) {
                res.status(500).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.get('/api/auth/getUser', AuthMiddleware.auth(), async (req, res) => {
        const token = req.headers['authorization'].slice(7);
        res.status(200).json(await AuthController.userFromToken(token));
    });

    app.delete('/api/auth/logout', bodyParser.json(), async (req, res) => {
        if(req.body.id) {
            try  {
                await AuthController.logout(req.body.id);
                res.status(200).end();
            } catch(err) {
                console.log(err);
                res.status(500).end();
            }
        } else {
            res.status(400).end();
        }
    });

}
