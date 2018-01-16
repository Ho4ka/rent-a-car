<?php
if (isset($_POST['dateTo'])&&$_POST['dateTo']!="") { 
        $to = 'm.domaretsky@gmail.com, egc.rental@gmail.com'; 
        $subject = 'Запит на машину'; 
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                    <p>Телефон: '.$_POST['selectCar'].'</p>  
                        <p>Імя: '.$_POST['selectCity'].'</p>
                        <p>Телефон: '.$_POST['place'].'</p>  
                        <p>Телефон: '.$_POST['from'].'</p>  
                        <p>Телефон: '.$_POST['timeOfRecive'].'</p>  
                        <p>Телефон: '.$_POST['to'].'</p>  
                        <p>Телефон: '.$_POST['timeOfReturn'].'</p>      
                        <p>Телефон: '.$_POST['name'].'</p>  
                        <p>Телефон: '.$_POST['dateFrom'].'</p>  
                        <p>Телефон: '.$_POST['dateTo'].'</p>       
                        <p>Телефон: '.$_POST['commentar'].'</p>      
                        <p>Телефон: '.$_POST['timeOfReturn'].'</p>                   
                    </body>
                </html>'; 
        $headers  = 'Content-type: text/html; charset=utf-8' . "\n"; 
        $headers .= 'From: Отправитель <karina.nechyporenko@gmail.com>' . "\n";
        $res=mail($to, $subject, $message, $headers); 
}
?>