const { default: mongoose } = require("mongoose");

const ventaSchema = new mongoose.Schema({
    // usuario (vendedor)
    vendedor: { type: mongoose.Schema.Types.ObjectId, ref: "usuarios"},
    // cliente (comprador)
    comprador: { type: mongoose.Schema.Types.ObjectId, ref: "clientes"},
    // vehiculo
    vehiculo: { type: mongoose.Schema.Types.ObjectId, ref: "vehiculos"},
    // importe
    importe: {type: Number, required: true},

})

const VentaModel = mongoose.model("ventas", ventaSchema)

module.exports = VentaModel