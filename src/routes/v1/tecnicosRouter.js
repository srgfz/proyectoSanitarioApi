const tecnicosRouter = require("express").Router();//En las rutas siempre ejecuto express.Router()
//Importo el controlador de heroes
const tecnicosController = require("../../controllers/tecnicosController")

const middlewares = require("./middlewares/middlewares")


//Acciones de heroes llamando a los métodos de su controlador:
tecnicosRouter.get("/", middlewares.checkToken, tecnicosController.getAll)
tecnicosRouter.get("/login", tecnicosController.login)
tecnicosRouter.get("/:id", middlewares.checkToken, tecnicosController.getOne)
tecnicosRouter.post("/register", tecnicosController.post)
tecnicosRouter.put("/:id", middlewares.checkToken, tecnicosController.put)
tecnicosRouter.patch("/:id", middlewares.checkToken, tecnicosController.patch)
tecnicosRouter.delete("/:id", middlewares.checkToken, tecnicosController.remove)

module.exports = tecnicosRouter