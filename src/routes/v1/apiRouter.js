const apirouter = require("express").Router();

const tecnicosRouter = require("./tecnicosRouter")
const cassettesRouter = require("./cassettesRouter")





apirouter.use("/tecnicos", tecnicosRouter)
apirouter.use("/cassettes", cassettesRouter)





module.exports = apirouter;