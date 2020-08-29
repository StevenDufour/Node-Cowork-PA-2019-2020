const models = require('../models');
const Service = models.Service;

class ServiceController {

    static createService(name, type, amount, description, price){
        return Service.create({
            name:name,
            type:type,
            amount:amount,
            description:description,
            price:price
        });
    }

    static selectServiceById(id){
        return Service.findOne({
            where: {
                id: id
            }
        });
    }

    static selectAllService(){
        return Service.findAll();
    }

    static updateService(id, name, type, amount, description, price){
        return Service.update({
            name:name,
            type:type,
            amount:amount,
            description:description,
            price:price
        }, {
            where: {
                id:id
            }
        });
    }

    static async deleteService(id) {
        await Service.destroy({
            where: {
                id: id
            }
        });
    }

}

module.exports = ServiceController;
