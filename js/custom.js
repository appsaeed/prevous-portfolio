
(function($) {

  // Init Wow
  wow = new WOW({
    animateClass: 'animated',
    offset: 100
  });
  wow.init();

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  // Navigation scrolls
  $('.navbar-nav li a').bind('click', function(event) {
    $('.navbar-nav li').removeClass('active');
    $(this).closest('li').addClass('active');
    var $anchor = $(this);
    var nav = $($anchor.attr('href'));
    if (nav.length) {
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');

      event.preventDefault();
    }
  });


  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(".navbar-default").offset().top >100 ) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
	  $(".navbar-fixed-top").removeClass("btm_brd");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
	  $(".navbar-fixed-top").addClass("btm_brd");
    }

  });

})(jQuery);

/*
===========================================================
*==================nave-bar-finsished======================
===========================================================
*/
$(document).ready(function(){
	
$(".nav_img img").click(function(){
	
	
$(".usr_pro").toggleClass("usr_myani");
	
});






///////start slider animation header===================start
setInterval(function(){
	
$(".typed_txt").animate({top : "-10",opacity : "0"},1000);
$(".header_btn").animate({bottom : "0",opacity : "0"},1000);
$("#header_img_ani").animate({right:"-=1000"},1500,function(){

	
////hidden hey run code	
	setTimeout(function(){
	
		if(document.getElementsByClassName("slider_imgs")[0].classList.contains("Shows"	)){
	
		document.getElementsByClassName("slider_imgs")[1].classList.add("Shows");
		document.getElementsByClassName("slider_imgs")[0].classList.remove("Shows");
	
		}else if(document.getElementsByClassName("slider_imgs")[1].classList.contains(	"Shows")){
	
		document.getElementsByClassName("slider_imgs")[2].classList.add("Shows");
		document.getElementsByClassName("slider_imgs")[1].classList.remove("Shows");
	
		}else if(document.getElementsByClassName("slider_imgs")[2].classList.contains("Shows")){
	
		document.getElementsByClassName("slider_imgs")[0].classList.add("Shows");
		document.getElementsByClassName("slider_imgs")[2].classList.remove("Shows");
	
		}
		
		$("#header_img_ani").animate({right:"0"},1500);
		$(".header_btn").animate({bottom : "200",opacity : "1"},1500);
		$(".typed_txt").animate({top : "150",opacity : "1"},1000);
	
		
		
	},500);
////hidden hey run code

});

},20000);

///////end slider animation header==================finished

/// it's order button hover stop


///////header all display noen strt
setTimeout(function(){
	$(".header_btn").removeClass("display_none");
	$(".typed_txt").removeClass("display_none");
	$("#header_img_ani").removeClass("display_none");
},2000);
///////header all display noen end

////=======mouser over slider next prev button start
$(".slider_imgs ").mouseover(function(){
	
$(".btn_icon2").css({"opacity" : "1"});
$(".btn_icon1").css({"opacity" : "1"});
	
});
$(".slider_imgs ").mouseout(function(){
	
$(".btn_icon2").css({"opacity" : "0"});
$(".btn_icon1").css({"opacity" : "0"});
	
});

$(".typed_txt ").mouseover(function(){
	
$(".btn_icon2").css({"opacity" : "1"});
$(".btn_icon1").css({"opacity" : "1"});
	
});
$(".typed_txt ").mouseout(function(){
	
$(".btn_icon2").css({"opacity" : "0"});
$(".btn_icon1").css({"opacity" : "0"});
	
});
$(".btn_icon2 ").mouseover(function(){
	
$(".btn_icon2").css({"opacity" : "1"});
$(".btn_icon1").css({"opacity" : "1"});
	
});
$(".btn_icon2 ").mouseout(function(){
	
$(".btn_icon2").css({"opacity" : "0"});
$(".btn_icon1").css({"opacity" : "0"});
	
});
$(".btn_icon1 ").mouseover(function(){
	
$(".btn_icon2").css({"opacity" : "1"});
$(".btn_icon1").css({"opacity" : "1"});
	
});
$(".btn_icon1 ").mouseout(function(){
	
$(".btn_icon2").css({"opacity" : "0"});
$(".btn_icon1").css({"opacity" : "0"});
	
});
////=======mouser over slider next prev button end








////slider chenge button start
$(".btn_icon2").click(function(){


$(".typed_txt").animate({top : "-10",opacity : "0"},1000);
$(".header_btn").animate({bottom : "0",opacity : "0"},1000);
$("#header_img_ani").animate({right:"-=1000"},1500,function(){

	
////hidden hey run code	
	setTimeout(function(){
	
		if(document.getElementsByClassName("slider_imgs")[0].classList.contains("Shows"	)){
	
		document.getElementsByClassName("slider_imgs")[1].classList.add("Shows");
		document.getElementsByClassName("slider_imgs")[0].classList.remove("Shows");
	
		}else if(document.getElementsByClassName("slider_imgs")[1].classList.contains(	"Shows")){
	
		document.getElementsByClassName("slider_imgs")[2].classList.add("Shows");
		document.getElementsByClassName("slider_imgs")[1].classList.remove("Shows");
	
		}else if(document.getElementsByClassName("slider_imgs")[2].classList.contains("Shows")){
	
		document.getElementsByClassName("slider_imgs")[0].classList.add("Shows");
		document.getElementsByClassName("slider_imgs")[2].classList.remove("Shows");
	
		}
		
		$("#header_img_ani").animate({right:"0"},1500);
		$(".header_btn").animate({bottom : "200",opacity : "1"},1500);
		$(".typed_txt").animate({top : "150",opacity : "1"},1000);
	
		
		
	},500);
////hidden hey run code

});	
	
	
	
});
////slider chenge click button end









////slider chenge button start
$(".btn_icon1").click(function(){


$(".typed_txt").animate({top : "-10",opacity : "0"},1000);
$(".header_btn").animate({bottom : "0",opacity : "0"},1000);
$("#header_img_ani").animate({right:"-=1000"},1500,function(){

	
////hidden hey run code	
	setTimeout(function(){
	
		if(document.getElementsByClassName("slider_imgs")[2].classList.contains("Shows"	)){
	
		document.getElementsByClassName("slider_imgs")[1].classList.add("Shows");
		document.getElementsByClassName("slider_imgs")[2].classList.remove("Shows");
	
		}else if(document.getElementsByClassName("slider_imgs")[1].classList.contains(	"Shows")){
	
		document.getElementsByClassName("slider_imgs")[0].classList.add("Shows");
		document.getElementsByClassName("slider_imgs")[1].classList.remove("Shows");
	
		}else if(document.getElementsByClassName("slider_imgs")[0].classList.contains("Shows")){
	
		document.getElementsByClassName("slider_imgs")[2].classList.add("Shows");
		document.getElementsByClassName("slider_imgs")[0].classList.remove("Shows");
	
		}
		
		$("#header_img_ani").animate({right:"0"},1500);
		$(".header_btn").animate({bottom : "200",opacity : "1"},1500);
		$(".typed_txt").animate({top : "150",opacity : "1"},1000);
	
		
		
	},500);
////hidden hey run code

});	
	
	
	
});
////slider chenge return false; click button end


///form start varfication start
$("button#form-submit").click(function(){
	
var myname   = $("input#name").val().length;
var myemail  = $("input#email").val().length;
var message  = $("textarea#message").val().length;


 if(myname === 0 && myemail === 0 && message === 0 ){
	$("span#reid1").text("Please enter your name");
	$("span#reid2").text("Please enter your email");
	$("span#reid3").text("Please write something");
	return false;
 }else{
	
	$("span#reid1").text("");
	$("span#reid2").text("");
	$("span#reid3").text("");
	
 if( myname < 4 || myname > 18 ){
	
	$("span#reid1").text("Please enter at least 4 chars");
	return false;
	
 }else{ $("span#reid1").text(""); }

 if( myemail < 12 || myemail > 40 ){
	$("#reid2").text("Please enter a valid email");
	return false;
	
 }else{ $("#reid2").text(""); }

 if( message < 4 ){
	
	$("span#reid3").text("Please enter least 4 chars");
	return false;
	
 }else{ $("span#reid3").text(""); }
}

});
///form start varfication start

$(".float-right").click(function(){
	
	$('body,html').animate({scrollTop:0},3000);
	
});

$(".sing-scorll,.Btnscroll,#scrlmail").click(function(){
	
	$('body,html').animate({scrollTop :4140},3000);
});

$("#pot_scrol,#pot_scrola,#pot_scrolb").click(function(){
	
	$('body,html').animate({scrollTop : 1400},3000);
	
});

$("#mywork").click(function(){
	
	$('body,html').animate({scrollTop : 2150},2000);
	
});
$("#mydo").click(function(){
	
	$('body,html').animate({scrollTop : 2850},3000);
	
});
$("#example").click(function(){
	
	$('body,html').animate({scrollTop :3530},3000);
	
});

///jQuery finished
});


