<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée.']);
    exit();
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Données invalides.']);
    exit();
}

$firstname = strip_tags(trim($data['firstname'] ?? ''));
$lastname = strip_tags(trim($data['lastname'] ?? ''));
$email = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone = strip_tags(trim($data['phone'] ?? ''));
$date = strip_tags(trim($data['date'] ?? ''));
$time = strip_tags(trim($data['time'] ?? ''));
$message = strip_tags(trim($data['message'] ?? ''));

if (empty($firstname) || empty($lastname) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Veuillez remplir tous les champs obligatoires correctement.']);
    exit();
}

// Comme taxi-em-azize : From domaine + Return-Path + -f pour la délivrabilité
$to_email = 'abdelaziz.e.perso@gmail.com';
$from_email = 'contact@najatkobi-therapie.ma'; // adresse configurée sur Hostinger

$subject = "Nouveau message de contact - $firstname $lastname";
$subject = "=?UTF-8?B?" . base64_encode($subject) . "?=";

$email_content = "Nom: $firstname $lastname\n";
$email_content .= "Email: $email\n";
$email_content .= "Téléphone: " . ($phone ?: 'Non fourni') . "\n";
$email_content .= "Date souhaitée: " . ($date ?: 'Non fournie') . "\n";
$email_content .= "Heure souhaitée: " . ($time ?: 'Non fournie') . "\n\n";
$email_content .= "Message:\n" . $message . "\n";

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type:text/plain;charset=UTF-8\r\n";
$headers .= "From: Najat Kobi Site <$from_email>\r\n";
$headers .= "Reply-To: $firstname $lastname <$email>\r\n";
$headers .= "Return-Path: $from_email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// -f from_email (comme taxi) pour que le serveur utilise l'expéditeur du domaine
$mail_success = @mail($to_email, $subject, $email_content, $headers, "-f " . $from_email);

if ($mail_success) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Merci ! Votre message a été envoyé.',
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Oups ! Quelque chose a mal tourné. Veuillez réessayer ou nous contacter par téléphone.',
    ]);
}
?>
