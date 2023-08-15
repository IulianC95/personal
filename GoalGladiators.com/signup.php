<?php
include 'dbconnect.php'; // Include conexiunea la baza de date

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['txt'];
    $email = $_POST['email'];
    $password = $_POST['pswd'];

    // Hashing password
    $passwordHash = password_hash($password, PASSWORD_DEFAULT);

    // Adăugarea utilizatorului în baza de date
    $sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $username, $email, $passwordHash);

    if ($stmt->execute()) {
        echo "Înregistrare cu succes pentru utilizatorul: " . $username;
    } else {
        echo "Eroare: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Metodă nepermisă!";
}
?>
