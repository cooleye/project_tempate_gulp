

/*
 
 * 根据url，和参数名，获得参数值
 * */
function getParam(url,k){
	var params = url.split('?')[1].split('&');
	var obj = {};
	var value;
	for(var i =0; i < params.length;i++){
		var el = params[i];
		var elarr = el.split("=");
		obj[elarr[0]] = elarr[1]
	}
	
	//obj = {id:111,name:2222}
	return obj[k];
}