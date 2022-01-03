/**
 lt
 M站留言功能公共方法
 */
var mes_mobile = "";
var mes_content = "";
var mes_gender = 0;
var mes_realname = "";
var mes_origin = "";
var mes_target_id = "";
var mes_code= "";
var mes_lasturl =  window.location.href;
var mes_fromurl = document.referrer;
var mes_identification='';
var mes_imgType='';
var mes_dj='';
//存储临时对象
var mes_obj='';
var mes_provice='';
var mes_city='';
var mes_county='';

function isValidPhone(phone) {
    var myreg=/^1[3456789]\d{9}$/;
    if(!myreg.test(phone)) {
        return false;
    }else{
        return true;
    }
}
$('*[liuyan_div_id]').click(function(){
    var obj = $(this);
    //alert(GetCookie("useruser_id"));
    if (GetCookie("useruser_id"))
    {
        mes_div_login_showByObj(obj);
    }
    else
    {
        mes_div_unlogin_showByObj(obj);
    }

});
//本方法用于点击弹出未登录层
//该层必须有一个div为最外层
//该div的id为mes_div_nologin_$id($id为变量),
//该div中必须包含id为：mobile_$id,realname_$id,content_$id,code_$id($id为变量)的输入框
//target_id_$id,title_$id
//必须包含id为mes_showvode_$id的点击发送验证码，点击后变成倒计时的控件，mes_title_$id的title显示dom对象


function mes_div_unlogin_showByObj(obj)
{
    // console.log(obj);return false;
    var identification = obj.attr('identification');
    mes_identification=obj.attr('identification');
    $('#content_'+identification).val(obj.attr('divcontent'));
    if(typeof(obj.attr('divname'))=='undefined'){
        divname='请输入您的称呼';
    }else{
        divname=obj.attr('divname');
    }

    if(typeof(obj.attr('divphone'))=='undefined'){
        divphone='请输入手机号码';
    }else{
        divphone=obj.attr('divphone');
    }
    $("#realname_"+identification).attr('placeholder',divname);
    $("#mobile_"+identification).attr('placeholder',divphone);

    $('#title_one_'+identification).html(obj.attr('divtitle1'));
    $('#title_two_'+identification).html(obj.attr('divtitle2'));
    $('#title_three_'+identification).html(obj.attr('divtitle3'));
    $('#origin_'+identification).val(obj.attr('divorigin'));
    $('#target_id_'+identification).val(obj.attr('divprojectid'));

    $('#mes_div_unlogin_'+identification).show();

    check_message();
}

//本方法用于点击弹出已登录层
//该层必须由一个div为最外层
//该div的id为mes_div_login_$id($id为变量)
//mes_project_id_$id
//该div中必须包含id为：mes_mobile_$id,mes_username_$id,mes_content_$id,mes_vcode_$id($id为变量)的输入框
//mes_title_$id的title显示dom对象
function mes_div_login_showByObj(obj)
{
    var identification = obj.attr('identification');
    mes_identification=obj.attr('identification');
    $('#content_'+identification).val(obj.attr('divcontent'));//默认留言内容
    $('#title_one_'+identification).html(obj.attr('divtitle1'));
    $('#title_two_'+identification).html(obj.attr('divtitle2'));
    $('#title_three_'+identification).html(obj.attr('divtitle3'));
    $('#origin_'+identification).val(obj.attr('divorigin'));
    $('#target_id_'+identification).val(obj.attr('divprojectid'));
    var imgType=obj.attr("divtype");
    mes_imgType=obj.attr("divtype");
    $('#mes_div_login_'+identification).show();
    check_message();
}





/**
 留言数据赋值，参数：
 identification为每个留言的唯一标识,其对应的id中需规定上述参数的_后的命名+_identification(变量)结尾，如:内容项为content_zhaoshang
 */
function message_data(identification,type)
{
    mes_mobile =   $("#mobile_"+identification).val();
    mes_content =  $("#content_"+identification).val();
    mes_gender =   $("input[name=gender_"+identification+"]:checked").val();
    mes_realname = $("#realname_"+identification).val();
    mes_origin =   $("#origin_"+identification).val();
    mes_target_id =   $("#target_id_"+identification).val();
    mes_code = $("#code_"+identification).val();
    mes_provice=$("#input_province").attr('index_name');
    mes_city=$("#input_city").text();
    mes_county=$("#input_county").text();
    mes_ticket_tag = $("input[name='zhanhui_tan']:checked").val();
    if (mes_ticket_tag == undefined) {
        mes_ticket_tag = 0;
    }
    var reg = new RegExp("^[\\u4E00-\\u9FFF]+$","g");
    var regexp = /^([a-zA-Z0-9]|[\u4e00-\u9fa5]|【){1}([a-zA-Z0-9]|\s|\n|-|,|\.|。|\！|!|，|\?|？|"|'|“|”|【|】|—|[\u4e00-\u9fa5]){2,199}$/;


    if(mes_realname == ''){
        $('.trueName').html('您的称呼不能为空！');
        $('.trueName').show();
        return false;
    }else if(mes_realname.length>6 || !reg.test(mes_realname)){
        $('.trueName').html('请输入正确的姓名！');
        $('.trueName').show();
        return false;
    }else if(mes_provice=='省市'){
        $('.address').html('请选择区域！');
        $('.address').show();
        return false;
    }else if(!isValidPhone(mes_mobile)){
        $('.trueTell').html('请输入正确的手机号！');
        $('.trueTell').show();
        return false;
    }else if(!regexp.test(mes_content)){
        $(".truetextarea").html('留言内容不能为空！');
        $(".truetextarea").show();
        return false;
    }



    if(type==0){
        //判断验证码是否没有显示出来
        if($("#yanzhengma_"+mes_identification).css("display")=='none'){
            $("#yanzhengma_"+mes_identification).css("display",'block');
        }
        if(mes_code==''){
            $('.trueCode').html('请输入正确的验证码！');
            $('.trueCode').show();
            return false ;
        }else{
            $('.trueCode').hide();
        }
    }


    return true;


}
/**
 未登录状态下添加留言，提交的表单必须含
 //id为：mobile_$id,content_$id,name=gender_$id,realname_$id,origin_$id,$target_id_id,message_code_$id($id为变量)的输入框
 1   留言成功  -1 未登录  -2 留言失败   -3 已经存在了一条数据   -4 已经达到了每天留言数最大值

 */
function add_unlogin_message()
{
    var identification=mes_identification;
    var imgType = mes_imgType;
    if(!message_data(identification,0)){
        return false;
    }



    // console.log('手机:'+mes_mobile);
    // console.log('姓名:'+mes_realname);
    // console.log('性别:'+mes_gender);
    // console.log('标示'+mes_origin);
    // console.log('项目id:'+mes_target_id);
    // console.log('验证码:'+mes_code);
    // console.log('内容:'+mes_content);
    //
    // return false;
    var dataa={PCC_IS_NUM:1,province:mes_provice,city:mes_city,country:mes_county,realname:mes_realname,mobile:mes_mobile,code:mes_code,content:mes_content,target_id:mes_target_id,origin:mes_origin,lasturl:mes_lasturl,fromurl:mes_fromurl,gender:mes_gender,ticketTag:mes_ticket_tag};
    console.log(dataa);
    var ajax_url = "http://liuyan.jmw.com.cn/NewMessage/common_add_message_unlogin.php";


    $.ajax({
        type:'get',
        url:ajax_url,
        async:false,
        dataType:'jsonp',
        jsonp:'callback',
        data:{province:mes_provice,city:mes_city,county:mes_county,realname:mes_realname,mobile:mes_mobile,code:mes_code,content:mes_content,target_id:mes_target_id,origin:mes_origin,lasturl:mes_lasturl,fromurl:mes_fromurl,gender:mes_gender,ticketTag:mes_ticket_tag},
        success:function(json){

            // console.log(json);return false;

            json = json || {};
            if(json.msg == 1)
            {
                if((json.morigin.substr(0,2)) == '13' && mes_imgType !=0){
                    window.location.href = "http://m.jmw.com.cn/M_compare.php?pid="+json.mtarget_id+"&mid="+json.mid+'&url='+mes_lasturl;
                }else{
                    alert('留言成功');
                    window.location.href=mes_lasturl;
                }
                return true;
            }
            else if(json.msg == -1)
            {
                $('.trueCode').html('验证码错误，请重新输入！');
                $('.trueCode').show();
                return false;
            }
            else if(json.msg == -2)
            {
                alert('留言失败');
                return false;
            }
            else if(json.msg == -3)
            {
                alert('留言成功');
                window.location.href=mes_lasturl;
                return true;
            }
            else if(json.msg == -4)
            {
                alert('已经达到了每天留言数最大值');
                return false;
            }
        }
    });
}
/**
 添加登录状态下留言，
 //id为：mobile_$id,content_$id,name=gender_$id,realname_$id,origin_$id,$target_id_$id($id为变量)的输入框
 1   留言成功  -1 未登录  -2 留言失败   -3 已经存在了一条数据   -4 已经达到了每天留言数最大值
 */

function add_login_message()
{
    var identification=mes_identification;
    var imgType = mes_imgType;
    if(!message_data(identification,1)){
        return false;
    }

    var ajax_url = "http://liuyan.jmw.com.cn/NewMessage/common_add_message_login.php";

    $.ajax({
        type:'get',
        url:ajax_url,
        async:false,
        dataType:'jsonp',
        jsonp:'callback',
        data:{province:mes_provice,city:mes_city,county:mes_county,realname:mes_realname,mobile:mes_mobile,content:mes_content,target_id:mes_target_id,origin:mes_origin,lasturl:mes_lasturl,fromurl:mes_fromurl,gender:mes_gender,ticketTag:mes_ticket_tag},
        success:function(json){
            json = json || {};
            if(json.msg == 1)
            {
                if((json.morigin.substr(0,2)) == '13' && mes_imgType !=0){
                    window.location.href = "http://m.jmw.com.cn/M_compare.php?pid="+json.mtarget_id+"&mid="+json.mid+'&url='+mes_lasturl;
                }else{
                    alert('留言成功');
                    window.location.href=mes_lasturl;
                }
                return true;
            }
            else if(json.msg == -1)
            {
                $('.trueCode').html('登录失效，请重新登录');
                $('.trueCode').show();
                return false;
            }
            else if(json.msg == -2)
            {
                alert('留言失败');
                return false;
            }
            else if(json.msg == -3)
            {
                alert('留言成功');
                window.location.href=mes_lasturl;
                return true;
            }
            else if(json.msg == -4)
            {
                alert('已经达到了每天留言数最大值');
                return false;
            }
        }
    });
}

function send_code_for_message_new(obj)
{
    mes_mobile =$("#mobile_"+mes_identification).val();
    btn_id = obj.attr('id');

    //发送验证阿吗
    if(!send_code_for_message(mes_mobile)){
        return false;
    }

    //显示图形验证码
    $('.grayBlack').show();
    $('.pic_yzm').show();
    shuaxin();
    return true;

}


/**
 发送留言验证码
 参数mobile：电话号码
 */
function send_code_for_message(mobile)
{
    mes_mobile=mobile;
    if(!isValidPhone(mes_mobile)){
        $('.trueTell').html('请输入正确的手机号！');
        $('.trueTell').show();
        return false;
    }else{
        $('.trueTell').hide();
    }

    return true;
}
//m站搜索页用到这个文件 添加两个方法

/**
 发送验证阿码
 */
function send_phonetel_code(){
    //判断
    var code=$('#tuxing_code').val();
    $.ajax({
        type:'get',
        url:'http://person.jmw.com.cn/common/telephone_check_again.php',
        dataType:'jsonp',
        jsonp:'callback',
        data:{mobile:mes_mobile,code:code},
        success:function(html){
            shuaxin();
            if(html==1){
                $('.grayBlack').hide();
                $('.grayBlackY').hide();
                $('.pic_yzm').hide();
                $('#tuxing_code').val('');
                if(mes_dj==1){
                    //留言板
                    down_time1();
                }else if(mes_dj==2){
                    //标页问答
                    settime(mes_obj);
                }else if(mes_dj==3){
                    //创业季
                    down_time2();
                }else if(mes_dj==8){
                    //引导页右上
                    $("#rightNow2").hide();
                    $("#rightNow3").show();
                    v9_Auto_trigger();
                    $("#first_telephone1").val(mes_mobile);
                }else if(mes_dj==10){
                    //标页申领项目
                    daojishi_ren();
                }else{
                    daojishi();
                }
            }else{
                alert('验证码错误');
                return false;
            }
            mes_dj='';
        }
    });


}
function DJYZM(){
    if(mes_dj==7){
        //引导页  咨询底价
        var me_mobile = $("#phoneZX1").val();
    }else if(mes_dj==6){
        //预约考察
        var me_mobile = $("#phoneDJ1").val();

    }else if(mes_dj==8){
        var me_mobile = $("#p_phone").val();
        //v9_check($('#subMessFind'))
    }else if(mes_dj==9){
        var me_mobile = $("#myPhone").val();
    }else if(mes_dj==10){
        //新综合页品牌自荐
        var me_mobile = $("#newphone").val();
        $('.grayBlack_new').show();

    }else if(mes_dj==11){
        //1831项目认领
        var me_mobile = $("#phone").val();
    }else if(mes_dj==12){
        //一级行业我要报名
        var me_mobile = $("#baomingphone").val();
        $('.grayBlack_new').show();
    }
    if(!isValidPhone(me_mobile)){
        alert('请输入正确的手机号！');$('.grayBlack_new').hide();
        return false;
    }
    $('.grayBlackY').show();$('.pic_yzm').show();shuaxin();
}

function send_phonetel_code_ZX(){
    //判断
    var code=$('#tuxing_code').val();
    // var code = code.toUpperCase();
    if(mes_dj==7){
        //引导页  咨询底价
        var me_mobile = $("#phoneZX1").val();
    }else if(mes_dj==6){
        //预约考察
        var me_mobile = $("#phoneDJ1").val();
    }else if(mes_dj==8){
        var me_mobile = $("#p_phone").val();
        //v9_check($('#subMessFind'))
    }else if(mes_dj==9){
        var me_mobile = $("#myPhone").val();
    }else if(mes_dj==10){
        //新综合页品牌自荐
        var me_mobile = $("#newphone").val();

    }else if(mes_dj==11){
        //1831项目认领
        var me_mobile = $("#phone").val();

    }
    if(!isValidPhone(me_mobile)){
        alert('请输入正确的手机号！');
        return false;
    }
    $.ajax({
        type:'get',
        url:'http://person.jmw.com.cn/common/telephone_check_again.php',
        dataType:'jsonp',
        jsonp:'callback',
        data:{mobile:me_mobile,code:code},
        success:function(html){
            shuaxin();
            if(html==1){
                // grayBlack_new  为新综合页灰层 其他页面请勿同名  Ymb
                $('.grayBlack_new').hide();
                $('.grayBlackY').hide();
                $('.pic_yzm').hide();
                $('#tuxing_code').val('');
                if(mes_dj==7){
                    //引导页ZX
                    DJS('chBtnZX');
                }else if(mes_dj==6){
                    //预约考察
                    DJS('chBtnDJ');
                }else if(mes_dj==8){
                    DJS('chBtn')
                    $("#rightNow2").hide();
                    $("#rightNow3").show();
                    v9_Auto_trigger();
                    $("#first_telephone1").val(mes_mobile);
                }else if(mes_dj==9){
                    //私人订制
                    DJS('chBtn_new');
                }else if(mes_dj==10){
                    //新综合页品牌自荐
                    DJS('newzonghe');
                }
                else if(mes_dj==11){
                    //1831项目认领
                    DJS('claim');
                }
            }else{
                alert('验证码错误');
                return false;
            }

        }
    });
}

function daojishi(){
    var curCount = 60;
    $("#"+btn_id).attr("disabled", "true");
    $("#"+btn_id).val("" + curCount + "秒");
    $("#"+btn_id).css("background",'#D7D7D7');
    //timer处理函数
    function SetRemainTime() {

        if (curCount == 0) {
            window.clearInterval(InterValObj);//停止计时器
            $("#"+btn_id).removeAttr("disabled");//启用按钮
            $("#"+btn_id).css("background",'#f98b00');
            $("#"+btn_id).val("重新发送");
            code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效
        }
        else {
            curCount--;
            $("#"+btn_id).attr("disabled", "false");
            $("#"+btn_id).val("" + curCount + "秒");
        }
    }
    InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
}

/**
 按钮倒计时，countdown_btn_id为按钮的id
 */
function  Auto_trigger(countdown_btn_id){
    //如果未定义
    if(countdown_btn_id===undefined){
        countdown_btn_id='chBtn';
    }

    var curCount = 60;
    $("#"+countdown_btn_id).attr("disabled", "true");
    $("#"+countdown_btn_id).val("" + curCount + "秒");
    //timer处理函数
    function SetRemainTime() {

        if (curCount == 0) {
            window.clearInterval(InterValObj1);//停止计时器
            $("#"+countdown_btn_id).removeAttr("disabled");//启用按钮
            $("#"+countdown_btn_id).val("重新发送");
            code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效
        }
        else {
            curCount--;
            $("#"+countdown_btn_id).attr("disabled", "false");
            $("#"+countdown_btn_id).val("" + curCount + "秒");
        }
    }
    InterValObj1 = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
}

/*
 判断信息
 */
function check_message(){

    $("#input_province").blur(function(){

        if($('#input_province').attr('index_name')=='省市'){
            $('.address').html('请选择区域！');
            $('.address').show();
            return false;
        }else{
            $('.address').hide();
        }

    })
    // $("#input_province").focus(function(){
    //
    //     if($('#input_province').attr('index_name')=='省市'){
    //         $('.address').html('请选择区域！');
    //         $('.address').show();
    //         return false;
    //     }else{
    //         $('.address').hide();
    //     }
    //
    // })
    $("#realname_"+mes_identification).blur(function(){
        var reg = new RegExp("^[\\u4E00-\\u9FFF]+$","g");
        var realname=$(this).val();
        if(realname == ''){
            $('.trueName').html('您的称呼不能为空！');
            $('.trueName').show();
            return false;
        }else if(realname.length>6 || !reg.test(realname)){
            $('.trueName').html('请输入正确的姓名！');
            $('.trueName').show();
            return false;
        }else{
            $('.trueName').hide();
        }
    })


    $("#mobile_"+mes_identification).blur(function(){
        var mobile=$(this).val();
        if(!isValidPhone(mobile)){
            $('.trueTell').html('请输入正确的手机号！');
            $('.trueTell').show();
            return false;
        }else{
            $('.trueTell').hide();
        }

    })

    $("#code_"+mes_identification).blur(function(){
        var code=$(this).val();
        if(code==''){
            $(".trueCode").show();
            return false;
        }else{
            $(".trueCode").hide();
        }
    })

    $("#content_"+mes_identification).blur(function(){
        var regexp = /^([a-zA-Z0-9]|[\u4e00-\u9fa5]|【){1}([a-zA-Z0-9]|\s|\n|-|,|\.|。|\！|!|，|\?|？|"|'|“|”|【|】|—|[\u4e00-\u9fa5]){2,199}$/;
        var content=$(this).val();
        if(!regexp.test(content)){
            $(".truetextarea").show();
            return false;
        }else{
            $(".truetextarea").hide();
        }
    })

}

$(function(){
    $('#tuxing_img').attr('src','http://person.jmw.com.cn/identifying_code.php?'+Math.random());
});

function shuaxin(){
    $('#tuxing_img').attr('src','http://person.jmw.com.cn/identifying_code.php?'+Math.random());
}
// function GetCookie(c_name) {
//     if (document.cookie.length > 0) {
//         c_start = document.cookie.indexOf(c_name + "=");
//         if (c_start != -1) {
//             c_start = c_start + c_name.length + 1;
//             c_end = document.cookie.indexOf(";", c_start);
//             if (c_end == -1) {
//                 c_end = document.cookie.length;
//             }
//             return unescape(document.cookie.substring(c_start, c_end));
//         }
//     }
//     return null
// }