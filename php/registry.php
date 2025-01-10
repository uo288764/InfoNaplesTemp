<?php
include 'Registration.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'] ?? '';
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    $registration = new Registration();
    $result = $registration->registryAccount($username, $email, $password);
    $registration->cerrarConexion();

    header('Content-Type: text/plain');
    echo $result;
    exit();
}
?>
