 /*自己写的json数据，和网站效果一样  
   	ajax("json/team.json",{},'get',fn,true);
    function fn(data){
    	var data = JSON.parse(data);
    	console.log(data);

    	for(var i =0; i<data.length;i++){
    		var liObj = document.createElement('li');
    		liObj.className = "ng-scope";
    		liObj.innerHTML =  '<a href="'+data[i].goodsUrl+'"><div class="imgbox"><img alt="'+
    												data[i].goodsTit+'" src="'+data[i].goodsImg+'"><div class="text-title ng-binding">'+
    												data[i].goodsTit+'</div></div><div class="text-info ng-binding">'+data[i].goodsName+
    												'</div><div class="price"><strong class="ng-binding">￥'+data[i].goodsPrice+
    												'</strong> 起<!-- <del class="none ng-binding">￥1799起</del>--></div></a>';
	      document.getElementById("team-list").appendChild(liObj);
    	}
    }*/
    
	
	var urls =decodeURI(location.href.split("?")[1].split("=")[1]);
	console.log(urls);
	document.getElementById("mui-title").innerHTML = urls;
	if(urls == "港澳台"){
		var arr = ["香港","澳门","台湾"];
		var day = [5,7,3,12];
		//引用易源接口的全国景点
	   	ajax(
   			"http://route.showapi.com/268-1",
   			{	showapi_appid:35226,
    			showapi_sign:'9311eb2b16ff4b33baefd9a47b1238be',
    			keyword:arr[parseInt(Math.random()*arr.length)]
   			},'get',fn,true
	   	);
	   	fn();
	}
	if(urls == "国内短途"){
		var arr = ["宝鸡","商洛","安康","周至","汉中"];
		var day = [1,2,3];
		//引用易源接口的全国景点
	   	ajax(
   			"http://route.showapi.com/268-1",
   			{	showapi_appid:35226,
    			showapi_sign:'9311eb2b16ff4b33baefd9a47b1238be',
    			keyword:arr[parseInt(Math.random()*arr.length)]
   			},'get',fn,true
	   	);
	   	fn();
	}
	if(urls == "国内长途"){
		var arr = ["上海","故宫","山东","连云港","苏州"];
		var day = [7,10,6];
		//引用易源接口的全国景点
	   	ajax(
   			"http://route.showapi.com/268-1",
   			{	showapi_appid:35226,
    			showapi_sign:'9311eb2b16ff4b33baefd9a47b1238be',
    			keyword:arr[parseInt(Math.random()*arr.length)]
   			},'get',fn,true
	   	);
	   	fn();
	}
	if(urls == "海外"){
		var arr = [];
		//引用易源接口的全国景点
	   	ajax(
   			"http://route.showapi.com/268-1",
   			{	showapi_appid:35226,
    			showapi_sign:'9311eb2b16ff4b33baefd9a47b1238be',
    			keyword:arr[parseInt(Math.random()*arr.length)]
   			},'get',fn,true
	   	);
	   	fn();
	}
	
	
	function fn(data){
    	var data = JSON.parse(data);
    	data = data.showapi_res_body.pagebean.contentlist;
    	for(var i =0; i<10;i++){
    		var price = data[i].price?data[i].price:"待定";
    		var liObj = document.createElement('li');
    		liObj.className = "mui-table-view-cell mui-media";
    		liObj.innerHTML ='<a href=""https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd='+data[i].name
    							+'&rsv_pq=df76afa6000eb077&rsv_t=886d4zV9WQZ808gbWfO0ZlKoOT83qKD%2Ff4FlFWkVyAFhpN4QawMoVcgjEQk&rqlang=cn&rsv_enter=1&rsv_sug3=21&rsv_sug1=18&rsv_sug7=100"><img class="mui-media-object mui-pull-left" src="'+
    							data[i].picList[0].picUrl+'"><div class="mui-media-body"><p class="mui-ellipsis">'+data[i].summary
    							+'</p><span>游玩天数:'+
    							day[parseInt(Math.random()*day.length)]+'</span></div><div class="price"><b>￥'+
    							price+'</b>起</div></a>';
	      document.getElementById("table-list").appendChild(liObj);
    	}
    }