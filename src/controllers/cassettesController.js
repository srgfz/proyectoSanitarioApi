const cassettesService = require("../services/cassettesService")

const getAll = async (req, res) => {
    res.json(await cassettesService.getAll())
}

const getOne = async (req, res) => {
    res.json(await cassettesService.getOne(req.params.id))
}

const getByTecnico = async (req, res) => {
    res.json(await cassettesService.getByTecnico(req.params.id))
}

const getByDates = async (req, res) => {
    res.json(await cassettesService.getByDates(req.params.date1, req.params.date2))
}

const getByOrgano = async (req, res) => {
    res.json(await cassettesService.getByOrgano(req.params.organo))
}

const getMuestras = async (req, res) => {
    res.json(await cassettesService.getMuestras(req.params.id))
}

const post = async (req, res) => {
    cassettesService.post(req.body)
    res.status(200).json(req.body)
}

const put = (req, res) => {
    cassettesService.put(req.body, req.params.id)
    res.status(200).json(req.body)
}

const patch = (req, res) => {
    cassettesService.put(req.body, req.params.id)
    res.status(200).json(req.body)
}

const remove = async (req, res) => {
    await res.json(cassettesService.remove(req.params.id))
}

module.exports = {
    getAll,
    getOne,
    getByTecnico,
    getByDates,
    getByOrgano,
    getMuestras,
    post,
    remove,
    put,
    patch,
}