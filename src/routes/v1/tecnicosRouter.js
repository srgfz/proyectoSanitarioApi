const tecnicosRouter = require("express").Router();//En las rutas siempre ejecuto express.Router()
//Importo el controlador de heroes
const tecnicosController = require("../../controllers/tecnicosController")
const middlewares = require("./middlewares/middlewares")



//Acciones de heroes llamando a los métodos de su controlador:
tecnicosRouter.get("/", tecnicosController.getAll)
tecnicosRouter.get("/:id", middlewares.checkToken, tecnicosController.getOne)
tecnicosRouter.get("/info/:email", tecnicosController.getInfo)
tecnicosRouter.post("/login", tecnicosController.login)
tecnicosRouter.post("/register", tecnicosController.post)
tecnicosRouter.put("/:id", middlewares.checkToken, tecnicosController.put)
tecnicosRouter.patch("/:id", tecnicosController.patch)
tecnicosRouter.delete("/:id", tecnicosController.remove)

module.exports = tecnicosRouter