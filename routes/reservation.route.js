const bodyParser = require('body-parser');
const ReservationController = require('../controllers').ReservationController;

module.exports = function (app) {

    app.post('/api/reservation/create', bodyParser.json(), async (req, res) => {
        if(req.body.date && req.body.start_time && req.body.end_time && req.body.UserId && req.body.ServiceId) {
            try {
                const reserv = await ReservationController.createReservation(req.body.date,
                    req.body.start_time,
                    req.body.end_time,
                    req.body.UserId,
                    req.body.ServiceId);
                res.status(201).json(reserv);
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.post('/api/reservation/getById', bodyParser.json(), async (req, res) => {
        if(req.body.id) {
            try {
                const reserv = await ReservationController.selectReservationById(req.body.id);
                res.status(201).json(reserv);
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.get('/api/reservation/getAllByUser', bodyParser.json(), async (req, res) => {
        if(req.body.UserId){
            try{
                const reserv = await ReservationController.selectAllReservationByUser();
                res.status(201).json(reserv);
            } catch(err) {
                res.status(409).end();
            }
        }
        else {
            res.status(400).end();
        }

    });

    app.put('/api/reservation/update', bodyParser.json(), async (req, res) => {
        if(req.body.id && req.body.date && req.body.start_time && req.body.end_time){
            try{
                const reserv = await ReservationController.updateReservation(req.body.id,
                    req.body.date,
                    req.body.start_time,
                    req.body.end_time);
                res.status(201).json(reserv);
            } catch(err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.delete('/api/reservation/delete', bodyParser.json(), async (req, res) => {
        if(req.body.id){
            try {
                await ReservationController.deleteReservation(req.body.id);
                res.status(201).send("This reservation is deleted");
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }

    });

}