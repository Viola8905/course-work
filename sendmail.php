<?php 

set_exception_handler(function ($exception) {
	echo json_encode([
		"status" => "error",
		"message" => "sorry, we got an unexpected error",
		"reason" => var_export($exception, true)
	]);
});

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$address = 'appliedmathuzhnu@gmail.com';
$name = $_POST['name2'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$question = $_POST['question'];
$body = '';

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = SMTP::DEBUG_SERVER;
$mail->Host = 'smtp.mailtrap.io';
$mail->SMTPAuth = true;
$mail->Port = 2525;
$mail->Username = '4ed6beb94ee9d4';
$mail->Password = 'a4f5773b98dd08';

// Math data -> will work on server
// $mail->SMTPSecure = 'tls';
// $mail->Host = 'smtp.gmail.com';
// $mail->Username = 'appliedmathuzhnu@gmail.com';
// $mail->Password = 's5fWjRus497jU7x';
// $mail->Port = 587;

$mail->From = $address;

$mail->addAddress($email, $name);

$mail->isHTML(true);
$mail->Subject = 'Client question';

// Додаткова валідація
echo($name);

if(trim(!empty($name))){
	$body.='<span>Name:</span> ' . '<strong> ' . $name . ' </strong><br/>';
}
if(trim(!empty($email))){
	$body.='<span>E-mail:</span> ' . '<strong> ' . $email . ' </strong><br/> ';
}
if(trim(!empty($surname))){
	$body.='<span>Surname:</span> ' . '<strong> ' . $surname . ' </strong><br/> ';
}
if(trim(!empty($question))){
	$body.='<span>Question:</span> ' . '<italic> "' . $question . '" </italic><br/> ';
}

$mail->Body = '<div>'. $body . '</div>';

$message = '';

try {
	$mail->send();
	$message = 'Well done! All passed!';
} catch (Exception $e) {
	$message = "Bad: " . $mail->ErrorInfo;
}

echo json_encode([
	'status' => 'success',
	'message' => $message
]);
