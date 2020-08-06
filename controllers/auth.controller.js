const models = require('../models');
const User = models.User;
const Session = models.Session;
const SecurityUtil = require('../utils').SecurityUtil;

class AuthController {

    static register(login, email, password) {
        return User.create({
            login,
            email,
            password: SecurityUtil.hashPassword(password)
        });
    }

    static async login(login, password) {
        const user = await User.findOne({
            where: {
                login,
                password: SecurityUtil.hashPassword(password)
            }
        });
        if(!user) {
            return null;
        }
        const token = await SecurityUtil.randomToken();
        const session = await Session.create({
            token
        });
        await session.setUser(user);
        return session
    }

    static userFromToken(token) {
        return User.findOne({
           include: [{
               model: Session,
               where: {
                   token
               }
           }]
        });
    }
}

module.exports = AuthController;