<?php
class DataBase {
    private $servername = "localhost";
    private $username = "root";
    private $password = "ContraseñaServer1_";
    private $dbname = "serversew";
    private $conn;

    //root
    //localhost
    //ContraseñaServer1_

    public function __construct() {
        $this->conn = new mysqli
        ($this->servername, 
        $this->username, 
        $this->password, 
        $this->dbname);

        if ($this->conn->connect_error) {
            die("Conexión fallida: " . $this->conn->connect_error);
        }
    }

    public function getConnection() {
        return $this->conn;
    }

    public function closeConnection() {
        $this->conn->close();
    }
}
?>
