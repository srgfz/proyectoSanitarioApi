//Importamos el modelo de componente:
const Muestra = require("../models/Muestra")
const sequalize = require("../db/db")

const getAll = async () => {
    return await Muestra.findAll()
}

const getOne = async (id) => {
    return await Muestra.findByPk(id)
}

const post = async (newItem) => {
    try {
        return await Muestra.create(newItem);
    }
    catch (error) {
        return error
    }
}

const put = async (newItem, id) => {
    return await Muestra.update(newItem, { where: { id } })
};

const patch = async (newItem, id) => {
    return await Muestra.patch(newItem, { where: { id: id } });
};

const remove = async (id) => {
    return await Muestra.destroy({ where: { id: id } });
};

module.exports = {
    getAll,
    getOne,
    post,
    put,
    patch,
    remove,
};
