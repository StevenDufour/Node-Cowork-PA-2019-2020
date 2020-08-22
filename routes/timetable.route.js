const bodyParser = require('body-parser');
const TimetableController = require('../controllers').TimetableController;

module.exports = function (app) {

    app.post('/timetable/create', bodyParser.json(), async (req, res) => {
        if(req.body.day_name && req.body.start_time && req.body.end_time && req.body.site_id) {
            try {
                const product = await TimetableController.createTime(req.body.day_name,
                    req.body.start_time,
                    req.body.end_time,
                    req.body.site_id);
                res.status(201).json(product);
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.post('/timetable/getBySite', bodyParser.json(), async (req, res) => {
        if(req.body.site_id) {
            try {
                const time = await TimetableController.selectTimetableBySite(req.body.site_id);
                res.status(201).json(time);
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

}