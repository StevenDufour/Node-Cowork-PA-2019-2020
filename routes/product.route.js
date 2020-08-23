const bodyParser = require('body-parser');
const ProductController = require('../controllers').ProductController;

module.exports = function (app) {

    app.post('/api/product/create', bodyParser.json(), async (req, res) => {
        if(req.body.name && req.body.type && req.body.description && req.body.price && req.body.amount) {
            try {
                const product = await ProductController.createProduct(req.body.name,
                    req.body.type,
                    req.body.description,
                    req.body.price,
                    req.body.amount);
                res.status(201).json(product);
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.post('/api/product/getById', bodyParser.json(), async (req, res) => {
        if(req.body.id) {
            try {
                const product = await ProductController.selectProductById(req.body.id);
                res.status(201).json(product);
            } catch (err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.post('/api/product/getPriceById', bodyParser.json(), async (req, res) => {
        if(req.body.id) {
            try {
                const product = await ProductController.selectProductPriceById(req.body.id);
                res.status(201).json(product);
            } catch (err) {
                console.log(err);
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.get('/api/product/getAll', bodyParser.json(), async (req, res) => {
        try{
            const products = await ProductController.selectAllProduct();
            res.status(201).json(products);
        } catch(err) {
            res.status(409).end();
        }
    });

    app.put('/api/product/update', bodyParser.json(), async (req, res) => {
        if(req.body.id && req.body.name && req.body.type && req.body.description && req.body.price && req.body.amount){
            try{
                const product = await ProductController.updateProduct(req.body.id,
                    req.body.name,
                    req.body.type,
                    req.body.description,
                    req.body.price,
                    req.body.amount);
                res.status(201).json(product);
            } catch(err) {
                res.status(409).end();
            }
        } else {
            res.status(400).end();
        }
    });

    app.delete('/api/product/delete', bodyParser.json(), async (req, res) => {
            if(req.body.id){
                try {
                    await ProductController.deleteProduct(req.body.id);
                    res.status(201).send("This product is deleted");
                } catch (err) {
                    res.status(409).end();
                }
            } else {
                res.status(400).end();
            }

    });

}
