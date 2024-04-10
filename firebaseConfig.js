import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";

// Developer API for Testing
const firebaseConfig = {
  apiKey: "AIzaSyCJ64Ot6VaAKMI3k4-K5bZ1k2ZwwLFdp6s",
  authDomain: "login-1f0d9.firebaseapp.com",
  projectId: "login-1f0d9",
  storageBucket: "login-1f0d9.appspot.com",
  messagingSenderId: "131592588958",
  appId: "1:131592588958:web:3048741b88d4a4a840758f"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDu1Qs5MwB74dKLXrUAoAye7aCqplS0dW4",
//   authDomain: "botsaregood-3ac38.firebaseapp.com",
//   projectId: "botsaregood-3ac38",
//   storageBucket: "botsaregood-3ac38.appspot.com",
//   messagingSenderId: "606381998746",
//   appId: "1:606381998746:web:cda09d71f4e13ffaa31523",
//   // measurementId: "G-STFJ9RK5K7",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
auth.languageCode = "en";
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "..test/dashboard.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});

// Add click event listener to the Log Out button
document.getElementById("logoutButton").addEventListener("click", logout);

// Log out function
function logout() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      alert("You have signed out.");
      document.querySelector(".g-signin2").style.display = "block";
      document.querySelector(".data").style.display = "none";
      // Redirect to login page
      window.location.href = "../login.html";
    })
    .catch((error) => {
      // An error happened.
      console.error("Error signing out:", error);
      alert("An error occurred while signing out.");
    });
}
