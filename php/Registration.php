<?php
include 'DataBase.php';

class Registration {
    private $conn;

    public function __construct() {
        $db = new DataBase();
        $this->conn = $db->getConnection();
    }

    public function registryAccount($username, $email, $password) {
        //check repeated user
        $checkQuery = "SELECT username FROM accounts WHERE username = ?";
        $stmtCheck = $this->conn->prepare($checkQuery);
        $stmtCheck->bind_param("s", $username);
        $stmtCheck->execute();
        $stmtCheck->store_result();

        if ($stmtCheck->num_rows > 0) {
            //"Error: Username already exists."
            return "Error: Username already exists.";
        }
        $stmtCheck->close();

        //check repeated email
        $checkQuery = "SELECT email FROM accounts WHERE email = ?";
        $stmtCheck = $this->conn->prepare($checkQuery);
        $stmtCheck->bind_param("s", $email);
        $stmtCheck->execute();
        $stmtCheck->store_result();

        if ($stmtCheck->num_rows > 0) {
            //"Error: Email already exists."
            return " Email already exists.";
        }
        $stmtCheck->close();

        $sql = "INSERT INTO accounts (username, email, password) VALUES (?, ?, ?)";
        $stmt = $this->conn->prepare($sql);
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        $stmt->bind_param("sss", $username, $email, $hashed_password);

        if ($stmt->execute()) {
            return "Successful registry for user: " . $username;
        } else {
            return "Error: " . $stmt->error;
        }
    }

    public function cerrarConexion() {
        $this->conn->close();
    }
}
?>
