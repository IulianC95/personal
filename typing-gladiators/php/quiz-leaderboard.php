<?php
$servername = "localhost";
$dbname = "u225698808_leaderboard";
$username = "u225698808_xw4013zfvbug";
$password = "Compaq123$";

try {
    // Conexiunea la baza de date
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Acest cod va rula atunci când se face o cerere POST la acest script
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);
        $name = $data['name'];
        $score = $data['score'];

        // Verificăm dacă utilizatorul există deja
        $stmt = $conn->prepare("SELECT * FROM quiz_leaderboard WHERE username = :username");
        $stmt->execute(['username' => $name]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user) {
            // Actualizăm scorul existent
            $stmt = $conn->prepare("UPDATE quiz_leaderboard SET score = score + :score WHERE username = :username");
            $stmt->execute(['score' => $score, 'username' => $name]);
        } else {
            // Inserăm un nou utilizator cu scorul
            $stmt = $conn->prepare("INSERT INTO quiz_leaderboard (username, score) VALUES (:username, :score)");
            $stmt->execute(['username' => $name, 'score' => $score]);
        }
        echo json_encode(['message' => 'Scor actualizat!']);
    } else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        // Preluăm top 5 scoruri
        $stmt = $conn->query("SELECT * FROM quiz_leaderboard ORDER BY score DESC LIMIT 5");
        $leaderboard = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($leaderboard);
    }
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
