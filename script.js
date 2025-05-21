// SCRIPT DE LA ENTREGA 1 - LO DEJO COMO REFERENCIA

// 1. DECLARAR VARIABLES Y CONSTANTES
const MAX_PRODUCTOS = 5;
let productos = []; // Array vacío para almacenar los productos

// 2. DECLARAR LAS FUNCIONES
function agregarProducto() {
    if (productos.length >= MAX_PRODUCTOS) {
        alert("¡Límite de productos alcanzado! ⚠️");
        return; // Si ya llegamos al límite, no dejamos agregar más
    }

     // Pedimos al usuario que ingrese el nombre del producto
     let nombreProducto = prompt("Ingrese el nombre del producto que desea agregar:");

     // Verificamos que el usuario no haya dejado el campo vacío
     if (nombreProducto === "") {
         alert("El nombre del producto no puede estar vacío. ❌");
         return; // Si está vacío, no dejamos agregar nada
     }
 
     // Agregamos el producto al carrito
     productos.push(nombreProducto);
     alert(`¡${nombreProducto} agregado al carrito! ✅`);
 
     // Mostrar en consola el nombre del producto agregado
     console.log(`Producto agregado: ${nombreProducto}`);
     
     console.log(productos); // Mostrar el carrito completo en consola
 }

 function listarProductos() {
    if (productos.length === 0) {
        alert("No hay productos en el carrito. 🛒");
        return; 
    }

    let lista = "Productos en el carrito:\n";

    // Recorremos el array de productos
    for (let i = 0; i < productos.length; i++) {
        lista += (i + 1) + ". " + productos[i] + "\n";
    }

    alert(lista);
}


function vaciarCarrito () {
    productos = []; // Vaciar el array de productos
    alert("¡El carrito ha sido vaciado correctamente! ✅🛒");
}

// MENU PRINCIPAL
function principal () {
    let opcion; // Variable para almacenar la opción del usuario

    do {
        // Mostramos el menú de opciones
        opcion = prompt(
            "Bienvenido a nuestro Mini E-commerce 🛒\n" +
            "1. Agregar Producto \n" +
            "2. Listar Productos en el Carrito \n" +
            "3. Vaciar Carrito \n" +
            "4. Salir \n" +
            "Seleccione una opción (1-4):"
        );

        // Dependiendo de la opción, ejecutamos una acción
        switch (opcion) {
            case "1":
                agregarProducto(); // Llamamos a la función para agregar un producto
                break;
            case "2":
                listarProductos(); // Llamamos a la función para listar productos
                break;
            case "3":
                vaciarCarrito(); // Llamamos a la función para vaciar el carrito
                break;
            case "4":
                alert("¡Gracias por usar nuestro Mini E-commerce! Hasta luego 👋");
                break;
            default:
                alert("Opción inválida. Ingresar un número entre 1 y 4.");
                break;
        }

    } while (opcion !== "4"); // Mientras la opción no sea 4, sigue mostrando el menú
}

// Ejecucion de nuestro programa
principal();



