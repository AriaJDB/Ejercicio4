
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
        var regexNombreP = /^[A-Za-zÁÉÍÓÚáéíóúÑñ'][A-Za-záéíóúñ']*([ ][A-Za-zÁÉÍÓÚáéíóúÑñ'][A-Za-záéíóúñ']*)*$/;
        if (regexNombreP.test(nombreP)){
            this._nombreP=nombreP;
        }
    }

    set precio(precio) {
        var regexPrecio = /^\d+(\.\d{1,2})?$/;
        if (regexPrecio.test(precio)){
            this._precio=precio;
        }
    }

    set categoria(categoria) {
        var regexCategoria = /^[A-Za-zÁÉÍÓÚáéíóúÑñ'][A-Za-záéíóúñ']*([ ][A-Za-zÁÉÍÓÚáéíóúÑñ'][A-Za-záéíóúñ']*)*$/;
        if (regexCategoria.test(categoria)){
            this._categoria=categoria;
        }
    }

    set stock(stock) {
        var regexStock = /^\d+$/;
        if (regexStock.test(stock)){
            this._stock=stock;
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