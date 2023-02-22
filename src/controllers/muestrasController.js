const muestrasService = require("../services/muestrasService")

const getAll = async (req, res) => {
    res.json(await muestrasService.getAll())
}

const getOne = async (req, res) => {
    res.json(await muestrasService.getOne(req.params.id))
}


const post = async (req, res) => {
    muestrasService.post(req.body)
    res.status(200).json(req.body)
}

const put = (req, res) => {
    muestrasService.put(req.body, req.params.id)
    res.status(200).json(req.body)
}

const patch = (req, res) => {
    muestrasService.put(req.body, req.params.id)
    res.status(200).json(req.body)
}

const remove = async (req, res) => {
    await res.json(muestrasService.remove(req.params.id))
}

module.exports = {
    getAll,
    getOne,
    post,
    remove,
    put,
    patch,
}