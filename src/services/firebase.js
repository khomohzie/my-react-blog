import firebase from 'firebase'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDLC0gf4Fbwjc6FIyDrZd_MvAr2bnGHqK0",
    authDomain: "lets-blog-34736.firebaseapp.com",
    projectId: "lets-blog-34736",
    storageBucket: "lets-blog-34736.appspot.com",
    messagingSenderId: "415183792389",
    appId: "1:415183792389:web:3838261bdedf30d6c52f6c",
    measurementId: "G-K30ZPGY6MN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth;