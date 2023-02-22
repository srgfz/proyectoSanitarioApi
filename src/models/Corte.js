//Declaro sequelize
const sequelize = require("./db/db")
const { Model, DataTypes } = require("sequelize")

//Declaro la clase
class Corte extends Model { }

//Creo las tablas
Corte.innit({
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
        // allowNull: false
    },
    codigoQr: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "corte",
    timestamps: false
})

module.exports = Corte