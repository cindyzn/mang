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
    
			
	 
	//引用易源接口的全国景点
	var arr = ["故宫","山西","陕西","苏州","南京","重庆"];
   	ajax("http://route.showapi.com/268-1",
   			{	showapi_appid:35226,
    			showapi_sign:'9311eb2b16ff4b33baefd9a47b1238be',
    			keyword:arr[parseInt(Math.random()*arr.length)]
   				
   			},'get',fn,true);
    function fn(data){
    	var data = JSON.parse(data);
    	data = data.showapi_res_body.pagebean.contentlist;
			console.log(data);
    	for(var i =0; i<10;i++){
    		var price = data[i].price?data[i].price+"起":"待定";
    		var liObj = document.createElement('li');
    		liObj.className = "ng-scope";
    		liObj.innerHTML =  '<a href="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd='+data[i].name+'&rsv_pq=df76afa6000eb077&rsv_t=886d4zV9WQZ808gbWfO0ZlKoOT83qKD%2Ff4FlFWkVyAFhpN4QawMoVcgjEQk&rqlang=cn&rsv_enter=1&rsv_sug3=21&rsv_sug1=18&rsv_sug7=100"><div class="imgbox"><img alt="'+
    												data[i].name+'" src="'+data[i].picList[0].picUrlSmall+'"><div class="text-title ng-binding">'+
    												data[i].summary+'</div></div><div class="text-info ng-binding">'+data[i].name+
    												'</div><div class="price"><strong class="ng-binding">￥'+price+
    												'</strong> <!-- <del class="none ng-binding">￥1799起</del>--></div></a>';
	      document.getElementById("team-list").appendChild(liObj);
    	}
    }
  
//	PC
//	document.getElementById("button").onclick=function(){
//		if(document.getElementById("search-text").value){
//			location.href="city.html";
//		}
//	}
