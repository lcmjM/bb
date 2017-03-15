	// 李建林购物车JS
$(function(){
	var gwc_btn=$(".gwc_btn")
	var gwc_cb=$(".gwc_cb")
	for(var i=0;i<gwc_btn.length;i++){
		gwc_btn[i].onclick=function(){
			for(var j=0;j<gwc_cb.length;j++){
				gwc_cb[j].checked=true;
			}
		}
	}
	for(var k=0;k<gwc_cb.length;k++){
		gwc_cb[k].onclick=function(){
			for(var j=0;j<gwc_cb.length;j++){
				if(gwc_cb[j].checked==false){
					for(var i=0;i<gwc_btn.length;i++){
						gwc_btn[i].checked=false;
					}
					break;
				}
			}
			if(j==gwc_cb.length){
				for(var i=0;i<gwc_btn.length;i++){
						gwc_btn[i].checked=true;
					}
			}

		}
	}
	

	var num_1=$(".num_1");
	var gwc_c_min=$(".gwc_c_min");
	var gwc_c_add=$(".gwc_c_add");
	var gwc_c_xj=$(".gwc_c_xj");
	var gwc_c_nrq2=$(".gwc_c_nrq2");
	var gwc_total=$(".gwc_total");
	var gwc_ks=$(".gwc_ks");
	function ck(obj){
		obj.html(obj.parent().find(".gwc_c_nrq2").html()*obj.parent().find(".num_1").val())
	}
	gwc_c_xj.each(function(){
		ck($(this));
	})
	gwc_c_add.click(function(){
		var obj=$(this).parents(".gwc_c_nr");
		obj.find(".num_1").val(parseInt(obj.find(".num_1").val())+1)
		obj.find(".gwc_c_xj").html(obj.find(".gwc_c_nrq2").html()*obj.find(".num_1").val())
		ment()
		mact()
		
	})
	gwc_c_min.click(function(){
		var obj=$(this).parents(".gwc_c_nr");
		if(obj.find(".num_1").val()>1){
			obj.find(".num_1").val(obj.find(".num_1").val()-1)
			obj.find(".gwc_c_xj").html(obj.find(".gwc_c_nrq2").html()*obj.find(".num_1").val())

		}else{
			alert("穷B！！买不起，滚！！！")
		}
		ment()
		mact()
	})
	function ment(){
		var suz=0;
		for(var i=0;i<gwc_c_xj.length;i++){
				var su=gwc_c_xj[i].innerHTML
				suz=suz+Number(su);
		}
		gwc_total.html(suz)
	}
	ment()
	function mact(){
		var cde=0
		for(var i=0;i<num_1.length;i++){
			var cd=num_1[i].value
			cde=cde+Number(cd);
		}
		gwc_ks.html(cde)
	}
	mact()

	var gwc_c_sc=$(".gwc_c_sc");
	var gwc_content=$(".gwc_content");
	gwc_c_sc.click(function(){
		$(this).parents(".gwc_c_nr").remove()
		gwc_total.html(gwc_total.html()-$(this).parents(".gwc_c_nr").find(".gwc_c_xj").html())
	})
	
	var gwc_fk_sc=$(".gwc_fk_sc");
	var gwc_c_shop=$(".gwc_c_shop")
	gwc_fk_sc.click(function(){
		for(var i=1;i<gwc_cb.length;i++){
			if(gwc_cb[i].checked==true){
				gwc_cb.eq(i).parents(".gwc_c_nr").remove()
				gwc_total.html(gwc_total.html()-gwc_cb.eq(i).parents(".gwc_c_nr").find(".gwc_c_xj").html())
				gwc_cb[i].checked=false;
			}
		}
		
	})
})





$(function(){
	$('.con-close').click(function(){
		$('.new-address').css("display","none")
		$('.con-b').css("display","none")
	})
	$('.open-address').click(function(){
		$('.new-address').css("display","block")
		$('.con-b').css("display","block")
	})
	var con_name=$('.con-name')
	var con_tel=$('.con-tel')
	$('.con-save').click(function(){
		$('.new-address').css("display","none")
		$('.con-b').css("display","none")
		$('.con-name1').html(con_name.val())
		$('.con-tel1').html(con_tel.val())
		$('.con-street').html($('#province>option:selected').text()
			+"省"+$('#city>option:selected').text()
			+$('#area>option:selected').text())
	})
	$('.con-save').click(function(){
		if($('#province>option:selected').text()=="请选择省份"){
			// alert("请输入省份"+"\n")	
		}
		if($('#city>option:selected').text()=="请选择城市"){
			// alert("请输入城市"+"\n")
		}
		if($('#area>option:selected').text()=="请选择地区"){
			// alert("请输入地区"+"\n")
		}
		if($('.con-area').val()==""){
			// alert("请输入详细地址"+"\n")
		}
		if($('.con-name').val()==""){
			// alert("请输入姓名"+"\n")
		}								
	})
//删除
	$('.add-del').click(function(){
		$('.add-con-mid').remove()
	})
	$('.add-edit').click(function(){
		$('.new-address').css("display","block")
		$('.con-b').css("display","block")
	})
})
	window.onload=function(){
	if(document.address){
		var address=document.address;
		var province=address.province;
		var city=address.city;
		var area=address.area;
		/*省份*/
		province.onfocus=function(){
			province.innerHTML="<option value=''>请选择省份</option>"
			var num=provinceList;
			for(var i=0;i<num.length;i++){
				var option=document.createElement("option")
				option.text=num[i].name
				this.appendChild(option)
			}
		}
	/*城市*/
		var num
		province.onchange=function(){
			city.innerHTML="<option value=''>请选择城市</option>"
			num=this.selectedIndex-1;
			var arr=provinceList[num].cityList;
			for(var i=0;i<arr.length;i++){
				var option=document.createElement("option")
				option.text=arr[i].name
				city.appendChild(option)
			}
		}
	/*城市*/
		var num
		city.onchange=function(){
			area.innerHTML="<option value=''>请选择地区</option>"
			num1=this.selectedIndex-1;
			var arr=provinceList[num].cityList[num1].areaList;
			for(var i=0;i<arr.length;i++){
				var option=document.createElement("option")
				option.text=arr[i]
				area.appendChild(option)
			}
		}
		var con_save=document.getElementsByClassName("con-save")[0];
		var con_address_main=document.getElementsByClassName("con-address-main")[0];
		var con_content=document.getElementsByClassName("con-content")[0];
		con_save.onclick=function(){
			var div=document.createElement("div");
			div.className="con-address";
			div.style.cssText="margin-left:15px";	
			con_address_main.appendChild(div);
		}
		var add_btn=document.getElementsByClassName('add-btn')[0];
		var address_content=document.getElementsByClassName('address-content')[0];
		var add_co_mid=document.getElementsByClassName('add-con-mid')[0];
		add_btn.onclick=function(){
			var div=document.createElement("div");
			var span=document.createElement("span");		
			div.className="add-con-mid";
			div.style.cssText="margin-top:10px";
			span.className="add-edit";
			address_content.appendChild(div);
			address_content.appendChild(span);
		}
	}
	//个人信息
	//地址
		var province=document.getElementById('in-province');
		var city=document.getElementById('in-city');
   //省份
		province.onfocus=function(){
		  // province.innerHTML="<option value=''>请选择省份</option>";
		  var num=provinceList.length;
		  for(var i=0;i<num;i++){
		  	var option=document.createElement("option");
		  	option.text=provinceList[i].name;
		  	this.appendChild(option)
		  }
		}
		//城市
		var num;
	    province.onchange=function(){
	    	// city.innerHTML="<option value=''>请选择城市</option>";
	    	num=this.selectedIndex-1;
	    	var arr=provinceList[num].cityList;
	    	for(var i=0;i<arr.length;i++){
	    		var option=document.createElement("option");
	    		option.text=arr[i].name;
	    		city.appendChild(option)
	    	}

	    }
	    //上传头像
	    var input1 = document.getElementById("upload"); 
 
if(typeof FileReader==='undefined'){ 
     //result.innerHTML = "抱歉，你的浏览器不支持 FileReader"; 
     input1.setAttribute('disabled','disabled'); 
}else{ 
     input1.addEventListener('change',readFile,false); 
     /*input1.addEventListener('change',function (e){
     	console.log(this.files);//上传的文件列表
     },false); */
}
function readFile(){ 
	var file = this.files[0];//获取上传文件列表中第一个文件
	if(!/image\/\w+/.test(file.type)){
	//图片文件的type值为image/png或image/jpg
		alert("文件必须为图片！");
		return false; 
	} 
	var reader = new FileReader();//实例一个文件对象
	reader.readAsDataURL(file);//把上传的文件转换成url
	//当文件读取成功便可以调取上传的接口
	reader.onload = function(e){ 
		var image = new Image();
		// 设置src属性 
		image.src = e.target.result;
		var max=200;
		// 绑定load事件处理器，加载完成后执行，避免同步问题
		image.onload = function(){ 
			// 获取 canvas DOM 对象 
			var canvas = document.getElementById("cvs"); 
			// 如果高度超标 宽度等比例缩放 *= 
			/*if(image.height > max) {
				image.width *= max / image.height; 
				image.height = max;
			} */
			// 获取 canvas的 2d 环境对象, 
			var ctx = canvas.getContext("2d"); 
			// canvas清屏 
			ctx.clearRect(0, 0, canvas.width, canvas.height); 
			// 重置canvas宽高
			/*canvas.width = image.width;
			canvas.height = image.height;
			if (canvas.width>max) {canvas.width = max;}*/
			// 将图像绘制到canvas上
			// ctx.drawImage(image, 0, 0, image.width, image.height);
			ctx.drawImage(image, 0, 0, 200, 200);
			// 注意，此时image没有加入到dom之中
		};  
	}
};
	
}
$(function(){
	//单选框
	$("#in-la1").click(fun1)
	$("#in-la2").click(fun2)
	function fun1(){
		$("#in-la1").children('span').css({
			position: "relative",
			left: "1px",
			top: "1px",
			display: "block",
			height: "10px",
			width: "10px",
			textAlign: "center",
			background: "#ff3366",
			borderRadius: "50%"})
		$("#in-la2").children('span').hide()
	 }
	 function fun2(){
		$("#in-la2").children('span').css({
			position: "relative",
			left: "1px",
			top: "1px",
			display: "block",
			height: "10px",
			width: "10px",
			textAlign: "center",
			background: "#ff3366",
			borderRadius: "50%"})
		$("#in-la1").children('span').hide()
	 }
	//in-main-left

 	$(".in-main-order>a").click(function(){
 		$(".in-main-subnav").toggle()
 	})
 	// //信息填写
 	$('.in-main-write>div>input').blur(fun3)
 	$('.in-main-write>textarea').blur(fun3)
 	$('#in-province').blur(fun4)
 	$('#in-city').blur(function(){
 		if($('#in-province').find('option:selected').text()!="请选择省份"&&$(this).find('option:selected').text()=="请选择城市"){
 				$(this).parent().children().css({visibility:"visible"})
 		}
 		else{
 			$(this).next('p').css({visibility:"hidden"})
 		}
 	})
 	$('#in-work').blur(fun4)
 	// $('.in-main-write>textarea').blur(fun3)
 	function fun3(){
 		if($(this).val()==""){
 			$(this).next('p').css({visibility:"visible"})
 		}
 		else{
 			$(this).next('p').css({visibility:"hidden"})
 		}
 	}
	function fun4(){
		if($(this).find('option:selected').text()=="请选择省份"||$(this).find('option:selected').text()=="请选择城市"||$(this).find('option:selected').text()=="请选择工作"){
			$(this).parent().children().css({visibility:"visible"})
		}
		else{
			$(this).parent().children('p').css({visibility:"hidden"})
		}
 	}
 	$('#in-check').click(function(){
 		if($('.in-main-write>div>input')==""||$('.in-main-write>textarea')==""||$('#in-province').find('option:selected').text()=="请选择省份"||$('#in-city').find('option:selected').text()=="请选择城市"||$('#in-work').find('option:selected').text()=="请选择工作"){
 			$(this).next('p').css({visibility:"visible"})
 		}
 		else{
 			$(this).next('p').css({visibility:"hidden"})
 		}
 	})
 	//search切换
 	$(".in-head-search>p").on('click','span',function(){
 		var index=$(this).index()
 		$(".in-head-search>p>span").eq(index).css({background:"#ff3366",color:"#fff"}).siblings().css({background:"#f2f2f2",color:"#000"})
 	})			
	})
	$(function(){
	var pay_btn_1=$(".pay_paymentChannel>li");
	var pay_flag_1=[];
	for(var i=0;i<pay_btn_1.length;i++){
		pay_flag_1[i]=true;
	}
	pay_btn_1.click(function(){
		var index=$(this).index();
		if(pay_flag_1[index]){
			for(var i=0;i<pay_btn_1.length;i++){
				pay_flag_1[i]=true;
			}
			pay_btn_1.css("zIndex","1").children("div:odd").css("display","none").end().filter(this).css("zIndex","99").children("div").eq(1).css("display","block")
			pay_flag_1[index]=false
		}else{
			$(this).css("zIndex","1").children("div").eq(1).css("display","none")
			pay_flag_1[index]=true
		}
	})

	// 下拉三角旋转
	var pay_btn_2=$(".pay_paymentMethod>div");
	var pay_flag_2=true;
	pay_btn_2.click(function(){
		if(pay_flag_2){
			$(this).children("ul").css("display","block").end().children("img").css("transform","rotate(180deg)");
			pay_flag_2=false;
		}else{
			$(this).children("ul").css("display","none").end().children("img").css("transform","rotate(0deg)");
			pay_flag_2=true;
		}
	})

	// 选项卡
	var pay_btn_3=$(".pay_guessUlike>a");
	var pay_card=$(".pay_guessUlike ul");
	var pay_flag_3=0;
	pay_btn_3.click(function(){
		var index=Math.round((pay_card.length-1)*Math.random())
		if(index==pay_flag_3){
			index=Math.round((pay_card.length-1)*Math.random())
		}else{
			pay_card.css("display","none").eq(pay_flag_3).css("display","block")
			pay_flag_3=index;
		}
	})
})
$(function(){
	var BR_btn_1=$(".BR_search_card li")
	BR_btn_1.click(function(){
		BR_btn_1.css({background:"#F2F2F2",color:"#666666"}).filter(this).css({background:"#FF3666",color:"#fff"})
	})

	var BR_btn_2=$(".BR_nav ul li");
	BR_btn_2.mouseover(function(){
		BR_btn_2.css({color:"#666666"}).filter(this).css({color:"#FF507A"})
	})

	var BR_btn_3=$(".BR_sideMenu>li");
	var BR_flag_1=[];
	for(var i=0;i<BR_btn_3.length;i++){
		BR_flag_1[i]=true;
	}
	BR_flag_1[0]=false;
	BR_btn_3.click(function(){
		var index=$(this).index();
		if(BR_flag_1[index]==true){
			BR_btn_3.children(".BR_subMenu").css("display","none").end().filter(this).children(".BR_subMenu").css("display","block")
			for(var i=0;i<BR_btn_3.length;i++){
				BR_flag_1[i]=true;
			}
			BR_flag_1[index]=false;
		}else{
			$(this).children(".BR_subMenu").css("display","none")
			BR_flag_1[index]=true;
		}
		return false;
	})
})	


