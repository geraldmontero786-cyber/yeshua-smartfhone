import { db } from "./firebase.js";

import { 
    collection, 
    getDocs,
    deleteDoc,
    doc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";


const listaAdmin = document.getElementById("lista-admin");


async function mostrarProductosAdmin() {

    const productos = await getDocs(collection(db, "productos"));


    productos.forEach((doc) => {

        const producto = doc.data();


        listaAdmin.innerHTML += `

        <div class="producto-admin">

            <img src="${producto.imagen}" width="120">

            <h3>${producto.nombre}</h3>

            <p>Precio: RD$ ${producto.precio}</p>

            <p>Categoría: ${producto.categoria}</p>
            <button onclick="editarProducto('${doc.id}')">
    Editar
</button>
<button onclick="eliminarProducto('${doc.id}')">
    Eliminar
</button>

        </div>

        `;

    });

}


mostrarProductosAdmin();
window.eliminarProducto = async function(id) {

    const confirmar = confirm("¿Seguro que quieres eliminar este producto?");


    if(confirmar){

        await deleteDoc(doc(db, "productos", id));

        alert("Producto eliminado");

        location.reload();

    }

}
window.editarProducto = async function(id) {

    const editor = document.getElementById("editar-producto");

    editor.style.display = "block";


    const nombre = prompt("Nuevo nombre del producto:");

    if (!nombre) return;


    const precio = prompt("Nuevo precio:");

    if (!precio) return;


    await updateDoc(doc(db, "productos", id), {

        nombre: nombre,
        precio: precio

    });


    alert("Producto actualizado correctamente");

    location.reload();

}