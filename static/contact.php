<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: Content-Type");
	require_once('./mail/class.phpmailer.php');
		
	if(!isset($_POST['email'])) die("Forbidden.");

	$subject = 'Cotización solicitada por '.$_POST['email'];
	$messageText =	'Nombre: '.$_POST['name'].'<br>'.
            'Telefono: '.$_POST['phone'].'<br>'.
            'Correo: <a href="mailto:'.$_POST['email'].'">'.$_POST['email'].'</a><br>'.
            'Mensaje: '.$_POST['comments'].'<br>'.
			'Cantidad: '.$_POST['amount'].'<br>'.
			'Altura: '.$_POST['height'].'<br>'.
            'Anchura: '.$_POST['width'].'<br>'.
            'Uso: '.$_POST['usage'].'<br>'.
			'Celosía: '.$_POST['lattice'].'<br>'.
			'Material: '.$_POST['material'].'<br>'.
			'Pintura: '.$_POST['style'].'<br>'.
            'Espesor: '.$_POST['thickness'].'<br>';
            
    $attachments[] = getFile('file');
            
    //mail('irvingedc@gmail.com', $subject, $messageText);
    
    sendMail($messageText, $subject, $attachments);
    
    echo "success";

    function sendMail($body, $title, $attachments){
        
		error_log("\n\n\n\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SENDING MAIL >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
		error_log("title:".$title);
		error_log("body:".$body);
		
		$mail = new PHPMailer();
		$mail->CharSet="UTF-8";
		if(count($attachments))
    	foreach($attachments as $att){
    		$mail->AddAttachment($att['file'], $att['name']);
    	}
	    
		$mail->AddReplyTo("diseno@habitus.com.mx","Diseno Habitus");
		$mail->SetFrom('diseno@habitus.com.mx', "Diseno Habitus");
		$mail->AddBCC("irvingedc@gmail.com" , "Irving Diaz");
		//$mail->AddAddress("diseno@habitus.com.mx", "Diseno Habitus");
		$mail->Subject    = $title;
		$mail->AltBody    = "To view the message properly, please use an HTML compatible email viewer.";
		$mail->MsgHTML($body);                                           
		$mail->Send();
    }
    
    function getFile($name){
    	$filename = $_FILES[$name]['name'];
    	if (!empty($filename)) {
    		$ext = pathinfo($filename, PATHINFO_EXTENSION);
    		$file = array(
    			"file" => $_FILES[$name]['tmp_name'],
    			'name' => $name.'.'.$ext
    		);
    		return $file;
    	}
    	return null;
    }
    
?>