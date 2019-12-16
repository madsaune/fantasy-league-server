const { Sequelize, Model, DataTypes } = require('sequelize');
const Team = require('./Team');
const Stadium = require('./Stadium');
const League = require('./League');

const sequelize = new Sequelize("sqlite::memory");

class Match extends Model {}
Match.init({
    matchNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    kickoff: {
        type: DataTypes.DATE,
        allowNull: false
    },
    homeScore: {
        type: DataTypes.INTEGER
    },
    awayScore: {
        type: DataTypes.INTEGER
    }
}, { sequelize, modelName: "match", timestamps: true });
Match.belongsTo(League);
Match.belongsTo(Stadium);
Match.belongsTo(Team, { as: "homeTeam" });
Match.belongsTo(Team, { as: "awayTeam" });

exports.Match = Match;