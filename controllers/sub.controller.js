const models = require('../models');
const Subscription = models.Subscription;

class SubController {

    static createSub(name, description) {
        return Subscription.create({
            name,
            description
        });
    }

    static selectAllSub(){
        return Subscription.findAll();
    }

    static updateSub(id, name, description){
        return Subscription.update({
            name:name,
            description:description
        }, {
            where: {
                id:id
            }
        });
    }

    static async deleteSub(id) {
        await Subscription.destroy({
            where: {
                id: id
            }
        });
    }

}

module.exports = SubController;