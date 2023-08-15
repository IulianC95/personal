<?php
$servername = "localhost"; // De obicei este "localhost", dar poate diferi în funcție de configurația hosting-ului
$username = "u225698808_xw4013zfvbug"; // Numele de utilizator pentru baza de date
$password = "Compaq123$"; // Parola pentru baza de date
$dbname = "u225698808_leaderboard"; // Numele bazei de date

// Crearea conexiunii
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificarea conexiunii
if ($conn->connect_error) {
    die("Conexiune eșuată: " . $conn->connect_error);
}

// Dacă se trimite un scor nou
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $score = $_POST["score"];

    $stmt = $conn->prepare("INSERT INTO leaderboard (name, score) VALUES (?, ?)");
    $stmt->bind_param("si", $name, $score); // "si" înseamnă string și integer

    if ($stmt->execute()) {
        echo "Scor adăugat cu succes!";
    } else {
        echo "Eroare: " . $stmt->error;
    }

    $stmt->close();
}

// Dacă se dorește extragerea scorurilor
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $sql = "SELECT name, score FROM leaderboard ORDER BY score DESC LIMIT 10"; // Alege primele 10 scoruri cele mai mari
    $result = $conn->query($sql);

    $scores = [];
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $scores[] = $row;
        }
        echo json_encode($scores);
    } else {
        echo "0 rezultate";
    }
}

$conn->close();
?>
