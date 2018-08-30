// 弹窗
//登录
$('#login').click(function () {
    window.location.href = 'dealLogin.html';
});
//找回密码
$('#submit-pwd').click(function () {
    $('#dim').addClass('dim');
    $('.password').show();
});
//注册
$('#submit-reg').click(function () {
    $('#dim').addClass('dim');
    $('.reg').show();
});