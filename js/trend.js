// 趋势图

//显示风格
let styleColor = localStorage.getItem('style');
let textStyles, bgStyle;
if(styleColor == '1') {
    textStyles = '#fff';
    bgStyle = '#000';
}else {
    textStyles = '#000';
    bgStyle = '#fff';
}
var upColor = '#ec0000';
var upBorderColor = '#8A0000';
var downColor = '#00da3c';
var downBorderColor = '#008F28';

// 初始化echarts实例
var myChart = echarts.init(document.getElementById('trend'));

$.get('http://dt.jctytech.com/stock.php?u=test&symbol=NENGH0&type=kline&num=30', function (data) {
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
    var data1 = data.reverse();
    var data2 = [];
    var data3 = [];
    for (var i = 0; i < data1.length; i++) {
        data2.push(getdate(data1[i].Date));
        data3.push(data1[i].LastClose);
    }

    //参数设置
    option = {
        title: {
            text: data1[0].Name,
            left: 0,
            textStyle: {
                color: textStyles,
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: data2,
            axisLabel: {
                show: true,
                textStyle: {
                    color: textStyles
                }
            }
        },
        yAxis: {
            scale: true,
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: textStyles
                }
            }
        },
        series: [{
            data: data3,
            type: 'line',
            areaStyle: {},
        }]
    };
    myChart.setOption(option);   //参数设置方法
});
