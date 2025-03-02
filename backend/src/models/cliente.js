const { default: mongoose } = require("mongoose");

const clienteSchema = new mongoose.Schema({
    dni: {type: String, required: true},
    nombre: {type: String, required: true},
    direccion: {type: String, required: false},
})

const ClienteModel = mongoose.model("clientes", clienteSchema)

module.exports = ClienteModel