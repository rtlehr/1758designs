<?php

require_once('class.phpmailer.php');

$name = $_POST['name'];

$email = $_POST['email'];

$phoneNumber = $_POST['phoneNumber'];

$whatTheyNeed = $_POST['whatTheyNeed'];

$content = "<strong>Name: </strong>" . $name . "<p/><strong>email: </strong>"  .$email . "<p/><strong>Phone Number: </strong>" . $phoneNumber . "<p>&nbsp;</p>" . $whatTheyNeed;

//$toAddress = "info@1758designs.com";
//$toName = "1758 Designs";

$toAddress = "ross.lehr@gmail.com";
$toName = "1758 Designs";

//error_reporting(E_ALL);
//error_reporting(E_STRICT);

date_default_timezone_set('America/Toronto');

//include("class.smtp.php"); // optional, gets called from within class.phpmailer.php if not already loaded
  
$mail             = new PHPMailer();

//$body             = file_get_contents('contents.html');
//$body             = eregi_replace("[\]",'',$body);
//$content = "THIS IS A TEST";
  
$mail->IsSMTP(); // telling the class to use SMTP
$mail->Host       = "smtp.1and1.com"; // SMTP server
//$mail->SMTPDebug  = 2;                     // enables SMTP debug information (for testing)
                                           // 1 = errors and messages
                                           // 2 = messages only
$mail->SMTPAuth   = true;                  // enable SMTP authentication
$mail->Host       = "smtp.1and1.com"; // sets the SMTP server
$mail->Port       = 25;                    // set the SMTP port for the GMAIL server
$mail->Username   = "info@1758designs.com"; // SMTP account username
$mail->Password   = "Ba!t0ri0!es";        // SMTP account password

$mail->SetFrom($email, $name);

$mail->AddReplyTo($email, $name);

$mail->Subject    = "Interested in Service - " . $name;

//$mail->AltBody    = $content; // optional, comment out and test

$mail->MsgHTML($content);

//$email = "ross.lehr@gmail.com";
//$address = $email;

$mail->AddAddress($toAddress, $toName);

//$mail->AddAttachment("images/phpmailer.gif");      // attachment
//$mail->AddAttachment("images/phpmailer_mini.gif"); // attachment

if(!$mail->Send()) {
  echo "Mailer Error: " . $mail->ErrorInfo;
} else {
 // echo "Message sent!";
   echo json_encode(array('success' => 1));
}
  
?>

