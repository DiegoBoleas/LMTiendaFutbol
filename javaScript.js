//JS para el formulario: 
let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let mensaje = document.getElementById("mensajeTexto");
let botonFormularioEnviar = document.getElementById("botonFormularioEnviar");
//Funcion mostrarDatosPorConsola del formulario
function mostrarDatosPorConsola(){
    console.log("Nombre: " + nombre.value);
    console.log("Email: " + email.value);
    console.log("Mensaje: " + mensaje.value);
    alert("Nombre: " + nombre.value + "Email: " + email.value + "Mensaje: " + mensaje);
}
//asocio boton de enviar con click.
botonFormularioEnviar.addEventListener("click", mostrarDatosPorConsola);


let total = 0;

function agregarAlCarrito(nombreProducto, precio) {
    // Crear un nuevo elemento <li> para el producto
    const lista = document.getElementById('listaCarrito');
    const item = document.createElement('li');
    item.textContent = `${nombreProducto} - ${precio.toFixed(2)}€`;
    lista.appendChild(item);

    // Sumar al total
    total += precio;

    // Actualizar el total en el HTML
    document.getElementById('total').textContent = `Total: ${total.toFixed(2)}€`;
}