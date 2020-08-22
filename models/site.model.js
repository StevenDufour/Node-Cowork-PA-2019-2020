module.exports = function (sequelize, DataTypes) {
    const Site = sequelize.define('Site', {
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
        }
    }, {
        freezeTableName: true,
        underscored: true,
        timestamps: false
    });
    Site.associate = (models) => {
        Site.hasMany(models.Timetable)
    };
    return Site;

}