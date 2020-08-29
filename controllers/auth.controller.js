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
     * @param email
     * @param password
     * @returns {Promise<Session|null>}
     */
    static async login(email, password) {
        const user = await User.findOne({
            where: {
                email,
                password: SecurityUtil.hashPassword(password)
            }
        });
        if(!user) {
            return null;
        }
        let session = await this.sessionOfUser(user.id);
        if(!session){
            const token = await SecurityUtil.randomToken();
            session = await Session.create({
                token,
                UserId: user.id
            });
        }
        await session.set(user);
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
        await session.destroy({
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
                    token: token
                }
            }]
        });
    }

    static  sessionOfUser(id) {
        return User.findOne({
            include: [{
                model: Session,
                where: {
                    UserId: id
                }
            }]
        });
    }
}

module.exports = AuthController;
