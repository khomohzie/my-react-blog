import { auth } from '../services/firebase'

export function signup(email, password) {
    return auth().createUserWithEmailAndPassword(email, password)
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            if (errorCode === 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        }
        );
}

export function signin(email, password) {
    return auth().signInWithEmailAndPassword(email, password)
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        }
        );
}

export function signInWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    return auth().signInWithPopup(provider);
}

export function signInWithGithub() {
    const provider = new auth.GithubAuthProvider();
    return auth().signInWithPopup(provider);
}

export function signInWithFacebook() {
    const provider = new auth.FacebookAuthProvider();
    return auth().signInWithPopup(provider);
}

export function signInWithTwitter() {
    const provider = new auth.TwitterAuthProvider();
    return auth().signInWithPopup(provider);
}

export function signout() {
    return auth().signOut().then(() => console.log("user signed out"))
}