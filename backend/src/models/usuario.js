const { default: mongoose } = require("mongoose");

const usuarioSchema = new mongoose.Schema({
    dni: {type: String, required: true},
    nombre: {type: String, required: true},
    email: {type: String, required: true},
    clave: {type: String, required: true},
})

const UsuarioModel = mongoose.model("usuarios", usuarioSchema)

module.exports = UsuarioModel