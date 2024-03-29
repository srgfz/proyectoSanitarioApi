const jwt = require('jwt-simple')
const moment = require('moment')

const allowHeaders = (req, res, next) => {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, key");

}


const checkToken = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Headers", "*");

    const token = req.headers["key"]//headers es un array y localizo su clave
    let playload = {}

    if (!token) {//Si no ha puesto ninguna key
        return res.json({ error: "Error 1*" })
    }
    try {//El token es correcto
        playload = jwt.decode(token, "Frase para probar .env")
        if (playload.expiredAt < moment().unix()) {//Si el token ha expirado
            return res.json({ error: "Error 3*" })
        }
    } catch (error) {//Si el token no coincide
        return res.json({ error: "Error 2*" })
    }
    next()
}

module.exports = {
    checkToken,
}