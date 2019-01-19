var oCar=document.getElementsByClassName('car')[0];
				ajax("get","lunbo.json","",function(a){
					
					var a=JSON.parse(a);
					console.log(a);
					for(var i=0;i<a.length;i++){
						// console.log(a[i]);
						console.log(1);
							// console.log(a[i]);
							oCar.innerHTML+=`
							<article id=${a[i][2].id} class="che">
							
							<article class="car-xing" id="${a[i][0].id}">
						 	<img src="${a[i][0].src.img3}"  class="car-sanjiao">
						 	<img src="${a[i][0].src.img2}"class="car-qingxie" >
						 	<img src="${a[i][0].src.img1}" class="car-car">
						 	<article class="car-text1">
						 		<ul>
						 			<li>${a[i][0].name}  </li>
						 			<li>${a[i][0].fullname} </li>
						 			<li>${a[i][0].price}</li>
						 		</ul>
						 	</article>
						 	<article class="car-text2">
						 		<ul>
						 			<li>${a[i][0].property}<br>222</li>
						 			<li>${a[i][0].speed}<br>222</li>
						 			<li>后轮驱动<br>驱动系统</li>
						 		</ul>
						 	</article>
						 	<article class="car-text3">${a[i][0].xinghao}<br> Hard top vehicle</article>
						 	<img src="img/img2/15.jpg"  class="fengexian1">	
						 </article>
						 <article class="car-xing2">
						 	<img src="${a[i][1].src2.img6}" class="car-sanjiao2">
						 	<img src="${a[i][1].src2.img5}" class="car-qingxie2">
						 	<img src="${a[i][1].src2.img4}" class="car-car2">
						 	<article class="car-text4">
						 		<ul>
						 			<li>${a[i][1].name2} </li>
						 			<li>${a[i][1].fullname2}</li>
						 			<li>${a[i][1].price2}</li>
						 		</ul>
						 	</article>
						 	<article class="car-text5">
						 		<ul>
						 			<li>${a[i][1].property2}<br>222</li>
						 			<li>${a[i][1].speed} <br>222</li>
						 			<li>后轮驱动<br>驱动系统</li>
						 		</ul>
						 	</article>
						 	<article class="car-text6">${a[i][1].xinghao2}<br> Hard top vehicle</article>		
						 	<img src="img/img2/15.jpg"  class="fengexian2">		
						 </article> 
							
							</article>
						 	
						 `	
							
					}
								
			oCar.onclick=function(){
				
				window.open("chexingxiangqing.html")
				
				
			}					
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
								
				var arrLi=document.getElementById('qiehuan').getElementsByTagName('li');
var oChe=oCar.getElementsByClassName('che');
oChe[0].style.display='block';
console.log(oChe.length)
				for(var j=0;j<arrLi.length-2;j++){
					arrLi[j].index=j;
					arrLi[j].onclick=function(){
						for(var k=0;k<oChe.length;k++){
							oChe[k].style.display='';
							arrLi[k].id=""
							
						}
						
						this.id="qiehuan2"
						oChe[this.index].style.display='block';
						
					}
				}	
					
				})

			var arrP=document.getElementsByClassName('point');
			var arrLi2=document.getElementsByClassName('car-qi-color2')[0].getElementsByTagName('li');
			var oLm=document.getElementsByClassName('left_move')[0];
			var oRm=document.getElementsByClassName('right_move')[0];
			
			
			
				for(var i=0;i<arrP.length;i++){
					console.log(arrLi2.length)
					arrP[i].index=i;
					arrP[i].onclick=function(){
						
						for(var j=0;j<arrLi2.length;j++){
							
							arrP[j].id='';
							arrLi2[j].id='';
						}
						
						arrLi2[this.index].id='btn';
						this.id='da';
						
					}
					
					
					
				}
				var num=0;
					oRm.onclick=function(){
						
						num++;
						if(num==arrP.length){
							num=0
						}
						for(var i=0;i<arrP.length;i++){
							arrP[i].id='';
							arrLi2[i].id='';
							
						}
						arrP[num].id='da';
						arrLi2[num].id='btn';
					}
				oLm.onclick=function(){
					
					num--;
					if(num<0){
						num=arrP.length-1;
					}
					for(var i=0;i<arrP.length;i++){
						arrP[i].id='';
						arrLi2[i].id='';
						
					}
					arrP[num].id='da';
					arrLi2[num].id='btn';
				}
				
				
				
				
				