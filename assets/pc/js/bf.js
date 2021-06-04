console.log('bf::')

/* Dom Tools -> */
function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(obj, cls) {
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}

function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}

function getElById(id) {
    return document.getElementById(id)
}

/* <-- */

function onClickBfTab(id) {
    var tabA = {tab: 'bfTabA', panel: 'bfPanelA'}
    var tabB = {tab: 'bfTabB', panel: 'bfPanelB'}
    var current = id === 0 ? tabA : tabB
    var prev = id === 0 ? tabB : tabA

    addClass(getElById(current.tab), 'bf-tab-active')
    removeClass(getElById(prev.tab), 'bf-tab-active')
    removeClass(getElById(current.panel), 'hide')
    addClass(getElById(prev.panel), 'hide')

    // Render Panel Dom
    if (id === 0) renderBfPanelA()
    if (id === 1) renderBfPanelB()

    console.log(id)
}

function genDivWithDataList(list, cls) {
    var arr = []
    for (var i = 0; i < list.length; i++) {
        var item = `<div class="${cls}">${list[i]}</div>`
        arr.push(item)
    }
    return arr.join('')
}

function formatBf(n) {
    if (n === null) return '-'
    return n
}

function renderBfPanelA() {
    var parent = getElById('bfPanelA')

    window.$http({
        url: `/api/match/result/getMatchPoints?subjectId=${subjectId}`
    }, function (res) {
        var html = ''
        if (res.code === 0) {
            var list = res.list || []
            for (var i = 0; i < list.length; i++) {
                var item = list[i]
                html += '<div class="bf-panel-content">'
                html += `
                    <div>
                        <div class="_name">${item.ateamName}</div>
                        ${genDivWithDataList(item.aathleteList || [], '_person')}
                    </div>
                    <div>
                        <span>${item.ascore}</span>
                        <span>${item.bscore}</span>
                    </div>
                    <div>
                        <div class="_name">${item.bteamName}</div>
                        ${genDivWithDataList(item.bathleteList || [], '_person')}
                    </div>
                `
                html += '</div>'
            }
            parent.innerHTML = html
        }
        console.log('renderBfPanelA::', res)
    })
}

function renderBfPanelB() {
    var parent = getElById('bfPanelB')

    window.$http({
        url: `/api/match/result/getMatchRace?subjectId=${subjectId}`
    }, function (res) {
        var html = ''
        if (res.code === 0) {
            var list = res.list || []
            for (var i = 0, len = list.length; i < len; i++) {
                var item = list[i]
                var teamList = item.teamList || []
                html += '<div class="bf-panel-content">'
                html += `
                    <div class="bf-row bf-panel-head">
                        <div>${item.groupName}</div>
                        <div><img class="bf-icon" src="./assets/pc/images/win.png" alt="">胜</div>
                        <div>负</div>
                        <div><img class="bf-icon" src="./assets/pc/images/score.png" alt="">积分</div>
                    </div>
                `

                for (var j = 0; j < teamList.length; j++) {
                    var team = teamList[j]
                    html += `
                        <div class="bf-row">
                            <div>${formatBf(team.teamName)}</div>
                            <div class="win">${formatBf(team.wonTimes)}</div>
                            <div class="loss">${formatBf(team.lostTimes)}</div>
                            <div class="score">${formatBf(team.racePoints)}</div>
                        </div>
                    `
                }

                if (i === 0) html += '<div class="bf-divider"></div>'

                html += '</div>'
            }

            parent.innerHTML = html
        }
        console.log('renderBfPanelB::', res)
    })

}

onClickBfTab(0)

/* 间隔 N 秒 刷新数据 */
setInterval(function () {
    renderBfPanelA()
    renderBfPanelB()
}, 10 * 1000)