window.onload=function(){
	
	
	var sy_ul=document.getElementsByClassName("sy_ul")[0];
	var sy_shangy=document.getElementsByClassName("sy_shangy");
	var sy_renqi=document.getElementsByClassName("sy_renqi");
	var sy_rql=document.getElementsByClassName("sy_rql");
	var cc=document.getElementsByClassName("cc");
	var sy_ho=document.getElementsByClassName("sy_ho");

	for(var i=0;i<sy_shangy.length;i++){
		sy_shangy[i].index=i;
		sy_shangy[i].onmouseover=function(){
			sy_rql[this.index].style.borderLeft="none";
			sy_renqi[this.index].style.display="block";

		}
		sy_shangy[i].onmouseout=function(){
			sy_renqi[this.index].style.display="none";
		}
	}
	for(var i=0;i<sy_rql.length;i++){
		sy_rql[i].onmouseover=function(){
			sy_ul.style.display="block";
		}
	}


//绿色悬浮
	for(var i=0;i<cc.length;i++){
		cc[i].index=i;
		cc[i].onmouseover=function(){
			sy_ho[this.index].style.display="block";
		}
		cc[i].onmouseout=function(){
			sy_ho[this.index].style.display="none";
		}
	} 


//倒计时
	function calTime(timeArr) {          
            var index = 0;         
            var num;         
            var i;
            for (i = timeArr.length - 1; i >= 0; i--) {
                num = parseInt(timeArr[i]);  
                if (num > 0) {
                    index = i;
                    break;
                }
            }
            if (i >= 0) {                
                if (num > 10) {
                    timeArr[index] = num - 1;
                } else {
                    timeArr[index] = "0" + (num - 1);
                }

               
                for (var j = index + 1; j < timeArr.length; j++) {
                    if (j == 1) {
                        timeArr[j] = "23";
                    } else {
                        timeArr[j] = "59";
                    }
                }
            }
        }
         var sy_cc = document.querySelectorAll(".sy_cc");
         var timer;
          timer = setInterval(function () {
                        var countArr = [];
                        for (var i = 0; i < sy_cc.length; i++) {
                            countArr.push(sy_cc[i].innerText);
                        }
                        calTime(countArr);
                        for (i = 0; i < sy_cc.length; i++) {
                            sy_cc[i].innerText = countArr[i];
                        }
                    }, 1000);




  //图片透明
  var sy_chh=document.getElementsByClassName("sy_chh");
  for(var i=0;i<sy_chh.length;i++){
  	sy_chh[i].onmouseover=function(){
  		this.style.opacity="0.6";
  	}
  	sy_chh[i].onmouseout=function(){
  		this.style.opacity="1";
  	}
  } 




// 侧边栏
  var sy_xx=document.getElementsByClassName("sy_xx")[0];
  var sy_gouwuche=document.getElementsByClassName("sy_gouwuche")[0];
  var sy_gw=document.getElementsByClassName("sy_gw")[0];
  var sy_syy=document.getElementsByClassName("sy_syy")[0];
  var sy_erwei=document.getElementsByClassName("sy_erwei")[0];
    
    sy_syy.onmouseover=function(){
      sy_erwei.style.display="block";
    }
    sy_syy.onmouseout=function(){
      sy_erwei.style.display="none";
    }
    sy_gw.onmouseover=function(){
        sy_gouwuche.style.display="block";
    }
    sy_gw.onmouseout=function(){
        sy_gouwuche.style.display="none"
    }
    sy_xx.onclick=function(){
        sy_gouwuche.style.display="none";
    }
    var t;
  var sy_anm=document.getElementsByClassName("sy_anm");
  var sy_xiaoxi=document.getElementsByClassName("sy_xiaoxi");
  for(var i=0;i<sy_xiaoxi.length;i++){
    sy_xiaoxi[i].index=i;
    sy_xiaoxi[i].onmouseover=function(){
      animate(sy_anm[this.index],{opacity:1,left:-100},1000)
    }
    sy_xiaoxi[i].onmouseout=function(){
      animate(sy_anm[this.index],{opacity:0,left:-140},1000)
    }
  }
  
  // function move(){
  //   sy_anm.style.cssText="left:-100px;opacity:1;"
  // }
  // sy_xiaoxi.onmouseout=function(){
  //   sy_anm.style.display="none";
  //   sy_anm.style.cssText="left:-140px;opacity:0;"
  // }



// 列表的选项卡(宝贝店铺)
  if(document.getElementsByClassName("lb_btn1")){
   var lb_btn1=document.getElementsByClassName("lb_btn1");
  var lb_btn2=document.getElementsByClassName("lb_btn2");
  
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
  }
  


    
}
