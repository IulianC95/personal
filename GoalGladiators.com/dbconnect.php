<?php
$servername = "localhost";
$username = "root"; // utilizator implicit pentru XAMPP
$password = ""; // parolă goală implicit pentru XAMPP
$dbname = "goal_gladiator";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexiune eșuată: " . $conn->connect_error);
}
?>
