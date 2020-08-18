module.exports = function(sequelize, DataTypes) {
    const Timetable = sequelize.define('Timetable', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        day_name: {
            type: DataTypes.STRING
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
    return Timetable;

}