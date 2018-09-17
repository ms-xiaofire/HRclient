
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

//获取产品名字
var symbol1 = 'NENGH0';
var lineTime = sessionStorage.getItem('lineTime');
$('#kline_container').on('click', 'div div div ul li a', function () {
    var time = $(this).text();
    if(time === '1分钟') {
        sessionStorage.setItem('lineTime', 'min,1');
        window.location.reload();
    }
    if(time === '5分钟') {
        sessionStorage.setItem('lineTime', 'min,5');
        window.location.reload();
    }
    if(time === '10分钟') {
        sessionStorage.setItem('lineTime', 'min,10');
        window.location.reload();
    }
    if(time === '15分钟') {
        sessionStorage.setItem('lineTime', 'min,15');
        window.location.reload();
    }
    if(time === '30分钟') {
        sessionStorage.setItem('lineTime', 'min,30');
        window.location.reload();
    }
    if(time === '1小时') {
        sessionStorage.setItem('lineTime', 'min,60');
        window.location.reload();
    }
    if(time === '2小时') {
        sessionStorage.setItem('lineTime', 'min,120');
        window.location.reload();
    }
    if(time === '日线') {
        sessionStorage.setItem('lineTime', 'day');
        window.location.reload();
    }
    if(time === '分时') {
        sessionStorage.setItem('lineTime', 'min,1');
        window.location.reload();
    }
});

// K线图
var kline = new Kline({
    element: "#kline_container",
    width: kLineW,
    height: kLineH,
    theme: 'dark', // light/dark
    language: 'zh-cn', // zh-cn/en-us/zh-tw
    ranges: ["1d", "2h", "1h", "30m", "15m", "10m", "5m", "1m", "line"],
    symbol: "coin5/coin4",
    symbolName: "COIN5_COIN4",
    type: "poll", // poll/socket
    url: "http://dt.jctytech.com/stock.php?u=jurunjob&type=kline&num=1000" + '&line='+ lineTime + '&symbol=' + symbol1,
    limit: 1000,
    intervalTime: 5000,
    debug: false,
    showTrade: true,
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
            $('#upDown').addClass('lightBlue')
            $('#NewPrice').addClass('lightBlue')
        }else {
            $('#upDown').addClass('red')
            $('#NewPrice').addClass('red')
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
