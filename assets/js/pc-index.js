var API_URL = 'https://match.anhuity.com.cn'
// var API_URL = 'http://localhost:8889'

// 全局变量
const subjectId = '1400094768651022338'


window.$http = function (opts, callback) {
    window.nanoajax.ajax({
        url: API_URL + opts.url,
        method: opts.method || 'GET',
        headers: opts.headers || {'Content-Type': 'application/json'},
        body: window.Tools.stringify(opts.body)
    }, function (status, response) {
        try {
            if (status === 200) {
                var res = response
                if (typeof res === 'string') res = JSON.parse(response)
                callback(res)
            } else {
                console.error(response)
            }
        } catch (e) {
            console.error(e)
        }
    })
}
