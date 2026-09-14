// =========================
// PRODUCTOS
// =========================

const productos = {

    1: {
        nombre: "Rockstar Clásica",
        precio: 15000
    },

    2: {
        nombre: "Rockstar Doble",
        precio: 20000
    },

    3: {
        nombre: "Perro Rockstar",
        precio: 12000
    },

    4: {
        nombre: "Papas Rockstar",
        precio: 6000
    },

    5: {
        nombre: "Gaseosa Rockstar",
        precio: 4000
    }

};



// =========================
// ARREGLO DEL PEDIDO
// =========================

let pedido = [];

let pedidoConfirmado = false;



// =========================
// BOTÓN INICIAR
// =========================

function iniciar() {

    document.getElementById("inicio").style.display = "none";

    document.getElementById("principal").style.display = "block";

}



// =========================
// OCULTAR SECCIONES
// =========================

function ocultarSecciones() {

    document.getElementById("menu").style.display = "none";

    document.getElementById("pedido").style.display = "none";

    document.getElementById("resumen").style.display = "none";

    document.getElementById("total").style.display = "none";

    document.getElementById("salida").style.display = "none";

}



// =========================
// 1. VER MENÚ
// =========================

function verMenu() {

    ocultarSecciones();

    document.getElementById("menu").style.display = "block";

}



// =========================
// 2. HACER PEDIDO
// =========================

function mostrarPedido() {

    ocultarSecciones();

    document.getElementById("pedido").style.display = "block";

    mostrarPedidoActual();

}



// =========================
// AGREGAR PRODUCTO
// =========================

function agregarProducto() {

    let productoSeleccionado =
        document.getElementById("producto").value;


    let cantidad =
        parseInt(
            document.getElementById("cantidad").value
        );



    // COMPROBAR PRODUCTO

    if (productoSeleccionado == 0) {

        document.getElementById("mensaje").textContent =
            "Selecciona un producto.";

        return;

    }



    // COMPROBAR CANTIDAD

    if (
        cantidad <= 0 ||
        isNaN(cantidad)
    ) {

        document.getElementById("mensaje").textContent =
            "Ingresa una cantidad válida.";

        return;

    }



    // VERIFICAR SI EL PRODUCTO YA EXISTE

    let productoExistente = pedido.find(
        item => item.id == productoSeleccionado
    );



    if (productoExistente) {

        productoExistente.cantidad += cantidad;

    }

    else {

        pedido.push({

            id: productoSeleccionado,

            nombre:
                productos[productoSeleccionado].nombre,

            precio:
                productos[productoSeleccionado].precio,

            cantidad: cantidad

        });

    }



    // MOSTRAR PEDIDO ACTUAL

    mostrarPedidoActual();



    // MENSAJE

    document.getElementById("mensaje").textContent =
        "Producto agregado correctamente.";



    // REINICIAR CAMPOS

    document.getElementById("producto").value = "0";

    document.getElementById("cantidad").value = 1;

}



// =========================
// MOSTRAR PEDIDO ACTUAL
// =========================

function mostrarPedidoActual() {

    let lista =
        document.getElementById("listaPedido");



    if (pedido.length == 0) {

        lista.innerHTML =
            "<p>Aún no has agregado productos.</p>";

        return;

    }



    lista.innerHTML = "";



    pedido.forEach(function(item) {

        let subtotal =
            item.precio * item.cantidad;



        lista.innerHTML +=

            '<div class="item-pedido">' +

                '<div>' +

                    '<strong>'
                    + item.nombre
                    + '</strong>' +

                    '<br>' +

                    '<small>'
                    + item.cantidad
                    + ' x $'
                    + item.precio.toLocaleString("es-CO")
                    + '</small>' +

                '</div>' +

                '<span>$'
                + subtotal.toLocaleString("es-CO")
                + '</span>' +

            '</div>';

    });

}



// =========================
// CONFIRMAR PEDIDO
// =========================

function confirmarPedido() {

    if (pedido.length == 0) {

        document.getElementById("mensaje").textContent =
            "Agrega al menos un producto.";

        return;

    }



    pedidoConfirmado = true;



    document.getElementById("mensaje").textContent =
        "¡Pedido confirmado correctamente!";

}



// =========================
// 3. VER RESUMEN
// =========================

function verResumen() {

    ocultarSecciones();

    document.getElementById("resumen").style.display = "block";


    let datos =
        document.getElementById("datosResumen");



    if (
        pedido.length == 0 ||
        pedidoConfirmado == false
    ) {

        datos.innerHTML =
            "<p>No hay ningún pedido confirmado.</p>";

        return;

    }



    datos.innerHTML = "";



    pedido.forEach(function(item) {

        let subtotal =
            item.precio * item.cantidad;



        datos.innerHTML +=

            "<p>" +

                "<strong>"
                + item.nombre
                + "</strong>" +

                " — " +

                item.cantidad
                + " unidad(es)" +

                " — $" +

                subtotal.toLocaleString("es-CO") +

            "</p>";

    });

}



// =========================
// 4. TOTAL
// =========================

function verTotal() {

    ocultarSecciones();

    document.getElementById("total").style.display = "block";



    if (
        pedido.length == 0 ||
        pedidoConfirmado == false
    ) {

        document.getElementById("totalTexto").textContent =
            "No hay ningún pedido confirmado.";

        return;

    }



    let total = 0;



    pedido.forEach(function(item) {

        total +=
            item.precio * item.cantidad;

    });



    document.getElementById("totalTexto").textContent =

        "Total: $"
        + total.toLocaleString("es-CO");

}



// =========================
// 5. SALIR
// =========================

function salir() {

    ocultarSecciones();

    document.getElementById("salida").style.display = "block";

}