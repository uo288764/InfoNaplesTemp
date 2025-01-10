/*
*
*
*/
// registry.js
$(document).ready(function () {
    $('#registrationForm').on('submit', function (event) {
        event.preventDefault();

        const username = $('#username').val().trim();
        const email = $('#email').val().trim();
        const password = $('#password').val().trim();

        // Validate all fields
        if (!username || !email || !password) {
            alert("All fields are required");
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return;
        }

        // AJAX handling
        $.ajax({
            url: 'php/registry.php',
            type: 'POST',
            data: {
                username: username,
                email: email,
                password: password
            },
            success: function (response) {
                if (response.includes('Successful registry')) {
                    alert("Registration successful!");
                    $('#registrationForm')[0].reset(); // Clear form
                } else {
                    alert("Error: " + response);
                }
            },
            error: function (xhr, status, error) {
                alert("An error occurred while processing your request: " + error);
            }
        });
    });
});