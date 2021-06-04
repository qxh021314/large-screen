var subjectId = '1398863114762678273'

timing();
let count = 1

// 定时
function timing() {
    window.$http({
        url: `/api/match/stage/listAll?subjectId=${subjectId}`
    }, function (res) {
        count = res.list.length
        for (let i = 0; i < res.list.length; i++) {
            listForWeb(res.list[i].id, i)
        }
    });
}

function listForWeb(stageId, j) {
    window.$http({
        url: `/api/match/result/listForWeb?stageId=${stageId}&subjectId=${subjectId}`
    }, function (res) {
        let html = '';
        let reslist = res.list;
        for (let i = 0; i < reslist.length; i++) {
            html += createHtml(reslist[i].title, reslist[i].resultList)
        }
        html = '<div class="swiper-slide ss-c ss-c-' + j + '">' + html + '</div>';
        window.$swiper.appendSlide(html)
    })
}

function createChildHtml(ateamName, bteamName, ascore, bscore) {
    return ` <div class="ss-c_flex">
                    <div class="ss-c_flex1 ss-c_name">${ateamName}</div>
                    <div class="ss-c_flex1 ss-c_score">
                        <div class="ss-c_score_pre">${ascore == '-100' ? '' : ascore}</div>
                        <div class="ss-c_score_aft">${bscore == '-100' ? '' : bscore}</div>
                    </div>
                    <div class="ss-c_flex1 ss-c_name">${bteamName}</div>
                </div>
`
}

function createHtml(title, list) {
    console.log(title)
    let childNodeHtml = ''
    for (let i = 0; i < list.length; i++) {
        childNodeHtml += createChildHtml(list[i].ateamName, list[i].bteamName, list[i].ascore, list[i].bscore)
    }
    return `<div class="ss-c_card">
               <div class="ss-title">${title}</div>
               ${childNodeHtml}
             </div>
            `
}

setInterval(function () {
    UpdateTiming()
}, 90000)

function UpdateTiming() {
    window.$http({
        url: `/api/match/stage/listAll?subjectId=${subjectId}`
    }, function (res) {
        for (let i = 0; i < res.list.length; i++) {
            UpdateListForWeb(res.list[i].id, i, res.list.length)
        }
    });
}

function UpdateListForWeb(stageId, j, length) {
    var ssbEls = window.$swiper.el.querySelectorAll('.ss-c-' + j)
    window.$http({
        url: `/api/match/result/listForWeb?stageId=${stageId}&subjectId=${subjectId}`
    }, function (res) {
        let html = '';
        let reslist = res.list;
        for (let i = 0; i < reslist.length; i++) {
            html += createHtml(reslist[i].title, reslist[i].resultList)
        }
        html = '<div class="swiper-slide ss-c ss-c-' + j + '">' + html + '</div>';
        if (count < length && count + 1 === length) {
            count += 1;
            window.$swiper.appendSlide(html)
        } else {
            for (var i = 0; i < ssbEls.length; i++) {
                ssbEls[i].innerHTML = html
            }
        }
    })
}



