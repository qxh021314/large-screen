window.$http({
    url: '/api/match/venue/queryVenue'
}, function (res) {
    var sEl = window.$swiper.el
    var ssbEls = sEl.querySelectorAll('.ss-b')
    var dataArr = [
        {
            title: '场馆环境',
            row: [
                [
                    {icon: 'cnwd', name: '温度', field: 'temperature'},
                    {icon: 'cnsd', name: '湿度', field: 'humidity'}
                ],
                [
                    {icon: 'yqhl', name: '氧含量', field: 'oxygen'},
                    {icon: 'pm25', name: 'pm2.5', field: 'particulateMatter'}
                ]
            ]
        },
        {
            title: '园区能效',
            row: [
                [
                    {icon: 'sdyl', name: '市电', field: 'utilityPower'},
                    {icon: 'gffd', name: '光伏', field: 'photovoltaicPowerGeneration'}
                ],
                [
                    {icon: 'co2', name: 'CO2', field: 'carbonEmission'},
                    {icon: 'jybm', name: '节约标煤', field: 'emissionReduction'}
                ]
            ]
        }
    ]

    // Get `venue` From Response
    var venue = (res.code === 0) ? (res.venue || {}) : {}

    var ssbChildren = ''
    for (var i = 0; i < dataArr.length; i++) {
        var box = dataArr[i]
        var str = '<div class="ss-b--box">'
        str += '<div class="ss-title ss-b--title">' + box.title + '</div>'
        str += '<div class="ss-b--bd">'

        var row = ''
        for (var j = 0; j < box.row.length; j++) {
            row += '<div class="ss-b--row">'
            var cols = box.row[j]
            var col = ''
            for (var k = 0; k < cols.length; k++) {
                var item = cols[k]
                var value = venue[item.field]
                var unit = value.replace(/[0-9.]/g, '')
                col += '<div class="ss-b--col">'
                col += '<div class="ss-b--icon icon-' + item.icon + '"></div>'
                col += '<div class="pd-l-5">'
                col += '<div class="ss-b--val">' + parseFloat(value)
                col += '</div>'
                col += '<div class="ss-b--name">' + item.name
                col += '<span class="ss-b--unit">(' + unit + ')</span>'
                col += '</div>'
                col += '</div>'
                col += '</div>' // col
            }
            row += col
            row += '</div>' // row
        }
        str += row
        str += '</div>' // bd
        str += '</div>' // box
        ssbChildren += str
    }

    // Append To Slide
    for (var i = 0; i < ssbEls.length; i++) {
        ssbEls[i].innerHTML = ssbChildren
    }
    console.log(res)
})

console.log('logic:: ss-b')
