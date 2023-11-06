<?php

$servername = "localhost";
$dbname = "u225698808_leaderboard";
$username = "u225698808_xw4013zfvbug";
$password = "Compaq123$";

// Conexiunea la baza de date
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifică conexiunea
if ($conn->connect_error) {
    die("Conexiune eșuată: " . $conn->connect_error);
}

// Interogare pentru a număra intrările pentru fiecare nume, limitat la primele 5
$sql = "SELECT name, COUNT(*) as entries FROM leaderboard GROUP BY name ORDER BY entries DESC LIMIT 5";
$result = $conn->query($sql);

$counts = [];

if ($result && $result->num_rows > 0) {
    // Extrage și adaugă rezultatele în array
    while ($row = $result->fetch_assoc()) {
        $counts[] = $row;
    }
}

// Închide conexiunea
$conn->close();

// Setează antetul pentru tipul de conținut la JSON
header('Content-Type: application/json');
// Trimite rezultatele înapoi la client
echo json_encode($counts);
?>
