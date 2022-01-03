function sureShow() {
    $('.safe_check_box').show();
    $('.grayBlack2').show();

}
function sureHide() {
    $('.safe_check_box').hide();
    $('.grayBlack2').hide();

}
/*
 点击发送验证码事件
 */
function send_code_for_message_new_v1(obj) {
    var pid = obj.attr('pid');
    btn_id1 = obj.attr('id');
    mes_mobile = $("#" + obj.attr('phone_id')).val();
    var now = new Date();
    var day = now.getDate();

        if (!mes_mobile) {
            alert('手机号为不能为空。');
            return;
        }
        if (!isValidPhone(mes_mobile)) {
            alert('请输入正确的手机号！');
            return;
        }
        code_message_Count_Down_First();
        // 以下getNVCVal()的值，跟随业务请求一起上传，由后端请求AnalyzeNvc接口，返回200，400，600或者800
        var params = 'a=' + getNVCVal() + '&mobile=' + mes_mobile;
        RegisterRequest('http://m.jmw.com.cn/liuyan/nvcAnalyze.php', params);
        // RegisterRequest('http://cf.aliyun.com/nvc/nvcAnalyze.jsonp', params)
}
function RegisterRequest(url, params) {
    var callbackName = ('jsonp_' + Math.random()).replace('.', '')
    params += '&callback=' + callbackName
    var o_scripts = document.getElementsByTagName("script")[0]
    var o_s = document.createElement('script')
    o_scripts.parentNode.insertBefore(o_s, o_scripts);
    //您注册请求的业务回调
    window[callbackName] = function (json) {
        if (json.result.code == 400) {
            getNC().then(function(){
                _nvc_nc.upLang('cn', {
                    _startTEXT: "请按住滑块，拖动到最右边",
                    _yesTEXT: "验证通过",
                    _error300: "哎呀，出错了，点击<a href=\"javascript:__nc.reset()\">刷新</a>再来一次",
                    _errorNetwork: "网络不给力，请<a href=\"javascript:__nc.reset()\">点击刷新</a>",
                });
                clear_daojishi_first("获取验证码");
                sureShow();
                _nvc_nc.reset();
            })
        } else if (json.result.code == 100 || json.result.code == 200) {
            // send_phonetel_code_first(mes_mobile);
            code_message_Count_Down_First();
            nvcReset()
        } else if (json.result.code == 800 || json.result.code == 900) {
            //直接拦截
            nvcReset()
//                alert("验证码发送失败!")
        }
    }
    o_s.src = url + '?' + params
}
var InterValObj1=false;
function clear_daojishi_first(message)
{
    window.clearInterval(InterValObj1);//停止计时器
    $("#" + btn_id1).removeAttr("disabled");//启用按钮
    $("#" + btn_id1).val(message);
}
function code_message_Count_Down_First() {
    if(InterValObj1!=false){
        window.clearInterval(InterValObj1);
        InterValObj1=false
    };
    var curCount = 60;
    $("#" + btn_id1).attr("disabled", "true");
    $("#" + btn_id1).val("" + curCount + "秒");
    //timer处理函数
    function SetRemainTime() {

        if (curCount == 0) {
            clear_daojishi_first('重新发送');
            code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效    ;
        }
        else {
            curCount--;
            $("#" + btn_id1).attr("disabled", "false");
            $("#" + btn_id1).val("" + curCount + "秒");
        }
    }

     InterValObj1 = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
    //发送验证码
}
function isValidPhone(phone) {
    var myreg = /^1[3456789]\d{9}$/;
    if (!myreg.test(phone)) {
        return false;
    } else {
        return true;
    }
}