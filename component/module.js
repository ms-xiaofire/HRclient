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
//默认隐藏底部
let footers = localStorage.getItem('footers');
if(footers) {
    $('.details').show();
    $('.footer-main').show();
}else {
    $('.details').hide();
    $('.footer-main').hide();
}

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

//选择顶部菜单
$('#menuSystem').click(function () {
    $('#system').slideToggle();
    prevent(event);
});
$('#menuAnalyze').click(function () {
    $('#analyze').slideToggle();
    prevent(event);
});
$('#menuDeal').click(function () {
    $('#deal').slideToggle();
    prevent(event);
});
$('#menuTool').click(function () {
    $('#tool').slideToggle();
    prevent(event);
});
$('#menuHelp').click(function () {
    $('#help').slideToggle();
    prevent(event);
});

//顶部菜单收起
$(document).click(function () {
    $('#system').slideUp();
    $('#analyze').slideUp();
    $('#deal').slideUp();
    $('#tool').slideUp();
    $('#help').slideUp();
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

//交易大师F12
function masterDeal() {
    localStorage.setItem('footers', 1);
    window.location.reload();
}
$('#masterDeal').click(function () {
    masterDeal();
});
$('#deals').click(function () {
    masterDeal();
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

//刷新数据
function F5() {
    window.location.reload();
}
$('#F5').click(function () {
    F5();
});


//隐藏底部
$('.timeClose').click(function () {
    localStorage.clear('footers');
    window.location.reload();
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
        masterDeal();
    }
});