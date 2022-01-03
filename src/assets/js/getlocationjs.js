var pcwindowlocationhref = "http://jmw.com.cn/";var mwindowlocationhref = "http://m.jmw.com.cn/";var parameters = window.location.search;function geturl(url){if(parameters != ""){url += parameters;} return url;}function getP(script_name)
{
    var js = document.getElementsByTagName("script");
    var d = '[{';
    for(var i=0;i < js.length;i++){
        if(js[i].src.indexOf(script_name)>=0){
            var arraytemp = new Array();
            arraytemp = js[i].src.split('?');
            arraytemp = arraytemp[1].split('&');
            for(var x=0;x < arraytemp.length;x++)
            {
                var arrayval = arraytemp[x].split('=');
                d = d+arrayval[0]+':"'+arrayval[1]+'",';
            }
            //d[arraytemp[0]]=arraytemp[1];
        
        }
    }
    d = d+'}]';
    d=eval(d); 
    return d;
}
function IsPC(){
    var userAgentInfo = navigator.userAgent;  
    var phone = new Array("iPhone","iPad","Android","SymbianOS","Windows Phone","iPod");
    var flag = true;  
    for (var v = 0; v < phone.length; v++) {  
        if (userAgentInfo.indexOf(phone[v]) > 0) 
        { 
            flag = false; 
            return flag;  
            break; 
        }  
    }
    return flag;
}
function UrlIsPC()
{
    var url = document.URL;
    if(url.match(/^http:\/\/m\.jmw\.com\.cn\/.*/))
    {
        return false;
    }
    else
    {
        return true;
    }
}
function checkClieck()
{
    var sysispc = IsPC();
    var urlispc = UrlIsPC();
    if(sysispc != urlispc)
    {
        if(sysispc==true && (pcwindowlocationhref != '' || pcnewlocationhref != ''))
        {
            var url = geturl(pcwindowlocationhref);
            if(pcnewlocationhref != '')
            {
                url = geturl(pcnewlocationhref);
            }
            window.location.href = url;
        }
        else if(sysispc==false && mwindowlocationhref!='')
        {
            var url = geturl(mwindowlocationhref);
            window.location.href = url;
        }
    }
}
checkClieck();