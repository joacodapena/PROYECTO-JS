// Constantes
const MAX_PRODUCTOS = 5;
let productos = JSON.parse(localStorage.getItem("carrito")) || [];


// Seleccionar elementos del DOM
const inputProducto = document.getElementById("inputProducto");
const botonAgregar = document.getElementById("botonAgregar");
const botonVaciar = document.getElementById("botonVaciar");
const listaCarrito = document.getElementById("listaCarrito");


// Funciones
function renderizarCarrito() {
  listaCarrito.innerHTML = "";
  productos.forEach((producto, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${producto}`;
    listaCarrito.appendChild(li);
  });
}

function agregarProducto() {
    const nombreProducto = inputProducto.value.trim();

    if (productos.length >= MAX_PRODUCTOS) {
        alert("¡Limite de productos alcanzado!");
        return;
    }

    if (nombreProducto === "") {
        alert("El nombre del procducto no puede estar vacío.");
        return;
    }

    productos.push(nombreProducto);
    localStorage.setItem("carrito", JSON.stringify(productos));
    renderizarCarrito();
    inputProducto.value = "";
}

function vaciarCarrito() {
    productos = [];
    localStorage.removeItem("carrito");
    renderizarCarrito();
}


// Eventos 
botonAgregar.addEventListener("click", agregarProducto);
botonVaciar.addEventListener("click", vaciarCarrito);


// Inicializar
renderizarCarrito();