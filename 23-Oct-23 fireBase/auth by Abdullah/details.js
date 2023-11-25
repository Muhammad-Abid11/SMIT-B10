import { onAuthStateChanged, auth, doc, db, getDoc } from './config.js'

onAuthStateChanged(auth, (user) => { //agar user me "true" hoto raho warna "index.html" per jao
    if (user) { //yhn jo user login huawa hai uski sb details hen 
        //jo login huawa hai uski id

        console.log("online user-->", user.email);
        console.log("logout kro pehly");
        const emailElement = document.getElementById('email')
        emailElement.innerHTML = "Online ---" + user.email

    } else {
        window.location = 'signIn.html'
    }
});


async function getAdDetail() {
    const adId = location.search.slice(6)
    console.log("addID-->", adId)
    const ad = await getSingleAd(adId)
    const user = await getUser(ad.uid)
    console.log('user', user)

    const container = document.getElementById('container')

    const card = document.createElement('div')
    card.className = 'card'

    const img = document.createElement('img')
    img.src = ad.image
    img.style.width = '300px'
    img.style.height = '300px'

    const title = document.createElement('h3')
    title.innerHTML = ad.title

    const amount = document.createElement('h4')
    amount.innerHTML = `Rs. ${ad.amount}`

    const description = document.createElement('p')
    description.innerHTML = ad.description

    const contact = document.createElement('h3')
    contact.innerHTML = 'Contact Information'

    const username = document.createElement('h4')
    username.innerHTML = user.fullname
    card.append(contact)
    card.append(username)
    card.append(img)
    card.append(title)
    card.append(amount)
    card.append(description)


    container.append(card)
}

getAdDetail()



async function getSingleAd(adId) {
    const docRef = doc(db, "ads", adId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const ad = docSnap.data()
        console.log('ad-->', ad)

        return ad
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}

async function getUser(uid) {
    console.log('uid', uid)
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const user = docSnap.data()

        return user
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}
