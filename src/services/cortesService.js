//Importamos el modelo de componente:
const Corte = require("../models/Corte")
const sequalize = require("../db/db")

const getAll = async () => {
    return await Corte.findAll()
}

const getOne = async (id) => {
    //return await Corte.findByPk(id)
    const [tecnicos, metadata] = await sequalize.query(
        `SELECT * FROM tecnicos WHERE id = ${id}`
    )
    return tecnicos
}

const post = async (newItem) => {
    try {
        return await Corte.create(newItem);
    }
    catch (error) {
        return error
    }
}

const put = async (newItem, id) => {
    return await Corte.update(newItem, { where: { id } })
};

const patch = async (newItem, id) => {
    return await Corte.patch(newItem, { where: { id: id } });
};

const remove = async (id) => {
    return await Corte.destroy({ where: { id: id } });
};

module.exports = {
    getAll,
    getOne,
    post,
    put,
    patch,
    remove,
};
