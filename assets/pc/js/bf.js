console.log('实时比分')

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

    console.log(id)
}