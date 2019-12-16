const { Sequelize, Model, DataTypes } = require('sequelize');
const League = require('./League');

const sequelize = new Sequelize("sqlite::memory");

class Team extends Model {}
Team.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    league: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, modelName: "team", timestamps: true });
Team.belongsTo(League);

exports.Team = Team;