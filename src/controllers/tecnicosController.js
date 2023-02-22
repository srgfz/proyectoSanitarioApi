const tecnicosService = require("../services/tecnicosService")

const getAll = async (req, res) => {
    res.json(await tecnicosService.getAll())
}

const getOne = async (req, res) => {
    res.json(await tecnicosService.getOne(req.params.id))
}


const post = async (req, res) => {
    tecnicosService.post(req.body)
    res.status(200).json(req.body)
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
    post,
    remove,
    put,
    patch,
}