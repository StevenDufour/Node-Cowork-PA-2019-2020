module.exports = function (sequelize, DataTypes) {
    const Subscription = sequelize.define('Subscription', {
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
        firstHour: {
            type: DataTypes.FLOAT
        },
        nextHalfHour: {
            type: DataTypes.FLOAT
        },
        dayPrice:{
            type: DataTypes.FLOAT
        },
        withEngagement: {
            type: DataTypes.FLOAT
        },
        withoutEngagement: {
            type: DataTypes.FLOAT
        },
        numberOfEngagementMonth: {
            type: DataTypes.BIGINT
        }
    }, {
        freezeTableName: true,
        underscored: true,
        timestamps: false
    });
    Subscription.associate = (models) => {
        Subscription.hasMany(models.User)
    };
    return Subscription;
}
