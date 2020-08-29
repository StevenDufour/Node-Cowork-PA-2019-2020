const models = require('../models');
const Timetable = models.Timetable;
const Site = models.Site;

class TimetableController {

    static createTime(day_name, start_time, end_time, site_id) {
        return Timetable.create({
            day_name,
            start_time,
            end_time,
            SiteId:site_id
        });
    }

    static selectTimetableBySite(site_id){
        return Timetable.findAll({
            where: {
                SiteId: site_id
            }
        });
    }

    static updateTimetableBySiteAndDay(day_name, start_time, end_time, site_id){
        return Timetable.update({
            start_time:start_time,
            end_time: end_time
        }, {
            where: {
                SiteId:site_id,
                day_name:day_name
            }
        });
    }

    static async deleteTimeTable(id) {
        await Timetable.destroy({
            where: {
                id:id
            }
        });
    }

}

module.exports = TimetableController;
