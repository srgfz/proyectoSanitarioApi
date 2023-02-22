//Importamos el modelo de componente:
const Tecnico = require("../models/Tecnico")
const sequalize = require("../db/db")

const getAll = async () => {
    return await Tecnico.findAll()
}

const getOne = async (id) => {
    //return await Tecnico.findByPk(id)
    const [tecnicos, metadata] = await sequalize.query(
        `SELECT * FROM tecnicos WHERE id = ${id}`
    )
    return tecnicos
}

const post = async (newItem) => {
    try {
        return await Tecnico.create(newItem);
    }
    catch (error) {
        return error
    }
}

const put = async (newItem, id) => {
    return await Tecnico.update(newItem, { where: { id } })
};

const patch = async (newItem, id) => {
    return await Tecnico.patch(newItem, { where: { id: id } });
};

const remove = async (id) => {
    return await Tecnico.destroy({ where: { id: id } });
};

module.exports = {
    getAll,
    getOne,
    post,
    put,
    patch,
    remove,
};
