<?php
include 'DataBase.php';

class Registration {
    private $conn;

    public function __construct() {
        $db = new DataBase();
        $this->conn = $db->getConnection();
    }

    public function registryAccount($username, $email, $password) {
        // Initialize an empty error message
        $error_message = "";

        // Attempt to insert the new account into the database
        $sql = "INSERT INTO serversew.accounts (username, email, password) VALUES (?, ?, ?)";
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("sss", $username, $email, $password); // type String

        // Execute the statement and check for success
        if ($stmt->execute()) {
            $error_message = "Successful registry for user: " . $username;
        } else {
            $error_message = "Error when creating account: " . $stmt->error;
        }

        // Close the statement
        $stmt->close();

        // Return the error message (or success message)
        return $error_message;
    }

    public function obtenerRecursos() {
        $sql = "SELECT * FROM recursos_turisticos";
        return $this->conn->query($sql);
    }

    public function cerrarConexion() {
        $this->conn->close();
    }
}
?>