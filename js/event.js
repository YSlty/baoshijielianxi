
 function $(that) {
    return document.getElementsByClassName(that)[0];
  }
  document.onmousewheel=function(){
      console.log(document.documentElement.scrollTop)
      if(document.documentElement.scrollTop>580){
          $("move").style.position="fixed"
          $("move").style.zIndex="999"
          $("move").style.top="0"
          $("move").style.left="0x"
      }
      else{ 
        $("move").style.position="relative"
        $("move").style.top="0"
        $("move").style.left="0px"
      }
  }
  
  document.onscroll=function(){
	   if(document.documentElement.scrollTop>580){
	            $("move").style.position="fixed"
	            $("move").style.zIndex="999"
	            $("move").style.top="0"
	            $("move").style.left="0x"
	        }
	        else{
	  
	        
	      
	          $("move").style.position="relative"
	          $("move").style.top="0"
	          $("move").style.left="0px"
	        }
  }