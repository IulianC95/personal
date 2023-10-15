<?php

$servername = "localhost";
$dbname = "u225698808_leaderboard";
$username = "u225698808_xw4013zfvbug";
$password = "Compaq123$";


// Crează conexiunea
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Verifică conexiunea
if ($conn->connect_error) {
    die("Conexiune eșuată: " . $conn->connect_error);
}

// Dacă este o cerere POST, adaugă scorul în baza de date
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $score = $_POST["score"];

    $sql = "INSERT INTO leaderboard (name, score) VALUES ('$name', '$score')";

    if ($conn->query($sql) === TRUE) {
        echo "Scor nou adăugat cu succes!";
    } else {
        echo "Eroare: " . $sql . "<br>" . $conn->error;
    }
} else {
    // Dacă este o cerere GET, returnează scorurile din baza de date
    $sql = "SELECT name, score FROM leaderboard ORDER BY score DESC LIMIT 5";
    $result = $conn->query($sql);

    $scores = [];

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $scores[] = $row;
        }
    }

    echo json_encode($scores);
}

$conn->close();
?>
