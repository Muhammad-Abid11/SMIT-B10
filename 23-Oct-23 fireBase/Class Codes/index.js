import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDF7qwCWoKvkLoOUNWGGjmHW-TuE084F2c",
    authDomain: "kashif-smit-10.firebaseapp.com",
    projectId: "kashif-smit-10",
    storageBucket: "kashif-smit-10.appspot.com",
    messagingSenderId: "581844716448",
    appId: "1:581844716448:web:30bf7052380b964af532c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export function registerInAuth() {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('User registered successfully')
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage)
        });
}

// document.addEventListener('')




/*
Firebase: Library

- Database (Primary feature) (Realtime database)
- Readymade APIs
- File Storage (Free me 5 GB)
- Hosting (Live your website/webapp)
- Authentication

*/

/*
Steps:
1. Create Firebase Project
2. Open Settings, create web app, copy the configuration code and
paste it in your web app.
3. Add type='module' in your <script> in order to allow import/export
functionality
4. Create Firestore Database (in test mode)
5. Create Authenticate in Firebase (Email/Password)
=====ONE TIME STEPS ABOVE=====

6. Implement Authentication Code
*/


/*
Firestore
1. Collection (Array)
2. Document (Object)
*/