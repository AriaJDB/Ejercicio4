const ConectarBD = require("./ConectarBD");

class ProductoBD extends ConectarBD {
    constructor() {
        super();
    }

    async nuevoProducto(datosProducto) {
        const sql = `INSERT INTO producto VALUES (null, '${datosProducto.nombreP}', '${datosProducto.precio}', '${datosProducto.categoria}', '${datosProducto.stock}');`;
        try {
            await this.conectarMySql();
            await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Producto agregado correctamente");
        } catch (error) {
            console.error("Error al agregar producto: " + error);
            console.error(sql);
        }
    }

    async mostrarProductos() {
        const sql = "SELECT * FROM producto;";
        try {
            await this.conectarMySql();
            const [productosMySql] = await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Productos mostrados correctamente");
            return productosMySql;
        } catch (error) {
            console.error("Error al mostrar productos: " + error);
            console.error(sql);
        }
    }

    async productoID(id_prod) {
        const sql = `SELECT * FROM producto WHERE id_prod = ${id_prod};`;
        try {
            await this.conectarMySql();
            const [[producto]] = await this.conexion.execute(sql);
            await this.cerrarConexion();
            return producto;
        } catch (error) {
            console.error("Error al consultar producto por ID: " + error);
            console.error(sql);
        }
    }

    async editarProducto(producto) {
        const sql = `UPDATE producto SET nombreP = '${producto.nombreP}', precio = '${producto.precio}', categoria = '${producto.categoria}', stock = '${producto.stock}' WHERE id_prod = ${producto.id_prod};`;
        try {
            await this.conectarMySql();
            await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Producto actualizado correctamente");
        } catch (error) {
            console.error("Error al actualizar producto: " + error);
            console.error(sql);
        }
    }

    async borrarProducto(id_prod) {
        const sql = `DELETE FROM producto WHERE id_prod = ${id_prod};`;
        try {
            await this.conectarMySql();
            await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Producto eliminado correctamente");
        } catch (error) {
            console.error("Error al eliminar producto: " + error);
            console.error(sql);
        }
    }
}

module.exports = ProductoBD;