<?php
    $theme="Новая заявка";
    error_reporting( E_ERROR );   //Отключение предупреждений и нотайсов (warning и notice) на сайте
    // создание переменных из полей формы		
    if (isset($_POST['phone'])) {$phone = $_POST['phone'];		if ($phone == '')	{unset($phone);}}
    //стирание треугольных скобок из полей формы
    // адрес почты куда придет письмо
    $address="scarecrowsssssss@gmail.com";
    //$address2="bayby_home@mail.ru ";
    // текст письма 
    $note_text="Тема : $theme \r\Телефон : $phone ";
    
    if (isset($phone)) {
    mail($address,$theme,$note_text,"Content-type:text/plain; windows-1251"); 
    mail($address2,$theme,$note_text,"Content-type:text/plain; windows-1251");
    }
?>
