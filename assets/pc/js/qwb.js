var teamArrList = [],
    subjectId = '1398863114762678273'
let res = {
    "msg": "success",
    "code": 0,
    "matchResult": [{
        "id": "1400301193835667457",
        "stageId": "1397376860637106178",
        "matchId": "1397108034099101698",
        "groupId": "1397166607215669250",
        "ateamId": "1400280879030427649",
        "sort": null,
        "bteamId": "1400280879777013761",
        "ascore": -100,
        "bscore": -100,
        "bteamName": "团队2",
        "ateamName": "团队1",
        "aarrangeStatus": null,
        "barrangeStatus": null,
        "subjectId": null,
        "type": null,
        "ascoreList": null,
        "bscoreList": null,
        "resultList": null
    }, {
        "id": "1400301193860833282",
        "stageId": "1397376860637106178",
        "matchId": "1397108034099101698",
        "groupId": "1397166607215669250",
        "ateamId": "1400280879030427649",
        "sort": null,
        "bteamId": "1400280880536182785",
        "ascore": -100,
        "bscore": -100,
        "bteamName": "团队3",
        "ateamName": "团队1",
        "aarrangeStatus": null,
        "barrangeStatus": null,
        "subjectId": null,
        "type": null,
        "ascoreList": null,
        "bscoreList": null,
        "resultList": null
    }, {
        "id": "1400301193860833283",
        "stageId": "1397376860637106178",
        "matchId": "1397108034099101698",
        "groupId": "1397166607215669250",
        "ateamId": "1400280879030427649",
        "sort": null,
        "bteamId": "1400280881312129025",
        "ascore": 1,
        "bscore": 2,
        "bteamName": "团队4",
        "ateamName": "团队1",
        "aarrangeStatus": null,
        "barrangeStatus": null,
        "subjectId": null,
        "type": null,
        "ascoreList": null,
        "bscoreList": null,
        "resultList": null
    }, {
        "id": "1400301193860833284",
        "stageId": "1397376860637106178",
        "matchId": "1397108034099101698",
        "groupId": "1397166607215669250",
        "ateamId": "1400280879777013761",
        "sort": null,
        "bteamId": "1400280880536182785",
        "ascore": -100,
        "bscore": -100,
        "bteamName": "团队3",
        "ateamName": "团队2",
        "aarrangeStatus": null,
        "barrangeStatus": null,
        "subjectId": null,
        "type": null,
        "ascoreList": null,
        "bscoreList": null,
        "resultList": null
    }, {
        "id": "1400301193860833285",
        "stageId": "1397376860637106178",
        "matchId": "1397108034099101698",
        "groupId": "1397166607215669250",
        "ateamId": "1400280879777013761",
        "sort": null,
        "bteamId": "1400280881312129025",
        "ascore": -100,
        "bscore": -100,
        "bteamName": "团队4",
        "ateamName": "团队2",
        "aarrangeStatus": null,
        "barrangeStatus": null,
        "subjectId": null,
        "type": null,
        "ascoreList": null,
        "bscoreList": null,
        "resultList": null
    }, {
        "id": "1400301193869221890",
        "stageId": "1397376860637106178",
        "matchId": "1397108034099101698",
        "groupId": "1397166607215669250",
        "ateamId": "1400280880536182785",
        "sort": null,
        "bteamId": "1400280881312129025",
        "ascore": -100,
        "bscore": -100,
        "bteamName": "团队4",
        "ateamName": "团队3",
        "aarrangeStatus": null,
        "barrangeStatus": null,
        "subjectId": null,
        "type": null,
        "ascoreList": null,
        "bscoreList": null,
        "resultList": null
    }, {
        "id": "1400301193869221891",
        "stageId": "1397376860637106178",
        "matchId": "1397108034099101698",
        "groupId": "1400281201916338177",
        "ateamId": "1400280875784036354",
        "sort": null,
        "bteamId": "1400280876622897154",
        "ascore": -100,
        "bscore": -100,
        "bteamName": "团队6",
        "ateamName": "团队5",
        "aarrangeStatus": null,
        "barrangeStatus": null,
        "subjectId": null,
        "type": null,
        "ascoreList": null,
        "bscoreList": null,
        "resultList": null
    }, {
        "id": "1400301193877610498",
        "stageId": "1397376860637106178",
        "matchId": "1397108034099101698",
        "groupId": "1400281201916338177",
        "ateamId": "1400280875784036354",
        "sort": null,
        "bteamId": "1400280877449175041",
        "ascore": -100,
        "bscore": -100,
        "bteamName": "团队7",
        "ateamName": "团队5",
        "aarrangeStatus": null,
        "barrangeStatus": null,
        "subjectId": null,
        "type": null,
        "ascoreList": null,
        "bscoreList": null,
        "resultList": null
    }, {
        "id": "1400301193885999106",
        "stageId": "1397376860637106178",
        "matchId": "1397108034099101698",
        "groupId": "1400281201916338177",
        "ateamId": "1400280875784036354",
        "sort": null,
        "bteamId": "1400280878250287105",
        "ascore": -100,
        "bscore": -100,
        "bteamName": "团队8",
        "ateamName": "团队5",
        "aarrangeStatus": null,
        "barrangeStatus": null,
        "subjectId": null,
        "type": null,
        "ascoreList": null,
        "bscoreList": null,
        "resultList": null
    }, {
        "id": "1400301193885999107",
        "stageId": "1397376860637106178",
        "matchId": "1397108034099101698",
        "groupId": "1400281201916338177",
        "ateamId": "1400280876622897154",
        "sort": null,
        "bteamId": "1400280877449175041",
        "ascore": -100,
        "bscore": -100,
        "bteamName": "团队7",
        "ateamName": "团队6",
        "aarrangeStatus": null,
        "barrangeStatus": null,
        "subjectId": null,
        "type": null,
        "ascoreList": null,
        "bscoreList": null,
        "resultList": null
    }, {
        "id": "1400301193885999108",
        "stageId": "1397376860637106178",
        "matchId": "1397108034099101698",
        "groupId": "1400281201916338177",
        "ateamId": "1400280876622897154",
        "sort": null,
        "bteamId": "1400280878250287105",
        "ascore": -100,
        "bscore": -100,
        "bteamName": "团队8",
        "ateamName": "团队6",
        "aarrangeStatus": null,
        "barrangeStatus": null,
        "subjectId": null,
        "type": null,
        "ascoreList": null,
        "bscoreList": null,
        "resultList": null
    }, {
        "id": "1400301193885999109",
        "stageId": "1397376860637106178",
        "matchId": "1397108034099101698",
        "groupId": "1400281201916338177",
        "ateamId": "1400280877449175041",
        "sort": null,
        "bteamId": "1400280878250287105",
        "ascore": -100,
        "bscore": -100,
        "bteamName": "团队8",
        "ateamName": "团队7",
        "aarrangeStatus": null,
        "barrangeStatus": null,
        "subjectId": null,
        "type": null,
        "ascoreList": null,
        "bscoreList": null,
        "resultList": null
    }],
    "teamList": [{
        "groupId": "1397166607215669250",
        "groupName": "A组",
        "teamList": [{
            "id": "1400280881312129025",
            "openId": null,
            "matchId": null,
            "subjectId": null,
            "groupId": "1397166607215669250",
            "applyId": null,
            "teamName": "团队4",
            "shortName": null,
            "status": null,
            "createTime": null,
            "reason": null,
            "ranking": 4,
            "sort": null,
            "groupName": null,
            "athleteList": null,
            "phoneNo": null,
            "stageId": null,
            "resultId": null,
            "arrangeStatus": null,
            "racePoints": null,
            "wonTimes": null,
            "lostTimes": null
        }, {
            "id": "1400280880536182785",
            "openId": null,
            "matchId": null,
            "subjectId": null,
            "groupId": "1397166607215669250",
            "applyId": null,
            "teamName": "团队3",
            "shortName": null,
            "status": null,
            "createTime": null,
            "reason": null,
            "ranking": 1,
            "sort": null,
            "groupName": null,
            "athleteList": null,
            "phoneNo": null,
            "stageId": null,
            "resultId": null,
            "arrangeStatus": null,
            "racePoints": null,
            "wonTimes": null,
            "lostTimes": null
        }, {
            "id": "1400280879777013761",
            "openId": null,
            "matchId": null,
            "subjectId": null,
            "groupId": "1397166607215669250",
            "applyId": null,
            "teamName": "团队2",
            "shortName": null,
            "status": null,
            "createTime": null,
            "reason": null,
            "ranking": 3,
            "sort": null,
            "groupName": null,
            "athleteList": null,
            "phoneNo": null,
            "stageId": null,
            "resultId": null,
            "arrangeStatus": null,
            "racePoints": null,
            "wonTimes": null,
            "lostTimes": null
        }, {
            "id": "1400280879030427649",
            "openId": null,
            "matchId": null,
            "subjectId": null,
            "groupId": "1397166607215669250",
            "applyId": null,
            "teamName": "团队1",
            "shortName": null,
            "status": null,
            "createTime": null,
            "reason": null,
            "ranking": 2,
            "sort": null,
            "groupName": null,
            "athleteList": null,
            "phoneNo": null,
            "stageId": null,
            "resultId": null,
            "arrangeStatus": null,
            "racePoints": null,
            "wonTimes": null,
            "lostTimes": null
        }]
    }, {
        "groupId": "1400281201916338177",
        "groupName": "B组",
        "teamList": [{
            "id": "1400280875784036354",
            "openId": null,
            "matchId": null,
            "subjectId": null,
            "groupId": "1400281201916338177",
            "applyId": null,
            "teamName": "团队5",
            "shortName": null,
            "status": null,
            "createTime": null,
            "reason": null,
            "ranking": 1,
            "sort": null,
            "groupName": null,
            "athleteList": null,
            "phoneNo": null,
            "stageId": null,
            "resultId": null,
            "arrangeStatus": null,
            "racePoints": null,
            "wonTimes": null,
            "lostTimes": null
        }, {
            "id": "1400280876622897154",
            "openId": null,
            "matchId": null,
            "subjectId": null,
            "groupId": "1400281201916338177",
            "applyId": null,
            "teamName": "团队6",
            "shortName": null,
            "status": null,
            "createTime": null,
            "reason": null,
            "ranking": 2,
            "sort": null,
            "groupName": null,
            "athleteList": null,
            "phoneNo": null,
            "stageId": null,
            "resultId": null,
            "arrangeStatus": null,
            "racePoints": null,
            "wonTimes": null,
            "lostTimes": null
        }, {
            "id": "1400280877449175041",
            "openId": null,
            "matchId": null,
            "subjectId": null,
            "groupId": "1400281201916338177",
            "applyId": null,
            "teamName": "团队7",
            "shortName": null,
            "status": null,
            "createTime": null,
            "reason": null,
            "ranking": 4,
            "sort": null,
            "groupName": null,
            "athleteList": null,
            "phoneNo": null,
            "stageId": null,
            "resultId": null,
            "arrangeStatus": null,
            "racePoints": null,
            "wonTimes": null,
            "lostTimes": null
        }, {
            "id": "1400280878250287105",
            "openId": null,
            "matchId": null,
            "subjectId": null,
            "groupId": "1400281201916338177",
            "applyId": null,
            "teamName": "团队8",
            "shortName": null,
            "status": null,
            "createTime": null,
            "reason": null,
            "ranking": 3,
            "sort": null,
            "groupName": null,
            "athleteList": null,
            "phoneNo": null,
            "stageId": null,
            "resultId": null,
            "arrangeStatus": null,
            "racePoints": null,
            "wonTimes": null,
            "lostTimes": null
        }]
    }]
}
var API_URL = 'https://match.anhuity.com.cn'
// var API_URL = 'http://localhost:8889'
window.$http = function (opts, callback) {
    window.nanoajax.ajax({
        url: API_URL + opts.url,
        method: opts.method || 'GET',
        headers: opts.headers || {'Content-Type': 'application/json', 'token': sessionStorage.getItem('user_token')},
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


getResultList()

// 表格数据
function getResultList() {
    dealTable(res.matchResult, res.teamList)
    // window.$http({
    //     url: `/platform-api/match/result/list?subjectId=${subjectId}`
    // }, function (res) {
    //     dealTable(res.matchResult, res.teamList)
    // });
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
}

let qwb = document.querySelector('.qwb-bd')
let qwbHtml = ''
teamArrList.forEach((item, index) => {
    qwbHtml += qwbPre(item)
    qwb.innerHTML = qwbHtml
})

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
                    <table border="1">
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
