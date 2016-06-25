$(function(){
	var iW=window.innerWidth;
	var iH=window.innerHeight;
	var vertic1H=parseInt($('#verticScrollArea').css('height'));//获取第一竖屏的总高度
	var horizontalContainer=document.getElementById('horizontalScrollArea');
	var horizonDivs= horizontalContainer.children ;
	//第2屏
	$(horizontalContainer).css({
		width:iW*(horizonDivs.length+1),
		height:iH,
		display:'inline-block'
	})
	$(horizonDivs).each(function(i,elem){
		$(elem).css({
			width:iW,
			height:iH,
			float:'left'
		})
	})
	









	// //第3平的left值是：第二横屏的宽度
	// //bottom：第二横屏的高度
	// var verticScrollArea2=document.getElementById('verticScrollArea2');
	// var verticDivs2= verticScrollArea2.children ;//获取第二个竖屏的总高度
	// var horizontalScrollArea=document.getElementById('horizontalScrollArea');
	// var horiLen=horizontalScrollArea.children;
	// var horiLeft=horizontalScrollArea.lastElementChild.offsetLeft;
	// var verticH=verticDivs2.length*iH;
	// var screen2W=horiLeft+iW;//第一横屏的宽度
	// //第3屏
	// $(verticScrollArea2).css({
	// 	bottom:0,
	// 	left:0,
	// 	width:iW,
	// 	height:verticH,
	// 	overflow:'hidden',
	// 	marginTop:-134
	// })
	// // $(verticDivs2).each(function(i,elem){
	// // 	$(elem).css({
	// // 		position:'absolute',
	// // 		left:0,
	// // 		bottom:iH*i,
	// // 		height:iH,
	// // 		width:iW,
	// // 		textAlign:'center',
	// // 		overflow:'hidden'
	// // 	})
	// // })

	// var fourLeft=horiLeft+iW+iW;
	// var horizontalScrollArea2=$('#horizontalScrollArea2');
	// var horizon2s=horizontalScrollArea2[0].children;
	// var horizon2L=horizon2s.length;
	// //第4屏
	// $(horizontalScrollArea2).css({
	// 	width:iW*horizon2L,
	// 	left:iW,
	// 	top:0,
	// 	height:horizon2L*iH,
	// 	textAlign:'center',
	// 	overflow:'hidden'

	// })
	// $(horizon2s).each(function(i,elem){
	// 	$(elem).css({
	// 		width:iW,
	// 		height:iH,
	// 		overflow:'hidden',
	// 		position:'absolute',
	// 		top:0,
	// 		left:iW*i,
	// 	 	textAlign:'center'
	// 	})
	// })



//设置大滚动条
// var track=document.querySelector('#scrollBar .track')//滚动条
// var bjTrack=document.querySelector('#scrollBar .bj_track')//滚轮
// var main=document.getElementById('main');
// var horizontalScrollArea=document.getElementById('horizontalScrollArea');
// var vertic1H=parseInt($('#verticScrollArea').css('height'));
// // var disY=0;
// // var Scale1=0;
// // var cale2=0;
// // var Scale3=0;
// // var Scale4=0;
// // var Scale5=0;

// var horiTop=horizontalScrollArea.lastElementChild.offsetTop;
// var container=document.getElementById('container');
// var oImg=document.getElementById('img');
// var num=1;
// var onOff=true;
// fnGun(container,function(down){
// 	var T=bjTrack.offsetTop;
// 	var horizL=parseInt($('#horizontalScrollArea').css('left'));
// 	console.log(horizL)
// 	//向上滚
// 	if(down){
// 		T-=1;
// 		if(T<=0){
// 			T=0
// 		}
// 		$('#section1_scroll').animate({opacity:100},100);
// 		$('#section1_arrow').animate({marginTop:'546px',opacity:100},80);
// 		$('#section1_better').animate({bottom:'20px',opacity:100},120);
// 		$('#shuffle1_zev').animate({opacity:100},50);
// 		$('#shuffle2_sport').animate({opacity:100},50);
// 		$('#shuffle3_4wd').animate({opacity:100},50);
// 		$('#shuffle4_auto').animate({opacity:100},50);
// 		$('#shuffle5_4wd2').animate({opacity:100},50);
// 		$('#shuffle6_zev2').animate({opacity:100},50);
// 		$('#shuffle7_auto2').animate({opacity:100},50);
// 		$('#shuffle8_zev3').animate({opacity:100},50);
// 		//设置一个开关，默认为true，为了滚动横屏大图
// 		if(onOff){
// 			//调用滚动第二屏的函数
// 			twoScreen(bjTrack.offsetTop);
// 			//如果横屏大图的left值在下面的区间内（要枪战的首页），关闭滚动的大图
// 			if(horizL<=-8196&&horizL>=-8800){
// 				onOff=false;
// 			}
// 		}
// 		if(horizL<=-8196&&horizL>=-8800){
// 			onOff=false;
// 			//在关闭大图的时间内，把他的left值保持在-8196这个位置
// 			$('#horizontalScrollArea').css('left',-8196+'px');
// 			//开始根据滚动条来切换枪战图片了
// 			num--;
// 			if(num<1){
// 				num=1;
// 				//切到最后一张时，等待1秒后打开横屏大图滚动
// 				var timer=setTimeout(function(){
// 					onOff=true;
// 					twoScreen(bjTrack.offsetTop);
// 				},100);
// 			}
// 			oImg.src='../img/10/'+num+'.jpg';
// 		}else{
// 			var timer=setTimeout(function(){
// 				onOff=true;
// 			},1000);
// 		}

// 	}else{
// 		T+=1;
// 		if(T>=track.offsetHeight-bjTrack.offsetHeight){
// 			T=track.offsetHeight-bjTrack.offsetHeight;
// 		}
// 		$('#section1_scroll')[0].style.opacity=0;
// 		var obj = {
// 			'element': $('#section1_arrow')[0],
// 			'type': "easeOut",
// 			'time': 800,
// 			'target': {'marginTop':650, 'opacity':0}
// 		};
// 		mTween(obj);
// 		var obj2 = {
// 			'element': $('#section1_better')[0],
// 			'type': "easeOut",
// 			'time': 300,
// 			'target': {'bottom':-30, 'opacity':0}
// 		};
// 		mTween(obj2);
// 		$('#shuffle1_zev').animate({opacity:0},50);
// 		$('#shuffle2_sport').animate({opacity:0},50);
// 		$('#shuffle3_4wd').animate({opacity:0},50);
// 		$('#shuffle4_auto').animate({opacity:0},50);
// 		$('#shuffle5_4wd2').animate({opacity:0},50);
// 		$('#shuffle6_zev2').animate({opacity:0},50);
// 		$('#shuffle7_auto2').animate({opacity:0},50);
// 		$('#shuffle8_zev3').animate({opacity:0},50);
		
// 		//设置一个开关，默认为true，为了滚动横屏大图
// 		if(onOff){
// 			//调用滚动第二屏的函数
// 			twoScreen(bjTrack.offsetTop);
// 			//如果横屏大图的left值在下面的区间内（要枪战的首页），关闭滚动的大图
// 			if(horizL<=-8196&&horizL>=-8800){
// 				onOff=false;
// 			}
// 		}
// 		if(horizL<=-8196&&horizL>=-8800){
// 			onOff=false;
// 			//在关闭大图的时间内，把他的left值保持在-8196这个位置
// 			$('#horizontalScrollArea').css('left',-8196+'px');
// 			//开始根据滚动条来切换枪战图片了
// 			num++;
// 			if(num>23){
// 				num=23;
// 				//切到最后一张时，等待1秒后打开横屏大图滚动
// 				var timer=setTimeout(function(){
// 					onOff=true;
// 					twoScreen(bjTrack.offsetTop);
// 				},100);
// 				$('#horizontalScrollArea').css('left',-8196+'px');
// 			}
// 			oImg.src='../img/10/'+num+'.jpg';
// 		}else{
// 			onOff=true;
			
// 		}
// 	}
// 	var horizonL=parseInt($('#horizontalScrollArea2').css('left'));
// 	var arr=['../img/18/bg.jpg','../img/18/bg2.jpg'];
// 	if(horizonL<-3500){
// 		$('#section18_bg')[0].src=arr[1];
// 	}else{
// 		$('#section18_bg')[0].src=arr[0];
// 	}

// 	$('#shuffle2')[0].style.display='block';
// 	$(bjTrack).css('top',T+'px');
// 	//第1屏
// 	if(bjTrack.offsetTop>=130){
// 		$('#shuffle2')[0].style.display='none';
// 	}
// 	////滚动第一屏时 ，提升第一屏的层级，并将第二屏的left值恢复到0
// 	if(bjTrack.offsetTop>=0&&bjTrack.offsetTop<=108){
// 		Scale1=bjTrack.offsetTop/108;
// 		$('#invariant')[0].style.transform='translateY('+950*-Scale1+'px)';
// 		$('#section_text')[0].style.transform='translateY('+335*Scale1+'px)';
// 		$('#section1_chair')[0].style.transform='translateY('+324*-2*Scale1+'px)';
// 		$('#section2_girl')[0].style.transform='translate3d('+613/2*Scale1+'px,0px,0px)';
// 		$('#section2_chair')[0].style.transform='translate3d('+338*Scale1+'px,0px,0px)';
// 		$('#section1_desk')[0].style.top=350+(2000*-Scale1)+'px';
// 		//碎玻璃比例（滚轮的top到滚轮移动的距离*玻璃从左到右移动的距离）
// 		var boli=0;
// 		var dogs=0;//狗吠比例
// 		if(bjTrack.offsetTop>=48&&bjTrack.offsetTop<=88){
// 			boli=(bjTrack.offsetTop-48)/40;
// 			$('#section3-full')[0].style.transform='translate3d('+(boli*140)+'px,0px,0px)';
// 		}
// 		if(bjTrack.offsetTop>75&&bjTrack.offsetTop<=107){
// 			dogs=(bjTrack.offsetTop-75)/32;
// 			$('#section5_dog1')[0].style.transform='translate3d('+(dogs*300)+'px,0px,0px)';
// 			$('#section5_dog2')[0].style.transform='translate3d('+(dogs*200)+'px,0px,0px)';
// 		}
// 		$('#verticContainer').css('zIndex',250)
// 		$('#horizontalScrollArea').css('left',iW+'px')
// 		$(main).animate({top:(vertic1H-iH)*-Scale1+"px"},50);
		
// 	}else if(bjTrack.offsetTop>388 && bjTrack.offsetTop<=488){
// 		 Scale3=(bjTrack.offsetTop-388)/100;//第3屏
// 		 $(horizontalScrollArea2).css('left',iW);
// 		 $(verticScrollArea2).css({
// 			bottom:horiTop+verticH*-Scale3,
// 			zIndex:300
// 		})
// 	}else if(bjTrack.offsetTop>488 && bjTrack.offsetTop<=560){
// 		 Scale4=(bjTrack.offsetTop-488)/72;
// 		 console.log(Scale4)
// 		 $(horizontalScrollArea2).css('left',-horizon2L*iW*Scale4);
// 	}
	
// })
// function twoScreen(offsetTop){
// 	if(offsetTop>108 && offsetTop<=388){
// 		var treeGirl=0;//女孩和树藤图比例
// 		if(offsetTop>132 && offsetTop<=157){
// 			// $('#section7')[0].style.left=0;
// 			treeGirl=(offsetTop-132)/25;
// 			//400px是图片移动的幅度
// 			$('#section6_girl')[0].style.transform='translate3d('+(-treeGirl*200)+'px,0px,0px)';
// 			$('#shuffle2')[0].style.display='block';
// 		}else if(offsetTop>=178 && offsetTop<=238){
// 			$('#section8')[0].style.width=1394+'px';
// 			var readyJump=(offsetTop-178)/60;
// 			$('#section8_bg')[0].style.transform='rotate('+(-readyJump*2)+'deg)';
// 			console.log()
// 		}
// 		//女孩在车顶
// 		if(offsetTop>=220 && offsetTop<=254){
// 			var carTop=(offsetTop-220)/34;
// 			$('#section9_girl')[0].style.transform='translate3d('+(carTop*700)+'px,0px,0px)';
// 		}
// 		$('#verticContainer').css('zIndex',100)
// 		Scale2=(offsetTop-108)/280;
// 		$(verticScrollArea2).css('bottom',0)
// 		horizontalContainer.style.left=-(screen2W-iW)*Scale2+'px';
// 	}
// }
// function fnGun(obj,gunMove){
// 	if(window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
// 		obj.addEventListener('DOMMouseScroll',fn);
// 	}else{
// 		obj.addEventListener('mousewheel',fn);
// 	}
// 	function fn(ev){
// 		var down=true;
// 		if(ev.wheelDelta){
// 			down=ev.wheelDelta>0?true:false;
// 		}else{
// 			down=ev.detail>0?false:true;
// 		}
// 		// console.log(down)
// 		typeof gunMove=='function' && gunMove(down);
// 		ev.preventDefault();
// 	}
// }



})

