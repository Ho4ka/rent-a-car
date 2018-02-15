<?php
    print_r($to);

        $to = 'm.domaretsky@gmail.com, egc.rental@gmail.com'; 
        $subject = 'Запит на машину'; 
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                    <p> Машина: '.$_POST['select-car'].'</p>  
                        <p> Місто: '.$_POST['selectCity'].'</p>
                        <p>Місце: '.$_POST['place'].'</p>  
                        <p>З: '.$_POST['from'].'</p>  
                        <p>Час отримання: '.$_POST['timeOfRecive'].'</p>  
                        <p>по: '.$_POST['to'].'</p>  
                        <p>Час повернення: '.$_POST['timeOfReturn'].'</p>      
                        <p> Імя: '.$_POST['name'].'</p>  
                        <p>З: '.$_POST['dateFrom'].'</p>  
                        <p> По: '.$_POST['dateTo'].'</p>       
                        <p>Коментар: '.$_POST['commentar'].'</p>      
                                        
                    </body>
                </html>'; 
        $headers  = 'Content-type: text/html; charset=utf-8' . "\n"; 
        $headers .= 'From: Отправитель <karina.nechyporenko@gmail.com>' . "\n";
        $res=mail($to, $subject, $message, $headers); 
        print_r($res);

?>