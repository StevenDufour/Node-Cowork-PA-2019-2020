const bodyParser = require('body-parser');
const UserController = require('../controllers').UserController;

module.exports = function(app) {

    app.post('/user/getById', bodyParser.json(), async (req, res) => {
        if(req.body.id) {
            try {
                const user = await UserController.selectUserById(req.body.id);
                res.status(201).json(user);
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.get('/user/getAll', bodyParser.json(), async (req, res) => {
        try{
            const users = await UserController.selectAllUser();
            res.status(201).json(users);
        } catch(err) {
            res.status(409).end();
        }
    });

    app.put('/user/update', bodyParser.json(), async (req, res) => {
        if(req.body.id && req.body.firstname && req.body.lastname && req.body.email && req.body.pseudo && req.body.password){
            try{
                const user = await UserController.updateUser(req.body.id,
                    req.body.firstname,
                    req.body.lastname,
                    req.body.email,
                    req.body.pseudo,
                    req.body.password);
                res.status(201).json(user);
            } catch(err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.put('/user/updateType', bodyParser.json(), async (req, res) => {
        if(req.body.id && req.body.type){
            try{
                const user = await UserController.updateTypeUser(req.body.id,
                    req.body.type);
                res.status(201).json(user);
            } catch(err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.delete('/user/delete', bodyParser.json(), async (req, res) => {
        if(req.body.id){
            try {
                await UserController.deleteUser(req.body.id);
                res.status(201).send("This user is deleted");
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }

    });

}