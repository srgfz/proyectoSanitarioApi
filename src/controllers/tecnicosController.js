const tecnicosService = require("../services/tecnicosService")

const getAll = async (req, res) => {
    res.json(await tecnicosService.getAll())
}

const getOne = async (req, res) => {
    res.json(await tecnicosService.getOne(req.params.id))
}

const getInfo = async (req, res) => {
    res.json(await tecnicosService.getInfo(req.params.email))
}

const login = async (req, res) => {
    res.json(await tecnicosService.login(req.body))
}

const post = async (req, res) => {
    const resp = await tecnicosService.post(req.body)
    if (resp.name === "SequelizeUniqueConstraintError") {
        res.status(200).json({ Error: "El email introducido ya está vinculado a una cuenta; si está registrado inicie sesión" })
    } else {
        res.status(200).json(resp)
    }
}

const put = (req, res) => {
    tecnicosService.put(req.body, req.params.id)
    res.status(200).json(req.body)
}

const patch = (req, res) => {
    tecnicosService.put(req.body, req.params.id)
    res.status(200).json(req.body)
}

const remove = async (req, res) => {
    await res.json(tecnicosService.remove(req.params.id))
}

module.exports = {
    getAll,
    getOne,
    getInfo,
    login,
    post,
    remove,
    put,
    patch,
}