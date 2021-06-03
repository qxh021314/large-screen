var subjectId = '1397115087446228993'

window.$http({
    url: `/platform-api/match/stage/listAll?subjectId=${subjectId}`
}, function (res) {
    for (let i = 0; i < res.list.length; i++) {
        listForWeb(res.list[i].id)
    }
});

function listForWeb(stageId, j) {
    window.$http({
        url: `/platform-api/match/result/listForWeb?stageId=${stageId}&subjectId=${subjectId}`
    }, function (res) {
        let html = '';
        let reslist = res.list
        console.log(reslist)
        for (let i = 0; i < reslist.length; i++) {
            html += createHtml(reslist[i].title, reslist[i].resultList)
        }
        html = `<div class="swiper-slide ss-c">${html}</div>`
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
    function childNode(list) {
        let childNodeHtml = ''
        for (let i = 0; i < list.length; i++) {
            childNodeHtml += createChildHtml(list[i].ateamName, list[i].bteamName, list[i].ascore, list[i].bscore)
        }
        return childNodeHtml
    }

    return `<div class="ss-c_card">
               <div class="ss-title">${title}</div>
               ${childNode(list)}
             </div>
            `
}



