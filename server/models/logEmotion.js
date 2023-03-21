const { DataTypes } = require('sequelize')

const { sequelize } = require('../util/database')

module.exports = {
    LogEmotion: sequelize.define('log_emotion', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        emotion_value: DataTypes.INTEGER
    })
}