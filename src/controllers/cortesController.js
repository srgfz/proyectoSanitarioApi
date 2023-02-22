const cortesService = require("../services/cortesService")

const getAll = async (req, res) => {
    res.json(await cortesService.getAll())
}

const getOne = async (req, res) => {
    res.json(await cortesService.getOne(req.params.id))
}


const post = async (req, res) => {
    cortesService.post(req.body)
    res.status(200).json(req.body)
}

const put = (req, res) => {
    cortesService.put(req.body, req.params.id)
    res.status(200).json(req.body)
}

const patch = (req, res) => {
    cortesService.put(req.body, req.params.id)
    res.status(200).json(req.body)
}

const remove = async (req, res) => {
    await res.json(cortesService.remove(req.params.id))
}

module.exports = {
    getAll,
    getOne,
    post,
    remove,
    put,
    patch,
}