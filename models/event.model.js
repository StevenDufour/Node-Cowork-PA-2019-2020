module.exports = function (sequelize, DataTypes) {
    const Event = sequelize.define('Event', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        },
        amount: {
            type: DataTypes.BIGINT
        },
        type: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true,
        underscored: true,
        timestamps: false
    });
    return Event;

}