const bodyParser = require('body-parser');
const TimetableController = require('../controllers').TimetableController;

module.exports = function (app) {

    app.post('/timetable/create', bodyParser.json(), async (req, res) => {
        if(req.body.day_name && req.body.start_time && req.body.end_time && req.body.SiteId) {
            console.log(req.body.SiteId);
            try {
                const time = await TimetableController.createTime(req.body.day_name,
                    req.body.start_time,
                    req.body.end_time,
                    req.body.SiteId);
                res.status(201).json(time);
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.post('/timetable/getBySite', bodyParser.json(), async (req, res) => {
        if(req.body.SiteId) {
            try {
                const time = await TimetableController.selectTimetableBySite(req.body.SiteId);
                res.status(201).json(time);
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.put('/timetable/update', bodyParser.json(), async (req, res) => {
        if(req.body.day_name && req.body.start_time && req.body.end_time && req.body.SiteId){
            try{
                const time = await TimetableController.updateTimetableBySiteAndDay(req.body.day_name,
                                                                                   req.body.start_time,
                                                                                   req.body.end_time,
                                                                                   req.body.SiteId);
                res.status(201).json(time);
            } catch(err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.delete('/timetable/delete', bodyParser.json(), async (req, res) => {
        if(req.body.id){
            try {
                await TimetableController.deleteTimeTable(req.body.day_name,
                                                          req.body.SiteId);
                res.status(201).send("This timetable is deleted");
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }

    });

}