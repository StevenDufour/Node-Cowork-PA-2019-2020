const bodyParser = require('body-parser');
const OrderController = require('../controllers').OrderController;

module.exports = function (app) {

    app.post('/api/order/create', bodyParser.json(), async (req, res) => {
        if(req.body.price && req.body.UserId) {
            try {
                const order = await OrderController.createOrder(req.body.price, req.body.UserId);
                res.status(201).json(order);
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.post('/api/order/addProduct', bodyParser.json(), async (req, res) => {
        if(req.body.quantity && req.body.OrderId && req.body.ProductId) {
            try {
                const order = await OrderController.addProduct(req.body.quantity, req.body.OrderId, req.body.ProductId);
                res.status(201).json(order);
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

}
