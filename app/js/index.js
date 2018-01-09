var mySwiper = new Swiper('.swiper-container', {
	autoplay: true,//可选选项，自动滑动
  pagination: {el: '.swiper-pagination',clickable: true,}
})


$(".index-menu-item").hover(
function(){
//	console.log('hover  in')
	$(this).addClass('bg_green')
	var i = $(this).index()
//	console.log(i)
	$(".cate-list-sub-item").eq(i).show()
},function(){
	$(this).removeClass('bg_green')
//	console.log('hover out')
	var i = $(this).index()
	$(".cate-list-sub-item").eq(i).hide()
})

$(".cate-list-sub-item").hover(function(){
	$(this).show()
},function(){
	$(this).hide()
})
