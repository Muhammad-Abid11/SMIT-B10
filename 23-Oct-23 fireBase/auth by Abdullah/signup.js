// 7.firebase login with email and password or ab search kro "createUserWithEmailAndPassword" or ab signup.js open kro
// 8.code copy kr k yhn paste kro
// 9.auth ko import kren config.js sy
// 10.auth ko {} <-- k ander q k function ko {auth}<-- easa likhty hen
// 11.ab login k js me yhi import 2 link paste kr k "signInWithEmailAndPassword" k search kro 


// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";<-- firebase ki jagah URL likho Upper sy or auth.js krdo
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// const auth = getAuth(); //ye apne pehly hi apne app k sath connect kiya huawa hai to usy hi import krlo
//ye ap isliye bhi use nhi krsakty k ye async work kryga shyd is liye bhi
import { onAuthStateChanged, doc, db, auth, setDoc } from "./config.js"
// 17.import firestore elements and allow firebaseStore
// fireStore-->CreateDataBase-->SelectLocation-->TestMode-->Enable 
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";



//agar "onAuthStateChange" huawa too wo dashboard pe ly k jayega q k "user" usy miljayega or
//  fireStore me Data bhi save nhi hoga q k Async operation last me hota hai 
/* onAuthStateChanged(auth, (user) => {
    if (!user) {
        console.log(user);
        console.log("login kr pehly register");
    } else {
        window.location = './Dashboard.html'
    }
});
 */

const form = document.querySelector('#form')
const email = document.querySelector('#email')
const fullname = document.querySelector('#fullname')
const password = document.querySelector('#password')
const phonenumber = document.querySelector('#phonenumber')

form.addEventListener('submit', (event) => {//"sibmit" work when submit button work,warna "click" work every tap
    event.preventDefault();
    // console.log("form email password", form, email.value, fullname.value, password.value)
    createUserWithEmailAndPassword(auth, email.value, password.value)//<---email,password(values)
        .then(async (userCredential) => {

            // user register k bad extra information dataBase me
            /* FireStore start firestore sy allow bhi on krdo*/
            try {

                /*                 const docRef = await addDoc(collection(db, "users"), {
                                    fullname: fullname.value,
                                    email: email.value,
                                    phonenumber: phonenumber.value
                                }); */
                const docRef = await setDoc(doc(db, "users", userCredential.user.uid), {
                    fullname: fullname.value,
                    email: email.value,
                    phonenumber: phonenumber.value
                });

                // console.log("Document written with ID: ", docRef.id);
                console.log("Document written with ID-->: ", docRef);
                alert("Registered Successfully")
            } catch (e) {
                console.error("Error adding document: ", e);
            }
            /* FireStore End*/

            const user = userCredential.user;
            console.log("User Register Successfully", user)
            // window.location = 'signIn.html'  // redirect to login page--> dashboard due to "onAuthstateChange" found "user"
            //agar "onAuthStateChange" huawa too wo dashboard pe ly k jayega q k "user" usy miljayega or
            //  fireStore me Data bhi save nhi hoga q k Async operation last me hota hai 
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message.split(": ")[1]; //error ko split krdo ": " k pass sy or uska 2nd index ko save krdo
            console.log("User Registration Failed", errorMessage)
        });
})

