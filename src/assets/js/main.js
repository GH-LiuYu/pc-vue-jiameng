$(function(){
    $('.phonrLoad .li0').mouseover(function(){
		$('.reXian_boxwai').show();
	});
	$('.phonrLoad .li0').mouseout(function(){
		$('.reXian_boxwai').hide();
	});
	
	$('.phonrLoad .li2').mouseover(function(){
		$('.weiXin_boxwai').show();
	});
	$('.phonrLoad .li2').mouseout(function(){
		$('.weiXin_boxwai').hide();
	});
	
	
	$('.phonrLoad .li1').mouseover(function(){
		$('.phone_boxwai').show();
	});
	$('.phonrLoad .li1').mouseout(function(){
		$('.phone_boxwai').hide();
	});
	
	$('.dorpdown_layer').hide();
	$('.phonrLoad .webNav').hover(function(){
		$('.dorpdown_layer').show();
		$(this).children('i').hide();
		$(this).children('em').css('margin-right','16px');
	},function(){
		$('.dorpdown_layer').hide();
		$(this).children('i').show();
		$(this).children('em').css('margin-right','0');
	});
	
	//优惠
	var $swap = $('.marqueeUP');
	var movetotop;
	$swap.hover(function() {
		clearInterval(movetotop);
		},function() {
		movetotop=setInterval(function() {
		var li_height = $swap.find('p').height();
		$swap.find('p:first').animate({marginTop:-li_height + 'px'},600,function() {
		$swap.find('p:first').css('marginTop',0).appendTo($swap);
		});
		},3000);
	}).trigger('mouseleave');
	//加盟日记 盟友探店 品牌故事 选项卡
    $('.riJiCon .list li').mouseover(function(){
        $(this).addClass('select').siblings('.select').removeClass('select');
    });
    $('.riJiCon .list .li1').mouseover(function(){
        $('.riJiCon .con .width305').css('left','0');
    });
    $('.riJiCon .list .li2').mouseover(function(){
        $('.riJiCon .con .width305').css('left','-340px');
    });
    $('.riJiCon .list .li3').mouseover(function(){
        $('.riJiCon .con .width305').css('left','-680px');
    });
	//加盟头条 餐饮 教育 选项卡
	$('.bannerCenter .list li').click(function(){
		$(this).addClass('selected').siblings('.selected').removeClass('selected');
		$('.bannerCenter .con .one').eq($(this).index()).show().siblings().hide();
	});
	//文章第一个模块
	$(".buycom").hover(function(){
		$(this).find(".prev,.next").fadeTo("show",1);
	},function(){
		$(this).find(".prev,.next").hide();
	});

	$(".buycom").slide({ titCell:".num ul" , mainCell:".buypic" , effect:"leftLoop", autoPlay:true, delayTime:500 ,interTime:4000, autoPage:"<li><a></a></li>" });
	//活动 最新
	jQuery(".slideTxtBox").slide({autoPlay:true,interTime:4000});
	//移到图片出现说明
	 $('.jiuL_pic1').hover(function(){
		$(this).children('.show_black').stop().animate({'bottom':0},500)	  
	},function(){
	    $(this).children('.show_black').stop().animate({'bottom':'-75px'},500)
	});
	
	//加盟品牌聚焦
	$('.jiaMeng_focus .list li').mouseover(function(){
		$(this).addClass('selected').siblings('.selected').removeClass('selected');
		$('.jiaMeng_focus .con .jVJiao').eq($(this).index()).show().siblings().hide();
	});

	//热门加盟项目
	$('.hotJMXM .list li').mouseover(function(){
		$(this).addClass('selected').siblings('.selected').removeClass('selected');
		$('.hotJMXM .con ul').eq($(this).index()).show().siblings().hide();
	});

	//五金  家纺
    $('.wuJ_jiaF .iconTitle div').mouseover(function(){
        $(this).addClass('select').siblings('.select').removeClass('select');
    });
    $('.wuJ_jiaF .iconTitle .wj').mouseover(function(){
        $('#wj_shul').show();
        $('#jf_shul').hide();
        $('.wuJ_jiaF .jfCon .wjjf1').css('left','0');
        $('.wuJ_jiaF .jfCon .wjjf2').css('left','410px');
    });
    $('.wuJ_jiaF .iconTitle .jf').mouseover(function(){
        $('#wj_shul').hide();
        $('#jf_shul').show();
        $('.wuJ_jiaF .jfCon .wjjf1').css('left','410px');
        $('.wuJ_jiaF .jfCon .wjjf2').css('left','0');
    });
	
	$('.slideRight .sideBar .wx').mouseenter(function(){
		$('.slideRight .info').addClass('hover');
		$('.slideRight .info li').hide();
		$('.slideRight .info li.'+$(this).attr('class')).show(); 
	});
	$('.slideRight').mouseleave(function(){
		$('.slideRight .info').removeClass('hover');
	});
	$('.slideRight .info .wx').hover(function(){
		$('.sideBar .wx').css('background','#e53c01');
	},function(){
		$('.sideBar .wx').css('background','#000');	
	});
	$(window).scroll(function(){
		if($(window).scrollTop()>500){
			$(".returnTop").fadeIn(500);
		}
		else{
			$(".returnTop").fadeOut(500);
		}
	});

	//搜索框 行业下拉
	$(".logoFind .hangYe").click(function (e) {
		$('.indusXiala').toggle();
		$('.bottomLa').hide();
		e = window.event || e;
		if (e.stopPropagation) {
			e.stopPropagation();
		} else {
			e.cancelBubble = true;
		}
	});

	$('.indusXiala').click(function (e) {
		e = window.event || e;
		if (e.stopPropagation) {
			e.stopPropagation();
		} else {
			e.cancelBubble = true;
		}
	});

	//下拉
	$(document).click(function () {
        $('.indusXiala').hide();
		$('.bottomLa').hide();
        $('.bottomLa1').hide();
	});
	
	$(window).scroll(function(){ 
		if($(window).scrollTop()>=100){
			$(".pageTop").css({'position':'fixed','top':'0'});
			$('.phonrLoad .li0_2').show();
			$('.phonrLoad .li0_1').hide();
			$('.mainStart').css('margin-top','45px');
		}else
		{
			$(".pageTop").css({'position':'absolute','top':'0'});
			$('.phonrLoad .li0_2').hide();
			$('.phonrLoad .li0_1').show();
			$('.mainStart').css('margin-top','45px');
		}
	
	});
	
	$('.threePic .ziJian1').hover(function(){
		$(this).children('i').addClass('i78_1');
	},function(){
		$(this).children('i').removeClass('i78_1');
	});
	$('.threePic .tiYan').hover(function(){
		$(this).children('i').addClass('i79_1');
	},function(){
		$(this).children('i').removeClass('i79_1');
	});
	 $('.threePic .enjoy').hover(function(){
		$(this).children('i').addClass('i80_1');
	},function(){
		$(this).children('i').removeClass('i80_1');
	});

	//兼容IE伪类
	$('.jVJiao .tit_con li:nth-child(4n)').css('margin-right','0');
	$('.fourPic li:nth-child(2n)').css('margin-left','10px');
	$('.fourPic li:nth-child(3)').css('margin-top','10px');
	$('.fourPic li:nth-child(4)').css('margin-top','10px');
	$('.foodRightOne .two a:nth-child(2n)').css('margin-left','7px');
	$('.foodRightThree .pinPai dl:nth-child(2n)').css('margin-left','7px');
	$('.foodRightTwo dl:last-child').css('border-bottom','none');
	$('.hotglBottom dl:last-child').css('border-bottom','none');
	$('.foodRightSix .xm dl:last-child').css('border-bottom','none');
	$('.ziXun_all .ziXun_first:last-child').css('margin-right','0');
	$('.riJiCon .con dl:last-child').css('border-bottom','none');
	$('.foodLeft .ulList li:first-child').css('font-weight','bold');
	$('.topBang li:last-child').css('border-bottom','none');
	$('.touZi_ul li:last-child p').css('border-bottom','none');
	$('.foodRightThree .ul1 li:last-child').css('border-bottom','none');
	$('.tuiJianBottom .smallTu:first-child').css('margin-left','0');
	$('.hotglBottom dl:nth-child(-n+3) dd a').css('height','40px');
	$('.hotglBottom dl:nth-child(n+4) dd a').css('height','22px');
	$('.fiveKeng2 li:nth-child(6)').css({'font-weight':'bold','margin-top':'16px'});
	$('.fiveKeng2 li:nth-child(11)').css({'font-weight':'bold','margin-top':'16px'});
	$('.foodRightTwo .ct dl:first-child').css('margin-top','0');
	$('.advertising3_3 a:nth-child(2)').css('margin-left','3px');
	$('.advertising3_3 a:nth-child(3)').css('margin-left','3px');
	//手机版  微博
	$('.renZheng dl dd div').hover(function(){
		$(this).children('.p3').show();
	},function(){
		$(this).children('.p3').hide();
	});
	$('.wenHao').hover(function(){
		$('.teQuan').show();
	},function(){
		$('.teQuan').hide();
	});
	 
	$('.hotJMXM .con ul li:nth-child(7n)').css('margin-right','0');
	//热门加盟项目
	$('.foodRightFive .list li').mouseover(function(){
		$(this).addClass('select').siblings('.select').removeClass('select');
		$('.foodRightFive .con .xm').eq($(this).index()).show().siblings().hide();
	});
	 
	 
	$('.reMen_pinpai .list li').mouseover(function(){
		$(this).addClass('select').siblings('.select').removeClass('select');
		$('.reMen_pinpai .con .xm').eq($(this).index()).show().siblings().hide();
	});
});