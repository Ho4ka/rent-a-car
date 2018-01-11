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
        { val: 0, text: 'Smart ForTwo', img: '<img id="car" src="./images/for-two.jpg" />', marka: "Smart ForTwo" },
        { val: 1, text: 'Smart ForFour', img: '<img id="car" src="./images/for-four.png" />', marka: "Smart ForFour" },
        { val: 2, text: 'Toyota Aygo', img: '<img id="car" src="./images/aygo.jpg" />', marka: "Toyota Aygo" },
        { val: 3, text: 'Peugeot 107', img: '<img id="car" src="./images/107.jpg" />', marka: 'Peugeot 107' },
        { val: 4, text: 'Nissan Micra', img: '<img id="car" src="./images/micra.jpg" />', marka: 'Nissan Micra' },
        { val: 5, text: 'Volkswagen Up', img: '<img id="car" src="./images/up.jpg" />', marka: 'Volkswagen Up' },
        { val: 6, text: 'Citroen C1', img: '<img id="car" src="./images/citroen.png" />', marka: 'Citroen C1' },
        { val: 7, text: 'Peugeot 207', img: '<img id="car" src="./images/207.jpg" />', marka: 'Peugeot 207' },
        { val: 8, text: 'Citroen C3', img: '<img id="car" src="./images/c3.png" />', marka: 'Citroen C3' },
        { val: 9, text: 'Nissan Leaf', img: '<img id="car" src="./images/leaf.jpg" />', marka: 'Nissan Leaf' },
        { val: 10, text: 'Opel Corsa', img: '<img id="car" src="./images/corsa.png" />', marka: 'Opel Corsa' },
        { val: 11, text: 'Ford Fiesta', img: '<img id="car" src="./images/fiesta.png" />', marka: 'Ford Fiesta' },
        { val: 12, text: 'Seat Ibiza', img: '<img id="car" src="./images/ibiza.png" />', marka: 'Seat Ibiza' },
        { val: 13, text: 'Toyota Yaris 207', img: '<img id="car" src="./images/yaris.png" />', marka: 'Toyota Yaris 207' },
        { val: 14, text: 'Skoda Fabia', img: '<img id="car" src="./images/fabia.jpg" />', marka: 'Skoda Fabia' },
        { val: 15, text: 'Skoda Fabia Universal', img: '<img id="car" src="./images/fabia2.jpg" />', marka: 'Skoda Fabia Universal' },
        { val: 16, text: 'Seat Ibiza Universal', img: '<img id="car" src="./images/ibiza2.jpg" />', marka: 'Seat Ibiza Universal' },
        { val: 17, text: 'Smart Electric', img: '<img id="car" src="./images/smart_electric.png" />', marka: 'Smart Electric' },
        { val: 18, text: 'Volkswagen Up Elecric', img: '<img id="car" src="./images/electric-up.png" />', marka: 'Volkswagen Up Elecric' }
    ];

    const sel = $('<select>').appendTo('.select-car');
    $(sel).addClass('select');
    $(sel).append($('<option>').attr('value', 'Оберіть авто').text('Оберіть авто').attr('selected', 'selected').attr('disabled', 'disabled'));
    $(cars).each(function() {
        sel.append($("<option>").attr('value', this.val).text(this.text));
    });

    $('select').on("change", function() {
        var val = $(this).val();
        var marka = cars[val].marka;
        $('.car-price').remove();
        var carPrice = $('<p>').appendTo('.booking-car-preview').addClass('car-price');




        $('.booking-car-preview > img').remove();
        // $('.car-price').val().price.remove();
        $('.booking-car-preview').prepend(cars[val].img);
        $('.car-price').text(cars[val].marka);

    });


});