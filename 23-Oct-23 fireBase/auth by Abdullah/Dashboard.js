// https://firebase.google.com/docs/auth/web/manage-users
// 12.logout nhi horha hai firebase sy abhi tk mujhy sy
// 13.logout krne sy pehly "onAuthStateChanged" lagana hoga ta k ye URL k through page change nhi ho agar user login hojaye
// 14.now ab "signOut(auth)" k jb function jb call hoga wo user ki "id" bhi remove krdyga "localstorage" sy


import { signOut } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

import { onAuthStateChanged, auth, db, collection, getDocs } from "./config.js";

// ye "onAuthStateChanged" humen sb jagah use krna hoga warna "login" k bad bhi ap "login" pe ja sakty hen   
//bus wahn condition me "!user" use kro

onAuthStateChanged(auth, (user) => { //agar user me "true" hoto raho warna "index.html" per jao
    if (user) { //yhn jo user login huawa hai uski sb details hen 
        //jo login huawa hai uski id

        console.log("online user-->", user.email);
        console.log("logout kro pehly");
        const emailElement = document.getElementById('email')
        emailElement.innerHTML = "Online ---" + user.email


        renderAds()//user mil jaye too Ads ko render kr k ly ao

    } else {
        window.location = 'signIn.html'
    }
});


// display ads start

async function renderAds() {
    const ads = await getAds()
    const container = document.getElementById('container')

    for (var i = 0; i < ads.length; i++) {
        const ad = ads[i]

        const card = document.createElement('div')
        card.className = 'card'
        card.onclick = function () {
            // location.href = '../detail/detail.html?adId=' + ad.id
            location.href = './details.html?adId=' + ad.id
        }

        const img = document.createElement('img')
        img.src = ad.image
        img.style.width = '100px'
        img.style.height = '100px'

        const title = document.createElement('h3')
        title.innerHTML = ad.title

        const amount = document.createElement('h4')
        amount.innerHTML = `Rs. ${ad.amount}`

        card.append(img)
        card.append(title)
        card.append(amount)

        container.append(card)
    }
}


async function getAds() {
    const querySnapshot = await getDocs(collection(db, "ads"))
    const ads = []
    querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        // const ad = { id: doc.id, ...doc.data() } // ye kam nichy 1 or lamby way sy kiya huawa hai

        const ad = doc.data()//data ly ao "ad" me or or 
        ad.id = doc.id// or or ushi "ad" k object k ander id ki field bhi banado or id enter krdo

        ads.push(ad)
    });

    return ads
}



// display ads end





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