const scriptURL = 'https://script.google.com/macros/s/AKfycbw1WzoCGFI-rnT-U9v8XqO0HI3F_r5r656Vhz9bzv9xbPKGCHlo6gRx7ROjRaYgjtBi/exec';

function authenticateUser(email, password) {
  fetch(scriptURL + `?email=${email}&password=${password}`)
      .then(response => {
          if (response.ok) {
              return response.json();
          } else {
              throw new Error('Network response was not ok.');
          }
      })
      .then(data => {
          if (data && data.result === 'success') {
              // Authentication successful, redirect to dashboard
              window.location.href = 'dashboard.html'; // Replace with your dashboard URL
          } else {
              // Authentication failed or user not found, display error message
              alert('Invalid email or password. Please try again.');
          }
      })
      .catch(error => console.error('Error!', error.message));
}


// Add event listener to the login form
const loginForm = document.forms['login-form'];
loginForm.addEventListener('submit', e => {
e.preventDefault();
const email = loginForm['email'].value;
const password = loginForm['password'].value;
authenticateUser(email, password);
});