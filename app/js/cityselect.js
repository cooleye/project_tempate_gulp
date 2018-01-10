//var cities = [
//	{"city":"北京","district":["海淀","朝阳","昌平","东城","西城"]},
//	{"city":"河北","district":["衡水","石家庄","张家口","承德","保定"]}
//]

var cities = {
	"北京" : ["海淀","朝阳","昌平","东城","西城"],
	"河北" : ["衡水","石家庄","张家口","承德","保定"]
}



$(document).ready(function(){
	
	$(".selct-city").click(function(){
		$(".city-panel").show();
		$('.district-panel').hide()
	})
	
	//选择城市
	var str = ''
	for(c in cities){
		str += "<li class='city-selected'>" + c + "</li>"
	}
	$('#city-list').html(str)
	var district_str = ''
	for(d in cities["北京"]){
		district_str += "<li class='district-selected'>" + cities["北京"][d] + "</li>"
	}
	$('#district-list').html(district_str)
	districtBindEvent()
	
	
	$('.city-selected').click(function(){
		
		var city = $(this).text();
		$(".selct-city").text(city)
		$(".city-panel").hide();
		$('.district-panel').hide()
		$('.select-district').text('选择区县')
		
		var districts = cities[city];
		var district_str = ''
		for(d in districts){
			district_str += "<li class='district-selected'>" + districts[d] + "</li>"
		}
		$('#district-list').html(district_str)
		districtBindEvent()
	})
	
	
	//选择区县
	$('.select-district').click(function(){
		$(".district-panel").show();
		$(".city-panel").hide();
	})
	
	function districtBindEvent(){
		$('.district-selected').click(function(){
			var dis = $(this).text();
			$(".select-district").text(dis)
			$(".district-panel").hide();		
		})
	}
})
