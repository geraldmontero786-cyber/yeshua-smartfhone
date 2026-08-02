alert("Notificaciones funcionando");
import { app } from "./firebase.js";

import { 
    getMessaging,
    getToken
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-messaging.js";

const messaging = getMessaging(app);

console.log("NOTIFICACIONES CARGADAS");


async function iniciarNotificaciones(){

    try {

        // Registrar Service Worker
        const registro = await navigator.serviceWorker.register(
            "/firebase-messaging-sw.js"
        );

        console.log("Service Worker registrado:", registro);


        // Pedir permiso
        const permiso = await Notification.requestPermission();


        if(permiso === "granted"){

            console.log("Permiso aceptado");


            const token = await getToken(messaging, {

                vapidKey: "BFhgn73dhJhsZBlGwFxhraSQyifs5Tg1J3ocBPHMsqggkIf3OjIw-1BYOeCvQawXF7xCECQoKLs_YJxPIbHF3ss",

                serviceWorkerRegistration: registro

            });


            console.log("TOKEN DEL DISPOSITIVO:", token);


        }else{

            console.log("Permiso rechazado");

        }


    } catch(error){

        console.error("Error en notificaciones:", error);

    }

}


iniciarNotificaciones();