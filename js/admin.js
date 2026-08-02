import { db } from "./firebase.js";

import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";


const formulario = document.querySelector("form");

async function subirImagenCloudinary(imagen) {

    const datos = new FormData();

    datos.append("file", imagen);
    datos.append("upload_preset", "yeshua_productos");


    const respuesta = await fetch(
        "https://api.cloudinary.com/v1_1/ideo6mn6/image/upload",
        {
            method: "POST",
            body: datos
        }
    );


    const resultado = await respuesta.json();

    return resultado.secure_url;

}
formulario.addEventListener("submit", async (e) => {

    e.preventDefault();


    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const categoria = document.getElementById("categoria").value;
    const descripcion = document.getElementById("descripcion").value;
const archivoImagen = document.getElementById("imagen").files[0];

    try {
const urlImagen = await subirImagenCloudinary(archivoImagen);
        await addDoc(collection(db, "productos"), {
imagen: urlImagen,
            nombre: nombre,
            precio: precio,
            categoria: categoria,
            descripcion: descripcion

        });


        alert("Producto guardado correctamente");


        formulario.reset();


    } catch (error) {

        console.error("Error al guardar producto:", error);
        alert("Ocurrió un error");

    }

});