/* 
FireBase libaray

- Realtime DataBase(Primary feature)(Refresh kry bagar data ajayed)
- Readymade APIs
- File Storage (direct database me q nhi dala?)
(wwarna database sb file ko download krlyga or database heavy hojayega)
(for image phir unka url database me save hojayega)(5GB)
- Hosting 
- Authentication
-Db: 50mb



    firebase k cdn lange k bad apne jhn us "js" ko jb ap script me dalen too usme type="module" mention kren
    <script type="module" src="app.js"></script>



*/

/* 
steps
-----------one time connection step----------
1.create firebase projects
2. open setting and create web app and copy the configuration code and paste
it in your web app.
3. Add type="module" in your <script> tag in order to allow import/export functionality
4. create firestore database (in test mode)
5.Create Authentication turn on (select email/password)
-----------one time connection step----------
6. Implement Authentication Code
// https://firebase.google.com/docs/auth/web/start

// api agar success hoye to .then will works warna .catch run hoga
*/


/* 
FireStore
1.Collection(Array)
2.Document(objects)


*/






let signup = () => {
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    //console.log(email.value)
    //console.log(password.value)

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((user) => {
            // Signed in
            console.log(user)
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
}




let login = () => {
    let email = document.getElementById("login-email")
    let password = document.getElementById("login-password")

    // console.log(email.value);
    // console.log(password.value);

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((user) => {
            // Signed in
            console.log("user login ......")
            console.log(user)
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
        });


}


