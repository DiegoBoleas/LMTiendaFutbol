//JS para el formulario\\
// Obtener los elementos del formulario mediante su ID
let nombre = document.getElementById("nombre");// Obtiene el campo de texto para el nombre
let email = document.getElementById("email");// Obtiene el campo de texto para el email
let mensaje = document.getElementById("mensajeTexto");// Obtiene el campo de texto para el mensaje
let botonFormularioEnviar = document.getElementById("botonFormularioEnviar");// Obtiene el botón de envío del formulario
//Funcion mostrarDatosPorConsola del formulario
function mostrarDatosPorConsola(){
    console.log("Nombre: " + nombre.value);// Muestra el valor del campo "nombre" en la consola
    console.log("Email: " + email.value);// Muestra el valor del campo "email" en la consola
    console.log("Mensaje: " + mensaje.value);// Muestra el valor del campo "mensaje" en la consola
    alert("Nombre: " + nombre.value + " Email: " + email.value + " Mensaje: " + mensaje.value);  // Muestra una alerta con los datos del formulario
}
//asocio boton de enviar con click.
// Cuando se hace clic en el botón, se ejecuta la función mostrarDatosPorConsola
botonFormularioEnviar.addEventListener("click", mostrarDatosPorConsola);

// Variable para llevar el control del total del carrito
let total = 0;

// Función para agregar productos al carrito
function agregarAlCarrito(nombreProducto, precio) {
    // Crear un nuevo elemento <li> para el producto
    const lista = document.getElementById('listaCarrito');// Obtiene la lista donde se agregarán los productos
    const item = document.createElement('li'); // Crea un nuevo elemento de lista <li>
    item.textContent = `${nombreProducto} - ${precio.toFixed(2)}€`;// Establece el contenido del <li> como el nombre del producto y su precio con 2 decimales
    lista.appendChild(item);// Agrega el nuevo elemento <li> a la lista del carrito

    // Sumar al total
    //incrementa el total con el precio del producto agregado
    total += precio;

    // Actualiza el texto del total en el HTML con el nuevo valor
    document.getElementById('total').textContent = `Total: ${total.toFixed(2)}€`;
}

// Obtener el botón de vaciar carrito
const botonVaciarCarrito = document.getElementById("vaciarCarrito");

// Función para vaciar el carrito
function vaciarCarrito() {
    const lista = document.getElementById('listaCarrito');
    lista.innerHTML = ""; // Borra todos los elementos del carrito
    total = 0; // Reinicia el total
    document.getElementById('total').textContent = `Total: ${total.toFixed(2)}€`; // Actualiza el total en pantalla
}

// Asociar el botón a la función
botonVaciarCarrito.addEventListener("click", vaciarCarrito);