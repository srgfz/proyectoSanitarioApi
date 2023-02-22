const apirouter = require("express").Router();

const componentesRouter = require("./tecnicosRouter")




apirouter.use("/tecnicos", componentesRouter)





module.exports = apirouter;