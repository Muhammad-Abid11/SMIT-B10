/* 
Login with Facebook:
===================
1. Create Facebook App at developers.facebook.com
2. In Settings -> Basic -> Copy the App ID & App Secret
3. In Firebase Authentication, On the Sign in method tab, enable the Facebook sign-in method and specify the App ID and App Secret you got from Facebook.
4. Copy the Auth Redirect URL, and paste it UseCases -> Authentication and account creation CUSTOMIZE -> Valid OAuth Redirect URIs
5. Under CUSTOMIZE, under permissions, Add email permission(click it to allow).(
    email allow nhi hua to login k time Error ayega "sorry something went wrong...")
6. Copy the Facebook login code from firebase docs.and follow steps

*/


import { signInWithPopup, auth, provider } from "./config.js";

window.loginwithFb = function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
            console.log("result-->", user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = FacebookAuthProvider.credentialFromError(error);
            console.log(errorMessage)
        });
}