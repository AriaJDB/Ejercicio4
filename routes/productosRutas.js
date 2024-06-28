const express = require('express');
const router = express.Router();
const ProductoClase = require("../clases/ProductoClase");
const ProductoBD = require("../bd/ProductosBD");

// Ruta para mostrar productos
router.get("/productos", async (req, res) => {
    const productobd = new ProductoBD();
    const productosMysql = await productobd.mostrarProductos();
    var productosCorrectos = [];
    productosMysql.forEach(producto => {
        var producto1 = new ProductoClase(producto);
        if (producto1.nombreP != undefined && producto1.precio != undefined && producto1.categoria != undefined && producto1.stock != undefined) {
            productosCorrectos.push(producto);
        }
    });
    res.render("mostrarProductos", { productosCorrectos });
});

// Ruta para agregar producto
router.get("/agregarProducto", (req, res) => {
    res.render("formularioProducto");
});

router.post("/agregarProducto", (req, res) => {
    var producto1 = new ProductoClase(req.body);
    if (producto1.nombreP != undefined && producto1.precio != undefined && producto1.categoria != undefined && producto1.stock != undefined) {
        const productobd = new ProductoBD();
        productobd.nuevoProducto(producto1.mostrarDatos);
        res.redirect("/productos");
    } else {
        res.render("error");
    }
});

router.get("/editarProducto/:id_prod", async (req, res) => {
    try {
        const productobd = new ProductoBD();
        const producto = await productobd.productoID(req.params.id_prod);
        res.render("editarProducto", producto);
    } catch (error) {
        console.error("Error al modificar el producto: " + error);
    }
});

router.get("/borrarProducto/:id_prod", async (req, res) => {
    try {
        const productobd = new ProductoBD();
        await productobd.borrarProducto(req.params.id_prod);
        res.redirect("/productos");
    } catch (error) {
        console.log(error);
    }
});

router.post("/editarProducto", async (req, res) => {
    try {
        const productobd = new ProductoBD();
        await productobd.editarProducto(req.body);
        res.redirect("/productos");
    } catch (error) {
        console.log("Error al editar el producto");
    }
});

module.exports = router;


