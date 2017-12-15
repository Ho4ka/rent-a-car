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