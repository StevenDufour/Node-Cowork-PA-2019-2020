const bodyParser = require('body-parser');
const ServiceController = require('../controllers').ServiceController;

module.exports = function (app) {

    app.post('/api/service/create', bodyParser.json(), async (req, res) => {
        if(req.body.name && req.body.type && req.body.amount && req.body.description && req.body.price) {
            try {
                const service = await ServiceController.createService(req.body.name,
                    req.body.type,
                    req.body.amount,
                    req.body.description,
                    req.body.price);
                res.status(201).json(service);
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.get('/api/service/getById/:id', async (req, res) => {
        if(req.params.id) {
            try {
                const service = await ServiceController.selectServiceById(req.params.id);
                res.status(200).json(service);
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.get('/api/service/getAll', bodyParser.json(), async (req, res) => {
        try{
            const services = await ServiceController.selectAllService();
            res.status(200).json(services);
        } catch(err) {
            res.status(409).end();
        }
    });

    app.put('/api/service/update', bodyParser.json(), async (req, res) => {
        if(req.body.id && req.body.name && req.body.type && req.body.amount && req.body.description && req.body.price){
            try{
                const service = await ServiceController.updateService(req.body.id,
                    req.body.name,
                    req.body.type,
                    req.body.amount,
                    req.body.description,
                    req.body.price);
                res.status(200).json(service);
            } catch(err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.delete('/api/service/delete/:id', async (req, res) => {
        if(req.params.id){
            try {
                await ServiceController.deleteService(req.params.id);
                res.status(200).send("This service is deleted");
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }

    });

}
