<?php
include 'Reservation.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $activity = $_POST['activities'] ?? '';
    $email = $_POST['email'] ?? '';
    $repeatEmail = $_POST['repeatEmail'] ?? ''; // Added repeat email
    $numberOfPeople = $_POST['numberOfPeople'] ?? 0; // Default to 0 if not set, although it is set to 1 in html default
    $hour = $_POST['hour'] ?? '';
    $date = $_POST['dateInput'] ?? '';

    // Validate that the email and repeat email match
    if ($email !== $repeatEmail) {
        header('Content-Type: text/plain');
        echo "Error: Emails do not match.";
        exit();
    }

    // Create a new reservation instance
    $reservation = new Reservation();
    $result = $reservation->reserveActivity($activity, $date, $hour, $email, (int)$numberOfPeople);
    $reservation->cerrarConexion(); 

    header('Content-Type: text/plain');
    echo $result;
    exit();
}
?>