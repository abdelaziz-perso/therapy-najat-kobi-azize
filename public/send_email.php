<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    $firstname = strip_tags(trim($data["firstname"]));
    $lastname = strip_tags(trim($data["lastname"]));
    $email = filter_var(trim($data["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($data["phone"]));
    $date = strip_tags(trim($data["date"]));
    $time = strip_tags(trim($data["time"]));
    $message = strip_tags(trim($data["message"]));

    // Validation
    if (empty($firstname) || empty($lastname) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["message" => "Veuillez remplir tous les champs obligatoires correctement."]);
        exit;
    }

    // Recipient email
    $recipient = "najatkobi7@gmail.com";

    // Email subject
    $subject = "Nouveau message de contact de $firstname $lastname";

    // Email content
    $email_content = "Nom: $firstname $lastname\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Téléphone: $phone\n";
    $email_content .= "Date souhaitée: $date\n";
    $email_content .= "Heure souhaitée: $time\n\n";
    $email_content .= "Message:\n$message\n";

    // Email headers
    $email_headers = "From: $firstname $lastname <$email>";

    // Send email
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo json_encode(["message" => "Merci ! Votre message a été envoyé."]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Oups ! Quelque chose a mal tourné et nous n'avons pas pu envoyer votre message."]);
    }

} else {
    http_response_code(403);
    echo json_encode(["message" => "Il y a eu un problème avec votre soumission, veuillez réessayer."]);
}
?>
