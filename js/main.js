var swiper = new Swiper('.swiper-container', {

    autoplay: {
        delay: 7000,
    },
    speed: 1800,
    effect: "fade",
    slidesPerView: 1,

    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$(document).ready(function() {
    $(function() {
        var dateFormat = "mm/dd/yy",
            from = $("#from")
            .datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 1
            })
            .on("change", function() {
                to.datepicker("option", "minDate", getDate(this));
            }),
            to = $("#to").datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 1
            })
            .on("change", function() {
                from.datepicker("option", "maxDate", getDate(this));
            });

        function getDate(element) {
            var date;
            try {
                date = $.datepicker.parseDate(dateFormat, element.value);
            } catch (error) {
                date = null;
            }

            return date;
        }
    });

    var cars = [
        { val: 'Smart ForTwo', text: 'Smart ForTwo', img: '<img id="car" src="./images/for-two.jpg" />', marka: "0" },
        { val: 'Smart ForFour', text: 'Smart ForFour', img: '<img id="car" src="./images/for-four.png" />', marka: "1" },
        { val: 'Toyota Aygo', text: 'Toyota Aygo', img: '<img id="car" src="./images/aygo.jpg" />', marka: "2" },
        { val: 'Peugeot 107', text: 'Peugeot 107', img: '<img id="car" src="./images/107.jpg" />', marka: '3' },
        { val: 'Nissan Micra', text: 'Nissan Micra', img: '<img id="car" src="./images/micra.jpg" />', marka: '4' },
        { val: 'Volkswagen Up', text: 'Volkswagen Up', img: '<img id="car" src="./images/up.jpg" />', marka: '5' },
        { val: 'Citroen C1', text: 'Citroen C1', img: '<img id="car" src="./images/citroen.png" />', marka: '6' },
        { val: 'Peugeot 207', text: 'Peugeot 207', img: '<img id="car" src="./images/207.jpg" />', marka: '7' },
        { val: 'Citroen C3', text: 'Citroen C3', img: '<img id="car" src="./images/c3.png" />', marka: '8' },
        { val: 'Opel Corsa', text: 'Opel Corsa', img: '<img id="car" src="./images/corsa.png" />', marka: '9' },
        { val: 'Ford Fiesta', text: 'Ford Fiesta', img: '<img id="car" src="./images/fiesta.png" />', marka: '10' },
        { val: 'Seat Ibiza', text: 'Seat Ibiza', img: '<img id="car" src="./images/ibiza.png" />', marka: '11' },
        { val: 'Toyota Yaris 207', text: 'Toyota Yaris 207', img: '<img id="car" src="./images/yaris.png" />', marka: '12' },
        { val: 'Skoda Fabia', text: 'Skoda Fabia', img: '<img id="car" src="./images/fabia.jpg" />', marka: '13' },
        { val: 'Skoda Fabia Universal', text: 'Skoda Fabia Universal', img: '<img id="car" src="./images/fabia2.jpg" />', marka: '14' },
        { val: 'Seat Ibiza Universal', text: 'Seat Ibiza Universal', img: '<img id="car" src="./images/ibiza2.jpg" />', marka: '15' },
        { val: 'Smart Electric', text: 'Smart Electric', img: '<img id="car" src="./images/smart_electric.png" />', marka: '16' },
        { val: 'Volkswagen Up Elecric', text: 'Volkswagen Up Elecric', img: '<img id="car" src="./images/electric-up.png" />', marka: '17' },
        { val: 'Nissan Leaf', text: 'Nissan Leaf', img: '<img id="car" src="./images/leaf.jpg" />', marka: '18' }
    ];

    var sel = $('<select>').appendTo('.select-car');
    $(sel).addClass('select').addClass('option');
    $(sel).attr('name', 'select-car').attr('id', 'selectCar').attr('required', true);
    $(sel).append($('<option>').attr('value', 'Оберіть авто').text('Оберіть авто').attr('selected', 'selected').attr('disabled', 'disabled'));
    $(cars).each(function() {
        sel.append($("<option>").attr('value', this.val).text(this.text).attr('data-value', this.marka));


    });

    $('#selectCar').on("change", function() {
        var val = $(this).find(":selected").data('value');
        var marka = cars[val].text;
        $('.car-price').remove();
        var carPrice = $('<p>').appendTo('.booking-car-preview').addClass('car-price');
        $('.car-price').text(marka);
        $('.booking-car-preview > img').remove();
        $('.booking-car-preview').prepend(cars[val].img);
    });





    $("#man-form").submit(function() { //устанавливаем событие отправки для формы с id=form
        var form_data = $(this).serialize(); //собераем все данные из формы
        $.ajax({
            type: "POST", //Метод отправки
            url: "send-call-order.php", //путь до php фаила отправителя
            data: form_data,
            // error: function() {
            //     alert('Не надіслано!!!!!!!')
            // },
            success: function() {
                //код в этом блоке выполняется при успешной отправке сообщения
                var vall = $('.option').val();
                vall = '';
                console.log(vall);
            }

        });
        return false;
    });


});

// '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .
$(window).on("load resize ", function() {

    var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
    $('.tbl-header').css({ 'padding-right': scrollWidth });
}).resize();



$("#submit").click(function() {
    var empty = $(this).parent().find("input").filter(function() {
        return this.value === "";
    });
    if (empty.length) {
        btn.onclick = function() {
            modal.style.display = "block";
        };

    }
});