<?php
// Check for empty fields
if(!empty($_POST['name'])||!empty($_POST['email'])||!empty($_POST['country'])||!empty($_POST['mobile'])
	||!empty($_POST['sourcelanguage'])||!empty($_POST['targetlanguage'])||!empty($_FILES['file'])||!empty($_POST['message']))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$country = $_POST['country'];
$mobile = $_POST['mobile'];
$sourcelanguage = $_POST['sourcelanguage'];
$targetlanguage = $_POST['targetlanguage'];
$file = $_POST['file'];
$message = $_POST['message'];
	
// Create the email and send the message
$to = 'krish.161093@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Quote Request Form:  $name";
$email_body = "Quote request from.\n\n".
"Name: $name\n\n
Email: $email_address\n\n
Country: $country\n\n
Mobile: $mobile\n\n
SourceLanguage: $sourcelanguage\n\n
TargetLanguage: $targetlanguage\n\n
Message:\n$message";
$headers = "From: krish.161093@gmail.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$file);
return true;			
?>