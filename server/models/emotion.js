const { DataTypes } = require('sequelize')

const { sequelize } = require('../util/database')

module.exports = {
    Emotion: sequelize.define('emotion', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: DataTypes.STRING
    })
}