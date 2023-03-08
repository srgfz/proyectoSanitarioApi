const cassettesRouter = require("express").Router();//En las rutas siempre ejecuto express.Router()
//Importo el controlador de heroes
const cassettesController = require("../../controllers/cassettesController")


//Acciones de heroes llamando a los métodos de su controlador:
cassettesRouter.get("/", cassettesController.getAll)
cassettesRouter.get("/:id", cassettesController.getOne)
cassettesRouter.get("/tecnico/:id", cassettesController.getByTecnico)
cassettesRouter.get("/muestras/:id", cassettesController.getMuestras)
cassettesRouter.post("/", cassettesController.post)
cassettesRouter.put("/:id", cassettesController.put)
cassettesRouter.patch("/:id", cassettesController.patch)
cassettesRouter.delete("/:id", cassettesController.remove)

module.exports = cassettesRouter