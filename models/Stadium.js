const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize("sqlite::memory");

class Stadium extends Model {}
Stadium.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    capacity: {
        type: DataTypes.INTEGER
    }
}, { sequelize, modelName: "stadium", timestamps: true });

exports.Stadium = Stadium;