const apirouter = require("express").Router();

const tecnicosRouter = require("./tecnicosRouter")
const cassettesRouter = require("./cassettesRouter")
const cortesRouter = require("./cortesRouter")
const muestrasRouter = require("./cortesRouter")



apirouter.use("/tecnicos", tecnicosRouter)
apirouter.use("/cassettes", cassettesRouter)
apirouter.use("/cortes", cortesRouter)
apirouter.use("/muestras", muestrasRouter)




module.exports = apirouter;