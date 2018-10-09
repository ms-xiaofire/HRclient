
//日期转字符串函数
function getdate(timestamp) {
    var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = (date.getDate()) + ' ';
    h = (date.getHours()) + ':';
    m = (date.getMinutes()) + ':';
    s = (date.getSeconds());
    return Y + M + D + h + m + s;
}
function penData(penData) {
    var penDate = new Date(penData * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    H = (penDate.getHours() < 10 ? '0' + penDate.getHours() : penDate.getHours()) + ':';
    M = (penDate.getMinutes() < 10 ? '0' + penDate.getMinutes() : penDate.getMinutes());
    return H + M;
}
//当天0点0分0秒
start = new Date(new Date(new Date().toLocaleDateString()).getTime());
stTime = Date.parse(start)/1000;
//当天23点59分59秒
end = new Date(new Date(new Date().toLocaleDateString()).getTime()+24*60*60*1000-1);
etTime = Date.parse(end)/1000;

//获取产品名字
var symbol1 = 'NENGH0';
var lineTime = sessionStorage.getItem('lineTime');
if(lineTime === null) {
    lineTime = 'day';
}
$('#kline_container').on('click', 'div div div ul li a', function () {
    var time = $(this).text();
    if(time === '1分钟' || time === '1m') {
        sessionStorage.clear();
        sessionStorage.setItem('lineTime', 'min,1');
        window.location.reload();
    }
    if(time === '5分钟' || time === '5m') {
        sessionStorage.clear();
        sessionStorage.setItem('lineTime', 'min,5');
        window.location.reload();
    }
    if(time === '10分钟' || time === '10m') {
        sessionStorage.setItem('lineTime', 'min,10');
        sessionStorage.clear('st');
        sessionStorage.clear('et');
        window.location.reload();
    }
    if(time === '15分钟' || time === '15m') {
        sessionStorage.clear();
        sessionStorage.setItem('lineTime', 'min,15');
        window.location.reload();
    }
    if(time === '30分钟' || time === '30m') {
        sessionStorage.clear();
        sessionStorage.setItem('lineTime', 'min,30');
        window.location.reload();
    }
    if(time === '1小时' || time === '1小時' || time === '1h') {
        sessionStorage.clear();
        sessionStorage.setItem('lineTime', 'min,60');
        window.location.reload();
    }
    if(time === '2小时' || time === '2小時' || time === '2h') {
        sessionStorage.clear();
        sessionStorage.setItem('lineTime', 'min,120');
        window.location.reload();
    }
    if(time === '日线' || time === '日線' || time === '1d') {
        sessionStorage.clear();
        sessionStorage.setItem('lineTime', 'day');
        window.location.reload();
    }
    if(time === '分时' || time === '分時' || time === 'Line') {
        sessionStorage.setItem('lineTime', 'min,1');
        sessionStorage.setItem('st', stTime);
        sessionStorage.setItem('et', etTime);
        window.location.reload();
    }
});
//设置语言
$('#kline_container').on('click', 'div div div div ul li a', function () {
    var text = $(this).text();
    if(text === '简体中文(zh-CN)') {
        sessionStorage.setItem('language', 'zh-cn');
    }
    if(text === 'English(en-US)') {
        sessionStorage.setItem('language', 'en-us');
    }
    if(text === '繁體中文(zh-HK)') {
        sessionStorage.setItem('language', 'zh-tw');
    }
});
var languages = 'zh-cn';
var languageSet = sessionStorage.getItem('language');
if(languageSet) {
    languages = languageSet;
}
//分时图默认只看当天的数据
var st = '';
var et = '';
var stStar = sessionStorage.getItem('st');
var etEnd = sessionStorage.getItem('et');
if(stStar) {
    st = '&st=' + stStar;
}
if(etEnd) {
    et = '&et=' + etEnd;
}
// K线图
var kline = new Kline({
    element: "#kline_container",
    width: kLineW,
    height: kLineH,
    theme: 'dark', // light/dark
    language: languages, // zh-cn/en-us/zh-tw
    ranges: ["1d", "2h", "1h", "30m", "15m", "10m", "5m", "1m", "line"],
    symbol: "coin5/coin4",
    symbolName: "COIN5_COIN4",
    type: "poll", // poll/stomp
    url: "http://dt.jctytech.com/stock.php?u=jurunjob&type=kline&num=2000" + '&line='+ lineTime + '&symbol=' + symbol1 + st + et,
    limit: 1000,
    intervalTime: 5000,
    debug: false,
    showTrade: true,
    reverseColor: false
});
kline.draw();
kline.toggleTrade();
//K线图风格
if(style === 0) {
    kline.setTheme("light");
}else {
    kline.setTheme("dark");
}


//K线图右侧详细信息
function newDate() {
    $.get('http://dt.jctytech.com/stock.php?u=jurunjob&type=stock&market=' + symbol1, function (data) {
        $('#symbolName').text(data[0].Name);
        $('#SP1').text(data[0].SP1);
        $('#SV1').text(data[0].SV1);
        $('#BP1').text(data[0].BP1);
        $('#BV1').text(data[0].BV1);
        $('#NewPrice').text(data[0].NewPrice);
        $('#Vol2').text(data[0].Vol2);
        var upDown = data[0].NewPrice - data[0].Open;
        if(upDown < 0) {
            $('#upDown').removeClass('red');
            $('#NewPrice').removeClass('red');
            $('#upDown').addClass('lightBlue');
            $('#NewPrice').addClass('lightBlue');
        }else {
            $('#upDown').removeClass('lightBlue');
            $('#NewPrice').removeClass('lightBlue');
            $('#upDown').addClass('red');
            $('#NewPrice').addClass('red');
        }
        $('#upDown').text((upDown).toFixed(3));
        $('#LastClose').text(data[0].LastClose);
        if(data[0].PriceChangeRatio < 0) {
            $('#PriceChange').addClass('lightBlue')
        }else {
            $('#PriceChange').addClass('red')
        }
        $('#PriceChange').text((data[0].PriceChangeRatio).toFixed(2) + '%');
        $('#Open').text(data[0].Open);
        $('#Price3').text(data[0].Price3);
        $('#High').text(data[0].High);
        $('#Open_Int').text(data[0].Open_Int);
        $('#Low').text(data[0].Low);
        var penDate = penData(data[0].Date);
        $('.penDate').text(penDate);
        $('#penBP1').text(data[0].BP1);
        $('#penBV1').text(data[0].BV1);
    });
}
setInterval(newDate, 1000);


//取消默认的浏览器自带右键 很重要！
window.document.oncontextmenu = function(){
    return false;
};
$('#kline_container').mousedown(function(e){
    if(e.which === 3) {
        //获取我们自定义的右键菜单
        var menu=document.querySelector("#menuRight");
        //根据事件对象中鼠标点击的位置，进行定位
        menu.style.left=e.clientX+'px';
        menu.style.top=e.clientY+'px';
    }
});
//关闭右键菜单，很简单
window.onclick=function(e){
    var menu=document.querySelector("#menuRight");
//用户触发click事件就可以关闭了，因为绑定在window上，按事件冒泡处理，不会影响菜单的功能
    menu.style.left= -9999 + 'px';
    menu.style.top= -9999 + 'px';
};