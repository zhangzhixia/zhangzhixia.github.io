$(function(){
	var list=$('#mainImgList');
	var lis=list.find('li');
	list[0].style.width=list.width()*lis.length+'px';

	var startPoint=0;
	var nowPoint=0;
	var dis=0;
	var startX = 0;
	var translateX = 0;
	list[0].addEventListener('touchstart',function(e){
		startPoint=e.changedTouches[0].pageX;
		startX = translateX;  /*记录开始拖拽之前元素的位置*/
		list[0].style.transition = "0ms";
	},false);
	list[0].addEventListener('touchmove',function(e){
		nowPoint=e.changedTouches[0].pageX;
		dis=nowPoint-startPoint;
		translateX  = startX + dis; /* .
		.. + 开始拖拽前元素位置，得到元素当前应该在的位置 */
		list[0].style.webkitTransform = list[0].style.transform = "translateX("+translateX+"px)";
	},false)
	list[0].addEventListener('touchend',function(){
		var lisW=list.width()/lis.length;
		if(translateX>0){
			translateX=0;
		}
		else if(Math.abs(translateX)>=(list.width()-lisW)){
			translateX=-1*(list.width()-lisW);
			console.log(list.width()-lisW)
		}
		console.log(Math.abs(translateX),list.width())
		list[0].style.webkitTransform = list[0].style.transform = "translateX("+translateX+"px)";

	},false)
	

	
})
