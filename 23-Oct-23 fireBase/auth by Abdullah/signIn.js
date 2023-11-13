// 11.ab login k js me yhi import 2 link paste kr k "signInWithEmailAndPassword" k search kro 
// 12.logout nhi horha hai firebase sy abhi tk mujhy sy

import { onAuthStateChanged, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { auth } from "./config.js"


onAuthStateChanged(auth, (user) => {
    if (!user) {
        console.log(user);
        console.log("login krlo bhai pehly")
    } else {
        window.location = './home.html'
    }
});

const form = document.querySelector('#form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User Login Successfully", user)
            window.location = 'dashboard.html'
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log("User Login Failed", errorMessage)

        });
})