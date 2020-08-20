const models = require('../models');
const Product = models.Product;

class ProductController {

    static createProduct(name, type, description, price, amount) {
        return Product.create({
            name,
            type,
            description,
            price,
            amount
        });
    }

    static selectProductById(id){
        return Product.findOne({
            where: {
                id: id
            }
        });
    }

    static selectAllProduct(){
        return Product.findAll();
    }

    static updateProduct(id, name, type, description, price, amount){
        return Product.update({
            name:name,
            type:type,
            description:description,
            price:price,
            amount:amount
        }, {
            where: {
                id:id
            }
        });
    }

    static async deleteProduct(id) {
        await Product.destroy({
            where: {
                id: id
            }
        });
    }

}

module.exports = ProductController;