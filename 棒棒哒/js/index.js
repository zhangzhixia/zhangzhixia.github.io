$(function(){
	var iW=window.innerWidth;
	var iH=window.innerHeight;
	var vertic1H=parseInt($('#verticScrollArea').css('height'));//获取第一竖屏的总高度
	var horizontalContainer=document.getElementById('horizontalScrollArea');
	var horizonDivs= horizontalContainer.children ;
	//第2屏
twoDefaultCss(horizonDivs,horizontalContainer);
function twoDefaultCss(horizonDivs,horizontalContainer){
	$(horizonDivs).each(function(i,elem){
		$(elem).css({
			width:iW,
			height:iH,
			overflow:'hidden',
			position:'absolute',
			top:0,
			bottom:0,
			// left:iW*i,
			textAlign:'center',
			marginLeft:'auto',
			display: 'block'
		})
	})
	$(horizontalContainer).css({
		width:horizonDivs.length*iW,
		height:iH,
		left:0
	})
	$('#section6_0').css({
		left:0,
		zIndex:40,
	})
	$('#section6').css({
		left:iW,
		zIndex:60
	})
	$('#section7').css({
		left:iW,
		zIndex:56
	})
	$('#shuffle3').css({
		left:iW,
		zIndex:50
	})
	$('#section8').css({
		left:iW,
		zIndex:60
	})
	$('#section9').css({
		left:iW,
		zIndex:56
	})
	$('#section10').css({
		left:iW,
		zIndex:54
	})
	$('#shuffle4').css({
		left:iW,
		zIndex:53
	})
	$('#section11').css({
		left:iW,
		zIndex:54
	})
	$('#section11bis').css({
		left:iW,
		zIndex:54
	})
	$('#shuffle5').css({
		left:iW,
		zIndex:53
	})
	$('#section12').css({
		left:iW,
		zIndex:54
	})
	$('#section13').css({
		left:iW,
		zIndex:54
	})
	$('#shuffle6').css({
		left:iW,
		zIndex:53
	})
}
	//第3平的left值是：第二横屏的宽度
	//bottom：第二横屏的高度
	var verticScrollArea2=document.getElementById('verticScrollArea2');
	var verticDivs2= verticScrollArea2.children ;//获取第二个竖屏的总高度
	var horizontalScrollArea=document.getElementById('horizontalScrollArea');
	var horiLen=horizontalScrollArea.children;
	var horiLeft=horizontalScrollArea.lastElementChild.offsetLeft;
	var verticH=verticDivs2.length*iH;
	var screen2W=horiLeft+iW;//第一横屏的宽度
	//第3屏
	threeDefaultCss(verticScrollArea2,verticDivs2);
	function threeDefaultCss(verticScrollArea2,verticDivs2){
		$(verticScrollArea2).css({
			bottom:0,
			left:0,
			width:iW,
			height:verticH,
			overflow:'hidden',
			marginTop:-134
		})
		$(verticDivs2).each(function(i,elem){
			$(elem).css({
				position:'absolute',
				left:0,
				bottom:iH,
				height:iH,
				width:iW,
				textAlign:'center',
				overflow:'hidden'
			})
		})
		$('#section14').css({zIndex:30})
		$('#section15').css({zIndex:28})
		$('#shuffle7').css({zIndex:26,bottom:iH})
	}
	
	

	var horizontalScroll2=document.getElementById('horizontalScroll2');
	var horizontalScrollArea2=document.getElementById('horizontalScrollArea2');
	var horizon2s= horizontalScrollArea2.children ;
	//第4屏
	fourDefaultCss(horizon2s,horizontalScroll2);
	function fourDefaultCss(horizon2s,horizontalScroll2){
		$(horizon2s).each(function(i,elem){
			$(elem).css({
				position:'absolute',
				left:0,
				top:0,
				height:iH,
				width:iW,
				textAlign:'center',
				overflow:'hidden'
			})
		})
		$(horizontalScroll2).css({
			width:iW,
			left:iW,
			height:iH,
		})
	//重置第4屏的布局样式
		$('#section16').css({zIndex:30})
		$('#section17').css({zIndex:30})
		$('#section18').css({zIndex:28})
		$('#shuffle8').css({zIndex:26})
		$('#section19').css({zIndex:30,top:iH,left:-iW,background:'#000'})
		$('#final').css({zIndex:28,top:iH,left:-iW,background:'#000'})
	}
	



//设置大滚动条
var track=document.querySelector('#scrollBar .track')//滚动条
var bjTrack=document.querySelector('#scrollBar .bj_track')//滚轮
var main=document.getElementById('main');
var horizontalScrollArea=document.getElementById('horizontalScrollArea');
var vertic1H=parseInt($('#verticScrollArea').css('height'));
var disY=0;
var Scale1=0;
var cale2=0;
var Scale3=0;
var Scale4=0;
var Scale5=0;
//鼠标拖动滚轮触发
// bjTrack.addEventListener('mousedown',fnDown);
// function fnDown(ev){
// 	disY=ev.pageY-bjTrack.offsetTop;
// 	document.addEventListener('mousemove',FnMove);
// 	document.addEventListener('mouseup',FnUp);
// 	function FnMove(ev){
// 		var pgT=ev.pageY-disY;
// 		if(pgT<=0){
// 			pgT=0;
// 		}else if(pgT>=track.offsetHeight-bjTrack.offsetHeight){
// 			pgT=track.offsetHeight-bjTrack.offsetHeight;
// 		}
// 		$(bjTrack).css('top',pgT+'px');
// 		bjTrack.style.top=pgT+'px';
// 		//滚动第一屏
// 		if(bjTrack.offsetTop<=108){
// 			Scale1=bjTrack.offsetTop/108;
// 			main.style.top=vertic1H*-Scale1+'px';

// 		}else if(bjTrack.offsetTop>108 && bjTrack.offsetTop<=390){
// 			Scale2=(bjTrack.offsetTop-130)/260;
// 			horizontalContainer.style.left=-screen2W*Scale2+'px';
// 		}
// 	}
// 	function FnUp(){
// 		document.removeEventListener('mousemove',FnMove);
// 		document.removeEventListener('mouseup',FnUp);
// 	}
// }
var IsCreateAudio=true;//这个开关用来判断要不要继续创建audio标签  true 可以，否则反之
var horiTop=horizontalScrollArea.lastElementChild.offsetTop;
var container=document.getElementById('container');
var oImg=document.getElementById('img');
var num=1;

//自动播放
var auto=true;
var timeAuto=null;
var bjt=0
$('#autoPlay').click(function(){
	if(auto){
		auto=false;
		this.style.backgroundPositionY=0;
		bjt=bjTrack.offsetTop;
		timeAuto=setInterval(function(){
			bjt++;
			$(bjTrack).css('top',bjt+'px');
			// console.log(bjTrack.offsetTop)
			if(bjTrack.offsetTop>=iH){
				clearInterval(timeAuto);
			}
			MusicFn(bjTrack.offsetTop);
			BigScreen(bjTrack.offsetTop);
			twoScreen(bjTrack.offsetTop);
			//枪战动画
			drugFire(bjTrack.offsetTop);
		},100)
		
	}else{
		auto=true;
		this.style.backgroundPositionY=-20+'px';
		clearInterval(timeAuto);
		$(bjTrack).css('top',bjTrack.offsetTop+'px');
	}
})
//音乐暂停和继续
var autoM=true;
$('#sound').click(function(){
	var audioDiv=$('#audioDiv').find('audio');
	if(autoM){
		autoM=false;
		IsCreateAudio=false;//关闭音乐后，就不要在创建audio标签了
		this.style.backgroundPositionY=0;
		audioDiv.each(function(i,elem){
			// elem.pause();
			elem.muted = true;
		})
	}else{
		autoM=true;
		IsCreateAudio=true;//打开音乐后，就可以创建audio标签
		this.style.backgroundPositionY=-20+'px';
		audioDiv.each(function(i,elem){
			// elem.play();
			elem.muted = false;
		})
	}
})
//回到顶部
$('#top').click(function(){
	// $(bjTrack).css('top',0);
	$(bjTrack).animate({top:0},50);
	twoDefaultCss(horizonDivs,horizontalContainer);
	threeDefaultCss(verticScrollArea2,verticDivs2);
	fourDefaultCss(horizon2s,horizontalScroll2);
	$('#main').animate({top:0},50);
	$('#section_text').animate({transform:'translateY(0px)'});
})
TotGun();
function TotGun(){
	fnGun(container,function(down){
		var T=bjTrack.offsetTop;
		var horizL=parseInt($('#horizontalScrollArea').css('left'));
		// console.log(horizL)
		//向上滚
		if(down){
			T-=1;
			if(T<=0){
				T=0
			}
			var timerO=setTimeout(function(){
				$('#section1_scroll').animate({opacity:100},50);
				$('#section1_arrow').animate({bottom:'100px',opacity:100},50);
				$('#section1_better').animate({bottom:'20px',opacity:100},120);
				$('.opacity').animate({opacity:100},30);
			},100)
			twoScreen(bjTrack.offsetTop);
			//枪战动画
			if(bjTrack.offsetTop>=258&&bjTrack.offsetTop<=282){
				num--;
				if(num<1){
					num=1;
				}
				oImg.src='../img/10/'+num+'.jpg';
			}
			if(bjTrack.offsetTop==282){
				PlayMusic('../music/daqiang.ogg');
			}
			if(offsetTop==40){
				PlayMusic('../music/cutModel01.ogg');
			}
		}else{
			T+=1;
			if(T>=track.offsetHeight-bjTrack.offsetHeight){
				T=track.offsetHeight-bjTrack.offsetHeight;
			}
			$('#section1_scroll')[0].style.opacity=0;
			var obj = {
				'element': $('#section1_arrow')[0],
				'type': "easeOut",
				'time': 800,
				'target': {'marginTop':650, 'opacity':0}
			};
			mTween(obj);
			var obj2 = {
				'element': $('#section1_better')[0],
				'type': "easeOut",
				'time': 300,
				'target': {'bottom':-30, 'opacity':0}
			};
			mTween(obj2);
			setTimeout(function(){
				$('.opacity').animate({opacity:0},30);
			},100)
			//设置音频
			var offsetTop=bjTrack.offsetTop;
			MusicFn(offsetTop);
			twoScreen(offsetTop);
			//枪战动画
			drugFire(offsetTop)
		}
		$(bjTrack).css('top',T+'px');
		//第1屏
		BigScreen(offsetTop)
	})
}
function MusicFn(offsetTop){
	if(offsetTop==14){
		PlayMusic('../music/chuaimen.ogg');
	}else if(offsetTop==40 || offsetTop==132 || offsetTop==198 
		|| offsetTop==290 || offsetTop==345 || offsetTop==488){
		PlayMusic('../music/cutModel01.ogg');
	}else if(offsetTop==50){
		PlayMusic('../music/nerverBg1.ogg');
	}else if(offsetTop==56){
		PlayMusic('../music/boliSuiLe.ogg');
	}else if(offsetTop==96){
		PlayMusic('../music/twoDog.ogg');
	}else if(offsetTop==134){
		PlayMusic('../music/nerverBg2.ogg');
	}else if(offsetTop==154){
		PlayMusic('../music/GogFindRun.ogg');
	}else if(offsetTop==176){
		PlayMusic('../music/ManycarsRun.ogg');
	}else if(offsetTop==216){
		PlayMusic('../music/carMingDi.ogg');
	}else if(offsetTop==304){
		PlayMusic('../music/shiziHuaLuo.ogg');
	}else if(offsetTop==360){
		PlayMusic('../music/qiaoDongCar.ogg');
	}else if(offsetTop==386){
		PlayMusic('../music/guang01.ogg');
	}else if(offsetTop==450){
		PlayMusic('../music/inputMsg.ogg');
	}
}
//music函数
function PlayMusic(src){
	//IsCreateAudio为真才可以创建音乐，防止前面音乐暂停了，滚到后面有音乐的图后会继续播放
	//音乐跟距滚动条距离顶部的高度，配合情景图片来创建的
	if(IsCreateAudio){
		var audioDiv=document.getElementById('audioDiv');
		var audio = document.createElement('audio');
		audio.src = src;//这里放音乐的地址
		audio.autoplay=true;
		audioDiv.appendChild(audio)
	}
	
}

//枪战动画
function drugFire(offsetTop){
	if(offsetTop==258){
		PlayMusic('../music/daqiang.ogg');
	}
	if(offsetTop>=258&&offsetTop<=282){
		num++;
		if(num>23){
			num=23;
		}
		oImg.src='../img/10/'+num+'.jpg';
	}
	
}				
function BigScreen(offsetTop){
	//滚动第一屏时 ，提升第一屏的层级，并将第二屏的left值恢复到0
		if(bjTrack.offsetTop>=0&&bjTrack.offsetTop<130){
			Scale1=bjTrack.offsetTop/129;
			if(bjTrack.offsetTop>=0&&bjTrack.offsetTop<12){
				var head=bjTrack.offsetTop/12;
				var headH=parseInt($('#invariant').css('height'));
				$('#invariant')[0].style.transform='translateY('+headH*-head+'px)';
			}

			$('#section_text')[0].style.transform='translateY('+335*Scale1+'px)';
			$('#section1_chair')[0].style.transform='translateY('+324*-2*Scale1+'px)';
			$('#section2_girl')[0].style.transform='translate3d('+613/2*Scale1+'px,0px,0px)';
			$('#section2_chair')[0].style.transform='translate3d('+338*Scale1+'px,0px,0px)';
			//桌子滚动
			if(bjTrack.offsetTop>=0&&bjTrack.offsetTop<50){
				var desk=(bjTrack.offsetTop)/50;
				$('#section1_desk')[0].style.top=300*(1-desk)+'px';
			}
			//碎玻璃比例（滚轮的top到滚轮移动的距离*玻璃从左到右移动的距离）
			var boli=0;
			var dogs=0;//狗吠比例
			if(bjTrack.offsetTop>=48&&bjTrack.offsetTop<=88){
				boli=(bjTrack.offsetTop-48)/40;
				$('#section3-full')[0].style.transform='translate3d('+(boli*140)+'px,0px,0px)';
			}
			if(bjTrack.offsetTop>75&&bjTrack.offsetTop<=107){
				dogs=(bjTrack.offsetTop-75)/32;
				$('#section5_dog1')[0].style.transform='translate3d('+(dogs*300)+'px,0px,0px)';
				$('#section5_dog2')[0].style.transform='translate3d('+(dogs*200)+'px,0px,0px)';
			}
			$('#verticContainer').css('zIndex',250)
			$('#horizontalScrollArea').css('left',iW+'px')
			$(main).animate({top:(vertic1H-iH)*-Scale1+"px"},50);
		}else if(bjTrack.offsetTop>420 && bjTrack.offsetTop<=485){
			//第3屏
			$(verticScrollArea2).css({zIndex:400})
			var offsetTop=bjTrack.offsetTop;
			if(offsetTop>=421&&offsetTop<=440){
				var sec01=(offsetTop-421)/19;
				$('#section14').css({bottom:(iH*(1-sec01))});
			}else if(offsetTop>=441&&offsetTop<=460){
				var sec02=(offsetTop-441)/19;
				$('#section14').css({bottom:(iH*-sec02)});
				$('#section15').css({bottom:(iH*(1-sec02))});
			}else if(offsetTop>=460&& offsetTop<=485){
				var sec03=(offsetTop-459)/25;
				$('#section15').css({bottom:(iH*-sec03)});
			}
			if(offsetTop>=421&&offsetTop<=470){
				var shuf6_1=(offsetTop-421)/49;
				$('#shuffle6').css({top:(iH*shuf6_1)});
			}
			if(offsetTop>=421&&offsetTop<485){
				var shuf7=(offsetTop-421)/64;
				$('#shuffle7').css({bottom:(iH*(1-shuf7))});
				// console.log(shuf7)
			}
		}else if(bjTrack.offsetTop>=486 && bjTrack.offsetTop<=555){
			//第四瓶
			var offsetTop=bjTrack.offsetTop;
			if(offsetTop>=486 && offsetTop<=504){
				var shuf7=(offsetTop-486)/18;
				$('#shuffle7').css({left:300*-shuf7});
				$('#section16').css({left:iW*-shuf7});
			}else if(offsetTop>=505 && offsetTop<=524){
				var sec16=(offsetTop-505)/19;
				$('#section16').css({left:(-iW)+(iW*-sec16)});
			}
			if(offsetTop>=500 && offsetTop<=520){
				var sec17=(offsetTop-500)/20;
				$('#section17').css({left:iW*-sec17});
			}else if(offsetTop>=521 && offsetTop<=534){
				var sec17=(offsetTop-521)/13;
				$('#section17').css({left:(-iW)+(iW*-sec17)});
			}
			if(offsetTop>=508 && offsetTop<=554){
				var shu8=(offsetTop-508)/46;
				$('#shuffle8').css({left:iW*-shu8});
			}
			if(offsetTop>=513 && offsetTop<=534){
				var sec18=(offsetTop-513)/21;
				$('#section18').css({left:iW*-sec18});
				if(offsetTop>=527&& offsetTop<=530){
					var opci=(offsetTop-527)/3;
					$('#section18_bg2').css({opacity:opci})
				}
			}else if(offsetTop>=535&& offsetTop<=554){
				var sec18=(offsetTop-535)/19;
				$('#section18').css({left:(-iW)+(iW*-sec18)});
			}
			if(offsetTop>=486 && offsetTop<=524){
				var guizi=(offsetTop-486)/38;
				$('#section16_meuble')[0].style.transform='translateX('+(guizi*200)+'px)';
			}
		}else if(bjTrack.offsetTop>556 && bjTrack.offsetTop<=626){
			var offsetTop=bjTrack.offsetTop;
			if(offsetTop>=557&&offsetTop<=576){
				var shu8=(offsetTop-557)/19;
				$('#shuffle8').css({top:(100*-shu8)});
			}
			if(offsetTop>=557&& offsetTop<=588){
				var sec19=(offsetTop-557)/31;
				$('#section19').css({top:(iH*(1-sec19))});
			}
			if(offsetTop>=589 && offsetTop<=625){
				var sec19_01=(offsetTop-589)/36;
				$('#section19').css({top:-iH*sec19_01});
				if(offsetTop>=596 && offsetTop<=602){
					var sca=(offsetTop-596)/6;
					// $('#invariant')[0].style.transform='translateY('+50*sca+'px)';
					var headH=parseInt($('#invariant').css('height'));
					$('#invariant')[0].style.transform='translateY('+headH*-(1-sca)+'px)';
				}
			}
			if(offsetTop>=581&&offsetTop<=624){
				var fin=(offsetTop-581)/43;
				$('#final').css({top:(iH*(1-fin))});
				$('#final_bg').css({opacity:fin})
			}
		}
}
//第2屏                                                               
function twoScreen(offsetTop){
	if(offsetTop>=130 && offsetTop<=418){
		if(offsetTop>=130 && offsetTop<=135){
			var Img0=(offsetTop-130)/5;
			$('#section6_0').css({left:iW*-Img0});
		}
		//女孩和树藤图比例
		if(offsetTop>132 && offsetTop<=157){
			var treeGirl=(offsetTop-132)/25;
			$('#section6_girl')[0].style.transform='translate3d('+(-treeGirl*200)+'px,0px,0px)';
		}

		//第一张图片和第二张,第三张图片一起移动
		if(offsetTop>=135&&offsetTop<=146){
			var Img1=(offsetTop-136)/10;
			$('#section6').css({left:iW*-Img1});
			$('#section7').css({left:iW*-Img1});
			$('#shuffle3').css({left:iW*-Img1});
		}else if(offsetTop>=147&&offsetTop<=174){
			var Img2=(offsetTop-147)/27;
			$('#section6').css({left:(-iW)+(iW*-Img2)});
		}else if(offsetTop>=174&&offsetTop<=201){
			var Img3=(offsetTop-175)/26;
			$('#section7').css({left:(-iW)+(iW*-Img3)});
		}
		//小幅度的进行背景旋转
		if(offsetTop>=178 && offsetTop<=238){
			$('#section8')[0].style.width=(iW+8)+'px';
			var readyJump=(offsetTop-178)/60;
		 	$('#section8_bg')[0].style.transform='rotate('+(-readyJump*2.2)+'deg)';
		}
		if(offsetTop>=204&&offsetTop<=222){
			var Img5=(offsetTop-204)/18;
			$('#section8').css({left:(iW*-Img5)})
		}else if(offsetTop>=222&&offsetTop<=238){
			var Img6=(offsetTop-223)/15;
			$('#section8').css({left:(-iW)+(iW*-Img6)});
			$('#section9').css({left:(iW*-Img6)})
		}else if(offsetTop>=239&&offsetTop<=254){
			var Img8=(offsetTop-239)/15;
			$('#section9').css({left:(-iW)+(iW*-Img8)});
		}
		//女孩在车顶
		 if(offsetTop>=222 && offsetTop<=254){
		 	var carTop=(offsetTop-222)/32;
		 	$('#section9_girl')[0].style.transform='translate3d('+(carTop*900)+'px,0px,0px)';
		 }
		
		if(offsetTop>=202&&offsetTop<=256){
			var Img4=(offsetTop-202)/54;
			$('#shuffle3').css({left:(-iW)+(300*-Img4)})
		}
		if(offsetTop>=212 && offsetTop<=248){
			var Img7=(offsetTop-212)/36;
			$('#section10').css({left:(-iW)*Img7})
		}
		if(offsetTop>=258&&offsetTop<=268){
			var Img9=(offsetTop-258)/10;
			$('#shuffle4').css({left:(-iW*Img9)});
		}
		if(offsetTop>=283&&offsetTop<=293){
			var Img10=(offsetTop-283)/10;
			$('#section10').css({left:(-iW)+(iW*-Img10)})
		}else if(offsetTop>=294&&offsetTop<=310){
			var Img11=(offsetTop-294)/16;
			$('#section11').css({left:-iW*Img11});
		}
		if(offsetTop>=296&&offsetTop<=321){
			var ImgSh4=(offsetTop-296)/25;
			$('#shuffle4').css({left:(-iW)+(iW*-ImgSh4)});
		}
		if(offsetTop>=311&&offsetTop<=330){
			var Img12=(offsetTop-311)/19;
			$('#section11').css({left:(-iW)+(iW*-Img12)});
			$('#section11bis').css({left:-iW*Img12});
			$('#shuffle5').css({left:-iW*Img12});
		}else if(offsetTop>=331&&offsetTop<=350){
			var Img13=(offsetTop-331)/19;
			$('#section11bis').css({left:(-iW)+(iW*-Img13)});
		}else if(offsetTop>=351&&offsetTop<=370){
			var Img14=(offsetTop-351)/19;
			$('#section12').css({left:-iW*Img14});
		}else if(offsetTop>=371&&offsetTop<=395){
			var Img15=(offsetTop-371)/24;
			$('#section12').css({left:(-iW)+(iW*-Img15)});
			$('#section13').css({left:-iW*Img15});
		}else if(offsetTop>=396&&offsetTop<=415){
			var Img16=(offsetTop-396)/19;
			$('#section13').css({left:(-iW)+(iW*-Img16)});
		}
		if(offsetTop>=360&&offsetTop<=420){
			var shuf6=(offsetTop-360)/60;
			$('#shuffle6').css({left:(-iW*shuf6)});
		}
	}
}
function fnGun(obj,gunMove){
	if(window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
		obj.addEventListener('DOMMouseScroll',fn);
	}else{
		obj.addEventListener('mousewheel',fn);
	}
	function fn(ev){
		var down=true;
		if(ev.wheelDelta){
			down=ev.wheelDelta>0?true:false;
		}else{
			down=ev.detail>0?false:true;
		}
		// console.log(down)
		typeof gunMove=='function' && gunMove(down);
		ev.preventDefault();
	}
}
})

