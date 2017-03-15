window.onload=function(){
// 列表的选项卡(宝贝店铺)
	var lb_btn1=document.getElementsByClassName("lb_btn1")[0];
	var lb_btn2=document.getElementsByClassName("lb_btn2")[0];
	lb_btn1.onclick=function(){
		lb_btn1.style.background="#FF3666";
		lb_btn1.style.color="#fff"
		lb_btn2.style.background="#F2F2F2";
		lb_btn2.style.color="#000"
	}
	lb_btn2.onclick=function(){
		lb_btn2.style.background="#FF3666";
		lb_btn2.style.color="#fff"
		lb_btn1.style.background="#F2F2F2";
		lb_btn1.style.color="#000"
	}

// 列表的选项卡(衣服分类)
  var lb_opn=document.getElementsByClassName("lb_opn");
  for(var i=0;i<lb_opn.length;i++){
  	 lb_opn[i].index=i
  	 lb_opn[i].onclick=function(){
  	 	for(var j=0;j<lb_opn.length;j++){
  	 	 lb_opn[j].style.borderBottom="none";
  	 	 lb_opn[j].style.color="#000"
  	 	}
  	 	 this.style.borderBottom="2px solid #FF6E92";
  	 	 this.style.color="#FF6E92"
  	 }
  }
// 列表的选项卡(下一页)
  var lb_nextPage=document.getElementsByClassName("lb_nextPage")[0];
  var lb_div=lb_nextPage.getElementsByTagName("div");
   for(var i=0;i<lb_div.length;i++){
   	  lb_div[i].index=i;
   	  lb_div[i].onmouseover=function(){
   	  	for(var j=0;j<lb_div.length;j++){
   	  		lb_div[j].style.background="#FFF";
   	  		lb_div[j].style.color="#000";
   	  	} 
   	  	this.style.background="#FF6E92";
   	  	this.style.color="#fff";
   	  }
   }
// 列表的选项卡(衣服边框)
   var lb_border=document.getElementsByClassName("lb_border");
   var lb_shopping=document.getElementsByClassName("lb_shopping");
   for(var i=0;i<lb_border.length;i++){
   	   lb_border[i].index=i;
   	   lb_border[i].onmouseover=function(){
   	   	for(var j=0;j<lb_shopping.length;j++){
   	   		lb_border[j].style.zIndex="1"
   	   	   lb_border[j].style.border="2px solid #fff";
   	   	   lb_shopping[j].style.display="none";
   	   }
   	       this.style.zIndex="99"
   	       this.style.border="2px solid #FF6E92";
   	   	   lb_shopping[this.index].style.display="block";
   }
       lb_border[i].onmouseout=function(){
           this.style.border="2px solid #fff";
   	   	   lb_shopping[this.index].style.display="none";
   }

  }

//列表（ 购物车的关闭）
    var lb_close=document.getElementsByClassName("lb_close")[0];
    var lb_shopping1=document.getElementsByClassName("lb_shopping1")[0];
    var lb_App=document.getElementsByClassName("lb_App")[0];
    lb_close.onclick=function(){
    	lb_shopping1.style.display="none"
    }
    // lb_App.onmouseover=function(){
    // 	lb_shopping1.style.display="block"
    // }
}