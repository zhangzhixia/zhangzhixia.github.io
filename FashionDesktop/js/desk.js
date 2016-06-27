	window.onload=function(){
		var timer;
		//移动桌面
		var wrap=document.getElementById('wrap');
		var disX=0;
		var disY=0;
		wrap.addEventListener('mousedown',mouseDown);
		function mouseDown(ev){
			disX=ev.pageX-wrap.offsetLeft;
			disY=ev.pageY-wrap.offsetTop;
			document.addEventListener('mousemove',mouseMove);
			document.addEventListener('mouseup',mouseUp);
			ev.preventDefault();
		}
		function mouseMove(ev){
			var WdisY=ev.pageY-disY;
			var WdisX=ev.pageX-disX;
			console.log(disX ,disY)
			if(WdisX <=- 650){
				WdisX = -650;
			}else if( WdisX > 100){
				WdisX=100;
			}
			if(WdisY<=-650){
				WdisY=-650;
			}else if(WdisY>100){
				WdisY=100;
			}

			wrap.style.top=WdisY+'px';
			wrap.style.left=WdisX+'px';
		}
		function mouseUp(){
			document.removeEventListener('mousemove',mouseMove);
			document.removeEventListener('mouseup',mouseUp);
		}
		//更换电脑屏幕
		//鼠标移上去显示桌面，单击可以更换系统桌面，鼠标移开后5秒关闭桌面
		var imac=document.getElementById('imac');
		var srceens=imac.children;
		var onOff=true;
		imac.onmouseover=function(){
			srceens[0].className='show';
			for(var i=0;i<srceens.length;i++){
				srceens[i].onclick=function(){
					for(var i=0;i<srceens.length;i++){
						srceens[i].className='show';
					}
					this.className='hide';
				}
			}
			clearTimeout(timer);
		}
		imac.onmouseout=function(){
			timer=setTimeout(function(){
				for(var i=0;i<srceens.length;i++){
					srceens[i].className='hide';
				}
			},5000);
		}
		//手机滑过效果
		var phone=document.getElementById('phone');
		phone.onmouseover=function(){
			phone.style.backgroundPositionX='-110px';
			clearTimeout(timer);
		}
		phone.onmouseout=function(){
			timer=setTimeout(function(){
				phone.style.backgroundPositionX='0px';
			},2000);
		}
		//单击小手机显示大手机
		var bigPhone=document.getElementById('bigPhone');
		var huakuai=document.getElementById('huakuai');
		var SecPhone=document.getElementById('SecPhone');
		var SecPhoneBj=document.getElementById('SecPhoneBj');
		var phoneList=SecPhone.querySelectorAll('.phoneList')[0];
		var QQpage=document.getElementById('QQpage');
		var qqIndex=document.getElementById('qqIndex');
		var huakuaiParent=document.getElementById('huakuaiParent');
		var timer2;
		var timer3;//切换手机qq页面的延时器
		//单击小手机打开大手机，
		phone.addEventListener('click',function(){
			//打开大手机时的一些默认值
			SecPhone.style.display='block';
			SecPhoneBj.style.display='block';
			bigPhone.style.display='block';
			phone.style.display='none';
			huakuai.style.left='70px';//滑块默认显示在左侧70像素的地方
			qqIndex.style.display='none';//qq主页面默认隐藏
			QQpage.style.display='none';//qq聊天页面默认隐藏
			huakuai.style.display='block';//小滑块默认显示（页面再次打开时保留了聊天记录）
			//对大手机没有任何操作时2秒后关闭
			timer2=setTimeout(closeBigPhone,2000);
		})
		bigPhone.addEventListener('mouseover',function(){
			var mdisX=0;
			clearTimeout(timer);//清除鼠标移开的延时器
			clearTimeout(timer2);//清除对大手机无操作的延时器
			//移动小滑块
			huakuai.addEventListener('mousedown',HKmouseDown);
			var hkL=0;//小滑块滑动的距离（70起始点；220+滑块宽度：终点）
			function HKmouseDown(ev){
				//移动小滑块的时候把手机移动事件清除
				SecPhone.removeEventListener('mousedown',bigPhoneDown);
				//开始写小滑块移动
				mdisX=ev.pageX-huakuai.offsetLeft;
				huakuaiParent.addEventListener('mousemove',HKmouseMove);
				huakuaiParent.addEventListener('mouseup',HKmouseUp);
				ev.preventDefault();
				function HKmouseMove(ev){
					hkL=ev.pageX-mdisX;
					if(hkL<=70){
						hkL=70;
					}else if(hkL>=150+huakuai.offsetWidth){
						hkL=220+huakuai.offsetWidth;
					}
					huakuai.style.left=hkL+'px';
					if(huakuai.offsetLeft>=292){
						SecPhone.addEventListener('mousedown',bigPhoneDown);
						qqIndex.style.display='block';
						timer3=setTimeout(function(){
							qqIndex.style.display='none';
							QQpage.style.display='block';
						},500);
						huakuai.style.display='none';
						
					}

				}
				function HKmouseUp(){
					huakuaiParent.removeEventListener('mousemove',HKmouseMove);
					huakuaiParent.removeEventListener('mouseup',HKmouseUp);
					//松开小滑块的时候将手机移动事件恢复
					SecPhone.addEventListener('mousedown',bigPhoneDown);
				}
				
			}
			
		})
		//移动手机
		var bigDisX=0;
		SecPhone.addEventListener('mousedown',bigPhoneDown);
		function bigPhoneDown(ev){
			bigDisX=ev.pageX-SecPhone.offsetLeft;
			bigDisY=ev.pageY-SecPhone.offsetTop;
			SecPhoneBj.addEventListener('mousemove',bigPhoneMove);
			SecPhoneBj.addEventListener('mouseup',bigPhoneUp);
			ev.preventDefault();
		}
		function bigPhoneMove(ev){
			var bigPL=ev.pageX-bigDisX;
			var bigPT=ev.pageY-bigDisY;
			SecPhone.style.left=bigPL+'px';
			SecPhone.style.top=bigPT+'px';
		}
		function bigPhoneUp(){
			SecPhoneBj.removeEventListener('mousemove',bigPhoneMove);
			SecPhoneBj.removeEventListener('mouseup',bigPhoneUp);
		}
		//鼠标移开2秒后隐藏大手机，显示小手机
		bigPhone.addEventListener('mouseout',function(){
			timer=setTimeout(closeBigPhone,2000);
		})
		//公共的关闭大手机
		function closeBigPhone(){
			SecPhone.style.display='none';
			SecPhoneBj.style.display='none';
			bigPhone.style.display='none';
			phone.style.display='block';
		}

	//以下都是针对于QQ页面的操作
	var txt=document.getElementById('txt');
	var btn=document.getElementById('btn');
	var obox=document.getElementById('box');
	var oIco=document.getElementById('ico');
	var selBtn=document.getElementById('selBtn');
	var gun=document.getElementById('gun');
	var hua=document.getElementById('hua');
	var qqWrap=document.getElementById('qqWrap');
	//切换头像图标
	oIco.onclick=function(){
		if(oIco.className=='smallIco'){
			oIco.className='guzhangIco';
			btn.onclick=function(){
				common('txtLeft','IcoL');
			}
			txt.onkeydown=function(ev){
				//console.log(ev)
				if(selBtn.value=='enter' && ev.keyCode==13 && !ev.altKey && !ev.ctrlKey && !ev.shiftKey){
					common('txtLeft','IcoL');
				}else if(selBtn.value=='ctrl+enter' && ev.ctrlKey && ev.keyCode==13){
					common('txtLeft','IcoL');
				}
			}
		}else{
			oIco.className='smallIco';
			btn.onclick=function(){
				common('txtRight','IcoR');
			}
			txt.onkeydown=function(ev){
				//console.log(ev)
				if(selBtn.value=='enter' && ev.keyCode==13 && !ev.altKey && !ev.ctrlKey && !ev.shiftKey){
					common('txtRight','IcoR');
				}else if(selBtn.value=='ctrl+enter' && ev.ctrlKey && ev.keyCode==13){
					common('txtRight','IcoR');
				}
			}
		}
	}
	//获取文本框内容
	btn.onclick=function(){
		common('txtRight','IcoR');
	}
	txt.onkeydown=function(ev){
				//console.log(ev)
				if(selBtn.value=='enter' && ev.keyCode==13 && !ev.altKey && !ev.ctrlKey && !ev.shiftKey){
					common('txtRight','IcoR');
				}else if(selBtn.value=='ctrl+enter' && ev.ctrlKey && ev.keyCode==13){
					common('txtRight','IcoR');
				}
			}
	function common(can1,can2){
			var txtC=txt.value;
				if(txtC==''){
					//alert('不可发送空消息！');
					txt.style.borderColor='red';
					txt.focus();
				}else{
					txt.style.borderColor='#ccc';
					obox.innerHTML += '<p class="txtClass '+can1+'">'+txtC+'<span class="'+can2+'"></span></p>';
					//alert(obox.innerHTML);
					txt.value='';
					if(obox.offsetHeight>=qqWrap.offsetHeight){
						gun.style.display='block';
						obox.style.width='318px';
					}
				}
		}
	//添加滚动条
	hua.addEventListener('mousedown',huaDown);
	var huaDiY=0;
	var huasca=0;
	var huaT=0;
	gun.addEventListener('click',huaClick);
	function huaDown(ev){
		//滚动条的时候把手机移动事件清除
		SecPhone.removeEventListener('mousedown',bigPhoneDown);
		huaDiY=ev.pageY-hua.offsetTop;
		document.addEventListener('mousemove',huaMove);
		document.addEventListener('mouseup',huaUp);
		function huaMove(ev1){
			huaCommon(ev1);
		}
		function huaUp(){
			document.removeEventListener('mousemove',huaMove);
			document.removeEventListener('mouseup',huaUp);
			//滚动条的时候把手机移动事件清除
			SecPhone.addEventListener('mousedown',bigPhoneDown);
		}
	}
	function huaClick(ev2){
		huaCommon(ev2);
	}
	function huaCommon(eve){
		huaT=eve.pageY-huaDiY;
		if(huaT<=0){
			huaT=0;
		}else if(huaT>=gun.offsetHeight-hua.offsetHeight){
			huaT=gun.offsetHeight-hua.offsetHeight;
		}
		huasca=huaT/(gun.offsetHeight-hua.offsetHeight);
		hua.style.top=huaT+'px';
		obox.style.top=huasca*(qqWrap.offsetHeight-obox.offsetHeight)+'px';
	}
	//添加滚轮事件
	//调用滚轮方法，给qq聊天页添加滚轮
		addWheel(qqWrap,function(down){
			var num=hua.offsetTop;
			if(down){
				num-=5;
				if(num<=0){
					num=0;
				}
			}else{
				num+=5;
				if(num>=gun.offsetHeight-hua.offsetHeight){
					num=gun.offsetHeight-hua.offsetHeight;
				}
			}
			var huasca2=num/(gun.offsetHeight-hua.offsetHeight);
			hua.style.top=num+'px';
			obox.style.top=huasca2*(qqWrap.offsetHeight-obox.offsetHeight)+'px';
		})

	//封装滚轮事件方法
	function addWheel(obj,fn){
		if(window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
			obj.addEventListener('DOMMouseScroll',fnEv);
		}else{
			obj.addEventListener('mousewheel',fnEv);
		}
		function fnEv(ev){
			var down=true;
			if(ev.wheelDelta){
				down=ev.wheelDelta>0?true:false;
			}else{
				down=ev.detail<0?true:false;
			}
			typeof fn==='function' && fn(down);
			ev.preventDefault();
		}
	}

	//滑过桌面显示右侧透明层的显示和隐藏
		var rightTmc=document.getElementById('rightTmc');
		var rightTmc2=document.getElementById('rightTmc2');
			//调用startMove
			rightTmc.onmouseover = function() {
				var obj = {
					'element': rightTmc2,
					'type': "bounceOut",
					'time': 800,
					'target': {'opacity':100,'width':90}
				};
				mTween(obj);
			};
			rightTmc.onmouseout = function() {
				var obj = {
					'element': rightTmc2,
					'type': "bounceOut",
					'time': 1000,
					'target': {'opacity':0,'width':0}
				};
				mTween(obj);
			};
		//右侧播放器
		var audio=document.getElementsByTagName('audio')[0];
		var rightslid=document.getElementById('rightslid');
		var Pspans=rightslid.getElementsByTagName('span');
		//静音
		var sca1=0;
		Pspans[0].onclick=function(){
			sca1++;
			if(sca1%2){
				audio.volume=0;
				this.style.backgroundPositionY=-200+'px';
			}else{
				audio.volume=1;
				this.style.backgroundPositionY=-136+'px';
			}
		}
		var sca=0;
		//播放、暂停
		Pspans[2].onclick=function(){
			sca++;
			if(sca%2){
				this.style.backgroundPositionY=-76+'px';
				audio.play();
			}else{
				this.style.backgroundPositionY=-12+'px';
				audio.pause();
			}
		}
		//重新播放
		Pspans[4].onclick=function(){
			audio.load();
			audio.play();
		}
		//下一首
		var mp3Arr=['1.mp3','2.mp3','3.mp3','4.mp3'];
		var pn=0;
		Pspans[1].onclick=function(){
			pn++;
			if(pn>=mp3Arr.length){
				pn=mp3Arr.length-1;
			}
			audio.src=mp3Arr[pn];
			audio.play();
		}
		//上一首
		Pspans[3].onclick=function(){
			pn--;
			if(pn<=0){
				pn=0;
			}
			audio.src=mp3Arr[pn];
			audio.play();
		}
		//翻页
		

		function loadApp() {

	var flipbook = $('.sample-docs');

	// Check if the CSS was already loaded
	
	if (flipbook.width()==0 || flipbook.height()==0) {
		setTimeout(loadApp, 10);
		return;
	}

	// Mousewheel

	$('#book-zoom').mousewheel(function(event, delta, deltaX, deltaY) {

		var data = $(this).data(),
			step = 30,
			flipbook = $('.sample-docs'),
			actualPos = $('#slider').slider('value')*step;

		if (typeof(data.scrollX)==='undefined') {
			data.scrollX = actualPos;
			data.scrollPage = flipbook.turn('page');
		}

		data.scrollX = Math.min($( "#slider" ).slider('option', 'max')*step,
			Math.max(0, data.scrollX + deltaX));

		var actualView = Math.round(data.scrollX/step),
			page = Math.min(flipbook.turn('pages'), Math.max(1, actualView*2 - 2));

		if ($.inArray(data.scrollPage, flipbook.turn('view', page))==-1) {
			data.scrollPage = page;
			flipbook.turn('page', page);
		}

		if (data.scrollTimer)
			clearInterval(data.scrollTimer);
		
		data.scrollTimer = setTimeout(function(){
			data.scrollX = undefined;
			data.scrollPage = undefined;
			data.scrollTimer = undefined;
		}, 1000);

	});

	// Slider

	$( "#slider" ).slider({
		min: 1,
		max: 100,

		start: function(event, ui) {
			if (!window._thumbPreview) {
				_thumbPreview = $('<div />', {'class': 'thumbnail'}).html('<div></div>');
				setPreview(ui.value);
				_thumbPreview.appendTo($(ui.handle));
			} else
				setPreview(ui.value);

			moveBar(false);
		},

		slide: function(event, ui) {
			setPreview(ui.value);
		},

		stop: function() {
			if (window._thumbPreview)
				_thumbPreview.removeClass('show');
			
			$('.sample-docs').turn('page', Math.max(1, $(this).slider('value')*2 - 2));
		}
	});


	// URIs
	
	Hash.on('^page\/([0-9]*)$', {
		yep: function(path, parts) {
			var page = parts[1];

			if (page!==undefined) {
				if ($('.sample-docs').turn('is'))
					$('.sample-docs').turn('page', page);
			}

		},
		nop: function(path) {

			if ($('.sample-docs').turn('is'))
				$('.sample-docs').turn('page', 1);
		}
	});

	// Arrows

	$(document).keydown(function(e){

		var previous = 37, next = 39;

		switch (e.keyCode) {
			case previous:

				$('.sample-docs').turn('previous');

			break;
			case next:
				
				$('.sample-docs').turn('next');

			break;
		}

	});
	//滑动下面翻页滚条时将桌面移动移出
	var ss=document.getElementById('slider');
	ss.addEventListener('mousedown',function(){
		wrap.removeEventListener('mousedown',mouseDown);
	})
	ss.addEventListener('mouseup',function(){
		wrap.addEventListener('mousedown',mouseDown);
	})

	// 使用turn.js添加翻书效果

	flipbook.turn({
		width:500,
		height:300,
		elevation: 50,
		acceleration: true,
		gradients: false,
		duration: 1000,
		pages: 30,
		autoCenter:true,
		when: {

		turning: function(e, page, view) {
			
			var book = $(this),
			currentPage = book.turn('page'),
			pages = book.turn('pages');
				
			if (currentPage>3 && currentPage<pages-3) {
				if (page==1) {
					book.turn('page', 2).turn('stop').turn('page', page);
					e.preventDefault();
					return;
				} else if (page==pages) {
					book.turn('page', pages-1).turn('stop').turn('page', page);
					e.preventDefault();
					return;
				}
			} else if (page>3 && page<pages-3) {
				if (currentPage==1) {
					book.turn('page', 2).turn('stop').turn('page', page);
					e.preventDefault();
					return;
				} else if (currentPage==pages) {
					book.turn('page', pages-1).turn('stop').turn('page', page);
					e.preventDefault();
					return;
				}
			}

			Hash.go('page/'+page).update();

			if (page==1 || page==pages)
				$('.sample-docs .tabs').hide();
			

		},
		
		turned: function(e, page, view) {

			var book = $(this);

			$('#slider').slider('value', getViewNumber(book, page));

			if (page!=1 && page!=book.turn('pages'))
				$('.sample-docs .tabs').fadeIn(500);
			else
				$('.sample-docs .tabs').hide();

			book.turn('center');
			updateTabs();

		},

		start: function(e, pageObj) {
	
			moveBar(true);

		},

		end: function(e, pageObj) {
		
			var book = $(this);

			setTimeout(function() {
				$('#slider').slider('value', getViewNumber(book));
			}, 1);

			moveBar(false);

		},

		missing: function (e, pages) {

			for (var i = 0; i < pages.length; i++)
				addPage(pages[i], $(this));

		}
	}
	}). turn('page', 2);


	$('#slider').slider('option', 'max', numberOfViews(flipbook));

	flipbook.addClass('animated');


	// Show canvas

	$('#canvas').css({visibility: 'visible'});
}

// Hide canvas

$('#canvas').css({visibility: 'hidden'});

yepnope({
	test: Modernizr.csstransforms,
	yep: ['js/turn.min.js', 'css/jquery.ui.css'],
	nope: ['js/turn.html4.min.js', 'css/jquery.ui.html4.css'],
	both: ['css/docs.css', 'js/docs.js'],
	complete: loadApp
});

	



		
	}