// https://firebase.google.com/docs/auth/web/manage-users
// 12.logout nhi horha hai firebase sy abhi tk mujhy sy
// 13.logout krne sy pehly "onAuthStateChanged" lagana hoga ta k ye URL k through page change nhi ho agar user login hojaye
// 14.now ab "signOut(auth)" k jb function jb call hoga wo user ki "id" bhi remove krdyga "localstorage" sy


import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

import { auth } from "./config.js";

// ye "onAuthStateChanged" humen sb jagah use krna hoga warna "login" k bad bhi ap "login" pe ja sakty hen   
//bus wahn condition me "!user" use kro

onAuthStateChanged(auth, (user) => { //agar user me "true" hoto raho warna "index.html" per jao
    if (user) { //yhn jo user login huawa hai uski sb details hen 
        //jo login huawa hai uski id
        console.log("logout kro pehly");
    } else {
        window.location = 'signIn.html'
    }
});


const logout = document.querySelector('#logout-btn');
logout.addEventListener('click', () => {//onclick "type=module" me work nhi krta is "evenListener"
    signOut(auth).then(() => { //
        // console.log(auth) jo user ja rha hai uski details
        alert('logout successfully');
        window.location = 'signIn.html'
    }).catch((error) => {
        console.log(error);
    });

})