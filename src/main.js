import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
    .use(router)
    .mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9rZwRWSB_oYUCUk_r-7tdGhQ0ZG_LlX8",
    authDomain: "greenfood-9cc15.firebaseapp.com",
    projectId: "greenfood-9cc15",
    storageBucket: "greenfood-9cc15.appspot.com",
    messagingSenderId: "953845233692",
    appId: "1:953845233692:web:bb7ab7cef427ed552c87d9",
    measurementId: "G-91DJ81J43N"
};

 initializeApp(firebaseConfig);


