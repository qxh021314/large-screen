window.$http({
    url: '/api/match/venue/queryVenue'
}, function (res) {
    var sEl = window.$swiper.el
    var ssbEls = sEl.querySelectorAll('.ss-b')
    for (var i = 0; i < ssbEls.length ; i++) {
        ssbEls[i].innerHTML = JSON.stringify(res)
    }

    console.log(res)
})

console.log('logic:: ss-b')
