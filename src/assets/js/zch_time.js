/**
 * 展会倒计时
 * @param obj
 * @param type 1: 1200*90 2: 1200*80 3: 1200*45 4: 1200*45(媒体站) 5:1200*45 6:960*60(zh.jmw.com.cn) 7:370*50 8:320*140(文章) 9:1200*80(餐饮) 10:1200*80(教育) 11:1200*80(美容) 12:370*50(餐饮) 13:370*50(教育) 14:370*50(美容) 
 * @param position 1: 元素后追加 2：元素前追加 3:此元素上修改
 */
function show_ad(obj,type,position)
{
    var html = '';
    if (type === 1)
    {
        html = `
            <a href="http://cae.jmw.com.cn/" target="_blank" title="CAE中国加盟展北京站加盟" class="advertising1" style="margin: 2px 0;position: relative;">
                <img data-url="http://image1.jmw.com.cn/newzonghe/images/seven_1200_90.gif" class="lazy" src="http://image1.jmw.com.cn/newzonghe/images/blank.gif" width="1200" height="90" alt="CAE中国加盟展北京站" />        
                <span id="advert" style="height: 13px;width: 24px;position: absolute;bottom:0;left: 0;overflow:hidden;">
                    <img src="http://image1.jmw.com.cn/industry/image/gg.png" style="float: left; width: auto;height: auto;">
                </span>
<!--                <p class="daoJishi90">-->
<!--                    <font class="dayD"></font>-->
<!--                    <font class="hourH"></font>-->
<!--                    <font class="minuteM"></font>-->
<!--                    <font class="secondS"></font>-->
<!--                </p>-->
            </a>
<!--            <style type="text/css">.daoJishi90 font{position:absolute; top:45px; display:inline-block; width:26px; height:20px; line-height:20px; text-align:center;  font-size:12px; font-weight:bold; color:#fff; font-family: "微软雅黑";}.daoJishi90 .dayD{right:224px;}.daoJishi90 .hourH{right:178px;}.daoJishi90 .minuteM{right:132px;}.daoJishi90 .secondS{right:86px;}</style>-->
        `;
    } else if (type === 2) {
        html = `
            <a href="http://cae.jmw.com.cn/" target="_blank" title="CAE中国加盟展北京站加盟" class="advertising1 daojiS" style="position: relative; display: block; width: 1200px; height: 80px; margin: 20px auto;">
                <img width="1200" height="80" src="http://image1.jmw.com.cn/newzonghe/images/seven_1200_80.gif" alt="CAE中国加盟展北京站" />
                <span id="advert" style="height: 13px;width: 24px;position: absolute;bottom:0;left: 0;overflow:hidden;top: 66px;">
                    <img src="http://image1.jmw.com.cn/industry/image/gg.png" style="float: left; width: auto;height: auto;">
                </span>
<!--                <p class="daoJishi80">-->
<!--                    <font class="dayD"></font>-->
<!--                    <font class="hourH"></font>-->
<!--                    <font class="minuteM"></font>-->
<!--                    <font class="secondS"></font>-->
<!--                </p>-->
            </a>
<!--            <style type="text/css">.daoJishi80 font{position:absolute; top:40px; display:inline-block; width:26px; height:20px; line-height:20px; text-align:center; font-size:12px; font-weight:bold; color:#fff; font-family: "微软雅黑";}.daoJishi80 .dayD{right:223px;}.daoJishi80 .hourH{right:176px;}.daoJishi80 .minuteM{right:130px;}.daoJishi80 .secondS{right:85px;}</style>-->
        `;
    } else if (type === 3) {
        html = `
            <a href="http://cae.jmw.com.cn/" target="_blank" title="CAE中国加盟展北京站加盟" class="advertising1 long_exhibition" style="position: relative;display: block;height: 45px; width: 1200px; margin: 30px auto 0">
                <img width="1200" height="45" src="http://image1.jmw.com.cn/newzonghe/images/seven_1200_45.gif" alt="CAE中国加盟展北京站" />
                <span id="advert" style="height: 13px;width: 24px;position: absolute;bottom:0;left: 0;overflow:hidden;">
                    <img src="http://image1.jmw.com.cn/industry/image/gg.png" style="float: left; width: auto;height: auto;">
                </span>
<!--                <p class="daoJishi45">-->
<!--                    <font class="dayD"></font>-->
<!--                    <font class="hourH"></font>-->
<!--                    <font class="minuteM"></font>-->
<!--                    <font class="secondS"></font>-->
<!--                </p>-->
            </a>
<!--            <style type="text/css">.daoJishi45 font{position:absolute; top:21px; display:inline-block; width:26px; height:20px; line-height:20px; text-align:center;  font-size:12px; font-weight:bold; color:#fff; font-family: "微软雅黑";}.daoJishi45 .dayD{right:231px;}.daoJishi45 .hourH{right:183px;}.daoJishi45 .minuteM{right:137px;}.daoJishi45 .secondS{right:91px;}</style>-->
        `;
    } else if (type === 4) {
        html = `
            <a href="http://cae.jmw.com.cn/" target="_blank" title="CAE中国加盟展北京站加盟" class="advertising1" style="position: relative;display: block;height: 45px; width: 1200px; margin: 30px auto -30px;">
                <img width="1200" height="45" src="http://image1.jmw.com.cn/newzonghe/images/seven_1200_45.gif" alt="CAE中国加盟展北京站" />
                <span id="advert" style="height: 13px;width: 24px;position: absolute;bottom:0;left: 0;overflow:hidden;">
                    <img src="http://image1.jmw.com.cn/industry/image/gg.png" style="float: left; width: auto;height: auto;">
                </span>
<!--                <p class="daoJishi45">-->
<!--                    <font class="dayD"></font>-->
<!--                    <font class="hourH"></font>-->
<!--                    <font class="minuteM"></font>-->
<!--                    <font class="secondS"></font>-->
<!--                </p>-->
            </a>
<!--            <style type="text/css">.daoJishi45 font{position:absolute; top:21px; display:inline-block; width:26px; height:20px; line-height:20px; text-align:center;  font-size:12px; font-weight:bold; color:#fff; font-family: "微软雅黑";}.daoJishi45 .dayD{right:231px;}.daoJishi45 .hourH{right:183px;}.daoJishi45 .minuteM{right:137px;}.daoJishi45 .secondS{right:91px;}</style>-->
        `;
    } else if (type === 5) {
        html = `
            <a href="http://cae.jmw.com.cn/" target="_blank" title="CAE中国加盟展北京站加盟" class="advertising1 long_exhibition" style="position: relative;display: block;height: 45px; width: 1200px; margin: auto;">
                <img width="1200" height="45" src="http://image1.jmw.com.cn/newzonghe/images/seven_1200_45.gif" alt="CAE中国加盟展北京站" />
                <span id="advert" style="height: 13px;width: 24px;position: absolute;bottom:0;left: 0;overflow:hidden;">
                    <img src="http://image1.jmw.com.cn/industry/image/gg.png" style="float: left; width: auto;height: auto;">
                </span>
<!--                <p class="daoJishi45">-->
<!--                    <font class="dayD"></font>-->
<!--                    <font class="hourH"></font>-->
<!--                    <font class="minuteM"></font>-->
<!--                    <font class="secondS"></font>-->
<!--                </p>-->
            </a>
<!--            <style type="text/css">.daoJishi45 font{position:absolute; top:21px; display:inline-block; width:26px; height:20px; line-height:20px; text-align:center;  font-size:12px; font-weight:bold; color:#fff; font-family: "微软雅黑";}.daoJishi45 .dayD{right:231px;}.daoJishi45 .hourH{right:183px;}.daoJishi45 .minuteM{right:137px;}.daoJishi45 .secondS{right:91px;}</style>-->
        `;
    } else if (type === 6) {
        html = `
            <a href="http://cae.jmw.com.cn/" target="_blank" title="CAE中国加盟展北京站加盟" class="advertising1" style="position: relative;display: block;height: 60px; width: 960px; margin: auto;">
                <img width="960" height="60" src="http://image1.jmw.com.cn/newzonghe/images/seven_960_60.gif" alt="CAE中国加盟展北京站" />
                <span id="advert" style="height: 13px;width: 24px;position: absolute;bottom:0;left: 0;overflow:hidden;">
                    <img src="http://image1.jmw.com.cn/industry/image/gg.png" style="float: left; width: auto;height: auto;">
                </span>
<!--                <p class="daoJishi60">-->
<!--                    <font class="dayD"></font>-->
<!--                    <font class="hourH"></font>-->
<!--                    <font class="minuteM"></font>-->
<!--                    <font class="secondS"></font>-->
<!--                </p>-->
            </a>
<!--            <style type="text/css">.daoJishi60 font{position:absolute; top:27px; display:inline-block; width:26px; height:20px; line-height:20px; text-align:center;  font-size:10px; font-weight:bold; color:#fff; font-family: "微软雅黑";}.daoJishi60 .dayD{right:177px;}.daoJishi60 .hourH{right:136px;}.daoJishi60 .minuteM{right:94px;}.daoJishi60 .secondS{right:53px;}</style>-->
        `;
    } else if (type === 7) {
        html = `
            <a href="http://www.jmw.com.cn/toutiao/17668168.html" style="position: relative;" target="_blank" title="网站名称变更" class="logo_guangG fr">
                <img data-url="http://image1.jmw.com.cn/newzonghe/images/pc_statement.jpg" class="lazy" src="http://image1.jmw.com.cn/newzonghe/images/pc_statement.jpg" width="370" height="50" alt="">
                <span id="advert" style="height: 13px;width: 24px;position: absolute;bottom:0;left: 0;overflow:hidden;">
                    <img src="http://image1.jmw.com.cn/industry/image/gg.png" style="float: left; width: auto;height: auto;">
                </span>
            </a>
        `;
    } else if (type === 8) {
        html = `
            <a href="http://cae.jmw.com.cn/" target="_blank" title="中国加盟展加盟" class="kaiQi" style="position: relative;">
                <img src="http://appapi.jmw.com.cn/images/ad/seven_320_140.jpg" alt="中国加盟展" data-bd-imgshare-binded="1">
                <span id="advert" style="height: 13px;width: 24px;position: absolute;bottom:0;left: 0;overflow:hidden;">
                    <img src="http://image1.jmw.com.cn/industry/image/gg.png" style="float: left; width: auto;height: auto;">
                </span>
            </a>
        `;
    } else if (type === 9) {
        html = `
            <a href="http://cae.jmw.com.cn/" target="_blank" title="CAE中国加盟展北京站加盟" class="advertising1 daojiS" style="position: relative; display: block; width: 1200px; height: 80px; margin: 20px auto;">
                <img width="1200" height="80" src="http://image1.jmw.com.cn/newzonghe/images/seven_1200_80.gif" alt="CAE中国加盟展北京站" />
                <span id="advert" style="height: 13px;width: 24px;position: absolute;bottom:0;left: 0;overflow:hidden;top: 66px;">
                    <img src="http://image1.jmw.com.cn/industry/image/gg.png" style="float: left; width: auto;height: auto;">
                </span>
<!--                <p class="daoJishi80">-->
<!--                    <font class="dayD"></font>-->
<!--                    <font class="hourH"></font>-->
<!--                    <font class="minuteM"></font>-->
<!--                    <font class="secondS"></font>-->
<!--                </p>-->
            </a>
<!--            <style type="text/css">.daoJishi80 font{position:absolute; top:40px; display:inline-block; width:26px; height:20px; line-height:20px; text-align:center; font-size:12px; font-weight:bold; color:#fff; font-family: "微软雅黑";}.daoJishi80 .dayD{right:223px;}.daoJishi80 .hourH{right:176px;}.daoJishi80 .minuteM{right:130px;}.daoJishi80 .secondS{right:85px;}</style>-->
        `;
    } else if (type === 10) {
        html = `
            <a href="http://cae.jmw.com.cn/" target="_blank" title="CAE中国加盟展北京站加盟" class="advertising1 daojiS" style="position: relative; display: block; width: 1200px; height: 80px; margin: 20px auto;">
                <img width="1200" height="80" src="http://image1.jmw.com.cn/newzonghe/images/seven_1200_80.gif" alt="CAE中国加盟展北京站" />
                <span id="advert" style="height: 13px;width: 24px;position: absolute;bottom:0;left: 0;overflow:hidden;top: 66px;">
                    <img src="http://image1.jmw.com.cn/industry/image/gg.png" style="float: left; width: auto;height: auto;">
                </span>
<!--                <p class="daoJishi80">-->
<!--                    <font class="dayD"></font>-->
<!--                    <font class="hourH"></font>-->
<!--                    <font class="minuteM"></font>-->
<!--                    <font class="secondS"></font>-->
<!--                </p>-->
            </a>
<!--            <style type="text/css">.daoJishi80 font{position:absolute; top:40px; display:inline-block; width:26px; height:20px; line-height:20px; text-align:center; font-size:12px; font-weight:bold; color:#fff; font-family: "微软雅黑";}.daoJishi80 .dayD{right:223px;}.daoJishi80 .hourH{right:176px;}.daoJishi80 .minuteM{right:130px;}.daoJishi80 .secondS{right:85px;}</style>-->
        `;
    } else if (type === 11) {
        html = `
            <a href="http://cae.jmw.com.cn/" target="_blank" title="CAE中国加盟展北京站加盟" class="advertising1 daojiS" style="position: relative; display: block; width: 1200px; height: 80px; margin: 20px auto;">
                <img width="1200" height="80" src="http://image1.jmw.com.cn/newzonghe/images/seven_1200_80.gif" alt="CAE中国加盟展北京站" />
                <span id="advert" style="height: 13px;width: 24px;position: absolute;bottom:0;left: 0;overflow:hidden;top: 66px;">
                    <img src="http://image1.jmw.com.cn/industry/image/gg.png" style="float: left; width: auto;height: auto;">
                </span>
<!--                <p class="daoJishi80">-->
<!--                    <font class="dayD"></font>-->
<!--                    <font class="hourH"></font>-->
<!--                    <font class="minuteM"></font>-->
<!--                    <font class="secondS"></font>-->
<!--                </p>-->
            </a>
<!--            <style type="text/css">.daoJishi80 font{position:absolute; top:40px; display:inline-block; width:26px; height:20px; line-height:20px; text-align:center; font-size:12px; font-weight:bold; color:#fff; font-family: "微软雅黑";}.daoJishi80 .dayD{right:223px;}.daoJishi80 .hourH{right:176px;}.daoJishi80 .minuteM{right:130px;}.daoJishi80 .secondS{right:85px;}</style>-->
        `;
    } else if (type === 12) {
        html = `
            <a href="http://www.jmw.com.cn/toutiao/17668168.html" style="position: relative;" target="_blank" title="网站名称变更" class="logo_guangG fr">
                <img data-url="http://image1.jmw.com.cn/newzonghe/images/pc_statement.jpg" class="lazy" src="http://image1.jmw.com.cn/newzonghe/images/pc_statement.jpg" width="370" height="50" alt="">
                <span id="advert" style="height: 13px;width: 24px;position: absolute;bottom:0;left: 0;overflow:hidden;">
                    <img src="http://image1.jmw.com.cn/industry/image/gg.png" style="float: left; width: auto;height: auto;">
                </span>
            </a>
        `;
    } else if (type === 13) {
        html = `
            <a href="http://cae.jmw.com.cn/" style="position: relative;" target="_blank" title="十七届展会广告加盟" class="logo_guangG fr">
                <img data-url="http://image1.jmw.com.cn/newzonghe/images/seven_jy_370_50.gif" class="lazy" src="http://image1.jmw.com.cn/newzonghe/images/seven_jy_370_50.gif" width="370" height="50" alt="">
                <span id="advert" style="height: 13px;width: 24px;position: absolute;bottom:0;left: 0;overflow:hidden;">
                    <img src="http://image1.jmw.com.cn/industry/image/gg.png" style="float: left; width: auto;height: auto;">
                </span>
            </a>
        `;
    } else if (type === 14) {
        html = `
            <a href="http://www.jmw.com.cn/toutiao/17668168.html" style="position: relative;" target="_blank" title="网站名称变更" class="logo_guangG fr">
                <img data-url="http://image1.jmw.com.cn/newzonghe/images/pc_statement.jpg" class="lazy" src="http://image1.jmw.com.cn/newzonghe/images/pc_statement.jpg" width="370" height="50" alt="">
                <span id="advert" style="height: 13px;width: 24px;position: absolute;bottom:0;left: 0;overflow:hidden;">
                    <img src="http://image1.jmw.com.cn/industry/image/gg.png" style="float: left; width: auto;height: auto;">
                </span>
            </a>
        `;
    } else if (type === 15) {
        html = `
            <p class="advertising3 clear">
                <a href="http://cae.jmw.com.cn/" target="_blank" title="CAE中国加盟展北京站加盟">
                    <img data-url="http://image1.jmw.com.cn/newzonghe/images/seven_1200_70.gif" class="lazy" src="http://image1.jmw.com.cn/newzonghe/images/blank.gif" width="1200" height="70" alt="CAE中国加盟展北京站" />        
                    <span id="advert" style="height: 13px;width: 24px;position: absolute;bottom:0;left: 0;overflow:hidden;">
                        <img src="http://image1.jmw.com.cn/industry/image/gg.png" style="float: left; width: auto;height: auto;">
                    </span>
<!--                    <p class="daoJishi70">-->
<!--                        <font class="dayD"></font>-->
<!--                        <font class="hourH"></font>-->
<!--                        <font class="minuteM"></font>-->
<!--                        <font class="secondS"></font>-->
<!--                    </p>-->
                </a>
            </p>
<!--            <style type="text/css">.daoJishi70 font{position:absolute; top:45px; display:inline-block; width:26px; height:20px; line-height:20px; text-align:center;  font-size:12px; font-weight:bold; color:#fff; font-family: "微软雅黑";}.daoJishi70 .dayD{right:224px;}.daoJishi70 .hourH{right:178px;}.daoJishi70 .minuteM{right:132px;}.daoJishi70 .secondS{right:86px;}</style>-->
        `;
    }


    if (position === 1)
    {
        obj.next().remove();
        obj.after(html);
    }else if (position === 2){
        obj.prev().remove();
        obj.before(html);
    }else if(position === 3){
        obj.replaceWith(html);
    }else if (position === 4){
        obj.after(html);
    }
}

//展会倒计时
function countDown(time, day_elem, hour_elem, minute_elem, second_elem)
{
    var end_time = new Date(time).getTime(),
        sys_second = (end_time - new Date().getTime()) / 1000;
    var timer = setInterval(function() {
        if(sys_second >= 1) {
            sys_second -= 1;
            var day = Math.floor((sys_second / 3600) / 24);
            var hour = Math.floor((sys_second / 3600) % 24);
            var minute = Math.floor((sys_second / 60) % 60);
            var second = Math.floor(sys_second % 60);
            day_elem && $(day_elem).text(day); //计算天
            $(hour_elem).text(hour < 10 ? "0" + hour : hour); //计算小时
            $(minute_elem).text(minute < 10 ? "0" + minute : minute); //计算分
            $(second_elem).text(second < 10 ? "0" + second : second); // 计算秒
        } else {
            $(hour_elem).text("00");
            $(minute_elem).text("00");
            $(second_elem).text("00");
            day_elem && $(day_elem).text("00");
            clearInterval(timer);
        }
    }, 1000);
}
$(document).ready(function() {
    countDown("2020/04/22 09:00:00", ".dayD", ".hourH", ".minuteM", ".secondS");
	// 新版倒计时2019.5.7 xzw		
	// countDown("2019/5/22 00:00:00", ".long_exhibition .day");
    $('.leftCouplet').hide();
    $('.rightCouplet').hide();
});
