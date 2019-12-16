const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize("sqlite::memory");

class League extends Model {}
League.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, modelName: "league", timestamps: true });

exports.League = League;