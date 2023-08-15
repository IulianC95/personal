<?php
include 'dbconnect.php'; // Include conexiunea la baza de date

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['pswd'];

    // Verificarea datelor cu baza de date
    $sql = "SELECT id, password FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    if ($user && password_verify($password, $user['password'])) {
        echo "Autentificare cu succes!";
    } else {
        echo "Eroare la autentificare.";
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Metodă nepermisă!";
}
?>
