// 7.firebase login with email and password or ab search kro "createUserWithEmailAndPassword" or ab signup.js open kro
// 8.code copy kr k yhn paste kro
// 9.auth ko import kren config.js sy
// 10.auth ko {} <-- k ander q k function ko {auth}<-- easa likhty hen
// 11.ab login k js me yhi import 2 link paste kr k "signInWithEmailAndPassword" k search kro 


// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";<-- firebase ki jagah URL likho Upper sy or auth.js krdo
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// const auth = getAuth(); //ye apne pehly hi apne app k sath connect kiya huawa hai to usy hi import krlo
//ye ap isliye bhi use nhi krsakty k ye async work kryga shyd is liye bhi
import { auth } from "./config.js"

const form = document.querySelector('#form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

form.addEventListener('submit', (event) => {//"sibmit" work when submit button work,warna "click" work every tap
    event.preventDefault();
    // console.log("form email password", form, email.value, fullname.value, password.value)
    createUserWithEmailAndPassword(auth, email.value, password.value)//<---email,password(values)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User Register Successfully", user)
            window.location = 'signIn.html'  // redirect to login page
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("User Registration Failed", errorMessage)
        });
})

