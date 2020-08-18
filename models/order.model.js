module.exports = function (sequelize, DataTypes) {
    const Order = sequelize.define('Order', {
       id: {
           type: DataTypes.BIGINT,
           primaryKey: true,
           autoIncrement: true
       },
       amount: {
           type: DataTypes.BIGINT
       },
       price: {
           type: DataTypes.FLOAT
       }
    }, {
        freezeTableName: true,
        underscored: true,
        timestamps: false
    });
    /**Order.associate = (models) => {
        models.User.belongsToMany(models.Product, {through: Order});
        models.Product.belongsToMany(models.User, {through: Order});
    };**/
    return Order;

}