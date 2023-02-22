const Sequelize = require("sequelize")

const sequelize = new Sequelize("almacen", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = sequelize;