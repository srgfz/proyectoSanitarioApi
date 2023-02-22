const cortesRouter = require("express").Router();//En las rutas siempre ejecuto express.Router()
//Importo el controlador de heroes
const cortesController = require("../../controllers/cortesController")


//Acciones de heroes llamando a los métodos de su controlador:
cortesRouter.get("/", cortesController.getAll)
cortesRouter.get("/:id", cortesController.getOne)
cortesRouter.post("/", cortesController.post)
cortesRouter.put("/:id", cortesController.put)
cortesRouter.patch("/:id", cortesController.patch)
cortesRouter.delete("/:id", cortesController.remove)

module.exports = cortesRouter