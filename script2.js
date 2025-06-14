// Constantes
const MAX_PRODUCTOS = 5;
let productos = JSON.parse(localStorage.getItem("carrito")) || [];


// Seleccionar elementos del DOM
const botonVaciar = document.getElementById("botonVaciar");
const listaCarrito = document.getElementById("listaCarrito");
const botonPagar = document.getElementById("botonPagar");

// Importar productos 
const contenedorProductos = document.getElementById("contenedorProductos");

fetch("productos.json")
  .then((res) => res.json())
  .then((data) => {
    mostrarProductos(data);
  })
  .catch((error) => {
    console.error("Error al cargar productos:", error);
  });

function mostrarProductos(productosJSON) {
  productosJSON.forEach((producto) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" style="width:100%; height:160px; object-fit:cover; border-radius:8px; margin-bottom:10px;">
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio}</p>
      <button class="btn-agregar" data-id="${producto.id}">Agregar al carrito</button>
    `;
    contenedorProductos.appendChild(div);
  });

  // Eventos de agregar al carrito
  const botonesAgregar = document.querySelectorAll(".btn-agregar");
  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", () => {
      const id = parseInt(boton.getAttribute("data-id"));
      const producto = productosJSON.find((p) => p.id === id);
      agregarProductoAlCarrito(producto.nombre);
    });
  });
}

// Funciones
function renderizarCarrito() {
  listaCarrito.innerHTML = "";
  productos.forEach((producto, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${producto}`;
    listaCarrito.appendChild(li);
  });
}

function agregarProductoAlCarrito(nombreProducto) {
  if (productos.length >= MAX_PRODUCTOS) {
    Swal.fire({
      icon: 'warning',
      title: '¡Límite alcanzado!',
      text: 'Solo podés agregar hasta 5 productos.',
    });
    return;
  }

  productos.push(nombreProducto);
  localStorage.setItem("carrito", JSON.stringify(productos));
  renderizarCarrito();

  Toastify({
    text: `${nombreProducto} agregado al carrito`,
    duration: 2000,
    gravity: "bottom",
    position: "right",
    style: {
      background: "#4caf50",
    },
  }).showToast();
}


function vaciarCarrito() {
    productos = [];
    localStorage.removeItem("carrito");
    renderizarCarrito();

    Toastify({
    text: "Carrito vaciado con éxito",
    duration: 2000,
    gravity: "bottom",
    position: "right",
    style: {
        background: "#f44336",
    },
}).showToast();

}

// Eventos 
botonVaciar.addEventListener("click", vaciarCarrito);
botonPagar.addEventListener("click", () => {
    if (productos.length === 0) {
    Swal.fire({
      icon: "info",
      title: "Carrito vacío",
      text: "Agregá productos antes de pagar.",
    });
    return;
  }

  Swal.fire({
    icon: "success",
    title: "Pago procesado",
    text: "¡Gracias por tu compra!",
    confirmButtonText: "Cerrar",
  });

  // Vaciar carrito después del pago
  productos = [];
  localStorage.removeItem("carrito");
  renderizarCarrito();
})

// Inicializar
renderizarCarrito();