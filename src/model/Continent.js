const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');


const Continent = sequelize.define('continent', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
    // cada vez que creemos uno nuevo no se pone allowNull ya que vamos
    // a tener campos en null y nos da error o borra todo
    // area:{
    //     type: DataTypes.INTEGER
    // }
});


module.exports = Continent;