const Cliente = require("../models/cliente")

// crear cliente (C)
async function crearCliente(req,res,next){
    if(!req.body.dni || !req.body.nombre){
        return res.status(400).json({msg: "Faltan datos requeridos"})
    }
    const nuevo = new Cliente(req.body)
    await nuevo.save()
    res.json(nuevo)
}

// obtener todos los clientes (R)
async function obtenerClientes(req,res,next){
    const clientes = await Cliente.find({})
    res.json(clientes)
}

// obtener un solo clientes (R)
async function obtenerCliente(req,res,next){
    const cliente = await Cliente.findById(req.params.id)
    res.json(cliente)
}


// actualizar cliente (U)
async function actualizarCliente(req,res,next){
    if(!req.params.id){
        return res.status(400).json({msg: "Parámetro id requerido"})
    }

    if(!req.body.direccion){
        return res.status(400).json({msg: "Faltan datos requeridos: direccion"})
    }
    await Cliente.findByIdAndUpdate(req.params.id, req.body)
    res.json({msg: "Cliente actualizado"})
}

// borrar cliente (D)
async function eliminarCliente(req, res,next){
    if(!req.params.id){
        return res.status(400).json({msg: "Parámetro id requerido"})
    }
    await Cliente.findByIdAndDelete(req.params.id)
    res.json({msg: "Cliente eliminado"})
}


module.exports = {
    crearCliente,
    obtenerClientes,
    eliminarCliente,
    actualizarCliente,
    obtenerCliente,
}

