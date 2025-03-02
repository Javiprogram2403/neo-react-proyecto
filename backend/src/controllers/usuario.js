const Usuario = require("../models/usuario")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config()

// crear usuario (C)
async function registrarUsuario(req,res,next){
    if(!req.body.email || !req.body.clave || !req.body.dni || !req.body.nombre){
        return res.status(400).json({msg: "Faltan datos requeridos"})
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(req.body.clave, salt)
    req.body.clave = hash
    const nuevo = new Usuario(req.body)
    await nuevo.save()
    res.json(nuevo)
}

// async function acceder usuario
async function loggearUsuario(req,res,next){
    if(!req.body.email || !req.body.clave){
        return res.status(400).json({msg: "Faltan datos requeridos"})
    }
    // lo que el usuario me envia desde el formulario
    const email = req.body.email
    const clave = req.body.clave 

    const usuarioCoincidentePorEmail = await Usuario.findOne({email: email})

    // si el email no existe, devuelvo error
    if(!usuarioCoincidentePorEmail){
        return res.status(400).json({msg: "Email no encontrado"})
    }

    const resultadoComparacion = await bcrypt.compare(clave, usuarioCoincidentePorEmail.clave)
    if(resultadoComparacion === true){
        const token = jwt.sign({id: usuarioCoincidentePorEmail._id}, process.env.JWT_SECRET, { expiresIn: "1h" })
        return res.json({msg: "Credenciales correctos!!", token: token, user: usuarioCoincidentePorEmail})
    }
    else{
        return res.status(400).json({msg: "Clave incorrecta"})
    }

}

// obtener todos los usuarios (R)
async function obtenerUsuarios(req,res,next){
    const usuarios = await Usuario.find({})
    res.json(usuarios)
}

// actualizar usuario (U)
async function actualizarUsuario(req,res,next){
    if(!req.params.id){
        return res.status(400).json({msg: "Parámetro id requerido"})
    }

    if(!req.body.email && !req.body.clave){
        return res.status(400).json({msg: "Faltan datos requeridos"})
    }
    await Usuario.findByIdAndUpdate(req.params.id, req.body)
    res.json({msg: "Usuario actualizado"})
}

// borrar usuario (D)
async function eliminarUsuario(req, res,next){
    if(!req.params.id){
        return res.status(400).json({msg: "Parámetro id requerido"})
    }
    await Usuario.findByIdAndDelete(req.params.id)
    res.json({msg: "Usuario eliminado"})
}


module.exports = {
    registrarUsuario,
    obtenerUsuarios,
    eliminarUsuario,
    actualizarUsuario,
    loggearUsuario,
}

