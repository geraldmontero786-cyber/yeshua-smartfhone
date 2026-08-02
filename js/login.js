import { app } from "./firebase.js";

import {
    getAuth,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";


const auth = getAuth(app);


const formulario = document.querySelector("form");


formulario.addEventListener("submit", async (e)=>{

    e.preventDefault();


    const correo = document.querySelector('input[type="email"]').value;

    const contraseña = document.querySelector('input[type="password"]').value;


    try {


        await signInWithEmailAndPassword(
            auth,
            correo,
            contraseña
        );


        alert("Inicio de sesión correcto");


        window.location.href = "admin.html";


    } catch(error){


        console.error(error);

        alert("Correo o contraseña incorrectos");


    }


});