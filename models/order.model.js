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
       date: {
           type: DataTypes.DATE,
           defaultValue: new Date()
       },
       price: {
           type: DataTypes.FLOAT
       },
       isValidated: {
           type: DataTypes.BOOLEAN,
           defaultValue: false
       },
       isAvailable: {
           type: DataTypes.BOOLEAN,
           defaultValue: false
       }
    }, {
        freezeTableName: true,
        underscored: true,
        timestamps: false
    });
    Order.associate = (models) => {
        Order.belongsTo(models.User);
    };
    return Order;

}