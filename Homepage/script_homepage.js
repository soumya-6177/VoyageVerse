// // Importing Firebase modules
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
// import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
// import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyB6eiAH7PlcUAE2P-P1xv0YTJrzJLGljsQ",
//     authDomain: "register-using-firebase-d05f4.firebaseapp.com",
//     projectId: "register-using-firebase-d05f4",
//     storageBucket: "register-using-firebase-d05f4.firebasestorage.app",
//     messagingSenderId: "935843291741",
//     appId: "1:935843291741:web:ad6d83c5814272301d63b4"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);


// // User Profile Page
// if (window.location.pathname.includes("user_profile")) {
//     // Showing names at profile
//     document.addEventListener("DOMContentLoaded", async () => {
//         console.log("DOM Loaded");
//         onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 console.log("User signed in");
//                 const name = "Name: " + user.displayName;
//                 const mail = "Email: " + user.email;
//                 document.getElementById("named").innerHTML = name;
//                 document.getElementById("email").innerHTML = mail;
//             } else {
//                 console.log("User signed out");
//                 const name = "none";
//                 const mail = "none";
//                 document.getElementById("named").innerHTML = name;
//                 document.getElementById("email").innerHTML = mail;
//             }
//         });

//         // Logout
//         document.getElementById("logout").addEventListener("click", async () => {
//             signOut(auth)
//                 .then(() => {
//                     alert("Signed Out");
//                     window.location.href = "index.html";
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                 });
//         });
//     });
// }


// // Event listener for the Profile Button
// document.getElementById("profile-btn").addEventListener("click", function () {
//     // Check if the user is logged in before showing the profile
//     const user = auth.currentUser;
//     if (user) {
//         // User is logged in, fetch profile data
//         fetchUserProfile(user.uid);
//     } //else {
//     //     // If not logged in, redirect to login page
//     //     window.location.href = "login.html";  // Replace with your login page
//     // }
// });

// // Function to fetch user profile data from Firestore
// function fetchUserProfile(userId) {
//     const userDocRef = doc(db, "users", userId);
//     getDoc(userDocRef)
//         .then((doc) => {
//             if (doc.exists()) {
//                 const userData = doc.data();
//                 displayUserProfile(userData);
//             } else {
//                 console.log("No such document!");
//             }
//         })
//         .catch((error) => {
//             console.error("Error getting document: ", error);
//         });
// }

// // Function to display user profile data
// function displayUserProfile(userData) {
//     const profileContainer = document.getElementById("profile-container");
//     profileContainer.innerHTML = `
//         <h2>User Profile</h2>
//         <p><strong>Name:</strong> ${userData.firstName} ${userData.lastName}</p>
//         <p><strong>Email:</strong> ${userData.email}</p>
//         <p><strong>Joined:</strong> ${userData.createdAt.toDate().toDateString()}</p>
//     `;
// }


// // Handle authentication state changes
// onAuthStateChanged(auth, async (user) => {
//     if (user) {
//         console.log("User signed in:", user.email);
//         const userData = await fetchUserProfile(user.uid);
//         displayUserProfile(userData);
//     }
//     // } else {
//     //     console.log("No user signed in");
//     //     window.location.href = "http://127.0.0.1:5501/login/index.html"; // Redirect to login if no user is logged in
//     // }
// });

// // Logout functionality
// document.getElementById("logout").addEventListener("click", async () => {
//     try {
//         await signOut(auth);
//         alert("Signed out successfully");
//         window.location.href = ""; // Redirect to home page after logout
//     } catch (error) {
//         console.error("Error during sign-out:", error);
//     }
// });

// // DOMContentLoaded listener for additional functionality
// document.addEventListener("DOMContentLoaded", () => {
//     console.log("DOM fully loaded and parsed");
// });
