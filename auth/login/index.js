
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getFirestore, setDoc, doc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyB6eiAH7PlcUAE2P-P1xv0YTJrzJLGljsQ",
    authDomain: "register-using-firebase-d05f4.firebaseapp.com",
    projectId: "register-using-firebase-d05f4",
    storageBucket: "register-using-firebase-d05f4.firebasestorage.app",
    messagingSenderId: "935843291741",
    appId: "1:935843291741:web:ad6d83c5814272301d63b4"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.querySelector(".register-container form");
    const loginForm = document.querySelector(".login-container form");


    registerForm.onsubmit = register;
    loginForm.onsubmit = login;
});


function register(event) {
    event.preventDefault();


    const firstName = document.querySelector(".register-container input[placeholder='Firstname']").value;
    const lastName = document.querySelector(".register-container input[placeholder='Lastname']").value;
    const email = document.querySelector(".register-container input[placeholder='Email']").value;
    const password = document.querySelector(".register-container input[placeholder='Password']").value;


    if (firstName && lastName && email && password) {
        if (isValidEmail(email)) {

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;


                    setDoc(doc(db, "users", user.uid), {
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        createdAt: serverTimestamp()
                    }).then(() => {
                        alert('User created successfully!');
                        window.location.href = "http://127.0.0.1:5500/homepage.html";
                    }).catch((error) => {
                        console.error('Error adding document: ', error);
                    });
                })
                .catch((error) => {
                    console.error('Error signing up: ', error.message);
                    alert(error.message);
                });
        } else {
            alert('Please enter a valid email address');
        }
    } else {
        alert('Please fill all the fields');
    }
}

function login(event) {
    event.preventDefault();
    const email = document.querySelector(".login-container input[placeholder='Email']").value;
    const password = document.querySelector(".login-container input[placeholder='Password']").value;


    if (email && password) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert('Login successful');
                window.location.href = "http://127.0.0.1:5500/homepage.html";

            })
            .catch((error) => {
                console.error('Error signing in: ', error.message);
                alert(error.message);
            });
    } else {
        alert('Please fill in both fields');
    }
}
