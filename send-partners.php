<?php

        $to = 'm.domaretsky@gmail.com, egc.rental@gmail.com'; 
        $subject = 'Партнерам'; 
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                    <p> Марка: '.$_POST['marka'].'</p>  
                        <p> Рік: '.$_POST['year'].'</p>
                        <p>Пробіг: '.$_POST['run'].'</p>  
                        <p> Мотор: '.$_POST['engine'].'</p>  
                        <p> Коробка передач: '.$_POST['transmission'].'</p>  
                        <p>Стан: '.$_POST['carCondition'].'</p>  
                        <p>  Комплектація: '.$_POST['completeSet'].'</p>      
                        <p> ФІО: '.$_POST['fio'].'</p>  
                        <p>Телефон: '.$_POST['phone'].'</p>  
                        <p> Емеіл: '.$_POST['email'].'</p>       
                       
                                        
                    </body>
                </html>'; 
        $headers  = 'Content-type: text/html; charset=utf-8' . "\n"; 
        $headers .= 'From: Отправитель <karina.nechyporenko@gmail.com>' . "\n";
        $res=mail($to, $subject, $message, $headers); 

?>