
$(function(){
	/*首页效果*/
/*search部分*/
	/*切换搜索目标*/
	$(".search-item>li").mouseover(function(){
		$(".search-item>li").eq(1).css({display:"block"})
	})
	$(".search-item>li").eq(1).click(function(){
			var tex=$(".search-item>li").eq(0).find('span').text()
			$(".search-item>li").eq(0).find('span').text($(".search-item>li").eq(1).find('span').text())
			$(".search-item>li").eq(1).find('span').text(tex)
			$(".search>input").attr("placeholder","请输入"+tex+"名称")
		})
	$(".search-item>li").mouseout(function(){
		$(".search-item>li").eq(1).css({display:"none"})
	})
	/* 个人中心和购物车*/
	$(".buybox>span:eq(0)").mouseover(function(){
		$(".centerbox").css({display:"block"})
	})
	$(".centerbox").mouseover(function(){
		$(".centerbox").css({display:"block"})
	})
	$(".buybox>span:eq(0)").mouseout(function(){
		$(".centerbox").css({display:"none"})
	})
	$(".centerbox").mouseout(function(){
		$(".centerbox").css({display:"none"})
	})
	$(".buybox>span:eq(1)").mouseover(function(){
		$(".buycar-box").css({display:"block"})
	})
	$(".buycar-box").mouseover(function(){
		$(".buycar-box").css({display:"block"})
	})
	$(".buybox>span:eq(1)").mouseout(function(){
		$(".buycar-box").css({display:"none"})
	})
	$(".buycar-box").mouseout(function(){
		$(".buycar-box").css({display:"none"})
	})
/*banner轮播*/
	var t=setInterval(banMove,1000)
	var num=0;
	function banMove(){
		if(num==3){
			num=0
		}
		$(".banner-move>li").eq(num).css({display:"block"}).siblings().css({display:"none"})
		$(".circle>li").eq(num).css({background:"#999"}).siblings().css({background:"white"})
		num++
	}
	$(".banner-move").mouseover(function(){
		clearInterval(t)
	})
	$(".banner-move").mouseout(function(){
		t=setInterval(banMove,3000)
	})

	$(".circle>li").click(function(){
		var index=$(this).index()
			$(".banner-move>li").eq(index).css({display:"block"}).siblings().css({display:"none"})
			$(".circle>li").eq(index).css({background:"#999"}).siblings().css({background:"white"})
	})
	
	
	/*选项卡*/
		$(".main-top-right-1f>ul>li").mouseover(function(){
			var index=$(this).index()
			for(var i=0;i<$(this).length;i++){
				$(".main-top-right-1f>ul>li").eq(index).css({borderBottom: "1px solid white",borderLeft: "1px solid #F46DDF",borderRight: "1px solid #F46DDF",borderTop: "3px solid #F46DDF"}).siblings().css({border:"none"}) 
			}

		})
		$(".main-top-right-2f>ul>li").mouseover(function(){
			var index=$(this).index()
			for(var i=0;i<$(this).length;i++){
				$(".main-top-right-2f>ul>li").eq(index).css({borderBottom: "1px solid white",borderLeft: "1px solid #07D0BB",borderRight: "1px solid #07D0BB",borderTop: "3px solid #07D0BB"}).siblings().css({border:"none"}) 
			}

		})
		$(".main-top-right-3f>ul>li").mouseover(function(){
			var index=$(this).index()
			for(var i=0;i<$(this).length;i++){
				$(".main-top-right-3f>ul>li").eq(index).css({borderBottom: "1px solid white",borderLeft: "1px solid #3BCAED",borderRight: "1px solid #3BCAED",borderTop: "3px solid #3BCAED"}).siblings().css({border:"none"}) 
			}

		})

		$(".main-top-right-1f>ul>li").mouseover(function(){
			var index=$(this).index()
			for(var i=0;i<$(".main-buttom-right-1f").length;i++){
				$(".main-buttom-right-1f").eq(index).css({display:"block"}).siblings().css({display:"none"}) 
				$(".main-buttom-left").css({display:"block"})
			}

		})
		$(".main-top-right-2f>ul>li").mouseover(function(){
			var index=$(this).index()
			for(var i=0;i<$(".main-buttom-right-2f").length;i++){
				$(".main-buttom-right-2f").eq(index).css({display:"block"}).siblings().css({display:"none"}) 
				$(".main-buttom-left").css({display:"block"})
			}

		})
		$(".main-top-right-3f>ul>li").mouseover(function(){
			var index=$(this).index()
			for(var i=0;i<$(".main-buttom-right-3f").length;i++){
				$(".main-buttom-right-3f").eq(index).css({display:"block"}).siblings().css({display:"none"}) 
				$(".main-buttom-left").css({display:"block"})
			}

		})
/*详情页	*/
//-----数字加减
	var num=0
	$("#btn1").click(function(){
		var num=$("#num1").val()
		if(num>0){
			$("#num1").val(Number(num) - 1)
		}
		
	})
	$("#btn2").click(function(){
		var num=$("#num1").val()
			$("#num1").val(Number(num) + 1)
	})
	//选项卡
	for(var i=0;i<$(".de-small-img").length;i++){
		$(".de-small-img").click(function(){
			var index=$(this).index()
			var src=$(this).attr("src")
			$(".de-small-img").css({border:"none"})
			$(this).eq(index).css({border:"2px solid orange"})
			$(".de-content-bigimg>img").attr("src",src)
			$(".de-content-bigimgtop>img").attr("src",src)
		})
	}
	//放大镜效果
	$(".de-content-imgtop").mouseover(function(){
		$(".de-content-bigimgtop").css({display:"block"})
		$(".de-mask").css({display:"block"})
		$(".de-content-imgtop").mousemove(function(e){
			var ev=e||window.event
			var x=ev.offsetX
			var y=ev.offsetY
			var leftX=x-50
			var topY=y-50
			if(leftX<0){leftX=0}
			if(leftX>220){leftX=220}
			if(topY<0){topY=0}
			if(topY>220){topY=220}
			var leftx=-3.2*leftX
			var topy=-3.2*topY
			// if(leftx>320){leftx+=160}
			// if(topy>320){topy+=160}
			$(".de-mask").css({left:leftX+"px",top:topY+"px"})
			$(".de-content-bigimgtop>img").css({marginLeft:leftx,marginTop:topy})
		})
	})
	$(".de-content-imgtop").mouseout(function(){
		$(".de-content-bigimgtop").css({display:"none"})
		$(".de-mask").css({display:"none"})
	})
	//切换
	$("#de-btn1").click(function(){
		$("#de-btn1").css({background:"white"})
		$("#de-btn2").css({background:"#EFEFEF"})
		$(".de-main-left-item-rexiao").toggle()
		$(".de-main-left-item-remen").toggle()
	})
	$("#de-btn2").click(function(){
		$("#de-btn2").css({background:"white"})
		$("#de-btn1").css({background:"#EFEFEF"})
		$(".de-main-left-item-rexiao").toggle()
		$(".de-main-left-item-remen").toggle()
	})
	$(".de-main-right-top>div:eq(0)>ul").on('click','li',function(){ 
			var index=$(this).index()
			$(this).css({borderTop:"1px solid red",background:"white"}).siblings().css({borderTop:"1px solid #EFEFEF",background:"#F5F5F5"})
			$(".de-main-right-bottom").css({display:"none"})
			$(".de-main-right-bottom").eq(index).css({display:"block"})
	})
/*列表页*/
	//切换
	var num=1
	$('.li-content-left>div:eq(0)').click(function(){
		$('.li-content-left>div:eq(0)>img:eq(1)').css({transform:"rotate("+180*i+"deg)"})
		$(this).siblings().toggle()
		num++
	})
	var k=1
	$('#up1').click(function(){
		$(this).find('img').css({transform:"rotate("+180*k+"deg)"})
		k++
		
	})
	var j=1
	$('#up2').click(function(){
		$(this).find('img').css({transform:"rotate("+180*j+"deg)"})
		j++
		
	})
	var i=1
	$('#up3').click(function(){
		$(this).find('img').css({transform:"rotate("+180*i+"deg)"})
		i++
		
	})
	//num数字
	$(".li-num_4").click(function(){
		var num=Number($('.li-num_1').text())
		var num1=num+1
		var num2=num+2
		var num3=num+3
		$('.li-num_1').text(num1)
		$('.li-num_2').text(num2)
		$('.li-num_3').text(num3)
	})
	$(".li-num").on('click','div',function(){
		$(this).css({background:"#E77174"}).siblings().css({background:"white"})
		$(".li-num_5").css({background:"white"})

	})
	/*个人中心*/
	//隐藏出现
	var i=1
	$("#msg").click(function(){
		$(this).next().toggle()
		$("#arr3").css({transform:"rotate("+180*i+"deg)"})
		i++
	})
	var j=1
	$("#serve").click(function(){
		$(this).next().toggle()
		$("#arr2").css({transform:"rotate("+180*j+"deg)"})
		j++
	})
	var k=1
	$("#change").click(function(){
		$(this).next().toggle()
		$("#arr1").css({transform:"rotate("+180*k+"deg)"})
		k++
	})
	//
	var number=1
	$(".pe-right").click(function(){
		if(number>3){number=1}
		if(number==1){
			$(this).parent().siblings().eq(number).find('img').attr('src','img/li-nv-5.png')
			$(this).parent().siblings().eq(number+1).find('img').attr('src','img/li-nv-6.png')
			$(this).parent().siblings().eq(number+2).find('img').attr('src','img/jiu.png')
		}
		if(number==2){
			$(this).parent().siblings().eq(number-1).find('img').attr('src','img/li-nv-6.png')
			$(this).parent().siblings().eq(number).find('img').attr('src','img/jiu.png')
			$(this).parent().siblings().eq(number+1).find('img').attr('src','img/li-nv-5.png')
		}
		if(number==3){
			$(this).parent().siblings().eq(number-2).find('img').attr('src','img/jiu.png')
			$(this).parent().siblings().eq(number-1).find('img').attr('src','img/li-nv-5.png')
			$(this).parent().siblings().eq(number).find('img').attr('src','img/li-nv-6.png')
		}
		number++
	})
	$(".pe-left").click(function(){
		if(number<0){number=2}
		if(number==0){
			$(this).parent().siblings().eq(number).find('img').attr('src','img/li-nv-5.png')
			$(this).parent().siblings().eq(number+1).find('img').attr('src','img/li-nv-6.png')
			$(this).parent().siblings().eq(number+2).find('img').attr('src','img/jiu.png')
		}
		if(number==1){
			$(this).parent().siblings().eq(number-1).find('img').attr('src','img/li-nv-6.png')
			$(this).parent().siblings().eq(number).find('img').attr('src','img/jiu.png')
			$(this).parent().siblings().eq(number+1).find('img').attr('src','img/li-nv-5.png')
		}
		if(number==2){
			$(this).parent().siblings().eq(number-2).find('img').attr('src','img/jiu.png')
			$(this).parent().siblings().eq(number-1).find('img').attr('src','img/li-nv-5.png')
			$(this).parent().siblings().eq(number).find('img').attr('src','img/li-nv-6.png')
		}
		number--
	})
	/*Right*/
	$("#up").click(function(){
		$(window).scrollTop("0")
	})
	var num1=1
	$("#Right-car").click(function(){
		if(num1%2!=0){
			$("#car").css({right:"65px"})
		}
		else{
			$("#car").css({right:"-500px"})
		}
		num1++
	})
	$("#Right-talk").click(function(){
		$("#talk").css({display:"block"})
	})
	$("#closed").click(function(){
		$("#talk").hide()
	})
	$("#Right-close").click(function(){
		$(".Right").css({display:"none"})
		$("#Right-arrow").css({display:"block"})
	})
	$("#Right-arrow").click(function(){
		$(".Right").css({display:"block"})
		$("#Right-arrow").css({display:"none"})
	})

})

