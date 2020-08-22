const models = require('../models');
const Order = models.Order;

class OrderController {

    /*Order Controller*/

    static createOrder(price, idUser){
        const order = Order.create({
            price:0,
            IdUser:idUser
        });
        return order;
    }

    static selectOrderById(id){
        return Order.findOne({
            where: {
                id: id
            }
        });
    }

    static selectOrderByUser(idUser){
        return Order.findOne({
            where: {
                idUser: idUser
            }
        });
    }

    static selectAllOrder(){
        return Order.findAll();
    }

    static selectAllOrderByDate(date){
        return Order.findAll({
            where: {
                date: date
            }
        });
    }

    static selectAllOrderNow(){
        const date = new Date();
        return Order.findAll({
            where: {
                date: date
            }
        });
    }

    static updatePrice(order, price){
        return order.update({
            price:price
        });
    }

    static async deleteOrder(id) {
        await Order.destroy({
            where: {
                id: id
            }
        });
    }


}