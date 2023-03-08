const Cassette = require("../models/Cassette")
const Muestra = require("../models/Muestra")
const Tecnico = require("../models/Tecnico")
const Imagen = require("../models/Imagen")



//Relación 1 a N:
Tecnico.hasMany(Cassette)
Cassette.belongsTo(Tecnico)


Tecnico.hasMany(Muestra)
Muestra.belongsTo(Tecnico)


Cassette.hasMany(Muestra)
Muestra.belongsTo(Cassette)

Muestra.hasMany(Imagen)
Imagen.belongsTo(Muestra)