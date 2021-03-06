
$(function(){
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        'sectionsColor': ['#1dd2af', '#f26964', '#ffd464', '#a4d1ee','#ababab'],
        anchors: ['page1', 'page2', 'page3', 'page4','page5'],
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['首页', '基本情况', '专业技能', '学习路程','结语'],
     	'controlArrowColor':'#2344f4',
     	afterLoad:function(anchorLink,index){
     		if(index==1){
     			$(".topnav li").eq(0).addClass("active").siblings().removeClass("active");
                $(".photo").toggle({effect:"drop",direction:"up"})
                $(".introduce").toggle({effect:"drop",direction:"up"})
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
            if(index==1){
                $(".photo").toggle({effect:"drop",direction:"up"})
                $(".introduce").toggle({effect:"drop",direction:"up"})
            }
     		if(index==2){
     			$(".list").hide({duration:1500,easing:'easeInOutExpo'});
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
    var ind=0;
    var len=$("#list a").length;
    var timer=null;
	$("#list a").mouseover(function(){
        ind=$("#list a").index(this);
        showpic(ind);
    }).eq(0).mouseover();
    $(".lunbo").hover(function(){
        if(timer){
        clearInterval(timer);
        }
    },function(){
            timer=setInterval(function(){
                showpic(ind);
                ind++;
                if(ind==len){
                    ind=0;
                }
            },3000);
        }).trigger('mouseleave')
    });
    function showpic(index2){
        $("#lunbopic").find("img").eq(index2).stop(true,true).show(1000)
                    .siblings().fadeOut();
    };

//轮播结束
//github跳动
$(function(){
    $(".github").hover(function(){
        $(this).toggle({effect:"shake",direction:"up",distance:3,times:3})
    })
})
//github跳动