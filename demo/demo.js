// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('eCharts'));

var upColor = '#ec0000';
var upBorderColor = '#8A0000';
var downColor = '#00da3c';
var downBorderColor = '#008F28';

var line1 = '&line=day';
$.get('http://dt.jctytech.com/stock.php?u=test&symbol=NENGH0&type=kline'+line1,function (data, status) {
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
    for (var i = 0; i < data1.length; i++) {
        data2.push(getdate(data1[i].Date), data1[i].Open, data1[i].Close, data1[i].Low, data1[i].High);
    }

    var result = [];
    for (var j = 0; j < data2.length; j += 5) {
        result.push(data2.slice(j, j + 5));
    }

    var data0 = splitData(result);
    console.log(data2)
    console.log(result)

    //切割数组，把数组中的日期和数据分离，返回数组中的日期和数据
    function splitData(rawData) {
        var categoryData = [];
        var values = [];

        for (var i = 0; i < rawData.length; i++) {
            //splice 返回每组数组中被删除的第一项，即返回数组中被删除的日期
            //alert(rawData[i].splice(0, 1)[0]);
            //categoryData  日期  把返回的日期放到categoryData[]数组中
            categoryData.push(rawData[i].splice(0, 1)[0]);
            //alert(categoryData);

            //数据数组，即数组中除日期外的数据
            // alert(rawData[i]);
            values.push(rawData[i])
        }
        return {
            categoryData: categoryData, //数组中的日期 x轴对应的日期
            values: values              //数组中的数据 y轴对应的数据
        };
    }

    //计算MA平均线，N日移动平均线=N日收盘价之和/N  dayCount要计算的天数(5,10,20,30)
    function calculateMA(dayCount) {
        var result = [];
        for (var i = 0, len = data0.values.length; i < len; i++) {
            if (i < dayCount) {
                result.push('-');
                //alert(result);
                continue;   //结束单次循环，即不输出本次结果
            }
            var sum = 0;
            for (var j = 0; j < dayCount; j++) {
                //收盘价总和
                sum += data0.values[i - j][1];
                //alert(sum);
            }
            result.push(sum / dayCount);
            // alert(result);
        }
        return result;
    }



    option = {
        title: {
            text: data1[0].Name,
            left: 0
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
        },
        grid: {
            left: '10%',
            right: '10%',
            bottom: '15%'
        },
        xAxis: {
            type: 'category',
            data: data0.categoryData,
            scale: true,
            boundaryGap : false,
            axisLine: {onZero: false},
            splitLine: {show: false},
            splitNumber: 20,
            min: 'dataMin',
            max: 'dataMax'
        },
        yAxis: {
            scale: true,
            splitArea: {
                show: true
            }
        },
        dataZoom: [
            {
                type: 'inside',
                start: 50,
                end: 100
            },
            {
                show: true,
                type: 'slider',
                y: '90%',
                start: 50,
                end: 100
            }
        ],
        series: [
            {
                name: '日K',
                type: 'candlestick',
                data: data0.values,
                itemStyle: {
                    normal: {
                        color: upColor,
                        color0: downColor,
                        borderColor: upBorderColor,
                        borderColor0: downBorderColor
                    }
                },
                markPoint: {
                    label: {
                        normal: {
                            formatter: function (param) {
                                return param != null ? Math.round(param.value) : '';
                            }
                        }
                    },
                    data: [
                        {
                            name: 'XX标点',
                            coord: ['2013/5/31', 2300],
                            value: 2300,
                            itemStyle: {
                                normal: {color: 'rgb(41,60,85)'}
                            }
                        },
                        {
                            name: 'highest value',
                            type: 'max',
                            valueDim: 'highest'
                        },
                        {
                            name: 'lowest value',
                            type: 'min',
                            valueDim: 'lowest'
                        },
                        {
                            name: 'average value on close',
                            type: 'average',
                            valueDim: 'close'
                        }
                    ],
                    tooltip: {
                        formatter: function (param) {
                            return param.name + '<br>' + (param.data.coord || '');
                        }
                    }
                },
                markLine: {
                    symbol: ['none', 'none'],
                    data: [
                        [
                            {
                                name: 'from lowest to highest',
                                type: 'min',
                                valueDim: 'lowest',
                                symbol: 'circle',
                                symbolSize: 10,
                                label: {
                                    normal: {show: false},
                                    emphasis: {show: false}
                                }
                            },
                            {
                                type: 'max',
                                valueDim: 'highest',
                                symbol: 'circle',
                                symbolSize: 10,
                                label: {
                                    normal: {show: false},
                                    emphasis: {show: false}
                                }
                            }
                        ],
                        {
                            name: 'min line on close',
                            type: 'min',
                            valueDim: 'close'
                        },
                        {
                            name: 'max line on close',
                            type: 'max',
                            valueDim: 'close'
                        }
                    ]
                }
            },
            {
                name: 'MA5',
                type: 'line',
                data: calculateMA(5),
                smooth: true,
                lineStyle: {
                    normal: {opacity: 0.5}
                }
            },
            {
                name: 'MA10',
                type: 'line',
                data: calculateMA(10),
                smooth: true,
                lineStyle: {
                    normal: {opacity: 0.5}
                }
            },
            {
                name: 'MA20',
                type: 'line',
                data: calculateMA(20),
                smooth: true,
                lineStyle: {
                    normal: {opacity: 0.5}
                }
            },
            {
                name: 'MA30',
                type: 'line',
                data: calculateMA(30),
                smooth: true,
                lineStyle: {
                    normal: {opacity: 0.5}
                }
            },

        ]
    };
    myChart.setOption(option);

});

