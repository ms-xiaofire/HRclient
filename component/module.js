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

//选择顶部菜单
$('#menuSystem').click(function () {
    $('#system').show();
    prevent(event);
});
$('#menuAnalyze').click(function () {
    $('#analyze').show();
    prevent(event);
});
$('#menuDeal').click(function () {
    $('#deal').show();
    prevent(event);
});
$('#menuTool').click(function () {
    $('#tool').show();
    prevent(event);
});
$('#menuHelp').click(function () {
    $('#help').show();
    prevent(event);
});

//顶部菜单收起
$(document).click(function () {
    $('#system').hide();
    $('#analyze').hide();
    $('#deal').hide();
    $('#tool').hide();
    $('#help').hide();
});

//显示风格
$('#style').click(function () {
    if(style === 0) {
        localStorage.setItem('style', '1');
        window.location.reload();
    }else {
        localStorage.setItem('style', '0');
        window.location.reload();
    }
});

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

//隐藏时间
$('.timeClose').click(function () {
    $('.time').hide();
});

//弹出框
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

//交易登录
$('#dealLogin').click(function () {
    window.location.href = 'dealMain.html'
});