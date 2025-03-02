const Vehiculo = require("../models/vehiculo")

// crear vehiculo (C)
async function crearVehiculo(req,res,next){
    if(!req.body.marca || !req.body.modelo || !req.body.precio || !req.body.year || !req.body.estado ){
        return res.status(400).json({msg: "Faltan datos requeridos"})
    }
    const nuevo = new Vehiculo(req.body)
    await nuevo.save()
    res.json(nuevo)
}

// obtener todos los vehiculos (R)
async function obtenerVehiculos(req,res,next){
    const vehiculos = await Vehiculo.find({})
    res.json(vehiculos)
}

async function obtenerVehiculo(req,res,next){
    const vehiculo = await Vehiculo.findById(req.params.id)
    res.json(vehiculo)
}


// actualizar vehiculo (U)
async function actualizarVehiculo(req,res,next){
    if(!req.params.id){
        return res.status(400).json({msg: "Parámetro id requerido"})
    }

    if(!req.body.precio && !req.body.estado){
        return res.status(400).json({msg: "Faltan datos requeridos"})
    }

    await Vehiculo.findByIdAndUpdate(req.params.id, req.body)
    res.json({msg: "Vehiculo actualizado"})
}

// borrar vehiculo (D)
async function eliminarVehiculo(req, res,next){
    if(!req.params.id){
        return res.status(400).json({msg: "Parámetro id requerido"})
    }
    await Vehiculo.findByIdAndDelete(req.params.id)
    res.json({msg: "Vehiculo eliminado"})
}


module.exports = {
    crearVehiculo,
    obtenerVehiculos,
    eliminarVehiculo,
    actualizarVehiculo,
    obtenerVehiculo
}



