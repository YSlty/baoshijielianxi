window.onload=function(){
	var oBox=document.getElementsByClassName('mui-bar')[0];
			var oUl=document.getElementsByClassName('lunbo')[0];
			console.log(oUl)
			var oLi=oUl.getElementsByTagName('li');
			var oLm=document.getElementsByClassName('left_move')[0];
			var oRm=document.getElementsByClassName('right_move')[0];
			var oP=document.getElementsByClassName('yidong')[0];
			var num=0;
			var turn=true;
			
			setInterval( oRm.onclick=function(){
							 if(turn){
								turn=false;
								  num++;
							      oUl.style.transition="2s ease";
								  oUl.style.left=-oLi[0].offsetWidth+"px";
								  oP.style.left=num*oP.offsetWidth+"px";
								  oP.style.transition="2s ease";
								  if( num==4){
								  					num=0;
								  					oP.style.left=num*0+"px";
								  				}
								  setTimeout(function(){
									  oUl.style.transition="none";
									   oUl.appendChild(oLi[0]);
									   oUl.style.left=0+"px";
								  },2000)
									setTimeout(function () {
										turn=true;
									},2000);  
							 }
															  
						 },5000)
						
			oLm.onclick=function(){
				 if (turn) {
	            turn=false;
				num--;
	            oUl.style.transition="none";
	            oUl.insertBefore(oUl.lastElementChild,oUl.firstChild);
	            oUl.style.left=-oLi[0].offsetWidth+"px";
				oP.style.left=num*oP.offsetWidth+"px";
				oP.style.transition="2s ease";
				if( num==-1){
								num=3;
								oP.style.left=num*oP.offsetWidth+"px";
							}
	            setTimeout(function () {
	                oUl.style.transition="2s ease";
	                oUl.style.left=0+"px";
	            },0);
	            setTimeout(function () {
	                turn=true;
	            },2000);
	        }								  
			}
}
