const models = require('../models');
const User = models.User;
const Session = models.Session;
const SecurityUtil = require('../utils').SecurityUtil;

class AuthController {

    /**
     * @param firstname
     * @param lastname
     * @param login
     * @param email
     * @param password
     * @returns {Promise<User>}
     */
    static register(firstname, lastname, login, password, email, type) {
        return User.create({
            firstname,
            lastname,
            login,
            password: SecurityUtil.hashPassword(password),
            email,
            type
        });
    }

    /**
     * @param login
     * @param password
     * @returns {Promise<Session|null>}
     */
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
        return session;
    }

    static async logout(id) {
        const user = await User.findOne({
            where: {
                id: id,
            }
        });
        const session = await Session.findOne({
            where:{
                UserId : user.id
            }
        });
        await Session.destroy({
            where:{
                UserId : user.id
            }
        });
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