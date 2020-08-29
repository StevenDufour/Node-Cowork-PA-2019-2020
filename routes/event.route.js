const bodyParser = require('body-parser');
const EventController = require('../controllers').EventController;

module.exports = function(app) {

    app.post('/api/event/create', bodyParser.json(), async (req, res) => {
        if(req.body.name && req.body.description && req.body.amount && req.body.type) {
            try {
                const event = await EventController.createEvent(req.body.name,
                                                               req.body.description,
                                                               req.body.amount,
                                                               req.body.type);
                res.status(201).json(event);
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.get('/api/event/getById/:id', async (req, res) => {
        if(req.params.id) {
            try {
                const event = await EventController.selectEventById(req.params.id);
                res.status(201).json(event);
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.get('/api/event/getAll', bodyParser.json(), async (req, res) => {
        try{
            const events = await EventController.selectAllEvent();
            res.status(201).json(events);
        } catch(err) {
            res.status(409).end();
        }
    });

    app.put('/api/event/update', bodyParser.json(), async (req, res) => {
        if(req.body.id && req.body.name && req.body.description && req.body.amount && req.body.type){
            try{
                const event = await EventController.updateEvent(req.body.id,
                    req.body.name,
                    req.body.description,
                    req.body.amount,
                    req.body.type);
                res.status(201).json(event);
            } catch(err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.delete('/api/event/delete/:id', async (req, res) => {
        if(req.params.id){
            try {
                await EventController.deleteEvent(req.params.id);
                res.status(201).send("This event is deleted");
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }

    });

}
