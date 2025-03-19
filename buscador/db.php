<?php
$servername = "localhost";
$username = "buscador_admin";
$password = "Joce0708.";
$dbname = "supervisores_practicas";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
