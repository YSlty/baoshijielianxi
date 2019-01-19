var oUl = document.getElementsByClassName('sve-lubo')[0];
ajax('get','service.json','',function(a){
	var a=JSON.parse(a);
	console.log(a.length);
	for(var i=0;i<a.length;i++){
		
		oUl.innerHTML+=`
		<li id="${a[i].id}">
			<p>${a[i].biatoti}</p>
			<img src="${a[i].src}" > 
			<p>${a[i].text}</p>
		</li>
		
		
		`
		}
		var arrLi = oUl.getElementsByTagName('li');
		var classes=["p1","p2","p3","p4","p5"]
		
		for(var i=0;i<arrLi.length;i++){
			arrLi[i].index=i;
			arrLi[i].onclick=function(ev){
					var ev = window.event || ev;
					var target = ev.target.parentNode;
				console.log(target)
				
				if(!(target==oUl.firstElementChild)&&!(target==oUl.firstElementChild.nextElementSibling)){
					oUl.style.transition="2s ease";
				oUl.style.left=-arrLi[1].offsetWidth+30+"px";
				setTimeout(function(){
					oUl.style.transition="none";
					oUl.appendChild(arrLi[0]);
					oUl.style.left=0+"px";
					console.log(oUl.firstElementChild)
				},2000)
				
				}else if(target==oUl.firstElementChild){
								oUl.style.transition="none";
								oUl.insertBefore(oUl.lastElementChild,oUl.firstChild);
								oUl.style.left=-arrLi[0].offsetWidth+"px";
								setTimeout(function () {
										oUl.style.transition="2s ease";
										oUl.style.left=0+"px";
								},0);
				}
					
				
				
				
				
				
			
			
			
		}
		
		// oUl.onclick = function(ev) {
		// 	var ev = window.event || ev;
		// 	var target = ev.target.parentNode;
		// 	console.log(target)
		// }
		// 
		
		
	}
	
})

var oSveho=document.getElementsByClassName('sve-hover')[0];
oSveho.onclick=function(){
	
window.open("servicexiangqing.html")
	
	
}

