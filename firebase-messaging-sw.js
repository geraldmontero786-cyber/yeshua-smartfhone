importScripts(
"https://www.gstatic.com/firebasejs/12.17.0/firebase-app-compat.js"
);

importScripts(
"https://www.gstatic.com/firebasejs/12.17.0/firebase-messaging-compat.js"
);


firebase.initializeApp({

  apiKey: "AIzaSyCguf7irNF5WB0Gh5r56fPIhQDB_2lLFzc",
  authDomain: "yeshua-smartfhone.firebaseapp.com",
  projectId: "yeshua-smartfhone",
  storageBucket: "yeshua-smartfhone.firebasestorage.app",
  messagingSenderId: "1045401912682",
  appId: "1:1045401912682:web:f26b3c2f516151785fd113"

});


const messaging = firebase.messaging();


messaging.onBackgroundMessage((payload) => {

    console.log(
        "Notificación recibida en segundo plano:",
        payload
    );


    const notificationTitle = payload.notification.title;

    const notificationOptions = {

        body: payload.notification.body

    };


    self.registration.showNotification(
        notificationTitle,
        notificationOptions
    );

});