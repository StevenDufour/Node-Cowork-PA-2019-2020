module.exports = function(sequelize, DataTypes) {
    const Service = sequelize.define('Service', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        },
        amount: {
            type: DataTypes.BIGINT
        },
        description: {
            type: DataTypes.TEXT
        },
        price: {
            type: DataTypes.FLOAT
        }
    }, {
        freezeTableName: true,
        underscored: true,
        timestamps: false
    });
    return Service;
};