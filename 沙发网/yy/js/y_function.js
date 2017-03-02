window.onload = function() {
	//图片轮播定时器
	var bannerFades = document.getElementById("con_right").getElementsByTagName("a");
	var bannerOnIndex = 0;
	var intervalId = setInterval(switchBanner, 4000);
	
	function switchBanner(){
		// bannerFades[bannerOnIndex].style.opacity = 0;
		bannerFades[bannerOnIndex].style.visibility = "hidden";
		
		++bannerOnIndex;
		bannerOnIndex = bannerOnIndex % bannerFades.length;
		
		// bannerFades[bannerOnIndex].style.opacity = 1;
		bannerFades[bannerOnIndex].style.visibility = "visible";
	}
	
	//热门设备分类点击
	var cateAs = document.getElementById("category").getElementsByTagName("a");
	var currentActiveIndex = 0;
	function switchCate(clickedIndex){
		var clickedOne, anotherOne;
		var ulToShow, ulToHidden;
		var cateAs = document.getElementById("category").getElementsByTagName("a");
		
		if(clickedIndex == 1){
			clickedOne = cateAs[1];
			anotherOne = cateAs[0];
			
			ulToShow = document.getElementById("cate1");
			ulToHidden = document.getElementById("cate0");
		} else{
			clickedOne = cateAs[0];
			anotherOne = cateAs[1];
			
			ulToShow = document.getElementById("cate0");
			ulToHidden = document.getElementById("cate1");
		}
		
		if (currentActiveIndex != clickedIndex) {
			clickedOne.classList.add("on");
			anotherOne.classList.remove("on");
			currentActiveIndex = clickedIndex;
		}
		
		ulToShow.style.display = "block";
		ulToHidden.style.display = "none";
	}
	
	cateAs[0].onclick = function(){
		switchCate(0);
	};
	cateAs[1].onclick = function(){
		switchCate(1);
	};

	var rcmdListItems = document.getElementById("rcmd_box").getElementsByTagName("li");
	var subItems = document.getElementById("rcmd_box").getElementsByClassName("sub-item");
	var lastHoverIndexs = [0,7];
	function dealWithHover(index){
		var subItem = subItems[index];
		if(!subItem.classList.contains("active-state")){
			subItem.classList.add("active-state");

			var lastIndex = lastHoverIndexs[currentActiveIndex];
			subItems[lastIndex].classList.remove("active-state");
			lastHoverIndexs[currentActiveIndex] = index;
			
		}
	}
	
	for(var i = 0; i < rcmdListItems.length; i++){
		(function(index){
			rcmdListItems[i].onmouseover = function(){
				dealWithHover(index);
			};
		}(i));
	}
	//登录框
	var loginBtn = document.getElementById("login_btn");
	var blackCover = document.getElementById("black_cover");
	var loginWindow = document.getElementById("login_window");
	var closeX = document.getElementById("close-x");
	
	function wake(){
		document.documentElement.style.paddingRight = "0px";
		document.documentElement.style.overflow= 'auto';
		blackCover.style.zIndex = -1;
		loginWindow.style.marginTop = "100px";
		loginWindow.style.backgroundSize = "256px";
		loginWindow.style.paddingTop = "0px";
		blackCover.style.visibility = "hidden";
		intervalId = setInterval(switchBanner, 400);
	}
	loginBtn.onclick = function(){
		clearInterval(intervalId);
		blackCover.style.height = window.screen.availHeight + "px";
		document.documentElement.style.overflow= 'hidden';
		document.documentElement.style.paddingRight = "17px";
		blackCover.style.visibility = "visible";
		blackCover.style.zIndex = 999;
		loginWindow.style.visibility = "visible";
		loginWindow.style.paddingTop = "180px";
		loginWindow.style.marginTop = "200px";
		loginWindow.style.backgroundSize = "500px";
	};
	
	blackCover.onclick = wake;
	closeX.onclick = wake;
	
	loginWindow.onclick = function(){
		window.event? window.event.cancelBubble = true : e.stopPropagation();
	};
	
	//input
	//品牌
	var brandBox = document.getElementById("brand_box");
	var inputBrand = document.getElementById("input_brand");
	var brandLis = document.getElementById("brand_box").getElementsByClassName("brand-li");
	var currentBrandId = 0;
	var closeBrand = document.getElementById("close_brand");
	
	var originalHeight = brandBox.offsetHeight;
	brandBox.style.height = originalHeight + brandLis[0].getElementsByClassName("sub-list")[0].offsetHeight + "px";
	
	for(var i = 0; i < brandLis.length; i++){
		(function(index){
			brandLis[i].onclick = function(){
				clickBrandLi(index);
			};
		}(i));
	}
	
	function clickBrandLi(index){
		if(index != 6 && index != currentBrandId){
			brandLis[index].classList.add("act");
			brandLis[currentBrandId].classList.remove("act");
			brandBox.style.height = originalHeight + brandLis[index].getElementsByClassName("sub-list")[0].offsetHeight + "px";
			currentBrandId = index;
		}
	}
	
	inputBrand.onclick = function(){
		brandBox.style.zIndex = 99;
		brandBox.style.visibility = "visible";
	}
	
	closeBrand.onclick = function(){
		brandBox.style.zIndex = -99;
		brandBox.style.visibility = "hidden";
	}
	
	//input
	//型号
	var inputModel = document.getElementById("input_model");
	var closeModel = document.getElementById("close_model");
	var modelBox = document.getElementById("model_box");
	inputModel.onclick = function(){
		modelBox.style.display = "block";

	}
	closeModel.onclick = function(){
		modelBox.style.display = "none";
	}
};