const Venta = require("../models/venta")

// crear venta (C)
async function crearVenta(req,res,next){
    if(!req.body.vendedor || !req.body.comprador || !req.body.vehiculo || !req.body.importe){
        return res.status(400).json({msg: "Faltan datos requeridos"})
    }
    const nuevo = new Venta(req.body)
    await nuevo.save()
    res.json(nuevo)
}

// obtener todos los ventas (R)
async function obtenerVentas(req,res,next){
    const ventas = await Venta.find({})
    .populate('vehiculo')
    .populate('comprador', 'nombre')
    .populate('vendedor', 'nombre email')
    
    res.json(ventas)
}

// actualizar venta (U)
async function actualizarVenta(req,res,next){
    if(!req.params.id){
        return res.status(400).json({msg: "Parámetro id requerido"})
    }

    if(!req.body.importe){
        return res.status(400).json({msg: "Faltan datos requeridos: importe"})
    }

    await Venta.findByIdAndUpdate(req.params.id, req.body)
    res.json({msg: "Venta actualizado"})
}

// borrar venta (D)
async function eliminarVenta(req, res,next){
    if(!req.params.id){
        return res.status(400).json({msg: "Parámetro id requerido"})
    }
    await Venta.findByIdAndDelete(req.params.id)
    res.json({msg: "Venta eliminado"})
}


module.exports = {
    crearVenta,
    obtenerVentas,
    eliminarVenta,
    actualizarVenta
}



