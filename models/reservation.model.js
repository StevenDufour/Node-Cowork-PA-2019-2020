module.exports = function (sequelize, DataTypes) {
    const Reservation = sequelize.define('Reservation', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: DataTypes.DATEONLY
        },
        start_time: {
            type: DataTypes.TIME
        },
        end_time: {
            type: DataTypes.TIME
        }
    }, {
        freezeTableName: true,
        underscored: true,
        timestamps: false
    });
    Reservation.associate = (models) => {
        models.User.belongsToMany(models.Service, {through: Reservation});
        models.Service.belongsToMany(models.User, {through: Reservation});
    };
    return Reservation;

}