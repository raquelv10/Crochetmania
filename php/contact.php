<?php

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
//Load Composer's autoloader
require '../vendor/autoload.php';
//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

$body = "<h4>Nombre: " . $nombre . "</h4>" . "<h4>Email: " . $email . "</h4>" . "<h4>Mensaje: " . $mensaje . "</h4>";

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
  $mail->setFrom('raquelvalleinformatica', 'Formulario de contacto');
  $mail->addAddress('raquelvalleinformatica@gmail.com');
  $mail->Subject = 'Formulario de contacto';
  $mail->MsgHTML($body);
  $mail->send();
  echo 'El mensaje ha sido enviado';
} catch (Exception $e) {
  echo "Ha ocurrido un error al enviar el mensaje. Mailer Error: {$mail->ErrorInfo}";
}


