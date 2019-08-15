<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: Content-Type");
	require_once('./mail/class.phpmailer.php');
		
	if(!isset($_POST['email'])) die("Forbidden.");

	$subject = 'Cotización solicitada por '.$_POST['email'];
	$messageText =	''.
			'Nombre: '.$_POST['first_name'].'<br>'.
			'Apellido: '.$_POST['last_name'].'<br>'.
            'Telefono: '.$_POST['phone'].'<br>'.
            'Correo: <a href="mailto:'.$_POST['email'].'">'.$_POST['email'].'</a><br>'.
            'Mensaje: '.$_POST['message'].'<br>';
            
    
    sendMail($messageText, $subject, $attachments);
    
    echo "success";

    function sendMail($body, $title, $attachments){
        
		error_log("\n\n\n\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SENDING MAIL >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
		error_log("title:".$title);
		error_log("body:".$body);
		
		$mail = new PHPMailer();
		$mail->CharSet="UTF-8";
		$mail->AddReplyTo("diseno@habitus.com.mx","Diseno Habitus");
		$mail->SetFrom('diseno@habitus.com.mx', "Diseno Habitus");
		$mail->AddBCC("irvingedc@gmail.com" , "Irving Diaz");
		$mail->AddAddress("diseno@habitus.com.mx", "Diseno Habitus");
		$mail->Subject    = $title;
		$mail->AltBody    = "To view the message properly, please use an HTML compatible email viewer.";
		$mail->MsgHTML($body);                                           
		$mail->Send();
		error_log("sent!");
    }
    
?>