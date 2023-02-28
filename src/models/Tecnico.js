const sequelize = require("../db/db")
const { Model, DataTypes } = require("sequelize");

class Tecnico extends Model { }

Tecnico.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    curso: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    centro: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        sequelize,
        modelName: "tecnico",
        timestamps: false,
    });

module.exports = Tecnico;
