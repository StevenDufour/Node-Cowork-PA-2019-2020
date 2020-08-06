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
        }
    }, {
        freezeTableName: true,
        underscored: true,
        timestamps: true
    });
    User.associate = (models) => {
        User.hasMany(models.Session);
    };
    return User;
};