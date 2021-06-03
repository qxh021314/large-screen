var API_URL = 'https://match.anhuity.com.cn'

window.$http = function (opts, callback) {
    window.nanoajax.ajax({
        url: API_URL + opts.url,
        method: opts.method || 'GET',
        headers: opts.headers || {'Content-Type': 'application/json'},
        body: window.Tools.stringify(opts.body)
    }, function (status, response) {
        try {
            var res = response
            if (typeof res === 'string') res = JSON.parse(response)
            if (status === 200) {
                callback(res)
            } else {
                throw Error(status)
            }
        } catch (e) {
            console.error(e)
        }
    })
}


window.onload = function () {
    var $swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 0,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 1000,
            disableOnInteraction: true
        }
    })
    window.$swiper = $swiper
}