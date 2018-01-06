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

    const cars = [
        { val: 0, text: 'Smart ForTwo', img: '<img id="car" src="./images/for-two.jpg" />', price: "20$" },
        { val: 1, text: 'Smart ForFour', img: '<img id="car" src="./images/for-four.png" />', price: "30$" },
        { val: 2, text: 'Toyota Aygo', img: '<img id="car" src="./images/aygo.jpg" />', price: "40" },
        { val: 3, text: 'Peugeot 107', img: '<img id="car" src="./images/107.jpg" />' },
        { val: 4, text: 'Nissan Micra', img: '<img id="car" src="./images/micra.jpg" />' },
        { val: 5, text: 'Volkswagen Up', img: '<img id="car" src="./images/up.jpg" />' },
        { val: 6, text: 'Citroen C1', img: '<img id="car" src="./images/citroen.png" />' },
        { val: 7, text: 'Peugeot 207', img: '<img id="car" src="./images/207.jpg" />' },
        { val: 8, text: 'Citroen C3', img: '<img id="car" src="./images/c3.png" />' },
        { val: 9, text: 'Peugeot 207', img: '<img id="car" src="./images/207.jpg" />' },
        { val: 10, text: 'Opel Corsa', img: '<img id="car" src="./images/corsa.png" />' },
        { val: 11, text: 'Ford Fiesta', img: '<img id="car" src="./images/fiesta.png" />' },
        { val: 12, text: 'Seat Ibiza', img: '<img id="car" src="./images/ibiza.png" />' },
        { val: 13, text: 'Toyota Yaris 207', img: '<img id="car" src="./images/yaris.png" />' },
        { val: 14, text: 'Skoda Fabia', img: '<img id="car" src="./images/fabia.jpg" />' },
        { val: 15, text: 'Skoda Fabia Universal', img: '<img id="car" src="./images/fabia2.jpg" />' },
        { val: 16, text: 'Seat Ibiza Universal', img: '<img id="car" src="./images/ibiza2.jpg" />' },
        { val: 17, text: 'Smart Electric', img: '<img id="car" src="./images/smart_electric.png" />' },
        { val: 18, text: 'Volkswagen Up Elecric', img: '<img id="car" src="./images/electric-up.png" />' }
    ];

    const sel = $('<select>').appendTo('.select-car');
    $(sel).addClass('select');
    $(sel).append($('<option>').attr('value', 'Оберіть авто').text('Оберіть авто').attr('selected', 'selected').attr('disabled', 'disabled'));
    $(cars).each(function() {
        sel.append($("<option>").attr('value', this.val).text(this.text));
    });

    $('select').on("change", function() {
        var val = $(this).val();
        var price = cars[val].price;
        $('.car-price').remove();
        var carPrice = $('<p>').appendTo('.booking-car-preview').addClass('car-price');




        $('.booking-car-preview > img').remove();
        // $('.car-price').val().price.remove();
        $('.booking-car-preview').prepend(cars[val].img);
        $('.car-price').text(cars[val].price);

    });


});