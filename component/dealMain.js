//交易登录
function check() {
    let flag = false;
    $("input[name='dealLogin']").each(function () {
        if($(this).val() === '') {
            flag = true;
            return false;
        }
    });
    return flag;
}
$('#dealLogin').click(function () {
    if(check()) {
        layer.msg('条件不能为空！');
    }else {
        window.location.href = 'dealMain.html'
    }
});

//交易退出
$('#dealOut').click(function () {
    localStorage.clear('footers');
    window.location.reload();
});

//弹窗
// 参数设置
$('#set').click(function () {
    $('#dim').addClass('dim');
    $('#set').addClass('red');
    $('.set').show();
});
$('.set-close').click(function () {
    $('#dim').removeClass('dim');
    $('#set').removeClass('red');
    $('.set').hide();
});
//买入
$('#buyInput').click(function () {
    $('#dim').addClass('dim');
    $('.buyInput').show();
});
$('#buyInput-OK').click(function () {
    $('.buyInput').hide();
    $('.buyInput-OK').show();
});
$('.buyInput-close').click(function () {
    $('#dim').removeClass('dim');
    $('.buyInput').hide();
    $('.buyInput-OK').hide();
});
// 卖出
$('#buyOut').click(function () {
    $('#dim').addClass('dim');
    $('.buyOut').show();
});
$('#buyOut-OK').click(function () {
    $('.buyOut').hide();
    $('.buyOut-OK').show();
});
$('.buyOut-close').click(function () {
    $('#dim').removeClass('dim');
    $('.buyOut').hide();
    $('.buyOut-OK').hide();
});
// 平仓
$('#buying').click(function () {
    $('#dim').addClass('dim');
    $('.buying').show();
});
$('#buying-OK').click(function () {
    $('.buying').hide();
    $('.buying-OK').show();
});
$('.buying-close').click(function () {
    $('#dim').removeClass('dim');
    $('.buying').hide();
    $('.buying-OK').hide();
});
//查可开
$('#check').click(function () {
    alert("查可开");
});
//复位
$('#reset').click(function () {
    $('#contract').val('上证300');
    $('#num').val(1);
    $('#price').val('市价');
    // window.location.reload();
});
//全部平仓
$('#allOut').click(function () {
    $('#dim').addClass('dim');
    $('.allOut').show();
    $('#allOut-title').text('全部平仓');
    $('#allOut-main').text('确认平掉所有持仓?');
});
$('#allOut-close').click(function () {
    $('#dim').removeClass('dim');
    $('.allOut').hide();
});
//快捷平仓
$('#rapidOut').click(function () {
    $('#dim').addClass('dim');
    $('.allOut').show();
    $('#allOut-title').text('快捷平仓');
    $('#allOut-main').text('确认平掉持仓?');
});
//快捷反手
$('#rapidBack').click(function () {
    $('#dim').addClass('dim');
    $('.allOut').show();
    $('#allOut-title').text('快捷反手');
    $('#allOut-main').text('确认反手?');
});
//快捷锁仓
$('#rapidLock').click(function () {
    $('#dim').addClass('dim');
    $('.allOut').show();
    $('#allOut-title').text('快捷锁仓');
    $('#allOut-main').text('确认锁仓?');
});
//止盈止损
$('#stopProfit').click(function () {
    $('#dim').addClass('dim');
    $('.allOut').show();
    $('#allOut-title').text('止盈止损');
    $('#allOut-main').text('确认止盈止损?');
});