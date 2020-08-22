module.exports = function (sequelize, DataTypes) {
    const OrderProducts = sequelize.define('OrderProducts', {
       id: {
           type: DataTypes.BIGINT,
           primaryKey: true,
           autoIncrement: true
       },
       quantity: {
           type: DataTypes.INTEGER
       }
    }, {
        freezeTableName: true,
        underscored: true,
        timestamps: false
    });
    OrderProducts.associate = (models) => {
        models.Order.belongsToMany(models.Product, {through: OrderProducts});
        models.Product.belongsToMany(models.Order, {through: OrderProducts});
    };
    return OrderProducts;
}