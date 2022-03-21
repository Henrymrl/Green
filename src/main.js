import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB9rZwRWSB_oYUCUk_r-7tdGhQ0ZG_LlX8",
    authDomain: "greenfood-9cc15.firebaseapp.com",
    projectId: "greenfood-9cc15",
    storageBucket: "greenfood-9cc15.appspot.com",
    messagingSenderId: "953845233692",
    appId: "1:953845233692:web:bb7ab7cef427ed552c87d9",
    measurementId: "G-91DJ81J43N"
};

 firebase.initializeApp(firebaseConfig);

createApp(App)
    .use(router)
    .mount('#app')






