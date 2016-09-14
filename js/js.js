
$(function(){
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        'sectionsColor': ['#fff', '#fff', '#fff', '#fff','#fff'],
        anchors: ['page1', 'page2', 'page3', 'page4','page5'],
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['首页', '基本情况', '专业技能', '学习路程','结语'],
     	'controlArrowColor':'#2344f4',
     	afterLoad:function(anchorLink,index){
     		if(index==1){
     			$(".topnav li").eq(0).addClass("active").siblings().removeClass("active");
     		}
     		if(index==2){
     			$(".topnav li").eq(1).addClass("active").siblings().removeClass("active");
     			$(".list").show({duration:1500,easing:'easeInOutExpo'});
     		}
     		if(index==3){
     			$(".topnav li").eq(2).addClass("active").siblings().removeClass("active");
     			$(".sum").slideDown(1000);
     			$(".skill img").show(1000);
     		}
     		if(index==4){
     			$(".topnav li").eq(3).addClass("active").siblings().removeClass("active");
     		}
     		if(index==5){
     			$(".topnav li").eq(4).addClass("active").siblings().removeClass("active");
     		}
     	},
     	onLeave:function(index, nextIndex, direction){
     		if(index==2){
     			$(".list").hide();
     		}
     		if(index==3){
     			$(".skill img").hide();
     			$(".drop").hide();
     		}
     	}
    })
})
//导航链接
$(function(){
	$(".topnav li").eq(0).click(function(){
		$.fn.fullpage.moveTo(1);
	})
	$(".topnav li").eq(1).click(function(){
		$.fn.fullpage.moveTo(2);
	})
	$(".topnav li").eq(2).click(function(){
		$.fn.fullpage.moveTo(3);
	})
	$(".topnav li").eq(3).click(function(){
		$.fn.fullpage.moveTo(4);
	})
	$(".topnav li").eq(4).click(function(){
		$.fn.fullpage.moveTo(5);
	})
})
$(function(){
	$(".topnav li").hover(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
})//导航链接结束
//技能点击显示
$(function(){
	$(".skill img").click(function(){
		var idx=$(".skill img").index(this);
		showdrop(idx);
})	
	function showdrop(index){
	$(".drop").eq(index).slideToggle({duration:1000,easing:'easeOutElastic'});
}
})//技能点击显示结束
//轮播
$(function(){
	
})
//轮播结束