// module
// 1st type = "module"
// 2nd work in live server
// 3rd onClick work nhi kryga apne addEventlistner use krna hoga

// import/export liveServer hi pe work krta hai
// 1.form create krne k bad ap project create kren
// 2.project create k bad project connect kren CDN k through WEB select kr k
// 3."Use a <script> tag" ko select kren then nichy me paste krdo
// 4.q k hum import export use kr rhen hen hen too script k sath type="module" bhi likhna hoga bydefault ye off hota hai
// 5.firebase-->project me jao-->build--->Authentication-->SignInMethod-->(Email/Password)1st on krdo
// 6."initializeApp" k url ko copy//paste kr k "app-->auth" likh do or new const me save kr k export
// 7. firebase login with email and password or ab search kro "createUserWithEmailAndPassword" or ab signup.js open kro 

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB419c-FomucS8BUl51aASvSRV687NPJ1I",
    authDomain: "auth-jsb10.firebaseapp.com",
    projectId: "auth-jsb10",
    storageBucket: "auth-jsb10.appspot.com",
    messagingSenderId: "179593073309",
    appId: "1:179593073309:web:8128bbe4bf29002ca5fa74",
    measurementId: "G-ZNNE9RMFCS"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);