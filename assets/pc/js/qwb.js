var teamArrList = []
console.log(window.screen)
getResultList()
setTimeout(function () {
    getResultList()
}, 600 * 1000)

// 表格数据
function getResultList() {
    window.$http({
        url: `/api/match/result/getSignature?subjectId=${subjectId}`
    }, function (res) {
        if (res.stageName) {
            tts(res.matchResult, res.stageName)
        } else if (res.teamList) {
            dealTable(res.matchResult, res.teamList)
        }
    });
}

// 表格数据处理
function dealTable(matchResult, teamList) {
    teamList.forEach((item, index) => {
        item.matchList = []
        item.teamList.forEach((itemchild, indexchild) => {
            console.log(itemchild);
            let obj = {
                name: itemchild.teamName,
                aTeamName: '',
                ranking: itemchild.ranking || "",
                bTeamName: '',
                matchId: '',
                id: ''
            }
            let objList = []
            let objChildList = []
            objChildList.push(JSON.parse(JSON.stringify(obj)))
            if (matchResult && matchResult.length > 0) {
                matchResult.forEach((filterItem, filterIndex) => {
                    if (itemchild.id == filterItem.ateamId) {
                        obj.name = filterItem.ascore + '-' + filterItem.bscore
                        obj.id = filterItem.id
                        obj.matchId = filterItem.matchId
                        obj.ateamName = filterItem.ateamName
                        obj.bteamName = filterItem.bteamName
                        if (filterItem.ascore == '-100' || filterItem.bscore == '-100') {
                            obj.name = ''
                        }
                        objChildList.push(JSON.parse(JSON.stringify(obj)))
                    }
                    if (itemchild.id == filterItem.bteamId) {
                        obj.name = filterItem.bscore + '-' + filterItem.ascore
                        obj.id = filterItem.id
                        obj.matchId = filterItem.matchId
                        obj.ateamName = filterItem.ateamName
                        obj.bteamName = filterItem.bteamName
                        if (filterItem.ascore == '-100' || filterItem.bscore == '-100') {
                            obj.name = ''
                        }
                        objChildList.push(JSON.parse(JSON.stringify(obj)))
                    }
                })
            } else {
                let leng = item.teamList.length - 1
                for (var i = 0; i < leng; i++) {
                    objChildList.push({
                        name: ''
                    })
                }
            }
            objChildList.splice(indexchild + 1, 0, {
                name: ''
            });
            objList.push(objChildList)
            item.matchList.push(...objList)
        })
        let listTeam = [{}]
        listTeam.push(...item.teamList)
        item.teamList = listTeam
    })
    teamArrList = teamList
    funData()
}

// 数据筛选
function funData() {
    let qwb = document.querySelector('.qwb-bd')
    let qwbHtml = ''
    teamArrList.forEach((item, index) => {
        qwbHtml += qwbPre(item)
        qwb.innerHTML = qwbHtml
    })
}

// 表格渲染
function qwbPre(item) {
    let thHtml = ''
    item.teamList.forEach((itemChild, indexChild) => {
        thHtml += `<th>${itemChild.teamName || ''}</th>`
    })

    let trHtml = ''
    item.matchList.forEach((itemChild, indexChild) => {
        let tdHtml = ''
        itemChild.forEach((itemChild1, indexChild1) => {
            tdHtml += `<td>${itemChild1.name || ''}</td>`
        })
        trHtml += `<tr>${tdHtml}</tr>`
    })

    return `<div class="qwb-pre qwb-panel content-border">
                    <div class="qwb-pre_title">${item.groupName}</div>
                    <table>
                    <thead>
                    <tr class="qwb-pre_tr">
                        ${thHtml}
                    </tr>
                    </thead>
                    <tbody>
                   ${trHtml}
                    </tbody>
                    <tbody>
                    </tbody>
                </table>
</div>`
}

// 淘汰赛/半决赛
function tts(metchResult, stageName) {
    let tts = document.querySelector('.qwb-bd')
    tts.setAttribute('style', 'justify-content: center;')
    tts.classList.add('content-border')
    tts.innerHTML = `<div class="qwb-bd_flex"></div>`
    let ttsbd = document.querySelector('.qwb-bd_flex')
    let ttsHtml = '';
    metchResult.forEach((item, index) => {
        ttsHtml += ttsPre(item)
        ttsbd.innerHTML = ttsHtml
    })
}

// 淘汰赛渲染
function ttsPre(matchResultObj) {
    return `<div class="qwb-aft qwb-panel">
                        <div class="qwb-aft_left">${matchResultObj.ateamName}: ${matchResultObj.ascore == '-100' ? 0 : matchResultObj.ascore}</div>
                        <div class="qwb-aft_vs">
                            <img src="./assets/images/vs.png" alt="">
                        </div>
                        <div class="qwb-aft_right">${matchResultObj.bscore == '-100' ? 0 : matchResultObj.bscore}: ${matchResultObj.bteamName}</div>
                    </div>
               `
}
