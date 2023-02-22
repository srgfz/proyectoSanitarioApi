//Importamos el model
const Cortes = require("../models/Corte")
const sequelize = require("../db/db")

const getAll = async () => {
    return await Cortes.findAll()
}

const getOne = async (id) => {
    //return await Tecnico.findByPk(id)
    const [cortes, metadata] = await sequalize.query(
        `SELECT * FROM cortes WHERE id = ${id}`
    )
    return cortes
}

const post = async (newItem) => {
    try {
        return await Cortes.create(newItem);
    }
    catch (error) {
        return error
    }
}

const put = async (newItem, id) => {
    return await Cortes.update(newItem, { where: { id } })
};

const patch = async (newItem, id) => {
    return await Cortes.patch(newItem, { where: { id: id } });
};

const remove = async (id) => {
    return await Cortes.destroy({ where: { id: id } });
};

module.exports = {
    getAll,
    getOne,
    post,
    put,
    patch,
    remove,
};
