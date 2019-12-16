const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize("sqlite::memory");

class User extends Model {}
User.init({
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, modelName: "user", timestamps: true });

exports.User = User;