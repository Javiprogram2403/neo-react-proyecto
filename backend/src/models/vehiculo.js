const { default: mongoose } = require("mongoose");

const vehiculoSchema = new mongoose.Schema({
    marca: {type: String, required: true},
    modelo: {type: String, required: true},
    precio: {type: Number, required: true},
    year: {type: Number, required: true},
    estado: {type: String, enum: ["disponible","sin stock"], default: "disponible", required: true},
})

const VehiculoModel = mongoose.model("vehiculos", vehiculoSchema)

module.exports = VehiculoModel