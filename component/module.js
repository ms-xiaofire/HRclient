//阻止事件冒泡  公用函数
function prevent(event) {
    let e = arguments.callee.caller.arguments[0] || event; //若省略此句，下面的e改为event，IE运行可以，但是其他浏览器就不兼容
    if(e && e.stopPropagation) {
        // this code is for Mozilla and Opera
        e.stopPropagation();
    } else if(window.event) {
        // this code is for IE
        window.event.cancelBubble = true;
    }
}
// 实时显示时间
function showTime() {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let myTime = h + ':' + m + ':' + s;
    $('#time').text(myTime);
}
setInterval('showTime()', 1000);
// 默认风格
let style = parseInt(localStorage.getItem('style'));
if(style === 0) {
    $('.black').css('color', '#fff');
    $('.bg-black').css('background-color', '#fff');
    $('.bg-1a').css('background-color', '#ccc');
    $('.white').css('color', '#000');
    $('.bg-white').css('background-color', '#000');
} else {
    $('.black').css('color', '#000');
    $('.bg-black').css('background-color', '#000');
    $('.bg-1a').css('background-color', '#1a1a1a');
    $('.white').css('color', '#fff');
    $('.bg-white').css('background-color', '#fff');
}
//选择顶部菜单
function menu() {
    $('#system').hide();
    $('#analyze').hide();
    $('#deal').hide();
    $('#tool').hide();
    $('#help').hide();
}
$('#menuSystem').click(function () {
    menu();
    $('#system').show();
    prevent(event);
});
$('#menuAnalyze').click(function () {
    menu();
    $('#analyze').show();
    prevent(event);
});
$('#menuDeal').click(function () {
    menu();
    $('#deal').show();
    prevent(event);
});
$('#menuTool').click(function () {
    menu();
    $('#tool').show();
    prevent(event);
});
$('#menuHelp').click(function () {
    menu();
    $('#help').show();
    prevent(event);
});
//顶部菜单收起
$(document).click(function () {
    menu();
});

let footers = localStorage.getItem('footers');
//判断客户端大小
let hight = document.documentElement.clientHeight;
let width = document.documentElement.clientWidth;
var kLineW, kLineH;
if(width === 1216) {
    $('.header').css('height', '50px');
    $('.k-chart').css('width', '986px');
    $('footer').css('height', '285px');
    kLineW = 986;
    if(footers) {
        $('.main').css('height', '477px');
        kLineH = 437;
        $('.details').show();
        $('.footer-main').show();
        $('main').removeClass('height85');
        $('footer').show();
    }else {
        $('.main').css('height', '757px');
        kLineH = 717;
        $('.details').hide();
        $('.footer-main').hide();
        $('main').css('height', '969px');
        $('footer').hide();
        $('.table-box').css('height', '929px')
    }
} else {
    $('.header').css('height', '55px');
    $('.k-chart').css('width', '1132px');
    $('footer').css('height', '310px');
    kLineW = 1132;
    if(footers) {
        $('.main').css('height', '659px');
        kLineH = 619;
        $('.details').show();
        $('.footer-main').show();
        $('main').removeClass('height85');
        $('footer').show();
    }else {
        kLineH = 929;
        $('.details').hide();
        $('.footer-main').hide();
        $('main').css('height', '969px');
        $('footer').hide();
        $('.table-box').css('height', '879px')
    }
}
//隐藏底部
$('.timeClose').click(function () {
    localStorage.clear('footers');
    window.location.reload();
});
//显示底部
$('#deals').click(function () {
    localStorage.setItem('footers', 1);
    window.location.reload();
});


//连接服务器
function connectS() {
    alert('连接服务器');
}
$('#connect-s').click(function () {
    connectS();
});

//断开服务器
function breakS() {
    alert('断开服务器');
}
$('#break-s').click(function () {
    breakS();
});
//显示风格
function styliez() {
    if(style === 0) {
        localStorage.setItem('style', '1');
        window.location.reload();
    }else {
        localStorage.setItem('style', '0');
        window.location.reload();
    }
}
$('#style').click(function () {
    styliez();
});
//弹出框
//使用说明
$('#explain').click(function () {
    $('#dim').addClass('dim');
    $('.explain').show();
});
$('.explain-close').click(function () {
    $('#dim').removeClass('dim');
    $('.explain').hide();
});
//快捷键
$('#shortcut').click(function () {
    $('#dim').addClass('dim');
    $('.shortcut').show();
});
$('.shortcut-close').click(function () {
    $('#dim').removeClass('dim');
    $('.shortcut').hide();
});
//免责条款
$('#termSheet').click(function () {
    $('#dim').addClass('dim');
    $('.termSheet').show();
});
$('.termSheet-close').click(function () {
    $('#dim').removeClass('dim');
    $('.termSheet').hide();
});
//关于
$('#about').click(function () {
    $('#dim').addClass('dim');
    $('.about').show();
});
$('.about-close').click(function () {
    $('#dim').removeClass('dim');
    $('.about').hide();
});

//快捷键
//ESC
$(document).keydown(function (e) {
    e = window.event;
    let keycode = e.which ? e.which : e.keyCode;
    if(keycode === 27) {
        window.history.back();
        return false;
    }
});
//F1
$(document).keydown(function (e) {
    e = window.event;
    let keycode = e.which ? e.which : e.keyCode;
    if(keycode === 112) {
        $('#dim').addClass('dim');
        $('.shortcut').show();
    }
});
//F2
$(document).keydown(function (e) {
    e = window.event;
    let keycode = e.which ? e.which : e.keyCode;
    if(keycode === 113) {
        $('#dim').addClass('dim');
        $('.about').show();
    }
});
//F3
$(document).keydown(function (e) {
    e = window.event;
    let keycode = e.which ? e.which : e.keyCode;
    if(keycode === 114) {
        $('#dim').addClass('dim');
        $('.termSheet').show();
    }
});
//F4
$(document).keydown(function (e) {
    e = window.event;
    let keycode = e.which ? e.which : e.keyCode;
    if(keycode === 115) {
        $('#dim').addClass('dim');
        $('.explain').show();
    }
});
//F5
function F5() {
    window.location.reload();
}
$('#F5').click(function () {
    F5();
});
$(document).keydown(function (e) {
    e = window.event;
    let keycode = e.which ? e.which : e.keyCode;
    if(keycode === 116) {
        F5();
    }
});
//F6
$(document).keydown(function (e) {
    e = window.event;
    let keycode = e.which ? e.which : e.keyCode;
    if(keycode === 117) {
        styliez();
    }
});
//F7
$(document).keydown(function (e) {
    e = window.event;
    let keycode = e.which ? e.which : e.keyCode;
    if(keycode === 118) {
        localStorage.setItem('footers', 1);
        window.location.reload();
    }
});
//F8
$(document).keydown(function (e) {
    e = window.event;
    let keycode = e.which ? e.which : e.keyCode;
    if(keycode === 119) {
        alert('论坛');
    }
});
//F9
$(document).keydown(function (e) {
    e = window.event;
    let keycode = e.which ? e.which : e.keyCode;
    if(keycode === 120) {
        connectS();
    }
});
//F10
$(document).keydown(function (e) {
    e = window.event;
    let keycode = e.which ? e.which : e.keyCode;
    if(keycode === 121) {
        breakS();
    }
});
//F11
$(document).keydown(function (e) {
    e = window.event;
    let keycode = e.which ? e.which : e.keyCode;
    if(keycode === 122) {
        alert('退出系统');
    }
});
//F12
$(document).keydown(function (e) {
    e = window.event;
    let keycode = e.which ? e.which : e.keyCode;
    if(keycode === 123) {
        console.log('F12');
    }
});


//首页数据可点击
$('#list tr').dblclick(function () {
    var text = $(this).text();
    console.log(text);
});

//K线图/日线/1分钟/5分钟/10分钟/15分钟/30分钟
$('#KLine').click(function () {
    sessionStorage.setItem('line', '&line=day');
    sessionStorage.setItem('num', '&num=100');
    window.location.reload();
});
$('#dayLine').click(function () {
    sessionStorage.setItem('line', '&line=day');
    sessionStorage.setItem('num', '&num=100');
    window.location.reload();
});
$('#oneMin').click(function () {
    sessionStorage.setItem('line', '&line=min,1');
    sessionStorage.setItem('num', '&num=100');
    window.location.reload();
});
$('#fiveMin').click(function () {
    sessionStorage.setItem('line', '&line=min,5');
    sessionStorage.setItem('num', '&num=100');
    window.location.reload();
});
$('#tenMin').click(function () {
    sessionStorage.setItem('line', '&line=min,10');
    sessionStorage.setItem('num', '&num=100');
    window.location.reload();
});
$('#fifteenMin').click(function () {
    sessionStorage.setItem('line', '&line=min,15');
    sessionStorage.setItem('num', '&num=100');
    window.location.reload();
});
$('#thirtyMin').click(function () {
    sessionStorage.setItem('line', '&line=min,30');
    sessionStorage.setItem('num', '&num=100');
    window.location.reload();
});

var et = parseInt(new Date().getTime()/1000);
//周线
var weekSt = et - (7*24*60*60);
//月线
var monthSt = et - (30*24*60*60);
//年线
var yearSt = et - (365*24*60*60);
$('#weekLine').click(function () {
    sessionStorage.setItem('line', '&st=' + weekSt + '&et=' + et);
    sessionStorage.setItem('num', '&num=7');
    window.location.reload();
});
$('#monthLine').click(function () {
    sessionStorage.setItem('line', '&st=' + monthSt + '&et=' + et);
    sessionStorage.setItem('num', '&num=30');
    window.location.reload();
});
$('#yearLine').click(function () {
    sessionStorage.setItem('line', '&st=' + yearSt + '&et=' + et);
    sessionStorage.setItem('num', '&num=365');
    window.location.reload();
});
