		var oHead=document.getElementsByClassName('mui-bar')[0];
		ajax("get","head.html","",(a)=>{
			oHead.innerHTML=a;	
		})
		var oFoot=document.getElementsByClassName('foot')[0];
		ajax("get","footer.html","",(a)=>{
			oFoot.innerHTML=a;	
		})
		var oLunbo=document.getElementsByClassName('lunbotu')[0];
		ajax("get","lunbo.html","",(a)=>{
			 oLunbo.innerHTML=a;	
		})
		