// 设定签约银行弹窗
$('#setBank').click(function () {
    $('#dim').addClass('dim');
    $('.setBank').show();
});
$('.setBank-close').click(function () {
    $('#dim').removeClass('dim');
    $('.setBank').hide();
});
//入金弹窗
$('#deposit').click(function () {
    $('#dim').addClass('dim');
    $('.deposit').show();
});
$('.deposit-close').click(function () {
    $('#dim').removeClass('dim');
    $('.deposit').hide();
});
//出金弹窗
$('#withdrawal').click(function () {
    $('#dim').addClass('dim');
    $('.withdrawal').show();
});
$('.withdrawal-close').click(function () {
    $('#dim').removeClass('dim');
    $('.withdrawal').hide();
});
