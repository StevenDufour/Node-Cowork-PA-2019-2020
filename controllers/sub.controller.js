const models = require('../models');
const Subscription = models.Subscription;

class SubController {

    static createSub(name, description, firstHour, nextHalfHour, dayPrice, withEngagement, withoutEngagement, numberOfEngagementMonth) {
        return Subscription.create({
            name,
            description,
            firstHour,
            nextHalfHour,
            dayPrice,
            withEngagement,
            withoutEngagement,
            numberOfEngagementMonth
        });
    }

    static selectAllSub(){
        return Subscription.findAll();
    }

    static selectSubById(id){
        return Subscription.findOne({
            where: {
                id: id
            }
        });
    }

    static updateSub(id, name, description, firstHour, nextHalfHour, dayPrice, withEngagement, withoutEngagement, numberOfEngagementMonth){
        return Subscription.update({
            name:name,
            description:description,
            firstHour:firstHour,
            nextHalfHour:nextHalfHour,
            dayPrice:dayPrice,
            withEngagement:withEngagement,
            withoutEngagement:withoutEngagement,
            numberOfEngagementMonth:numberOfEngagementMonth
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
