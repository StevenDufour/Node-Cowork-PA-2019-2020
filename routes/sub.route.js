const bodyParser = require('body-parser');
const SubController = require('../controllers').SubController;

module.exports = function (app) {

    app.post('/api/sub/create', bodyParser.json(), async (req, res) => {
        if(req.body.name && req.body.description && req.body.firstHour && req.body.nextHalfHour && req.body.dayPrice && req.body.withEngagement && req.body.withoutEngagement && req.body.numberOfEngagementMonth) {
            try {
                const sub = await SubController.createSub(req.body.name,
                                                          req.body.description,
                                                          req.body.firstHour,
                                                          req.body.nextHalfHour,
                                                          req.body.dayPrice,
                                                          req.body.withEngagement,
                                                          req.body.withoutEngagement,
                                                          req.body.numberOfEngagementMonth);
                res.status(201).json(sub);
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.get('/api/sub/getAll', bodyParser.json(), async (req, res) => {
        try{
            const subs = await SubController.selectAllSub();
            res.status(200).json(subs);
        } catch(err) {
            res.status(409).end();
        }
    });

    app.get('/api/sub/getById/:id', async (req, res) => {
        if(req.params.id) {
            try {
                const sub = await SubController.selectSubById(req.params.id);
                res.status(200).json(sub);
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.put('/api/sub/update', bodyParser.json(), async (req, res) => {
        if(req.body.id && req.body.name && req.body.description && req.body.firstHour && req.body.nextHalfHour && req.body.dayPrice && req.body.withEngagement && req.body.withoutEngagement && req.body.numberOfEngagementMonth){
            try{
                const sub = await SubController.updateSub(req.body.id,
                                                          req.body.name,
                                                          req.body.description,
                                                          req.body.firstHour,
                                                          req.body.nextHalfHour,
                                                          req.body.dayPrice,
                                                          req.body.withEngagement,
                                                          req.body.withoutEngagement,
                                                          req.body.numberOfEngagementMonth);
                res.status(200).json(sub);
            } catch(err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.delete('/api/sub/delete/:id', async (req, res) => {
        if(req.params.id){
            try {
                await SubController.deleteSub(req.params.id);
                res.status(200).send("This sub is deleted");
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }

    });

}
