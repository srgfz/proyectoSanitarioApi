const cortesRouter = require("express").Router()

const cortesController = require("../controllers/corteController")

cortesRouter.get("/", cortesController.getAll)
cortesRouter.get("/:id", cortesController.getOne)
cortesRouter.post("/", cortesController.post)
cortesRouter.put("/:id", cortesController.put)
cortesRouter.patch("/:id", cortesController.patch)
cortesRouter.delete("/:id", cortesController.remove)

module.exports = cortesRouter