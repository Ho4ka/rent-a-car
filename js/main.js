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
        { val: 0, text: 'One', img: '<img id="car" src="./images/ibiza.jpg" />', price: "20$" },
        { val: 1, text: 'Two', img: '<img id="car" src="./images/aygo.jpg" />', price: "30$" },
        { val: 2, text: 'Three', img: '<img id="car" src="./images/207.jpg" />', price: "40" },
        { val: 3, text: 'four', img: '<img id="car" src="./images/for-two.jpg" />' },
        { val: 4, text: 'five', img: '<img id="car" src="./images/micra.jpg" />' }
    ];

    const sel = $('<select>').appendTo('.select-car');
    $(sel).addClass('form-control');
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