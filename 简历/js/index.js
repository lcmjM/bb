$(function(){
	var i=1
	$(".topnav>div:eq(0)").click(function(){
		$(".introduce").css({display:"block"}).siblings().css({display:"none"})
		$(this).css({background:"#56abe4"}).find('img').css({top:"8px",transform:"rotate("+360*i+"deg)"})
		$(this).siblings().css({background:"#eb4f38"}).find('img').css({top:"20px"})
		i++
	})
	var j=1
	$(".topnav>div:eq(1)").click(function(){
		$(".education").css({display:"block"}).siblings().css({display:"none"})
		$(this).css({background:"#56abe4"}).find('img').css({top:"8px",transform:"rotate("+360*j+"deg)"})
		$(this).siblings().css({background:"#eb4f38"}).find('img').css({top:"20px"})
		j++
	})
	var k=1
	$(".topnav>div:eq(2)").click(function(){
		$(".experience").css({display:"block"}).siblings().css({display:"none"})
		$(this).css({background:"#56abe4"}).find('img').css({top:"8px",transform:"rotate("+360*k+"deg)"})
		$(this).siblings().css({background:"#eb4f38"}).find('img').css({top:"20px"})
		k++       
	})
	var x=1
	$(".topnav>div:eq(3)").click(function(){

		$(".skills").css({display:"block"}).siblings().css({display:"none"})
		$(this).css({background:"#56abe4"}).find('img').css({top:"8px",transform:"rotate("+360*x+"deg)"})
		$(this).siblings().css({background:"#eb4f38"}).find('img').css({top:"20px"})
		// $(".a").css({transform:"rotate(0deg)"})
		setTimeout(function(){
			$(".a").css({transform:"rotate(0deg)"})
		},1000)
		setTimeout(function(){
			$(".b").css({transform:"rotate(-30deg)"})
		},3000)
		x++
	})                          
	///*************      
	
})

