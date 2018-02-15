$("#partners-form").submit(function() { //устанавливаем событие отправки для формы с id=form
    var form_data = $(this).serialize(); //собераем все данные из формы
    $.ajax({
        type: "POST", //Метод отправки
        url: "send-partners.php", //путь до php фаила отправителя
        data: form_data,
        // error: function() {
        //     alert('Не надіслано!!!!!!!')
        // },
        success: function() {
            //код в этом блоке выполняется при успешной отправке сообщения
            alert("Ваше повідомлення надіслано!");
            location.reload();
        }

    });
    return false;
});