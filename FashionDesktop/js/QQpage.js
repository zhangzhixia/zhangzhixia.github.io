				(function(){
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
								alert('不可发送空消息！');
							}else{
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
					huaDiY=ev.pageY-hua.offsetTop;
					document.addEventListener('mousemove',huaMove);
					document.addEventListener('mouseup',huaUp);
					function huaMove(ev1){
						huaCommon(ev1);
					}
					function huaUp(){
						document.removeEventListener('mousemove',huaMove);
						document.removeEventListener('mouseup',huaUp);
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
					})()