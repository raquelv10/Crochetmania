<?php

//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require '../vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$body = "Nombre: " . $nombre . "\n\n" . "Email: " . $email . "\n\n" . "Mensaje: " . $mensaje;

try {
  $mail = new PHPMailer;
  $mail->isSMTP();
  $mail->IsHTML(true);
  $mail->SMTPDebug = 0;
  $mail->CharSet = 'UTF-8';
  $mail->Host = 'smtp.gmail.com';
  $mail->Port = 465;
  $mail->SMTPSecure = 'ssl';
  $mail->SMTPAuth = true;
  $mail->Username = 'cifovioletaweb2122';
  $mail->Password = 'cifovioletaweb';
  $mail->setFrom('cifovioletaweb2122', 'Formulario de contacto');
  $mail->addAddress('cifovioletaweb2122@gmail.com');
  $mail->Subject = 'Formulario de contacto';
  $mail->MsgHTML($body);
  $mail->send();
  echo 'El mensaje ha sido enviado';
} catch (Exception $e) {
  echo "Ha ocurrido un error al enviar el mensaje. Mailer Error: {$mail->ErrorInfo}";
}




