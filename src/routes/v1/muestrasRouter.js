const muestrasRouter = require("express").Router();//En las rutas siempre ejecuto express.Router()
//Importo el controlador de heroes
const muestrasController = require("../../controllers/muestrasController")


//Acciones de heroes llamando a los métodos de su controlador:
muestrasRouter.get("/", muestrasController.getAll)
muestrasRouter.get("/:id", muestrasController.getOne)
muestrasRouter.get("/tecnico/:id", muestrasController.getByTecnico)
muestrasRouter.post("/", muestrasController.post)
muestrasRouter.put("/:id", muestrasController.put)
muestrasRouter.patch("/:id", muestrasController.patch)
muestrasRouter.delete("/:id", muestrasController.remove)

module.exports = muestrasRouter