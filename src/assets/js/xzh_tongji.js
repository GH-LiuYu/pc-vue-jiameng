  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-4873603-1']);
  _gaq.push(['_setDomainName', '.jmw.com.cn']);
  _gaq.push(['_setAllowHash', false]);
  _gaq.push(['_trackPageview']);

//360到访
var _mvq = _mvq || [];
_mvq.push(['$setAccount', 'm-100526-0']);
_mvq.push(['$logConversion']);

//新添加的统计代码 20170503
    (function(a,b,c,d,e){ 
        var s= b.createElement(c);s.async=1;s.defer=1;s.src='//t.agrantsem.com/tg.js?c='+d+'&t='+e; 
        var r= b.getElementsByTagName(c)[0];r.parentNode.insertBefore(s,r); 
    })(window,document,'script','AG_052647_FAFD','1'); 
//新添加的统计代码 20170503

  (function() {
	//360到访
var mvl = document.createElement('script');
mvl.type = 'text/javascript'; mvl.async = true;
mvl.src = ('https:' == document.location.protocol ? ' https://static-ssl.mediav.com/mvl.js' : ' http://static.mediav.com/mvl.js');
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(mvl, s);

    //google
    var ga = document.createElement('script'); 
    ga.type = 'text/javascript'; 
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; 
    s.parentNode.insertBefore(ga, s);

    //baidu
   var _bdhmProtocol = document.createElement('script');
      _bdhmProtocol.type = 'text/javascript';
      _bdhmProtocol.async = true;
      _bdhmProtocol.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + unescape('hm.baidu.com/h.js%3Fa106c437d4a312c39ce75b83f27c57aa');
	var m = document.getElementsByTagName('script')[0];
      m.parentNode.insertBefore(_bdhmProtocol, m); 
	  
    //jquery
    if(!window.jQuery) {     
      var jqueryPackage = document.createElement('script');
      jqueryPackage.type = 'text/javascript';
      jqueryPackage.async = true;
      jqueryPackage.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + unescape('image1.jmw.com.cn/public/js/jquery-1.6.min.js');    
      var first = document.getElementsByTagName('script')[0];
      first.parentNode.insertBefore(jqueryPackage, first);
    }

    //记录点击轨迹
    var _getLinkTracking = document.createElement('script');
    _getLinkTracking.type = 'text/javascript';
    _getLinkTracking.async = true;
    _getLinkTracking.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + unescape('public.jmw.com.cn/js/getLinkTracking.js');    
    var m = document.getElementsByTagName('script')[0];
    m.parentNode.insertBefore(_getLinkTracking, m);

  })();
 // 360抓取注册
var _mvq = window._mvq || [];window._mvq = _mvq;
_mvq.push(['$setAccount', 'm-100526-0']);
_mvq.push(['$setGeneral', 'registered', '', /*用户名*/ '', /*用户id*/ '']);
_mvq.push(['$logConversion']);

  //站长2017-09-27
  (function(){
      var bp = document.createElement('script');
      var curProtocol = window.location.protocol.split(':')[0];
      if (curProtocol === 'https'){
          bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
      }
      else{
          bp.src = 'http://push.zhanzhang.baidu.com/push.js';
      }
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(bp, s);
  })();