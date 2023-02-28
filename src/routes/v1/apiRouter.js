const apirouter = require("express").Router();

const tecnicosRouter = require("./tecnicosRouter")
const cassettesRouter = require("./cassettesRouter")
const cortesRouter = require("./cortesRouter")
const muestrasRouter = require("./muestrasRouter")

const middlewares = require("./middlewares/middlewares")


apirouter.use("/tecnicos", tecnicosRouter)
apirouter.use("/cassettes", middlewares.checkToken, cassettesRouter)
apirouter.use("/cortes", middlewares.checkToken, cortesRouter)
apirouter.use("/muestras", middlewares.checkToken, muestrasRouter)




module.exports = apirouter;