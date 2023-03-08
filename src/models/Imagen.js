const sequelize = require("../db/db")
const { Model, DataTypes } = require("sequelize");

class Imagen extends Model { }

Imagen.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        sequelize,
        modelName: "imagen",
        timestamps: false,
    });

module.exports = Imagen;
