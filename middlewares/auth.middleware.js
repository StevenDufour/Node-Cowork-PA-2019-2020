const AuthController = require('../controllers').AuthController;

class AuthMiddleware {

    static auth() {
        return async function(req, res, next) {
            const authorization = req.headers['authorization'];
            if(!authorization || !authorization.startsWith('Bearer ')) {
                res.status(401).end();
                return;
            }
            const token = authorization.slice(7);
            const user = await AuthController.userFromToken(token);
            if(!user) {
                res.status(403).end();
                return;
            }
            req.user = user;
            next();
        };
    }
}

module.exports = AuthMiddleware;
