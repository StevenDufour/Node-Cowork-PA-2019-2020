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
        }
    }, {
        freezeTableName: true,
        underscored: true,
        timestamps: false
    });
    /**Subscription.associate = (models) => {
        Subscription.hasMany(models.User)
    };**/
    return Subscription;
}