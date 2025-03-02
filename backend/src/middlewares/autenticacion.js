const jwt = require('jsonwebtoken')
const Usuario = require("../models/usuario")
require("dotenv").config()

async function checkAutenticacion(req,res,next){
    const cabecera = req.headers.authorization
    if(!cabecera){
        return res.status(401).json({ msg: "Autorización necesaria"})
    }

    const token = cabecera.split(' ')[1]

    if(!token){
        return res.status(401).json({ msg: "Token no encontrado"})
    }

    try{
        const descifrado = jwt.verify(token, process.env.JWT_SECRET)
        const usuarioId = descifrado.id
        const usuarioEncontrado = await Usuario.findById(usuarioId)
        if(usuarioEncontrado){
            next()
        }
        else{
            return res.status(403).json({msg : "Token no válido"})
        }

    }catch(err){
        return res.status(500).json({msg: `Error no controlado: ${err}`})
    }


}

module.exports = {
    checkAutenticacion
}