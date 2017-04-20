function ajax(url,data,method,callBack,isAsync){


	//1、创建对象
	var xhr = null;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	var sendStr = "?";  
	for(var key in data){
		sendStr+=key+"="+data[key]+"&";
	}
	sendStr = sendStr.substring(0,sendStr.length-1);
	
	if(sendStr=="?"){
		sendStr = "";
	}
	//2、准备工作
	xhr.open(method,url+sendStr,isAsync);
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			callBack(xhr.responseText);
		}
	}
	
	//3、发送
	xhr.send();//
}


/*$(function(){
		$("#userName").blur(function(){
			/*
			"checkUser.php?userName=jzm"
			let userName = $(this).val();
			var xhr = new XMLHttpRequest();
			xhr.open("get","checkUser.php?userName=jzm",true);
			xhr.onreadystatechange = function(){
				
			}
			xhr.send();
					
			ajax1609("checkUser.php",{"userName":$(this).val()},"get",checkUserName,true);
			
			function checkUserName(data){
				
				
			}
			
		});
	*/
		