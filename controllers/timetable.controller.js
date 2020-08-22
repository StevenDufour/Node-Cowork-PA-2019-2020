const models = require('../models');
const Timetable = models.Timetable;

class TimetableController {

    static createTime(day_name, start_time, end_time, site_id) {
        return Timetable.create({
            day_name,
            start_time,
            end_time,
            site_id
        });
    }

    static selectTimetableBySite(site_id){
        return Timetable.findAll({
            where: {
                site_id: site_id
            }
        });
    }

}

module.exports = TimetableController;