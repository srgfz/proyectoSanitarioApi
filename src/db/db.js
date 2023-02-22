const Sequelize = require("sequelize")

const sequelize = new Sequelize("sanitariabd", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = sequelize;