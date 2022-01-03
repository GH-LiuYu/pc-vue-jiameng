//手机号限制字段 公共文件
function isValidPhone(phone) {  
  	var myreg=/^1[3456789]\d{9}$/;  
  	if(!myreg.test(phone)) {  
     	return false;  
  	}else{  
      	return true;  
  	}  
}