  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

// Developer API for Testing
// const firebaseConfig = {
//   apiKey: "AIzaSyCJ64Ot6VaAKMI3k4-K5bZ1k2ZwwLFdp6s",
//   authDomain: "login-1f0d9.firebaseapp.com",
//   projectId: "login-1f0d9",
//   storageBucket: "login-1f0d9.appspot.com",
//   messagingSenderId: "131592588958",
//   appId: "1:131592588958:web:3048741b88d4a4a840758f"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDu1Qs5MwB74dKLXrUAoAye7aCqplS0dW4",
  authDomain: "botsaregood-3ac38.firebaseapp.com",
  projectId: "botsaregood-3ac38",
  storageBucket: "botsaregood-3ac38.appspot.com",
  messagingSenderId: "606381998746",
  appId: "1:606381998746:web:cda09d71f4e13ffaa31523",
  // measurementId: "G-STFJ9RK5K7",
};

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const user = auth.currentUser;

    function updateUserProfie(user) {
      const userName = user.displayName;
      const userEmail = user.email;
      const userProfilePicture = user.photoURL;

      // updating the profile section with user data
      document.getElementById("userName").textContent = userName;
      document.getElementById("userEmail").textContent = userEmail;
      document.getElementById("userProfilePicture").src = userProfilePicture;
    }

// Listen for changes to the user's sign-in state
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    updateUserProfie(user);
  } else {
    // User is signed out or has not signed in yet
    window.location.href = "/register.html"; // Redirect to the registration page
  }
});

// Function to toggle visibility and disabled state of buttons
function toggleButtons(isSignedIn) {
  const signInButton = document.getElementById("signInButton");
  const dashboardButton = document.getElementById("dashboardButton");
  
  if (isSignedIn) {
    signInButton.style.display = "none";
    signInButton.disabled = true;
    dashboardButton.style.display = "block";
    dashboardButton.disabled = false;
  } else {
    signInButton.style.display = "block";
    signInButton.disabled = false;
    dashboardButton.style.display = "none";
    dashboardButton.disabled = true;
  }
}

// Listen for changes to the user's sign-in state
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    toggleButtons(true);
  } else {
    // User is signed out or has not signed in yet
    toggleButtons(false);
  }
});

// Log out function
function logout() {
  signOut(auth).then(() => {
    // Sign-out successful.
    alert("You have signed out.");
    // Redirect to login page
    window.location.href = "/login.html";
  }).catch((error) => {
    // An error happened.
    console.error("Error signing out:", error);
    alert("An error occurred while signing out.");
  });
}

// Add event listener to the log out button
document.getElementById("logoutButton").addEventListener("click", logout);
document.getElementById("logoutButton2").addEventListener("click", logout);