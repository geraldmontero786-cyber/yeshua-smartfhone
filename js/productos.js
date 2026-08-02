import { db } from "./firebase.js";

import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";


const listaProductos = document.getElementById("lista-productos");


// Detectar categoría de la página
const categoriaPagina = listaProductos.dataset.categoria;


async function mostrarProductos() {

    const productos = await getDocs(collection(db, "productos"));


    productos.forEach((doc) => {

        const producto = doc.data();


        // Si la página tiene categoría, filtra
        if (categoriaPagina && producto.categoria !== categoriaPagina) {
            return;
        }


        listaProductos.innerHTML += `

        <div class="producto">

    <img src="${producto.imagen || ''}">

    <h3>${producto.nombre}</h3>

    <p>${producto.descripcion}</p>

    <p>Categoría: ${producto.categoria}</p>

    <p>Precio: RD$ ${producto.precio}</p>

    <a class="boton-whatsapp" 
    href="https://wa.me/8292697299" 
    target="_blank">
        Comprar por WhatsApp
    </a>

</div>

        `;

    });

}


mostrarProductos();