
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
// var data1 = data.reverse();
// var data2 = [];
// for (var i = 0; i < data1.length; i++) {
//     data2.push(getdate(data1[i].Date), data1[i].Open, data1[i].High, data1[i].Low, data1[i].LastClose, data1[i].Volume);
// }
//
// var lines = [];
// for (var j = 0; j < data2.length; j += 6) {
//     lines.push(data2.slice(j, j + 6));
// }

// K线图
var kline = new Kline({
    element: "#kline_container",
    width: kLineW,
    height: kLineH,
    theme: 'dark', // light/dark
    language: 'zh-cn', // zh-cn/en-us/zh-tw
    ranges: ["1w", "1d", "30m", "15m", "10m", "5m", "3m", "1m", "line"],
    symbol: "coin5/coin4",
    symbolName: "COIN5_COIN4",
    type: "poll", // poll/socket
    // url: '../../component/kline-master/mock.json',
    url: "http://dt.jctytech.com/stock.php?u=17611002316&symbol=NENGH0&type=kline&num=100",
    limit: 1000,
    intervalTime: 5000,
    debug: true,
    showTrade: true,
    onResize: function(width, height) {
        console.log("chart resized: " + width + " " + height);
    }
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
$.get('http://dt.jctytech.com/stock.php?u=17611002316&type=stock&symbol=NENGH0', function (data) {
    console.log(data);
    $('#symbolName').text(data[0].Name);
});


