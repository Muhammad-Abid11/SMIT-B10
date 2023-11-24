

import { uploadBytesResumable, auth, db, collection, addDoc, getStorage, ref, uploadBytes, getDownloadURL } from "./config.js"


const storage = getStorage();

window.onSubmit = function () {
    const uid = auth.currentUser.uid //Authentication
    const allInputs = document.getElementsByTagName('input')
    const title = allInputs[0].value
    const description = allInputs[1].value
    const amount = allInputs[2].value
    const image = allInputs[3].files[0]

    const ad = {
        title,
        description,
        amount,
        image,
        uid
    }

    postAdToDb(ad)
}

async function postAdToDb(ad) {
    /*
    1. Upload image to Storage
    2. Get the URL of the image
    3. Add all data with URL in database
    */
    try {
        const storageRef = ref(storage, `ads/${ad.image.name}`); //picture k refrence create kro
        await uploadBytes(storageRef, ad.image) //or phir usy upload krdo
        const url = await getDownloadURL(storageRef) //us file k download kr k
        ad.image = url //image k jagah dal do 

        await addDoc(collection(db, "ads"), ad) //or firebase DataBase me uski link rakho
        alert('Data added successfully!')
    } catch (e) {
        alert(e.message)
    }

}

/* ye likhdo uploadBytes ko comment kr k wahen per phir console pe percentage bhi btayega or upload bhi kryga

const uploadTask = uploadBytesResumable(storageRef, ad.image);
uploadTask.on('state_changed',
    (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
            case 'paused':
                console.log('Upload is paused');
                break;
            case 'running':
                console.log('Upload is running');
                break;
        }
    },
    (error) => {
        console.log("error agaya bhai")
    },
    () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
        });
    }
); */