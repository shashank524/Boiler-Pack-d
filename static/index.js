// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {    
    apiKey: "AIzaSyCiCH4KfBhGdtX3DupdtYKzVQeTro7BiFQ",
    authDomain: "hello-world-project-772a9.firebaseapp.com",
    projectId: "hello-world-project-772a9",
    storageBucket: "hello-world-project-772a9.appspot.com",
    messagingSenderId: "946443368520",
    appId: "1:946443368520:web:8b362f7fb4261ee916c07d",
    measurementId: "G-PJH3BLZTKR"
};

var imagePath = "";

function statsPage(location){
    window.location.replace('/info');

    console.log(location);

    if(location=="Corec"){
        document.querySelector("#stats-image").setAttribute("src", "/static/purdue-hero-1.jpg");
    }
    else if(location=="Dining"){
        document.querySelector("#stats-image").setAttribute("src", "/static/download-1.jpg");
    }
    else{
        document.querySelector("#stats-image").setAttribute("src", "/static/download.jpg");

    }
}




// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = firebase.getAnalytics(app);

const auth = firebase.auth();
// const database = firebase.database();


auth.onAuthStateChanged(user => {
    if(user){
        console.log("user logged in");
        window.location.href = "/";
    }
    else{
        console.log("user logged out");
    }
});

function register(){
    email = document.getElementById("signup-email").value;
    password = document.getElementById("signup-password").value;

    console.log("creating user")

    auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);

        // [END_EXCLUDE]
    });

}



function validate_email(email){
    expression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(expression.test(email)==true){
        return true;
    }
    else{
        return false;
    }
}

function validate_password(password){
    if(password.length < 6){
        return false;

    }
    else{
        return true;
    }
}

const logInForm = document.getElementById('logInForm');
console.log(logInForm);
logInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get user info
    const email = logInForm['login-email'].value;
    const password = logInForm['login-password'].value;
    
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }

    // log the user in
    // auth.signInWithEmailAndPassword(email, password).then((cred) => {
    //     console.log(cred.user);
    //     logInForm.reset();
    // });
    auth.signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        document.getElementById('quickstart-sign-in').disabled = false;
        // [END_EXCLUDE]
      });


});

