function updateInformation() {
    const activity = document.getElementById('activities').value;
    const image = document.getElementById('activityImage');
    const information = document.getElementById('activityInformation');
    const price = document.getElementById('activityPrice');

    
   if (activity === 'herculaneum') {
        image.src = 'multimedia/images/herculaneum.jpeg';
        information.innerText = 'Herculaneum: A Roman city better preserved than Pompeii.';
        price.innerText = 'Price: 18€ per person';
    } else if (activity === 'vesuvius') {
        image.src = 'multimedia/images/vesuvius.jpg';
        information.innerText = 'Mount Vesuvius: Climb the iconic volcano.';
        price.innerText = 'Price: 12€ per person';
    } else if (activity === 'historicCenter') {
        image.src = 'multimedia/images/historicCenter2.jpg';
        information.innerText = 'Historic Center Tour: Walk the streets of Naples.';
        price.innerText = 'Price: Free!';
    } else if (activity === 'caserta') {
        image.src = 'multimedia/images/caserta.png';
        information.innerText = 'Caserta Royal Palace: Explore its stunning architecture and gardens.';
        price.innerText = 'Price: 18€ per person';
    } 		
	/*Selected one is Pompeii is one of the most iconic, also the element n1 on the combobox*/ 		
	else {
	        image.src = 'multimedia/images/pompeii.jpg';
	        information.innerText = 'Pompeii: Explore the ruins of this iconic ancient city.';
	        price.innerText = 'Price: 21€ per person';
	}			
}

// Convert hour text to 24-hour format
function getFormattedHour(hourValue) {
    const hourMap = {
        'nine': '09:00',
        'eleven': '11:00',
        'one': '13:00',
        'three': '15:00'
    };
    return hourMap[hourValue] || hourValue;
}

$(document).ready(function () {
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    $('#dateInput').attr('min', today);

    $('#reservationForm').on('submit', function (event) {
        event.preventDefault();

        const activity = $('#activities').val();
        const date = $('#dateInput').val();
        const hourValue = $('#hour').val();
        const hour = getFormattedHour(hourValue);
        const email = $('#email').val().trim();
        const repeatEmail = $('#repeatEmail').val().trim();
        const numberOfPeople = $('#numberOfPeople').val();

        // Validate all fields
        if (!activity || !date || !hour || !email || !repeatEmail || !numberOfPeople) {
            alert("All fields are required");
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return;
        }

        // Check if emails match
        if (email !== repeatEmail) {
            alert("Error: Emails do not match");
            return;
        }

        // AJAX request
        $.ajax({
            url: 'php/reservations.php',
            type: 'POST',
            data: {
                activities: activity,
                dateInput: date,
                hour: hour,
                email: email,
                repeatEmail: repeatEmail,
                numberOfPeople: numberOfPeople
            },
            success: function (response) {
                if (response.includes('Reservation successful')) {
                    alert("Reservation successful!");
                    $('#reservationForm')[0].reset();
                    updateInformation(); // Reset activity information display
                } else {
                    alert( response);
                }
            },
            error: function (xhr, status, error) {
                alert("An error occurred while processing your request: " + error);
            }
        });
    });
});