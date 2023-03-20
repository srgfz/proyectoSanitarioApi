//Importamos el modelo de componente:
const Muestra = require("../models/Muestra")
const sequalize = require("../db/db")

const getAll = async () => {
    return await Muestra.findAll({
        order: [
            ['fecha', 'DESC'],
        ]
    })
}

const getOne = async (id) => {
    return await Muestra.findByPk(id)
}

const getByTecnico = async (tecnicoId) => {
    return await Muestra.findAll({
        where: {
            tecnicoId: tecnicoId,
        },
        order: [
            ['fecha', 'DESC'],
        ],
        limit: 20
    })
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
    getByTecnico,
    post,
    put,
    patch,
    remove,
};
