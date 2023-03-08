//Importamos el modelo de componente:
const Tecnico = require("../models/Tecnico")
const Cassette = require("../models/Cassette")
const Muestra = require("../models/Muestra")



const sequalize = require("../db/db")
const bcryptjs = require('bcryptjs');
const jwt = require('jwt-simple')
const moment = require('moment')

const getAll = async () => {
    return await Cassette.findAll()
}

const getOne = async (id) => {
    return await Tecnico.findOne({
        where: {
            id: id,
        },
        include: [
            {
                model: Cassette,
                include: {
                    model: Muestra,
                },
            },
            {
                model: Muestra,
            },
        ]
    })
}

const getInfo = async (id) => {
    return await Cassette.findByPk(id)
}

const createToken = (user) => {
    const payload = {
        usuarioId: user.id,//id
        createdAt: moment().unix(),//Fecha de creación
        expiredAt: moment().add(6, "hours").unix()//Duración
    }
    return jwt.encode(payload, "Frase para probar .env")
    //Este token lo recibiré en cliente y lo guardaré (en localStorage)
}

const login = async (body) => {
    //Si alguno de los campos está vacío
    if (typeof body === 'undefined' || typeof body.password === 'undefined' || typeof body.email === 'undefined') {
        return { error: "Debe introducir un email y una contraseña" };
    }
    const user = await Tecnico.findOne({
        where: {
            email: body.email,
        },
    });
    if (user) {
        if (bcryptjs.compareSync(body.password, user.password)) {//Login correcto
            return { success: createToken(user) }//Si el login es correcto creamos y devolvemos el token para ese usuario
        } else {//Contraseña incorrecta
            return { error: "Login fallido 2" };
        }
    } else {//El user no existe (email incorrecto)
        return { error: "Login fallido 1" };
    }
}

const post = async (newItem) => {
    try {
        return await Tecnico.create({
            nombre: newItem.nombre,
            apellidos: newItem.apellidos,
            curso: newItem.curso,
            centro: newItem.centro,
            email: newItem.email,
            password: bcryptjs.hashSync(newItem.password, 10),
        });
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
    getInfo,
    login,
    post,
    put,
    patch,
    remove,
};
