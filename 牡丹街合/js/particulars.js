window.onload=function(){
	var msk=$('.msk');
	var showing=$('.pa-product-img img'); /*显示的图片*/
	var bigshow=$('.pa-bigshow');/*边上放大镜*/
	var bigimg=$('.pa-bigshow img')[0];/*边上放大镜图片*/
	var small=$('.pa-small');/*小图*/
	var show=$('.pa-product-img2');/*遮罩*/
		small.mouseover(function(){
			var smalling=$(this).children("img").attr("src");
			showing.attr("src",smalling);
			bigimg.src=smalling;
		})
	show.hover(function(){
		bigshow.css("display","block");
      	msk.css("display","block");
	},function(){
		bigshow.css("display","none");
      	msk.css("display","none");
	})
	function getStyle(ele,attr){
	    //attr是字符串，必须用[]写
	   if(window.getComputedStyle){
	       return getComputedStyle(ele,null)[attr]
	   }else{
	      return ele.currentStyle[attr]
	   }
	}
	var mskWidth=parseInt(getStyle(msk[0],"width"));
      show[0].onmousemove=function(e){
          var ev=e||window.event;
          var ox=ev.offsetX;
          var oy=ev.offsetY;
          var left=ox-mskWidth/2;
          var top=oy-mskWidth/2;
          if(left<0){
          	left=0
          }
          if(top<0){
          	top=0
          }
          if(left>showing[0].offsetWidth-mskWidth){
          	left=showing[0].offsetWidth-mskWidth
          }
          if(top>showing[0].offsetHeight-mskWidth){
          	top=showing[0].offsetHeight-mskWidth
          }
          msk[0].style.left=left+"px";
          msk[0].style.top=top+"px";
          //alert( mask.style.top)
          bigimg.style.marginLeft=-2*left+"px";
          bigimg.style.marginTop=-2*top+"px"
      }
    
	/*放大镜*/
	






	var pabtn=document.getElementsByClassName('pa-par-li');
	var pabtn1=document.getElementsByClassName('pa-aa');
	for(var i=0 ;i<pabtn.length;i++){
		pabtn[i].index=i;
		pabtn[i].onclick=function(){
			for(var j=0 ;j<pabtn1.length;j++){
				pabtn1[j].style.display='none';
				pabtn[j].style.background='none';
				pabtn[j].style.borderTop='none'
				pabtn[j].style.borderBottom='1px solid #e1e1e1'
			}
			pabtn1[this.index].style.display='block';
			this.style.background='#fff'
			this.style.borderTop='1px solid red'
			this.style.borderBottom='1px solid #fff'
		}
	}



	var pabtn2=document.getElementsByClassName('pa-bb');
	for(var i=0 ;i<pabtn2.length;i++){
		pabtn2[i].index=i;
		pabtn2[i].onclick=function(){
			for(var j=0;j<pabtn2.length;j++){
				pabtn2[j].style.border='1px solid #e1e1e1';
			}
			this.style.border='1px solid red';
		}
	}


	var pabtn3=document.getElementsByClassName('pa-cc');
	for(var i=0 ;i<pabtn3.length;i++){
		pabtn3[i].index=i;
		pabtn3[i].onclick=function(){
			for(var j=0;j<pabtn3.length;j++){
				pabtn3[j].style.border='1px solid #e1e1e1';
			}
			this.style.border='1px solid #000';
			var smalling=$(this).children("img").attr("src");
			showimg[0].scr=smalling;
		}
	}
	/*选项卡*/


	var num=1;
	var paUp=document.getElementsByClassName('pa-up')[0];
	var paDown=document.getElementsByClassName('pa-down')[0];
	var paDd=document.getElementsByClassName('pa-dd')[0];
	paUp.onclick=function(){
		num+=1;
		console.log(num)
		paDd.innerText=num;
	}
	paDown.onclick=function(){
		num-=1;
		if(num<1){
			num=1
		}
		paDd.innerText=num;
	}



	$(".pa-level1 a").click(function(){
             $(this).addClass('content').next().show().
             parent().siblings().children("a")
             .removeClass('content').next().hide();
             return false;
          })
	




	var lc=$('.pa-particularsrr')[0];
	var obj;
		window.onscroll=function(){
			obj=document.body.scrollTop==0?document.documentElement:document.body;
			if(obj.scrollTop>900){
				lc.style.display="block"
			}else{
				lc.style.display="none"
			}
	}
	/*楼层*/ 
}
