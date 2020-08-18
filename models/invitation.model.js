module.exports = function (sequelize, DataTypes) {
    const Invitation = sequelize.define('Invitation', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        }
    }, {
        freezeTableName: true,
        underscored: true,
        timestamps: false
    });
    /**Invitation.associate = (models) => {
        models.User.belongsToMany(models.Event, {through: Invitation});
        models.Event.belongsToMany(models.User, {through: Invitation});
    };**/
    return Invitation;
}