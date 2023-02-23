const Cassette = require("../models/Cassette")
const Corte = require("../models/Corte")
const Muestra = require("../models/Muestra")
const Tecnico = require("../models/Tecnico")



//Relación 1 a N:
Tecnico.hasMany(Cassette)
Cassette.belongsTo(Tecnico)

Cassette.hasMany(Corte)
Corte.belongsTo(Cassette)

Corte.hasMany(Muestra)
Muestra.belongsTo(Corte)


