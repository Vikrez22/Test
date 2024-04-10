    const scriptURL = 'https://script.google.com/macros/s/AKfycbw1WzoCGFI-rnT-U9v8XqO0HI3F_r5r656Vhz9bzv9xbPKGCHlo6gRx7ROjRaYgjtBi/exec';

    const form = document.forms['contact-form'];

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                if (response.ok) {
                    alert("Thank you! Your form is submitted successfully. \n Kindly Login with Google.");
                    // Redirect to login page after successful submission
                    window.location.href = 'login.html'; // Replace 'login.php' with your login page URL
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .catch(error => console.error('Error!', error.message));
    });


