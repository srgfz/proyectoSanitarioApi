//Importamos el modelo de componente:
const Cassette = require("../models/Cassette")
const sequalize = require("../db/db")

const getAll = async () => {
    return await Cassette.findAll()
}

const getOne = async (id) => {
    //return await Cassette.findByPk(id)
    const [tecnicos, metadata] = await sequalize.query(
        `SELECT * FROM tecnicos WHERE id = ${id}`
    )
    return tecnicos
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
    post,
    put,
    patch,
    remove,
};
