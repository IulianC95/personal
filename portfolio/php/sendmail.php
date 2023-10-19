<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $form_type = $_POST["form_type"];
    $to = "iulian.cuculici@meta-tailor.com";
    $subject = "";
    $message = "";
    $headers = "Content-Type: text/plain; charset=utf-8\r\n";

    switch ($form_type) {
        case "yes-form":
        case "yes-form-lg":
            $name = $_POST["name"];
            $email = $_POST["email"];
            $projectDetails = $_POST["project-details"];
            $budget = $_POST["budget"];
            $timeReady = $_POST["time-ready"];
            $headers .= "From: $email\r\n";
            $subject = "New Project Inquiry from $name";
            $message = "Name: $name\nEmail: $email\nProject Details: $projectDetails\nBudget: $budget\nTime to be Ready: $timeReady";
            break;

        case "no-form":
        case "no-form-lg":
            $name = $_POST["name-no"];
            $email = $_POST["email-no"];
            $messageText = $_POST["message-no"];
            $headers .= "From: $email\r\n";
            $subject = "Feedback from $name";
            $message = "Name: $name\nEmail: $email\nMessage: $messageText";
            break;

        default:
            echo "Form type not recognized.";
            exit();
    }

    if (mail($to, $subject, $message, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Error sending the message.";
    }
}
?>
