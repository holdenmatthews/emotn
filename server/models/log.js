const { DataTypes } = require('sequelize')

const { sequelize } = require('../util/database')

module.exports = {
    Log: sequelize.define('log', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        notes: DataTypes.TEXT,
        datetime: DataTypes.DATE
    })
}