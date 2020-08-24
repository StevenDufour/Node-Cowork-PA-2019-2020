const bodyParser = require('body-parser');
const InvitationController = require('../controllers').InvitationController;

module.exports = function (app) {

    app.post('/api/invitation/create', bodyParser.json(), async (req, res) => {
        if(req.body.UserId && req.body.SiteId) {
            try {
                const invit = await InvitationController.createInvitation(req.body.UserId,
                                                                            req.body.SiteId);
                res.status(201).json(invit);
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.post('/api/invitation/getById', bodyParser.json(), async (req, res) => {
        if(req.body.id) {
            try {
                const invit = await InvitationController.selectInvitationById(req.body.id);
                res.status(201).json(invit);
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.post('/api/invitation/getAllByUser', bodyParser.json(), async (req, res) => {
        if(req.body.UserId){
            try{
                const invits = await InvitationController.selectAllInvitationByUser();
                res.status(201).json(invits);
            } catch(err) {
                res.status(409).end();
            }
        }
        else {
            res.status(400).end();
        }

    });

    app.delete('/api/invitation/delete', bodyParser.json(), async (req, res) => {
        if(req.body.id){
            try {
                await InvitationController.deleteInvitation(req.body.id);
                res.status(201).send("This invitation is deleted");
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }

    });
}