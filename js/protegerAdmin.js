import { app } from "./firebase.js";

import {
    getAuth,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";


const auth = getAuth(app);


onAuthStateChanged(auth, (usuario)=>{


    if(!usuario){

        window.location.href = "login.html";

    }


});