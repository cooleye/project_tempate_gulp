var mySwiper = new Swiper('.swiper-container', {
	autoplay: true,//可选选项，自动滑动
  pagination: {el: '.swiper-pagination',clickable: true,}
})


$(".index-menu-item").hover(
function(){
	$(this).addClass('bg_green')
	var i = $(this).index()
	$(".cate-list-sub-item").eq(i).show()
},function(){
	$(this).removeClass('bg_green')
	var i = $(this).index()
	$(".cate-list-sub-item").eq(i).hide()
})

$(".cate-list-sub-item").hover(function(){
	$(this).show()
},function(){
	$(this).hide()
})


//请求商家接口，获取所有商家数据
$.get('http://localhost:3000/store',function(res){
	
	//{ total:20,data:[] }
	var html = baidu.template('store-list-item-temp',res);
	$('#store-list').html(html);
	
	//商家数据分页展示   
	$("#page").paging({
		pageNo:0,  // 第几页
		totalPage:Math.ceil(res.total/5),   //一共有多少页
		totalSize: res.total,   // 移动有多少条数据
		callback: function(page) {
			// 在回调李获取到 点击的页码
			console.log(page)
			getStoreLimit(page-1,5)
		}
	})
})

// 分页查询
function getStoreLimit(page,size){
	console.log('page',page)
	$.get('http://localhost:3000/storelimit',{page:page,size:size},function(res){
	
		var html = baidu.template('store-list-item-temp',res);
		$('#store-list').html(html);
	})
}

// 手机列表展示
$.get('http://localhost:3000/phone',function(res){
	
	var html = baidu.template('phone_temp',res);
	$("#phone_lists").html(html);
	
	var str = JSON.stringify(res)
	window.localStorage.detail = str;
	//  setItem()   localStorage.a = a;   localStorage['a'] = a;
	
})
