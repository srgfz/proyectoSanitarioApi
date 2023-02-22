// const Cliente = require("./models/Cliente")
// const Producto = require("./models/Producto")
// const Proveedor = require("./models/Proveedores")
// const Compra = require("./models/Compra")


//Relación 1 a N:
// Proveedor.hasMany(Producto)
// Producto.belongsTo(Proveedor)

//Relación M:N --> Se crea una tabla con el nombre que la pongamos que relacionará los ids de ambas tablas que se relacionan
// Producto.belongsToMany(Cliente, { through: "compras" })
// Cliente.belongsToMany(Producto, { through: "compras" })