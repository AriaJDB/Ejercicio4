const express = require('express');
const router = express.Router();
const UsuarioClase = require("../clases/UsuarioClase");
const UsuarioBD = require("../bd/UsuariosBD");

// Ruta para mostrar usuarios
router.get("/", async (req, res) => {
    const usuariobd = new UsuarioBD();
    const usuariosMysql = await usuariobd.mostrarUsuarios();
    var usuariosCorrectos = [];
    usuariosMysql.forEach(usuario => {
        var usuario1 = new UsuarioClase(usuario);
        if (usuario1.nombre != undefined && usuario1.celular != undefined && usuario1.correo != undefined) {
            usuariosCorrectos.push(usuario);
        }
    });
    res.render("mostrarUsuarios", { usuariosCorrectos });
});

// Ruta para agregar usuario
router.get("/agregarUsuario", (req, res) => {
    res.render("formulario");
});

router.post("/agregarUsuario", (req, res) => {
    var usuario1 = new UsuarioClase(req.body);
    if (usuario1.nombre != undefined && usuario1.celular != undefined && usuario1.correo != undefined) {
        const usuariobd = new UsuarioBD();
        usuariobd.nuevoUsuario(usuario1.mostrarDatos);
        res.redirect("/");
    } else {
        res.render("error");
    }
});

router.get("/editarUsuario/:id_usuario", async (req, res) => {
    try {
        const usuariobd = new UsuarioBD();
        const usuario = await usuariobd.usuarioID(req.params.id_usuario);
        res.render("editarUsuario", usuario);
    } catch (error) {
        console.error("Error al modificar el usuario: " + error);
    }
});

router.get("/borrarUsuario/:id_usuario", async (req, res) => {
    try {
        const usuariobd = new UsuarioBD();
        await usuariobd.borrarUsuario(req.params.id_usuario);
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
});

router.post("/editarUsuario", async (req, res) => {
    try {
        const usuariobd = new UsuarioBD();
        await usuariobd.editarUsuario(req.body);
        res.redirect("/");
    } catch (error) {
        console.log("Error al editar el usuario");
    }
});

module.exports = router;