const sequelize = require("../db/db")
const { Model, DataTypes } = require("sequelize");

class Cassette extends Model { }

Cassette.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    caracteristicas: {
        type: DataTypes.STRING,
        //allowNull: false,
    },
    codigoQR: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    observaciones: {
        type: DataTypes.TEXT("medium"),
        //allowNull: false,
    },
    imagenes: {
        type: DataTypes.STRING,
        //allowNull: false,
    },
},
    {
        sequelize,
        modelName: "cassette",
        timestamps: false,
    });

module.exports = Cassette;
