const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const apiroutes = require("./routes/apiRouter");

//Improtamos la DB:
const sequelize = require("./database/db");
//Importamos las relaciones de la db:
require("./database/associations")



// Conversión a json datos que nos envína para post, put, patch...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// conexión con mysql
app.use("/ordenadores", apiroutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor eschando en http://localhost:${PORT}`);
    // conexión con mysql
    sequelize
        .sync({ force: false })
        .then(() => console.log("tablas sincronizadas"));
});