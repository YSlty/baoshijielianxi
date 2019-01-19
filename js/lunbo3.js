var oUl = document.getElementsByClassName('sve-lubo')[0];
var arrLi = oUl.getElementsByTagName('li');
var classes=["p1","p2","p3","p4","p5"]

for(var i=0;i<arrLi.length;i++){
	arrLi[i].index=i;
	arrLi[i].onclick=function(ev){
			var ev = window.event || ev;
			var target = ev.target.parentNode;
		console.log(target)
		
		if(!(target==oUl.firstElementChild)&&!(target==oUl.firstElementChild.nextElementSibling)){
			// num++;
			oUl.style.transition="2s ease";
		oUl.style.left=-arrLi[1].offsetWidth+30+"px";
// 		oP.style.left=num*oP.offsetWidth+"px";
// 		oP.style.transition="2s ease";
// 		if( num==4){
// 							num=0;
// 							oP.style.left=num*0+"px";
// 						}
		setTimeout(function(){
			oUl.style.transition="none";
			oUl.appendChild(arrLi[0]);
			oUl.style.left=0+"px";
			console.log(oUl.firstElementChild)
		},2000)
		
		}else if(target==oUl.firstElementChild){
			// num--;
						oUl.style.transition="none";
						oUl.insertBefore(oUl.lastElementChild,oUl.firstChild);
						oUl.style.left=-arrLi[0].offsetWidth+"px";
// 			oP.style.left=num*oP.offsetWidth+"px";
// 			oP.style.transition="2s ease";
// 			if( num==-1){
// 							num=3;
// 							oP.style.left=num*oP.offsetWidth+"px";
// 						}
						setTimeout(function () {
								oUl.style.transition="2s ease";
								oUl.style.left=0+"px";
						},0);
		}
			
		
		
		
		
		
	}
	
	
}

// oUl.onclick = function(ev) {
// 	var ev = window.event || ev;
// 	var target = ev.target.parentNode;
// 	console.log(target)
// }
// 