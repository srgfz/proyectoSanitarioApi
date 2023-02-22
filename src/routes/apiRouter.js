const apirouter = require("express").Router();

const tecnicosRouter = require("./tecnicosRouter")
const cassettesRouter = require("./cassettesRouter")
const cortesRouter = require("./cortesRouter")



apirouter.use("/tecnicos", tecnicosRouter)
apirouter.use("/cassettes", cassettesRouter)
apirouter.use("/cortes", cortesRouter)




module.exports = apirouter;