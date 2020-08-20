const bodyParser = require('body-parser');
const SubController = require('../controllers').SubController;

module.exports = function (app) {

    app.post('/sub/create', bodyParser.json(), async (req, res) => {
        if(req.body.name && req.body.description) {
            try {
                const sub = await SubController.createSub(req.body.name,
                                                          req.body.description);
                res.status(201).json(sub);
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.get('/sub/getAll', bodyParser.json(), async (req, res) => {
        try{
            const subs = await SubController.selectAllSub();
            res.status(201).json(subs);
        } catch(err) {
            res.status(409).end();
        }
    });

    app.put('/sub/update', bodyParser.json(), async (req, res) => {
        if(req.body.id && req.body.name && req.body.description){
            try{
                const sub = await SubController.updateSub(req.body.id,
                    req.body.name,
                    req.body.description);
                res.status(201).json(sub);
            } catch(err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.delete('/sub/delete', bodyParser.json(), async (req, res) => {
        if(req.body.id){
            try {
                await SubController.deleteSub(req.body.id);
                res.status(201).send("This sub is deleted");
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }

    });

}