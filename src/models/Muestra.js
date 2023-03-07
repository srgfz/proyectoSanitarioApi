//Declaro sequelize
const sequelize = require("../db/db")
const { Model, DataTypes } = require("sequelize")

//Declaro la clase
class Muestra extends Model { }

//Creo las tablas
Muestra.init({
    //Creo atributo
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    observaciones: {
        type: DataTypes.TEXT('medium'),
        //allowNull: false
    },
    codigoQR: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagenes: {
        type: DataTypes.STRING,
        allowNull: false
    },
    organo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tincion: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "muestra",
    timestamps: false
})

module.exports = Muestra