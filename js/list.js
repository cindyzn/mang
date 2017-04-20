 /*自己写的json数据，和网站效果一样
   	ajax("json/list.json",{	
    								
    									},'get',fn,true);
    function fn(data){
    	var data = JSON.parse(data);
    	console.log(data);

    	for(var i =0; i<data.length;i++){
    		var liObj = document.createElement('li');
    		
    		liObj.innerHTML = ' <a href="'+data[i].goodsUrl+'"><div class="hot_top"><img src="'+
    												data[i].goodsImg+'" class="index_img"><span class="span_type orange">'+
    												data[i].goodsType+'</span></div><p class="color3 left hot_bot">'+
    												data[i].goodsDesc+'</p><span class="span_price">￥ <b>'+data[i].goodsPrice
    												+'</b></span></a>';
	        document.getElementById("ul").appendChild(liObj);
    	}
    }*/
   
   
   //引用易源接口的全国景点
   	var arr = ["上海","北京","西安","杭州","深圳","武汉"];
    ajax("http://route.showapi.com/268-1",{	showapi_appid:35226,
    										showapi_sign:'9311eb2b16ff4b33baefd9a47b1238be',
    										keyword:arr[parseInt(Math.random()*arr.length)]
    										
    									},'get',fn,true);
    
    function fn(data){
    	var data = JSON.parse(data);
    	console.log(data);
    	data = data.showapi_res_body.pagebean.contentlist;
			
    	for(var i =0; i<data.length;i++){
    		
    		var liObj = document.createElement('li');
			var price = data[i].price?data[i].price:"待定";	
    		liObj.innerHTML = '<a href="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd='+data[i].name+'&rsv_pq=df76afa6000eb077&rsv_t=886d4zV9WQZ808gbWfO0ZlKoOT83qKD%2Ff4FlFWkVyAFhpN4QawMoVcgjEQk&rqlang=cn&rsv_enter=1&rsv_sug3=21&rsv_sug1=18&rsv_sug7=100"><div class="hot_top"><img src="'+
								data[i].picList[0].picUrl+'" class="index_img"><span class="span_type orange">'+
								data[i].cityName+'</span></div><p class="color3 left hot_bot">'+
								data[i].summary+'</p><span class="span_price">￥ <b>'+price
								+'</b></span></a>';
	        document.getElementById("ul").appendChild(liObj);
    	}
    	
		 	
    
    }
    
			

	