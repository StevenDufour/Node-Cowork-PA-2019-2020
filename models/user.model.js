module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: {
            type: DataTypes.STRING
        },
        lastname: {
            type: DataTypes.STRING
        },
        login: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING,
            defaultValue: "Client"
        }
    }, {
        freezeTableName: true,
        underscored: true,
        timestamps: false
    });
    User.associate = (models) => {
        User.hasMany(models.Session, {onDelete: 'cascade'});
        User.hasMany(models.Order, { onDelete: 'cascade' });
        User.hasMany(models.Reservation, {onDelete: 'cascade'});
        User.hasMany(models.Invitation, {onDelete: 'cascade'});
        User.belongsTo(models.Subscription);
    };
    return User;
};