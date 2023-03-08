//Importamos el modelo de componente:
const Cassette = require("../models/Cassette")
const Muestra = require("../models/Muestra")


const sequalize = require("../db/db")

const getAll = async () => {
    return await Cassette.findAll()
}

const getOne = async (id) => {
    return await Cassette.findByPk(id)
}

const getByTecnico = async (tecnicoId) => {
    return await Cassette.findAll({
        where: {
            tecnicoId: tecnicoId,
        },
    })
}

const getMuestras = async (id) => {
    return await Cassette.findOne({
        where: {
            id: id,
        },
        include: {
            model: Muestra,
        },
    })
}

const post = async (newItem) => {
    try {
        return await Cassette.create(newItem);
    }
    catch (error) {
        return error
    }
}

const put = async (newItem, id) => {
    return await Cassette.update(newItem, { where: { id } })
};

const patch = async (newItem, id) => {
    return await Cassette.patch(newItem, { where: { id: id } });
};

const remove = async (id) => {
    return await Cassette.destroy({ where: { id: id } });
};

module.exports = {
    getAll,
    getOne,
    getByTecnico,
    getMuestras,
    post,
    put,
    patch,
    remove,
};
