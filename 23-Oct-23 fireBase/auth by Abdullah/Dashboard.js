// https://firebase.google.com/docs/auth/web/manage-users

import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config";

// ye "onAuthStateChanged" humen sb jagah use krna hoga warna "login" k bad bhi ap "login" pe ja sakty hen   
//bus wahn condition me "!user" use kro
onAuthStateChanged(auth, (user) => { //agar user me "true" hoto raho warna "index.html" per jao
    if (user) { //yhn jo user login huawa hai uski sb details hen 
        //jo login huawa hai uski id
        console.log("logout kro pehly");
    } else {
        window.location = 'index.html'
    }
});


const logout = document.querySelector('#logout-btn');
logout.addEventListener('click', () => {//onclick "type=module" me work nhi krta is "evenListener"
    signOut(auth).then(() => { //
        // console.log(auth) jo user ja rha hai uski details
        alert('logout successfully');
        window.location = 'index.html'
    }).catch((error) => {
        console.log(error);
    });

})