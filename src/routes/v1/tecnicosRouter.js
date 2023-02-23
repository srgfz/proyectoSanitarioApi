const tecnicosRouter = require("express").Router();//En las rutas siempre ejecuto express.Router()
//Importo el controlador de heroes
const tecnicosController = require("../../controllers/tecnicosController")


//Acciones de heroes llamando a los métodos de su controlador:
tecnicosRouter.get("/", tecnicosController.getAll)
tecnicosRouter.get("/login", tecnicosController.login)
tecnicosRouter.get("/:id", tecnicosController.getOne)
tecnicosRouter.post("/register", tecnicosController.post)
tecnicosRouter.put("/:id", tecnicosController.put)
tecnicosRouter.patch("/:id", tecnicosController.patch)
tecnicosRouter.delete("/:id", tecnicosController.remove)

module.exports = tecnicosRouter