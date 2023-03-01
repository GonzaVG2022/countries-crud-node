const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
const Continent = require('./Continent');
   // En Mayúsculas y singular      // en minúsculas y singular
const Country = sequelize.define('country', {
    // Definimos las columnas aquí
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    languaje: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    currency: {
        type: DataTypes.STRING,
        allowNull: false
    },
    flagUrl: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});
Country.belongsTo(Continent);
Continent.hasMany(Country)
module.exports = Country;