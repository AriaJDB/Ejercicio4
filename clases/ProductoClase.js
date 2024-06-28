
class Producto {
    constructor(producto) {
        this.id_prod = producto.id_prod;
        this.nombreP = producto.nombreP;
        this.precio = producto.precio;
        this.categoria = producto.categoria;
        this.stock = producto.stock;
    }

    set id_prod(id_prod) {
        this._id_prod = id_prod;
    }

    set nombreP(nombreP) {
        if (nombreP.length > 0) {
            this._nombreP = nombreP;
        }
    }

    set precio(precio) {
        if (!isNaN(precio) && precio > 0) {
            this._precio = precio;
        }
    }

    set categoria(categoria) {
        if (categoria.length > 0) {
            this._categoria = categoria;
        }
    }

    set stock(stock) {
        if (!isNaN(stock) && stock >= 0) {
            this._stock = stock;
        }
    }

    get id_prod() {
        return this._id_prod;
    }

    get nombreP() {
        return this._nombreP;
    }

    get precio() {
        return this._precio;
    }

    get categoria() {
        return this._categoria;
    }

    get stock() {
        return this._stock;
    }

    get mostrarDatos() {
        return {
            nombreP: this.nombreP,
            precio: this.precio,
            categoria: this.categoria,
            stock: this.stock
        };
    }
}

module.exports = Producto;
