module.exports = function(sequelize, DataTypes) {
    const Session = sequelize.define('Session', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        token: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true,
        underscored: true,
        timestamps: true
    });
    Session.associate = (models) => {
        Session.belongsTo(models.User);
    };
    return Session;
};