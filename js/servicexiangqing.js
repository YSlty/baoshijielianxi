var oStt=document.getElementsByClassName('sve-tuozhuai-tu')[0];
var oStx=document.getElementsByClassName('sve-tuozhuai-xian')[0]
var oArt=oStx.getElementsByTagName('article')[0];
var oStt2=document.getElementsByClassName('sve-tuozhuai-t')[0];
ajax("get","servicexiangqing.json","",function(a){
	var a=JSON.parse(a);
	console.log(a)
	for(var i=0;i<a.length;i++){
		oStt.innerHTML+=`
		<li id="${a[i].id}">
			<img src="${a[i].src}" width="200">
			<h3>${a[i].year}</h3>
			<p>${a[i].text}</p>
		</li>
		
		`
		
		oArt.onmousedown=function(ev){
						var oLeft=oArt.offsetLeft;
						var evn=window.event||ev;
						var x=evn.clientX;
						document.onmousemove=function(ev){
							var evm=window.event||ev;
							var x1=evm.clientX;							
							oArt.style.left=x1-x+oLeft+'px';
// 							console.log(oArt.style.left+"<br>");
// 							console.log(oStx.offsetLeft);
							if(oArt.style.left<0+"px"){
								oArt.style.left=0+"px";
							}else if(oArt.style.left>(oStx.offsetWidth-oArt.offsetWidth)+"px"){
								oArt.style.left=(oStx.offsetWidth-oArt.offsetWidth)+"px";
							}
							var parcentx=x1/(oStx.offsetWidth+oStx.offsetLeft);
							oStt.style.left=-parcentx*(oStt.offsetWidth- oStt2.offsetWidth)+"px";
							// console.log(oStt.style.left);
						}
						
					}
					
		document.onmouseup=function(ev){
						
						document.onmousemove=""
					}
		
	}
})