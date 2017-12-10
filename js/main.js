var swiper = new Swiper('.swiper-container', {
    autoplay: true,
    delay: 3000,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});