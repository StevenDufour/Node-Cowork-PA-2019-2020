const bodyParser = require('body-parser');
const UserController = require('../controllers').UserController;

module.exports = function(app) {

    app.get('/api/user/getById/:id', async (req, res) => {
        if(req.params.id) {
            try {
                const user = await UserController.selectUserById(req.params.id);
                res.status(200).json(user);
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.get('/api/user/getAll', bodyParser.json(), async (req, res) => {
        try{
            const users = await UserController.selectAllUser();
            res.status(200).json(users);
        } catch(err) {
            res.status(409).end();
        }
    });

    app.put('/api/user/update', bodyParser.json(), async (req, res) => {
        if(req.body.id && req.body.firstname && req.body.lastname && req.body.email && req.body.pseudo && req.body.password){
            try{
                const user = await UserController.updateUser(req.body.id,
                    req.body.firstname,
                    req.body.lastname,
                    req.body.email,
                    req.body.pseudo,
                    req.body.password);
                res.status(200).json(user);
            } catch(err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.put('/api/user/updateType', bodyParser.json(), async (req, res) => {
        if(req.body.id && req.body.type){
            try{
                const user = await UserController.updateTypeUser(req.body.id,
                    req.body.type);
                res.status(200).json(user);
            } catch(err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.delete('/api/user/delete/:id', async (req, res) => {
        if(req.params.id){
            try {
                await UserController.deleteUser(req.params.id);
                res.status(200).send("This user is deleted");
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }

    });

}
