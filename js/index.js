// 实例化layui
layui.use(['layer', 'form'], function(){
    var layer = layui.layer,form = layui.form;
});
//记住密码
let userName = localStorage.getItem('userName');
let pwdName = localStorage.getItem('pwdName');
let rememberPwd = localStorage.getItem('rememberPwd');
if(userName) {
    $('#user').val(userName);
}
if(pwdName) {
    $('#pwd').val(pwdName);
}
if(rememberPwd) {
    $('#remember-pwd').prop('checked', true);
}
$('#remember-pwd').click(function () {
    let user = $('#user').val();
    let pwd = $('#pwd').val();
    if(rememberPwd) {
        $('#remember-pwd').prop('checked', false);
        $('#user').val('');
        $('#pwd').val('');
        localStorage.clear('userName');
        localStorage.clear('pwdName');
        localStorage.clear('rememberPwd');
    }else {
        localStorage.setItem('userName', user);
        localStorage.setItem('pwdName', pwd);
        localStorage.setItem('rememberPwd', 1);
    }
    window.location.reload();
});

//登录
$('#login').click(function () {
    let user = $('#user').val();
    let pwd = $('#pwd').val();
    if(rememberPwd) {
        localStorage.setItem('userName', user);
        localStorage.setItem('pwdName', pwd);
    }
    if(user === '') {
        layer.msg('请输入用户名');
    }else {
        if(pwd === '') {
            layer.msg('请输入密码');
        }else {
            window.location.href = 'dealLogin.html';
        }
    }
});

//获取验证码
let sleep = 30, interval = null;
let btn = document.getElementById ('verify');
$('#verify').click(function () {
    if (!interval) {
        this.style.backgroundColor = '#8e8e8e';
        this.disabled = "disabled";
        this.style.cursor = "wait";
        this.value = "重新发送 (" + sleep-- + ")";
        interval = setInterval (function () {
            if (sleep === 0) {
                if (!!interval) {
                    clearInterval (interval);
                    interval = null;
                    sleep = 30;
                    btn.style.cursor = "pointer";
                    btn.removeAttribute ('disabled');
                    btn.value = "获取验证码";
                    btn.style.backgroundColor = '';
                }
                return false;
            }
            btn.value = "重新发送 (" + sleep-- + ")";
        }, 1000);
    }
});

//找回密码
$('#login-pwd').click(function () {
    $('#login-pwd').addClass('tab-pwd');
    $('#deal-pwd').removeClass('tab-pwd');
    $('#login-deal').text('新登录密码');
});
$('#deal-pwd').click(function () {
    $('#deal-pwd').addClass('tab-pwd');
    $('#login-pwd').removeClass('tab-pwd');
    $('#login-deal').text('新交易密码');
});
function check() {
    let flag = false;
    $("input[name='foundPwd']").each(function () {
        if($(this).val() === '') {
            flag = true;
            return false;
        }
    });
    return flag;
}
$('#submit-pwd').click(function () {
    if(check()) {
        layer.msg('条件不能为空！');
    }else {
        let newPwd = $('#newPwd').val();
        let confirmPwd = $('#confirmPwd').val();
        if(newPwd !== confirmPwd) {
            layer.msg('两次密码不一致');
        }else {
            $('#dim').addClass('dim');
            $('.password').show();
        }
    }
});

//注册
function checked() {
    let flag = false;
    $("input[name='regName']").each(function () {
        if($(this).val() === '') {
            flag = true;
            return false;
        }
    });
    return flag;
}
$('#submit-reg').click(function () {
    if(checked()) {
        layer.msg('条件不能为空！');
    }else {
        let regPwd = $('#regPwd').val();
        let confirmPwd = $('#confirmPwd').val();
        if(regPwd !== confirmPwd) {
            layer.msg('两次密码不一致');
        }else {
            $('#dim').addClass('dim');
            $('.reg').show();
        }
    }
});