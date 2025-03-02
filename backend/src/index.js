require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const { crearVehiculo, obtenerVehiculos, eliminarVehiculo, actualizarVehiculo, obtenerVehiculo } = require("./controllers/vehiculo")
const { crearCliente, obtenerClientes, eliminarCliente, actualizarCliente, obtenerCliente } = require("./controllers/cliente")
const { registrarUsuario, obtenerUsuarios, eliminarUsuario, actualizarUsuario, loggearUsuario } = require("./controllers/usuario")
const { crearVenta, obtenerVentas, eliminarVenta, actualizarVenta } = require("./controllers/venta")
const { checkAutenticacion } = require('./middlewares/autenticacion')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DB_URL)

//**
//C (CREATE) POST
//R (READ) GET
//U (UPDATE) PUT/PATCH
//D (DELETE) DELETE
//*/

// rutas de vehiculos
app.post("/vehiculos",checkAutenticacion, crearVehiculo)
app.get("/vehiculos", obtenerVehiculos)
app.get("/vehiculos/:id", obtenerVehiculo)
app.put("/vehiculos/:id", checkAutenticacion, actualizarVehiculo)
app.delete("/vehiculos/:id", checkAutenticacion, eliminarVehiculo)

// rutas de clientes
app.post("/clientes", crearCliente)
app.get("/clientes", checkAutenticacion, obtenerClientes)
app.get("/clientes/:id", checkAutenticacion, obtenerCliente)
app.put("/clientes/:id", checkAutenticacion, actualizarCliente)
app.delete("/clientes/:id", checkAutenticacion, eliminarCliente)

//rutas de usuarios
app.post("/usuarios", registrarUsuario)
app.post("/login", loggearUsuario)
app.get("/usuarios", checkAutenticacion, obtenerUsuarios)
app.put("/usuarios/:id",checkAutenticacion, actualizarUsuario)
app.delete("/usuarios/:id",checkAutenticacion, eliminarUsuario)

//rutas de ventas
app.post("/ventas",checkAutenticacion, crearVenta)
app.get("/ventas",checkAutenticacion, obtenerVentas)
app.put("/ventas/:id",checkAutenticacion, actualizarVenta)
app.delete("/ventas/:id",checkAutenticacion, eliminarVenta)


//app.delete("/clientes/:id", eliminarCliente)

app.get("/api/version", (req,res,next)=>{
    res.send("1.0.0")
})

app.listen(3000, ()=>{
    console.log("API funcionando...")
})