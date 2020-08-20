const models = require('../models');
const Event = models.Event;

class EventController {

    static createEvent(name, description, amount, type) {
        return Event.create({
            name,
            description,
            amount,
            type
        });
    }

    static selectEventById(id){
        return Event.findOne({
            where: {
                id: id
            }
        });
    }

    static selectAllEvent(){
        return Event.findAll();
    }

    static updateEvent(id, name, description, amount, type){
        return Event.update({
            name:name,
            description:description,
            amount:amount,
            type:type
        }, {
            where: {
                id:id
            }
        });
    }

    static async deleteEvent(id) {
        await Event.destroy({
            where: {
                id: id
            }
        });
    }
}

module.exports = EventController;