const bodyParser = require('body-parser');
const SiteController = require('../controllers').SiteController;

module.exports = function (app) {

    app.post('/site/create', bodyParser.json(), async (req, res) => {
        if(req.body.name && req.body.description) {
            try {
                const product = await SiteController.createSite(req.body.name,
                                                                req.body.description);
                res.status(201).json(product);
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.post('/site/getById', bodyParser.json(), async (req, res) => {
        if(req.body.id) {
            try {
                const site = await SiteController.selectSiteById(req.body.id);
                res.status(201).json(site);
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.get('/site/getAll', bodyParser.json(), async (req, res) => {
        try{
            const sites = await SiteController.selectAllSite();
            res.status(201).json(sites);
        } catch(err) {
            res.status(409).end();
        }
    });

    app.put('/site/update', bodyParser.json(), async (req, res) => {
        if(req.body.id && req.body.name && req.body.description){
            try{
                const site = await SiteController.updateSite(req.body.id,
                    req.body.name,
                    req.body.description);
                res.status(201).json(site);
            } catch(err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.delete('/site/delete', bodyParser.json(), async (req, res) => {
        if(req.body.id){
            try {
                await SiteController.deleteSite(req.body.id);
                res.status(201).send("This site is deleted");
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }

    });

}