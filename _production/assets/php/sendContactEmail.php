<?php

require_once('class.phpmailer.php');

$config = include('config.php');

$name = $_POST['name'];

$email = $_POST['email'];

$phoneNumber = $_POST['phoneNumber'];

$whatTheyNeed = $_POST['whatTheyNeed'];

$content = "<strong>Name: </strong>" . $name . "<p/><strong>email: </strong>"  .$email . "<p/><strong>Phone Number: </strong>" . $phoneNumber . "<p>&nbsp;</p>" . $whatTheyNeed;

//$toAddress = "info@1758designs.com";
//$toName = "1758 Designs";

$toAddress = "info@1758designs.com";
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
//$mail->Host       = "smtp.1and1.com"; // SMTP server
//$mail->SMTPDebug  = 2;                    // enables SMTP debug information (for testing)
                                            // 1 = errors and messages
                                            // 2 = messages only
$mail->SMTPAuth   = true;                   // enable SMTP authentication
$mail->Host       = $config['host'];  // sets the SMTP server
$mail->Port       = $config['port'];                    // set the SMTP port for the GMAIL server
$mail->Username   = $config['user'];  // SMTP account username
$mail->Password   = $config['password'];        // SMTP account password


$mail->SetFrom("interestForm@1758designs.com", "Intrest form");

$mail->AddReplyTo($email, $name);

$mail->Subject    = "Interested in Service - " . $name;

//$mail->AltBody    = $content; // optional, comment out and test

$mail->MsgHTML($content);

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

