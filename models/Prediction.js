const { Sequelize, Model, DataTypes } = require('sequelize');
const Match = require('./Match');
const User = require('./User');

const sequelize = new Sequelize("sqlite::memory");

class Prediction extends Model {}
Prediction.init({
    homeScore: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    awayScore: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, { sequelize, modelName: "prediction", timestamps: true });
Prediction.belongsTo(User);
Prediction.belongsTo(Match);

exports.Prediction = Prediction;