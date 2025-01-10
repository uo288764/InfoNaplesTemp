<?php
include 'DataBase.php';

class Reservation {
    private $conn;

    public function __construct() {
        $db = new DataBase();
        $this->conn = $db->getConnection();
    }

    public function isRegisteredUser($email) {
        $checkQuery = "SELECT email FROM accounts WHERE email = ?";
        $stmt = $this->conn->prepare($checkQuery);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->store_result();
        $exists = $stmt->num_rows > 0;
        $stmt->close();
        return $exists;
    }

    public function reserveActivity($activity, $date, $hour, $email, $num_people) {
        //check if user is registrated
        if (!$this->isRegisteredUser($email)) {
            return "Error: Email not registered. Please register before making a reservation.";
        }

        // Check for existing reservation for the user
        $checkQuery = "SELECT email FROM reservations WHERE email = ? AND date = ? AND hour = ?";
        $stmtCheck = $this->conn->prepare($checkQuery);
        $stmtCheck->bind_param("sss", $email, $date, $hour);
        $stmtCheck->execute();
        $stmtCheck->store_result();

        if ($stmtCheck->num_rows > 0) {
            $stmtCheck->close();
            return "Error: Client already has an existing reservation for this time.";
        }
        $stmtCheck->close();

        // Insert the reservation into the database
        $sql = "INSERT INTO reservations (activity, date, hour, email, num_people) VALUES (?, ?, ?, ?, ?)";
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("ssssi", $activity, $date, $hour, $email, $num_people);

        if ($stmt->execute()) {
            return "Reservation successful for activity: " . htmlspecialchars($activity);
        } else {
            return "Error: " . $stmt->error;
        }
    }

    public function cerrarConexion() {
        $this->conn->close();
    }
}
?>