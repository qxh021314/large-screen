window.onload = function () {
    new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 1000
        },
        breakpoints: {
            320: {
                slidesPerView: 2
            },
            640: {
                slidesPerView: 3
            }
        }
    })
}