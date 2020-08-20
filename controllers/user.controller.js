const models = require('../models');
const User = models.User;

class UserController {

    static selectAllUser(){
        return User.findAll();
    }

    static selectUserById(id){
        return User.findOne({
            where: {
                id: id
            }
        });
    }

    static updateUser(id, firstname, lastname, mail, pseudo, password){
        return User.update({
            firstname:firstname,
            lastname:lastname,
            mail:mail,
            pseudo:pseudo,
            password:password
        }, {
            where: {
                id:id
            }
        });
    }

    static updateTypeUser(id, type){
        return User.update({
            type:type
        }, {
            where: {
                id:id
            }
        });
    }

    static async deleteUser(id) {
        await User.destroy({
            where: {
                id: id
            }
        });
    }



}

module.exports = UserController;