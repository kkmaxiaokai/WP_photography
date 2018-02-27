//------------------banner轮播---------------------
$(function(){
	var i=0;
	for(var i=0;i<$(".banner li").length;i++){
		$(".banner>.btn").append("<span></span>")
	}
	$(".banner>.btn span").eq(0).addClass("cur");
		$(".banner>.btn span").mousedown(function(){
			var i=$(this).index();
			$(".banner li").eq(i).fadeIn("fast").siblings(".banner li").fadeOut("fast");
			$(this).addClass("cur").siblings().removeClass("cur");
			clearInterval(timer);
		}).mouseleave(function(){
			autoPlay()
		})	
		
	var timer=null;
	function autoPlay(){
		clearInterval(timer)
		timer=setInterval(function(){
		if(i>$(".banner li").length-1){
			i=0;
		}else{
			i++;
			$(".banner li").eq(i-1).fadeIn("fast").siblings().fadeOut("fast");
			$(".banner>.btn span").eq(i-1).addClass("cur").siblings().removeClass("cur");
		}
	},2000);
	}			
	autoPlay()		
})
//-------------------列表页图片放大特效---------------------
$(function(){
        		$(".sch1 img").mouseover(function(even){
        			$("body").append('<div class="tips"><img src="'+this.src+'"></div>');
        			$(".tips").css({
					left:event.pageX+"px",
					top:event.pageY+"px"
        		}).show();
        		}).mouseout(function(){
					$(".tips").remove();
				}).mousemove(function(){
					$(".tips").css({
					left:event.pageX+"px",
					top:event.pageY+"px"
				}).show();
				})
				
				$(".sch2 img").mouseover(function(even){
        			$("body").append('<div class="tips"><img src="'+this.src+'"></div>');
        			$(".tips").css({
					left:event.pageX+"px",
					top:event.pageY+"px"
        		}).show();
        		}).mouseout(function(){
					$(".tips").remove();
				}).mousemove(function(){
					$(".tips").css({
					left:event.pageX+"px",
					top:event.pageY+"px"
				}).show();
				})
				
				$(".peo1 img").mouseover(function(even){
        			$("body").append('<div class="tips"><img src="'+this.src+'"></div>');
        			$(".tips").css({
					left:event.pageX+"px",
					top:event.pageY+"px"
        		}).show();
        		}).mouseout(function(){
					$(".tips").remove();
				}).mousemove(function(){
					$(".tips").css({
					left:event.pageX+"px",
					top:event.pageY+"px"
				}).show();
				})
				
				$(".peo2 img").mouseover(function(even){
        			$("body").append('<div class="tips"><img src="'+this.src+'"></div>');
        			$(".tips").css({
					left:event.pageX+"px",
					top:event.pageY+"px"
        		}).show();
        		}).mouseout(function(){
					$(".tips").remove();
				}).mousemove(function(){
					$(".tips").css({
					left:event.pageX+"px",
					top:event.pageY+"px"
				}).show();
				})
				
				$(".peo3 img").mouseover(function(even){
        			$("body").append('<div class="tips"><img src="'+this.src+'"></div>');
        			$(".tips").css({
					left:event.pageX+"px",
					top:event.pageY+"px"
        		}).show();
        		}).mouseout(function(){
					$(".tips").remove();
				}).mousemove(function(){
					$(".tips").css({
					left:event.pageX+"px",
					top:event.pageY+"px"
				}).show();
				})
        	})
//-------------首页作品展示图片滚动--------------------------
window.onload=function(){
	var oBox=document.getElementById("box");
	var oUl=document.getElementById("one");
	var oLi=oBox.getElementsByTagName("li");
	oUl.innerHTML+=oUl.innerHTML;
	var ulWidth=oLi.length*oLi[0].offsetWidth;
	var speed=2;
	
	setInterval(function(){
		oUl.style.left=oUl.offsetLeft-speed+"px";
			if(oUl.offsetLeft==-ulWidth/2){
				oUl.style.left=0;
			}else if(oUl.offsetLeft>0){
		oUl.style.left=-ulWidth/2+"px";
			}
	},30)
}