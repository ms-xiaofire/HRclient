// 参数设置
$('#set').click(function () {
    $('#dim').addClass('dim');
    $('.set').show();
});
$('.set-close').click(function () {
    $('#dim').removeClass('dim');
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
//全部平仓
$('#allOut').click(function () {
    $('#dim').addClass('dim');
    $('.allOut').show();
});
$('#allOut-close').click(function () {
    $('#dim').removeClass('dim');
    $('.allOut').hide();
});