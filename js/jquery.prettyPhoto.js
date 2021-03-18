/* ------------------------------------------------------------------------
	Class: prettyPhoto
	Use: Lightbox clone for jQuery
	Author: Stephane Caron (http://www.no-margin-for-errors.com)
	Version: 3.1.6
------------------------------------------------------------------------- */
!function(e){function t(){var e=location.href;return hashtag=-1!==e.indexOf("#prettyPhoto")?decodeURI(e.substring(e.indexOf("#prettyPhoto")+1,e.length)):!1,hashtag&&(hashtag=hashtag.replace(/<|>/g,"")),hashtag}function i(){"undefined"!=typeof theRel&&(location.hash=theRel+"/"+rel_index+"/")}function p(){-1!==location.href.indexOf("#prettyPhoto")&&(location.hash="prettyPhoto")}function o(e,t){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var i="[\\?&]"+e+"=([^&#]*)",p=new RegExp(i),o=p.exec(t);return null==o?"":o[1]}e.prettyPhoto={version:"3.1.6"},e.fn.prettyPhoto=function(a){function s(){e(".pp_loaderIcon").hide(),projectedTop=scroll_pos.scrollTop+(I/2-f.containerHeight/2),projectedTop<0&&(projectedTop=0),$ppt.fadeTo(settings.animation_speed,1),$pp_pic_holder.find(".pp_content").animate({height:f.contentHeight,width:f.contentWidth},settings.animation_speed),$pp_pic_holder.animate({top:projectedTop,left:j/2-f.containerWidth/2<0?0:j/2-f.containerWidth/2,width:f.containerWidth},settings.animation_speed,function(){$pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(f.height).width(f.width),$pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed),isSet&&"image"==h(pp_images[set_position])?$pp_pic_holder.find(".pp_hoverContainer").show():$pp_pic_holder.find(".pp_hoverContainer").hide(),settings.allow_expand&&(f.resized?e("a.pp_expand,a.pp_contract").show():e("a.pp_expand").hide()),!settings.autoplay_slideshow||P||v||e.prettyPhoto.startSlideshow(),settings.changepicturecallback(),v=!0}),m(),a.ajaxcallback()}function n(t){$pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility","hidden"),$pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed,function(){e(".pp_loaderIcon").show(),t()})}function r(t){t>1?e(".pp_nav").show():e(".pp_nav").hide()}function l(e,t){if(resized=!1,d(e,t),imageWidth=e,imageHeight=t,(k>j||b>I)&&doresize&&settings.allow_resize&&!$){for(resized=!0,fitting=!1;!fitting;)k>j?(imageWidth=j-200,imageHeight=t/e*imageWidth):b>I?(imageHeight=I-200,imageWidth=e/t*imageHeight):fitting=!0,b=imageHeight,k=imageWidth;(k>j||b>I)&&l(k,b),d(imageWidth,imageHeight)}return{width:Math.floor(imageWidth),height:Math.floor(imageHeight),containerHeight:Math.floor(b),containerWidth:Math.floor(k)+2*settings.horizontal_padding,contentHeight:Math.floor(y),contentWidth:Math.floor(w),resized:resized}}function d(t,i){t=parseFloat(t),i=parseFloat(i),$pp_details=$pp_pic_holder.find(".pp_details"),$pp_details.width(t),detailsHeight=parseFloat($pp_details.css("marginTop"))+parseFloat($pp_details.css("marginBottom")),$pp_details=$pp_details.clone().addClass(settings.theme).width(t).appendTo(e("body")).css({position:"absolute",top:-1e4}),detailsHeight+=$pp_details.height(),detailsHeight=detailsHeight<=34?36:detailsHeight,$pp_details.remove(),$pp_title=$pp_pic_holder.find(".ppt"),$pp_title.width(t),titleHeight=parseFloat($pp_title.css("marginTop"))+parseFloat($pp_title.css("marginBottom")),$pp_title=$pp_title.clone().appendTo(e("body")).css({position:"absolute",top:-1e4}),titleHeight+=$pp_title.height(),$pp_title.remove(),y=i+detailsHeight,w=t,b=y+titleHeight+$pp_pic_holder.find(".pp_top").height()+$pp_pic_holder.find(".pp_bottom").height(),k=t}function h(e){return e.match(/youtube\.com\/watch/i)||e.match(/youtu\.be/i)?"youtube":e.match(/vimeo\.com/i)?"vimeo":e.match(/\b.mov\b/i)?"quicktime":e.match(/\b.swf\b/i)?"flash":e.match(/\biframe=true\b/i)?"iframe":e.match(/\bajax=true\b/i)?"ajax":e.match(/\bcustom=true\b/i)?"custom":"#"==e.substr(0,1)?"inline":"image"}function c(){if(doresize&&"undefined"!=typeof $pp_pic_holder){if(scroll_pos=_(),contentHeight=$pp_pic_holder.height(),contentwidth=$pp_pic_holder.width(),projectedTop=I/2+scroll_pos.scrollTop-contentHeight/2,projectedTop<0&&(projectedTop=0),contentHeight>I)return;$pp_pic_holder.css({top:projectedTop,left:j/2+scroll_pos.scrollLeft-contentwidth/2})}}function _(){return self.pageYOffset?{scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset}:document.documentElement&&document.documentElement.scrollTop?{scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft}:document.body?{scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft}:void 0}function g(){I=e(window).height(),j=e(window).width(),"undefined"!=typeof $pp_overlay&&$pp_overlay.height(e(document).height()).width(j)}function m(){isSet&&settings.overlay_gallery&&"image"==h(pp_images[set_position])?(itemWidth=57,navWidth="facebook"==settings.theme||"pp_default"==settings.theme?50:30,itemsPerPage=Math.floor((f.containerWidth-100-navWidth)/itemWidth),itemsPerPage=itemsPerPage<pp_images.length?itemsPerPage:pp_images.length,totalPage=Math.ceil(pp_images.length/itemsPerPage)-1,0==totalPage?(navWidth=0,$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()):$pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(),galleryWidth=itemsPerPage*itemWidth,fullGalleryWidth=pp_images.length*itemWidth,$pp_gallery.css("margin-left",-(galleryWidth/2+navWidth/2)).find("div:first").width(galleryWidth+5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"),goToPage=Math.floor(set_position/itemsPerPage)<totalPage?Math.floor(set_position/itemsPerPage):totalPage,e.prettyPhoto.changeGalleryPage(goToPage),$pp_gallery_li.filter(":eq("+set_position+")").addClass("selected")):$pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")}function u(){if(settings.social_tools&&(facebook_like_link=settings.social_tools.replace("{location_href}",encodeURIComponent(location.href))),settings.markup=settings.markup.replace("{pp_social}",""),e("body").append(settings.markup),$pp_pic_holder=e(".pp_pic_holder"),$ppt=e(".ppt"),$pp_overlay=e("div.pp_overlay"),isSet&&settings.overlay_gallery){currentGalleryPage=0,toInject="";for(var t=0;t<pp_images.length;t++)pp_images[t].match(/\b(jpg|jpeg|png|gif)\b/gi)?(classname="",img_src=pp_images[t]):(classname="default",img_src=""),toInject+="<li class='"+classname+"'><a href='#'><img src='"+img_src+"' width='50' alt='' /></a></li>";toInject=settings.gallery_markup.replace(/{gallery}/g,toInject),$pp_pic_holder.find("#pp_full_res").after(toInject),$pp_gallery=e(".pp_pic_holder .pp_gallery"),$pp_gallery_li=$pp_gallery.find("li"),$pp_gallery.find(".pp_arrow_next").click(function(){return e.prettyPhoto.changeGalleryPage("next"),e.prettyPhoto.stopSlideshow(),!1}),$pp_gallery.find(".pp_arrow_previous").click(function(){return e.prettyPhoto.changeGalleryPage("previous"),e.prettyPhoto.stopSlideshow(),!1}),$pp_pic_holder.find(".pp_content").hover(function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()},function(){$pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()}),itemWidth=57,$pp_gallery_li.each(function(t){e(this).find("a").click(function(){return e.prettyPhoto.changePage(t),e.prettyPhoto.stopSlideshow(),!1})})}settings.slideshow&&($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'),$pp_pic_holder.find(".pp_nav .pp_play").click(function(){return e.prettyPhoto.startSlideshow(),!1})),$pp_pic_holder.attr("class","pp_pic_holder "+settings.theme),$pp_overlay.css({opacity:0,height:e(document).height(),width:e(window).width()}).bind("click",function(){settings.modal||e.prettyPhoto.close()}),e("a.pp_close").bind("click",function(){return e.prettyPhoto.close(),!1}),settings.allow_expand&&e("a.pp_expand").bind("click",function(){return e(this).hasClass("pp_expand")?(e(this).removeClass("pp_expand").addClass("pp_contract"),doresize=!1):(e(this).removeClass("pp_contract").addClass("pp_expand"),doresize=!0),n(function(){e.prettyPhoto.open()}),!1}),$pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click",function(){return e.prettyPhoto.changePage("previous"),e.prettyPhoto.stopSlideshow(),!1}),$pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click",function(){return e.prettyPhoto.changePage("next"),e.prettyPhoto.stopSlideshow(),!1}),c()}a=jQuery.extend({hook:"rel",animation_speed:"fast",ajaxcallback:function(){},slideshow:5e3,autoplay_slideshow:!1,opacity:.8,show_title:!0,allow_resize:!0,allow_expand:!0,default_width:500,default_height:344,counter_separator_label:"/",theme:"pp_default",horizontal_padding:20,hideflash:!1,wmode:"opaque",autoplay:!0,modal:!1,deeplinking:!0,overlay_gallery:!0,overlay_gallery_max:30,keyboard_shortcuts:!0,changepicturecallback:function(){},callback:function(){},ie6_fallback:!0,markup:'<div class="pp_pic_holder"> 						<div class="ppt">&nbsp;</div> 						<div class="pp_top"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 						<div class="pp_content_container"> 							<div class="pp_left"> 							<div class="pp_right"> 								<div class="pp_content"> 									<div class="pp_loaderIcon"></div> 									<div class="pp_fade"> 										<a href="#" class="pp_expand" title="Expand the image">Expand</a> 										<div class="pp_hoverContainer"> 											<a class="pp_next" href="#">next</a> 											<a class="pp_previous" href="#">previous</a> 										</div> 										<div id="pp_full_res"></div> 										<div class="pp_details"> 											<div class="pp_nav"> 												<a href="#" class="pp_arrow_previous">Previous</a> 												<p class="currentTextHolder">0/0</p> 												<a href="#" class="pp_arrow_next">Next</a> 											</div> 											<p class="pp_description"></p> 											<div class="pp_social">{pp_social}</div> 											<a class="pp_close" href="#">Close</a> 										</div> 									</div> 								</div> 							</div> 							</div> 						</div> 						<div class="pp_bottom"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 					</div> 					<div class="pp_overlay"></div>',gallery_markup:'<div class="pp_gallery"> 								<a href="#" class="pp_arrow_previous">Previous</a> 								<div> 									<ul> 										{gallery} 									</ul> 								</div> 								<a href="#" class="pp_arrow_next">Next</a> 							</div>',image_markup:'<img id="fullResImage" src="{path}" />',flash_markup:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',quicktime_markup:'<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',iframe_markup:'<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',inline_markup:'<div class="pp_inline">{content}</div>',custom_markup:"",social_tools:'<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'},a);var f,v,y,w,b,k,P,x=this,$=!1,I=e(window).height(),j=e(window).width();return doresize=!0,scroll_pos=_(),e(window).unbind("resize.prettyphoto").bind("resize.prettyphoto",function(){c(),g()}),a.keyboard_shortcuts&&e(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto",function(t){if("undefined"!=typeof $pp_pic_holder&&$pp_pic_holder.is(":visible"))switch(t.keyCode){case 37:e.prettyPhoto.changePage("previous"),t.preventDefault();break;case 39:e.prettyPhoto.changePage("next"),t.preventDefault();break;case 27:settings.modal||e.prettyPhoto.close(),t.preventDefault()}}),e.prettyPhoto.initialize=function(){return settings=a,"pp_default"==settings.theme&&(settings.horizontal_padding=16),theRel=e(this).attr(settings.hook),galleryRegExp=/\[(?:.*)\]/,isSet=galleryRegExp.exec(theRel)?!0:!1,pp_images=isSet?jQuery.map(x,function(t){return-1!=e(t).attr(settings.hook).indexOf(theRel)?e(t).attr("href"):void 0}):e.makeArray(e(this).attr("href")),pp_titles=isSet?jQuery.map(x,function(t){return-1!=e(t).attr(settings.hook).indexOf(theRel)?e(t).find("img").attr("alt")?e(t).find("img").attr("alt"):"":void 0}):e.makeArray(e(this).find("img").attr("alt")),pp_descriptions=isSet?jQuery.map(x,function(t){return-1!=e(t).attr(settings.hook).indexOf(theRel)?e(t).attr("title")?e(t).attr("title"):"":void 0}):e.makeArray(e(this).attr("title")),pp_images.length>settings.overlay_gallery_max&&(settings.overlay_gallery=!1),set_position=jQuery.inArray(e(this).attr("href"),pp_images),rel_index=isSet?set_position:e("a["+settings.hook+"^='"+theRel+"']").index(e(this)),u(this),settings.allow_resize&&e(window).bind("scroll.prettyphoto",function(){c()}),e.prettyPhoto.open(),!1},e.prettyPhoto.open=function(t){return"undefined"==typeof settings&&(settings=a,pp_images=e.makeArray(arguments[0]),pp_titles=e.makeArray(arguments[1]?arguments[1]:""),pp_descriptions=e.makeArray(arguments[2]?arguments[2]:""),isSet=pp_images.length>1?!0:!1,set_position=arguments[3]?arguments[3]:0,u(t.target)),settings.hideflash&&e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","hidden"),r(e(pp_images).size()),e(".pp_loaderIcon").show(),settings.deeplinking&&i(),settings.social_tools&&(facebook_like_link=settings.social_tools.replace("{location_href}",encodeURIComponent(location.href)),$pp_pic_holder.find(".pp_social").html(facebook_like_link)),$ppt.is(":hidden")&&$ppt.css("opacity",0).show(),$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity),$pp_pic_holder.find(".currentTextHolder").text(set_position+1+settings.counter_separator_label+e(pp_images).size()),"undefined"!=typeof pp_descriptions[set_position]&&""!=pp_descriptions[set_position]?$pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])):$pp_pic_holder.find(".pp_description").hide(),movie_width=parseFloat(o("width",pp_images[set_position]))?o("width",pp_images[set_position]):settings.default_width.toString(),movie_height=parseFloat(o("height",pp_images[set_position]))?o("height",pp_images[set_position]):settings.default_height.toString(),$=!1,-1!=movie_height.indexOf("%")&&(movie_height=parseFloat(e(window).height()*parseFloat(movie_height)/100-150),$=!0),-1!=movie_width.indexOf("%")&&(movie_width=parseFloat(e(window).width()*parseFloat(movie_width)/100-150),$=!0),$pp_pic_holder.fadeIn(function(){switch($ppt.html(settings.show_title&&""!=pp_titles[set_position]&&"undefined"!=typeof pp_titles[set_position]?unescape(pp_titles[set_position]):"&nbsp;"),imgPreloader="",skipInjection=!1,h(pp_images[set_position])){case"image":imgPreloader=new Image,nextImage=new Image,isSet&&set_position<e(pp_images).size()-1&&(nextImage.src=pp_images[set_position+1]),prevImage=new Image,isSet&&pp_images[set_position-1]&&(prevImage.src=pp_images[set_position-1]),$pp_pic_holder.find("#pp_full_res")[0].innerHTML=settings.image_markup.replace(/{path}/g,pp_images[set_position]),imgPreloader.onload=function(){f=l(imgPreloader.width,imgPreloader.height),s()},imgPreloader.onerror=function(){alert("Image cannot be loaded. Make sure the path is correct and image exist."),e.prettyPhoto.close()},imgPreloader.src=pp_images[set_position];break;case"youtube":f=l(movie_width,movie_height),movie_id=o("v",pp_images[set_position]),""==movie_id&&(movie_id=pp_images[set_position].split("youtu.be/"),movie_id=movie_id[1],movie_id.indexOf("?")>0&&(movie_id=movie_id.substr(0,movie_id.indexOf("?"))),movie_id.indexOf("&")>0&&(movie_id=movie_id.substr(0,movie_id.indexOf("&")))),movie="http://www.youtube.com/embed/"+movie_id,movie+=o("rel",pp_images[set_position])?"?rel="+o("rel",pp_images[set_position]):"?rel=1",settings.autoplay&&(movie+="&autoplay=1"),toInject=settings.iframe_markup.replace(/{width}/g,f.width).replace(/{height}/g,f.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);break;case"vimeo":f=l(movie_width,movie_height),movie_id=pp_images[set_position];var t=/http(s?):\/\/(www\.)?vimeo.com\/(\d+)/,i=movie_id.match(t);movie="http://player.vimeo.com/video/"+i[3]+"?title=0&byline=0&portrait=0",settings.autoplay&&(movie+="&autoplay=1;"),vimeo_width=f.width+"/embed/?moog_width="+f.width,toInject=settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,f.height).replace(/{path}/g,movie);break;case"quicktime":f=l(movie_width,movie_height),f.height+=15,f.contentHeight+=15,f.containerHeight+=15,toInject=settings.quicktime_markup.replace(/{width}/g,f.width).replace(/{height}/g,f.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);break;case"flash":f=l(movie_width,movie_height),flash_vars=pp_images[set_position],flash_vars=flash_vars.substring(pp_images[set_position].indexOf("flashvars")+10,pp_images[set_position].length),filename=pp_images[set_position],filename=filename.substring(0,filename.indexOf("?")),toInject=settings.flash_markup.replace(/{width}/g,f.width).replace(/{height}/g,f.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+"?"+flash_vars);break;case"iframe":f=l(movie_width,movie_height),frame_url=pp_images[set_position],frame_url=frame_url.substr(0,frame_url.indexOf("iframe")-1),toInject=settings.iframe_markup.replace(/{width}/g,f.width).replace(/{height}/g,f.height).replace(/{path}/g,frame_url);break;case"ajax":doresize=!1,f=l(movie_width,movie_height),doresize=!0,skipInjection=!0,e.get(pp_images[set_position],function(e){toInject=settings.inline_markup.replace(/{content}/g,e),$pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject,s()});break;case"custom":f=l(movie_width,movie_height),toInject=settings.custom_markup;break;case"inline":myClone=e(pp_images[set_position]).clone().append('<br clear="all" />').css({width:settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(e("body")).show(),doresize=!1,f=l(e(myClone).width(),e(myClone).height()),doresize=!0,e(myClone).remove(),toInject=settings.inline_markup.replace(/{content}/g,e(pp_images[set_position]).html())}imgPreloader||skipInjection||($pp_pic_holder.find("#pp_full_res")[0].innerHTML=toInject,s())}),!1},e.prettyPhoto.changePage=function(t){currentGalleryPage=0,"previous"==t?(set_position--,set_position<0&&(set_position=e(pp_images).size()-1)):"next"==t?(set_position++,set_position>e(pp_images).size()-1&&(set_position=0)):set_position=t,rel_index=set_position,doresize||(doresize=!0),settings.allow_expand&&e(".pp_contract").removeClass("pp_contract").addClass("pp_expand"),n(function(){e.prettyPhoto.open()})},e.prettyPhoto.changeGalleryPage=function(e){"next"==e?(currentGalleryPage++,currentGalleryPage>totalPage&&(currentGalleryPage=0)):"previous"==e?(currentGalleryPage--,currentGalleryPage<0&&(currentGalleryPage=totalPage)):currentGalleryPage=e,slide_speed="next"==e||"previous"==e?settings.animation_speed:0,slide_to=currentGalleryPage*itemsPerPage*itemWidth,$pp_gallery.find("ul").animate({left:-slide_to},slide_speed)},e.prettyPhoto.startSlideshow=function(){"undefined"==typeof P?($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function(){return e.prettyPhoto.stopSlideshow(),!1}),P=setInterval(e.prettyPhoto.startSlideshow,settings.slideshow)):e.prettyPhoto.changePage("next")},e.prettyPhoto.stopSlideshow=function(){$pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function(){return e.prettyPhoto.startSlideshow(),!1}),clearInterval(P),P=void 0},e.prettyPhoto.close=function(){$pp_overlay.is(":animated")||(e.prettyPhoto.stopSlideshow(),$pp_pic_holder.stop().find("object,embed").css("visibility","hidden"),e("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed,function(){e(this).remove()}),$pp_overlay.fadeOut(settings.animation_speed,function(){settings.hideflash&&e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility","visible"),e(this).remove(),e(window).unbind("scroll.prettyphoto"),p(),settings.callback(),doresize=!0,v=!1,delete settings}))},!pp_alreadyInitialized&&t()&&(pp_alreadyInitialized=!0,hashIndex=t(),hashRel=hashIndex,hashIndex=hashIndex.substring(hashIndex.indexOf("/")+1,hashIndex.length-1),hashRel=hashRel.substring(0,hashRel.indexOf("/")),setTimeout(function(){e("a["+a.hook+"^='"+hashRel+"']:eq("+hashIndex+")").trigger("click")},50)),this.unbind("click.prettyphoto").bind("click.prettyphoto",e.prettyPhoto.initialize)}}(jQuery);var pp_alreadyInitialized=!1;










$(document).ready(function() {

  var options = {
    nextButton: true,
    prevButton: true,
    animateStartingFrameIn: true,
    autoPlayDelay: 3000,
    preloader: true,
    pauseOnHover: false,
    preloadTheseFrames: [1],
    preloadTheseImages: [
      "img/slides/thumb1.png",
      "img/slides/thumb2.png",
      "img/slides/thumb3.png"
    ]
  };

  var sequence = $("#sequence").sequence(options).data("sequence");

  sequence.afterLoaded = function() {
    $("#sequence-theme .nav").fadeIn(100);
    $("#sequence-theme .nav li:nth-child(" + (sequence.settings.startingFrameID) + ") img").addClass("active");
  }

  sequence.beforeNextFrameAnimatesIn = function() {
    $("#sequence-theme .nav li:not(:nth-child(" + (sequence.nextFrameID) + ")) img").removeClass("active");
    $("#sequence-theme .nav li:nth-child(" + (sequence.nextFrameID) + ") img").addClass("active");
  }

  $("#sequence-theme").on("click", ".nav li", function() {
    $(this).children("img").removeClass("active").children("img").addClass("active");
    sequence.nextFrameID = $(this).index() + 1;
    sequence.goTo(sequence.nextFrameID);
  });

  $("a[data-pretty^='prettyPhoto']").prettyPhoto({
    animation_speed: 'fast',
    slideshow: 10000,
    hideflash: true
  });

  $('ul.da-thumbs > li').hoverdir();

});
















(function( $, undefined ) {
		
	/*
	 * HoverDir object.
	 */
	$.HoverDir 				= function( options, element ) {
	
		this.$el	= $( element );
		
		this._init( options );
		
	};
	
	$.HoverDir.defaults 	= {
		hoverDelay	: 0,
		reverse		: false
	};
	
	$.HoverDir.prototype 	= {
		_init 				: function( options ) {
			
			this.options 		= $.extend( true, {}, $.HoverDir.defaults, options );
			
			// load the events
			this._loadEvents();
			
		},
		_loadEvents			: function() {
			
			var _self = this;
			
			this.$el.on( 'mouseenter.hoverdir, mouseleave.hoverdir', function( event ) {
				
				var $el			= $(this),
					evType		= event.type,
					$hoverElem	= $el.find( 'article' ),
					direction	= _self._getDir( $el, { x : event.pageX, y : event.pageY } ),
					hoverClasses= _self._getClasses( direction );
				
				$hoverElem.removeClass();
				
				if( evType === 'mouseenter' ) {
					
					$hoverElem.hide().addClass( hoverClasses.from );
					
					clearTimeout( _self.tmhover );
					
					_self.tmhover	= setTimeout( function() {
						
						$hoverElem.show( 0, function() {
							$(this).addClass( 'da-animate' ).addClass( hoverClasses.to );
						} );
						
					
					}, _self.options.hoverDelay );
					
				}
				else {
				
					$hoverElem.addClass( 'da-animate' );
					
					clearTimeout( _self.tmhover );
					
					$hoverElem.addClass( hoverClasses.from );
					
				}
					
			} );
			
		},
		// credits : http://stackoverflow.com/a/3647634
		_getDir				: function( $el, coordinates ) {
			
				/** the width and height of the current div **/
			var w = $el.width(),
				h = $el.height(),

				/** calculate the x and y to get an angle to the center of the div from that x and y. **/
				/** gets the x value relative to the center of the DIV and "normalize" it **/
				x = ( coordinates.x - $el.offset().left - ( w/2 )) * ( w > h ? ( h/w ) : 1 ),
				y = ( coordinates.y - $el.offset().top  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),
			
				/** the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);**/
				/** first calculate the angle of the point, 
				add 180 deg to get rid of the negative values
				divide by 90 to get the quadrant
				add 3 and do a modulo by 4  to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
				direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 )  % 4;
			
			return direction;
			
		},
		_getClasses			: function( direction ) {
			
			var fromClass, toClass;
			
			switch( direction ) {
				case 0:
					// from top
					( !this.options.reverse ) ? fromClass = 'da-slideFromTop' : fromClass = 'da-slideFromBottom';
					toClass		= 'da-slideTop';
					break;
				case 1:
					// from right
					( !this.options.reverse ) ? fromClass = 'da-slideFromRight' : fromClass = 'da-slideFromLeft';
					toClass		= 'da-slideLeft';
					break;
				case 2:
					// from bottom
					( !this.options.reverse ) ? fromClass = 'da-slideFromBottom' : fromClass = 'da-slideFromTop';
					toClass		= 'da-slideTop';
					break;
				case 3:
					// from left
					( !this.options.reverse ) ? fromClass = 'da-slideFromLeft' : fromClass = 'da-slideFromRight';
					toClass		= 'da-slideLeft';
					break;
			};
			
			return { from : fromClass, to: toClass };
					
		}
	};
	
	var logError 			= function( message ) {
		if ( this.console ) {
			console.error( message );
		}
	};
	
	$.fn.hoverdir			= function( options ) {
	
		if ( typeof options === 'string' ) {
			
			var args = Array.prototype.slice.call( arguments, 1 );
			
			this.each(function() {
			
				var instance = $.data( this, 'hoverdir' );
				
				if ( !instance ) {
					logError( "cannot call methods on hoverdir prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				}
				
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
					logError( "no such method '" + options + "' for hoverdir instance" );
					return;
				}
				
				instance[ options ].apply( instance, args );
			
			});
		
		} 
		else {
		
			this.each(function() {
			
				var instance = $.data( this, 'hoverdir' );
				if ( !instance ) {
					$.data( this, 'hoverdir', new $.HoverDir( options, this ) );
				}
			});
		
		}
		
		return this;
		
	};
	
})( jQuery );


/*
Sequence.js (http://www.sequencejs.com)
Version: 0.8.1 Beta
Author: Ian Lunn @IanLunn
Author URL: http://www.ianlunn.co.uk/
Github: https://github.com/IanLunn/Sequence

This is a FREE script and is available under a MIT License:
http://www.opensource.org/licenses/mit-license.php

Sequence.js and its dependencies are (c) Ian Lunn Design 2012 unless otherwise stated.

Sequence also relies on the following open source scripts:

- 	jQuery imagesLoaded 2.1.0 (http://github.com/desandro/imagesloaded)
	Paul Irish et al 
	Available under a MIT License: http://www.opensource.org/licenses/mit-license.php

- 	jQuery TouchWipe 1.1.1 (http://www.netcu.de/jquery-touchwipe-iphone-ipad-library)
	Andreas Waltl, netCU Internetagentur (http://www.netcu.de)
	Available under a MIT License: http://www.opensource.org/licenses/mit-license.php

- 	Modernizr 2.6.1 Custom Build (http://modernizr.com/)
	Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
	Available under the BSD and MIT licenses: www.modernizr.com/license/
*/

(function($) {
	function Sequence(element, options, defaults, get) {
		var self = this;
		self.container = $(element),
		self.sequence = self.container.children("ul");
		
		try { //is Modernizr.prefixed installed?
			Modernizr.prefixed;
			if(Modernizr.prefixed === undefined){
				throw "undefined";
			}
		}
		catch(err) { //if not...get the custom build necessary for Sequence
			get.modernizr();
		}
		
		var prefixes = { //convert JS transition names to CSS names
		'WebkitTransition' : '-webkit-',
		'MozTransition'    : '-moz-',
		'OTransition'      : '-o-',
		'msTransition'     : '-ms-',
		'transition'       : ''
		},
		transitions = { //convert JS transition names to JS transition end and animation end event names
		'WebkitTransition' : 'webkitTransitionEnd webkitAnimationEnd',
		'MozTransition'    : 'transitionend animationend',
		'OTransition'      : 'otransitionend oanimationend',
		'msTransition'     : 'MSTransitionEnd MSAnimationEnd',
		'transition'       : 'transitionend animationend'
		};
		
		self.prefix = prefixes[Modernizr.prefixed('transition')], //work out the CSS prefix for the browser being used (-webkit- for example)
		self.transitionEnd = transitions[Modernizr.prefixed('transition')], //work out the JS transitionEnd name for the browser being used (webkitTransitionEnd webkitAnimationEnd for example)
		self.transitionProperties = {},
		self.numberOfFrames = self.sequence.children("li").length, //number of frames (<li>) Sequence consists of

		self.transitionsSupported = (self.prefix !== undefined) ? true : false, //determine if transitions are supported
		self.hasTouch = ("ontouchstart" in window) ? true : false, //determine if this is a touch enabled device
		self.active, //determines whether Sequence is animating
		self.navigationSkipThresholdActive = false, //when active, navigation is prevented (used to stop very fast navigation)
		self.autoPlayTimer, //the timer used for the autoPlay feature
		self.isPaused = false, //whether Sequence is paused via being hovered over
		self.isHardPaused = false, //whether Sequence is paused via a pause button
		self.mouseover = false,
		self.defaultPreloader,
		self.nextButton,
		self.prevButton,
		self.pauseButton,
		self.pauseIcon,
		self.delayUnpause,
		self.init = {
			/*functionality to initiate the preloader, next/previous buttons and so on
			
			devOption: true = the developer wants to use the default selector. false = don't use a uiElement. string = the developer defined selector to use for the UI element
			defaultOption: the default selector to use for the UI element, when the developer specifies false for devOption
			*/
			uiElements: function(devOption, defaultOption) { 
				switch(devOption) {
					case false: //don't set up a uiElement
						return undefined;

					case true: //use the default uiElement
					    if(defaultOption === ".sequence-preloader") { //if setting up the preloader...
					        get.defaultPreloader(self.container, self.transitionsSupported, self.prefix); //get the default preloader
					    };
						return $(defaultOption); //return the default element

					default: //if using a developer defined selector...
						return $(devOption); //return the developer defined element
				}
			}
		};

		//Callbacks
		self.paused = function() {},						//executes when Sequence is paused
		self.unpaused = function() {},						//executes when Sequence is unpaused
		
		self.beforeNextFrameAnimatesIn = function() {},		//executes before the next frame animates in
		self.afterNextFrameAnimatesIn = function() {},		//executes after the next frame animates in
		self.beforeCurrentFrameAnimatesOut = function() {},	//executes before the current frame animates out
		self.afterCurrentFrameAnimatesOut = function() {},	//executes after the current frame animates out
		
		self.beforeFirstFrameAnimatesIn = function() {},	//executes before the first frame animates in
		self.afterFirstFrameAnimatesIn = function() {},		//executes after the first frame animates in
		self.beforeLastFrameAnimatesIn = function() {},		//executes before the last frame animates in
		self.afterLastFrameAnimatesIn = function() {},		//executes after the last frame animates in

		self.afterLoaded = function() {};					//executes after Sequence is initiated
		
		//INIT
		self.settings = $.extend({}, defaults, options); //combine default options with developer defined ones
		self.settings.preloader = self.init.uiElements(self.settings.preloader, ".sequence-preloader"); //set up the preloader and save it
		self.firstFrame = (self.settings.animateStartingFrameIn) ? true : false; //determine if the first frame should animate in
		self.settings.unpauseDelay = (self.settings.unpauseDelay === null) ? self.settings.autoPlayDelay : self.settings.unpauseDelay; //if the unpauseDelay is not specified, make it the same as the autoPlayDelay speed
		self.currentHashTag; //the current hash tag taken from the URL
		self.getHashTagFrom = (self.settings.hashDataAttribute) ? "data-sequence-hashtag": "id"; //get the hashtag from the ID or data attribute?  
		self.frameHashID = []; //array that matches frames with has IDs
		self.direction = self.settings.autoPlayDirection;
		
		if(self.settings.hideFramesUntilPreloaded && self.settings.preloader) { //if using a preloader and hiding frames until preloading has completed...
		    self.sequence.children("li").hide(); //hide Sequence's frames
		}
		
		if(self.prefix === "-o-") { //if Opera prefixes are required...
		    self.transitionsSupported = get.operaTest(); //run a test to see if Opera correctly supports transitions (Opera 11 has bugs relating to transitions)
		}
        
        self.modifyElements(self.sequence.children("li"), "0s"); //reset transition time to 0s
		self.sequence.children("li").removeClass("animate-in"); //remove any instance of "animate-in", which should be used incase JS is disabled
		
		//functionality to run once Sequence has preloaded
		function oncePreloaded() {
		    self.afterLoaded(); //callback
		    if(self.settings.hideFramesUntilPreloaded && self.settings.preloader) {
		        self.sequence.children("li").show();
		    }
		    if(self.settings.preloader){
		    	if(self.settings.hidePreloaderUsingCSS && self.transitionsSupported) {
		    		self.prependPreloadingCompleteTo = (self.settings.prependPreloadingComplete == true) ? self.settings.preloader : $(self.settings.prependPreloadingComplete);
		    		self.prependPreloadingCompleteTo.addClass("preloading-complete");
		    		setTimeout(init, self.settings.hidePreloaderDelay);
		    	}else{

		    		self.settings.preloader.fadeOut(self.settings.hidePreloaderDelay, function() {
		    			clearInterval(self.defaultPreloader);
		    			init();
		    		});
		    	}
		    }else{
		    	init();
		    }
		}

		var preloadTheseFramesLength = self.settings.preloadTheseFrames.length; //how many frames to preload?
		var preloadTheseImagesLength = self.settings.preloadTheseImages.length; //how many single images to load?

		if(self.settings.preloader && (preloadTheseFramesLength !== 0 || preloadTheseImagesLength !== 0)) { //if using the preloader and the dev has specified some images should preload...
		    function saveImagesToArray(length, srcOnly) {
		    	var imagesToPreload = []; //saves the images that are to be preloaded
			    	if(!srcOnly){
			    		for(var i = length; i > 0; i--){ //for each frame to be preloaded...
			    			self.sequence.children("li:nth-child("+self.settings.preloadTheseFrames[i-1]+")").find("img").each(function() { //find <img>'s in specific frames, and for each found...
			    				imagesToPreload.push($(this)[0]); //add it to the array of images to be preloaded
			    			});
		            	}
			    	}else{
			    		for(var i = length; i > 0; i--) { //for each frame to be preloaded...
		            		imagesToPreload.push($("body").find('img[src="'+self.settings.preloadTheseImages[i-1]+'"]')[0]); //find any <img> with the given source and add it to the array of images to be preloaded
			    		}
			    	}			    
		        return imagesToPreload;
		    }
	
            var frameImagesToPreload = saveImagesToArray(preloadTheseFramesLength); //get images from particular Sequence frames to be preloaded
           	var individualImagesToPreload = saveImagesToArray(preloadTheseImagesLength, true); //get images with specific source values to be preloaded
            var imagesToPreload = $(frameImagesToPreload.concat(individualImagesToPreload)); //combine frame images and individual images
			var imagesToPreloadLength = imagesToPreload.length;

			imagesLoaded(imagesToPreload, oncePreloaded);
    	}else{ //if not using the preloader...
		    $(window).bind("load", function() { //when the window loads...
		    	oncePreloaded(); //run the init functionality when the preloader has finished
		    	$(this).unbind("load"); //unbind the load event as it's no longer needed
		    });
		}

		//jQuery imagesLoaded plugin v2.1.0 (http://github.com/desandro/imagesloaded)
		function imagesLoaded(imagesToPreload, callback) {
			BLANK = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
			var $this = imagesToPreload,
				deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
				hasNotify = $.isFunction(deferred.notify),
				$images = $this.find('img').add( $this.filter('img') ),
				loaded = [],
				proper = [],
				broken = [];

			//Register deferred callbacks
			if($.isPlainObject(callback)) {
				$.each(callback, function(key, value) {
					if(key === 'callback') {
						callback = value;
					}else if(deferred) {
						deferred[key](value);
					}
				});
			}

			function doneLoading() {
				var $proper = $(proper),
					$broken = $(broken);

				if(deferred) {
					if(broken.length) {
						deferred.reject($images, $proper, $broken);
					}else{
						deferred.resolve($images);
					}
				}

				if($.isFunction(callback)) {
					callback.call($this, $images, $proper, $broken);
				}
			}

			function imgLoaded( img, isBroken ) {	
				if(img.src === BLANK || $.inArray(img, loaded) !== -1) { // don't proceed if BLANK image, or image is already loaded
					return;
				}
				
				loaded.push(img); // store element in loaded images array

				if(isBroken) { // keep track of broken and properly loaded images
					broken.push(img);
				}else{
					proper.push(img);
				}

				$.data(img, 'imagesLoaded', {isBroken: isBroken, src: img.src }); // cache image and its state for future calls

				if(hasNotify) { // trigger deferred progress method if present
					deferred.notifyWith($(img), [isBroken, $images, $(proper), $(broken)]);
				}

				if($images.length === loaded.length) { // call doneLoading and clean listeners if all images are loaded
					setTimeout(doneLoading);
					$images.unbind('.imagesLoaded');
				}
			}

			if(!$images.length) { // if no images, trigger immediately
				doneLoading();
			}else{
				$images.bind('load.imagesLoaded error.imagesLoaded', function(event) {
					imgLoaded(event.target, event.type === 'error'); // trigger imgLoaded
				}).each(function(i, el) {
					var src = el.src;
					var cached = $.data(el, 'imagesLoaded'); // find out if this image has been already checked for status if it was, and src has not changed, call imgLoaded on it
					if(cached && cached.src === src) {
						imgLoaded(el, cached.isBroken);
						return;
					}

					if(el.complete && el.naturalWidth !== undefined) { // if complete is true and browser supports natural sizes, try to check for image status manually
						imgLoaded(el, el.naturalWidth === 0 || el.naturalHeight === 0);
						return;
					}

					// cached images don't fire load sometimes, so we reset src, but only when dealing with IE, or image is complete (loaded) and failed manual check webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
					if(el.readyState || el.complete) {
						el.src = BLANK;
						el.src = src;
					}
				});
			}
		};		
		
		function init() {
			$(self.settings.preloader).remove(); //remove the preloader element
			
			self.nextButton = self.init.uiElements(self.settings.nextButton, ".next"); //set up the next button
			self.prevButton = self.init.uiElements(self.settings.prevButton, ".prev"); //set up the previous button
			self.pauseButton = self.init.uiElements(self.settings.pauseButton, ".pause"); //set up the pause button
			
			if((self.nextButton !== undefined && self.nextButton !== false) && self.settings.showNextButtonOnInit){self.nextButton.show();} //if using a next button, show it
			if((self.prevButton !== undefined && self.prevButton !== false) && self.settings.showPrevButtonOnInit){self.prevButton.show();} //if using a previous button, show it			
			if((self.pauseButton !== undefined && self.pauseButton !== false)){self.pauseButton.show();} //if using a pause button, show it
						
			if(self.settings.pauseIcon !== false) {
				self.pauseIcon = self.init.uiElements(self.settings.pauseIcon, ".pause-icon");
				if(self.pauseIcon !== undefined) {
					self.pauseIcon.hide();
				}
			}else{
			    self.pauseIcon = undefined;
			}

			self.nextFrameID = self.settings.startingFrameID;
						
			if(self.settings.hashTags) { //if using hashtags...
			    self.sequence.children("li").each(function() { //for each frame...
			        self.frameHashID.push($(this).attr(self.getHashTagFrom)); //add the hashtag to an array
			    });
			    			    
			    self.currentHashTag = location.hash.replace("#", ""); //get the current hashtag
			    if(self.currentHashTag === undefined || self.currentHashTag === "") { //if there is no hashtag...
			        self.nextFrameID = self.settings.startingFrameID; //use the startingFrameID
			    }else{			        
			        self.frameHashIndex = $.inArray(self.currentHashTag, self.frameHashID); //get the index of the frame that matches the hashtag
			        if(self.frameHashIndex !== -1){  //if the hashtag matches a Sequence frame ID...
			            self.nextFrameID = self.frameHashIndex + 1; //use the frame associated to the hashtag
			        }else{			            
			            self.nextFrameID = self.settings.startingFrameID; //use the startingFrameID
			        }
			    }
			}

			self.nextFrame = self.sequence.children("li:nth-child("+self.nextFrameID+")");
			self.nextFrameChildren = self.nextFrame.children();
			
			self.sequence.css({"width": "100%", "height": "100%", "position": "relative"}); //set the sequence list to 100% width/height just incase it hasn't been specified in the CSS
			self.sequence.children("li").css({"width": "100%", "height": "100%", "position": "absolute", "z-index": 1}); //do the same for the frames and make them absolute

			if(self.transitionsSupported) { //initiate the full featured Sequence if transitions are supported...
				if(!self.settings.animateStartingFrameIn) { //start first frame in animated in position
					self.currentFrameID = self.nextFrameID;

					if(self.settings.moveActiveFrameToTop) {
					    self.nextFrame.css("z-index", self.numberOfFrames);
					}
					self.modifyElements(self.nextFrameChildren, "0s");
					self.nextFrame.addClass("animate-in");
					if(self.settings.hashTags && self.settings.hashChangesOnFirstFrame) {
					    self.currentHashTag = self.nextFrame.attr(self.getHashTagFrom);
					    document.location.hash = "#"+self.currentHashTag;
					}
					
					setTimeout(function() {
						self.modifyElements(self.nextFrameChildren, "");
					}, 100);
					
					self.resetAutoPlay(true, self.settings.autoPlayDelay);
				}else if(self.settings.reverseAnimationsWhenNavigatingBackwards && self.settings.autoPlayDirection -1 && self.settings.animateStartingFrameIn) { //animate in backwards
					self.modifyElements(self.nextFrameChildren, "0s");
					self.nextFrame.addClass("animate-out");
					self.goTo(self.nextFrameID, -1);
				}else{ //animate in forwards
					self.goTo(self.nextFrameID, 1);
				}
			}else{ //initiate a basic slider for browsers that don't support CSS3 transitions
    			self.container.addClass("sequence-fallback");
    			self.beforeNextFrameAnimatesIn();
    			self.afterNextFrameAnimatesIn();
    			if(self.settings.hashTags && self.settings.hashChangesOnFirstFrame){
    			    self.currentHashTag = self.nextFrame.attr(self.getHashTagFrom);
    			    document.location.hash = "#"+self.currentHashTag;
    			}
    			self.currentFrameID = self.nextFrameID;			    		
                self.sequence.children("li").addClass("animate-in");
                self.sequence.children(":not(li:nth-child("+self.nextFrameID+"))").css({"display": "none", "opacity": 0});
                self.resetAutoPlay(true, self.settings.autoPlayDelay);
			}
			//END INIT
			//EVENTS
			if(self.nextButton !== undefined) { //if a next button is defined...
				self.nextButton.click(function() { //when the next button is clicked...
					self.next(); //go to the next frame
				});
			}
									
			if(self.prevButton !== undefined) { //if a previous button is defined...
				self.prevButton.click(function() { //when the previous button is clicked...
					self.prev(); //go to the previous frame
				});
			}
						
			if(self.pauseButton !== undefined) { //if a pause button is defined...
				self.pauseButton.click(function() { //when the pause button is clicked...
					self.pause(true); //pause Sequence and set hardPause to true
				});
			}
			
			if(self.settings.keyNavigation) {
				var defaultKeys = {
					'left'	: 37,
					'right'	: 39
				};

				function keyEvents(keyPressed, keyDirections) {
						var keyCode;

						for(keyCodes in keyDirections) {
							if(keyCodes === "left" || keyCodes === "right") {
								keyCode = defaultKeys[keyCodes];
							}else{
								keyCode = keyCodes;
							}

							if(keyPressed === parseFloat(keyCode)) { //if the key pressed is associated with a function...
								self.initCustomKeyEvent(keyDirections[keyCodes]); //initiate the function
							}
						}
					}
				
				$(document).keydown(function(e) { //when a key is pressed...					
					var char = String.fromCharCode(e.keyCode);
					if((char > 0 && char <= self.numberOfFrames) && (self.settings.numericKeysGoToFrames)) {
						self.nextFrameID = char;
						self.goTo(self.nextFrameID); //go to specified frame
					}
					
					keyEvents(e.keyCode, self.settings.keyEvents); //run default keyevents
					keyEvents(e.keyCode, self.settings.customKeyEvents); //run custom keyevents
				});
			}

			if(self.settings.pauseOnHover && self.settings.autoPlay && !self.hasTouch) { //if using pauseOnHover and autoPlay on non touch devices
				self.sequence.on({
				    mouseenter: function() { //when the mouse enter the Sequence element...
				    	self.mouseover = true;
				        if(!self.isHardPaused) { //if Sequence is hard paused (via a pause button)...
				        	self.pause(); //pause autoPlay
				        }
				    },
				    mouseleave: function() { //when the mouse leaves the Sequence element...
				    	self.mouseover = false;
				        if(!self.isHardPaused) { //if Sequence is not hard paused (via a pause button)...
				        	self.unpause(); //unpause autoPlay
				        }
				    }
				});
			}
			
			if(self.settings.hashTags) { //if hashchange is enabled in the settings...
    			$(window).hashchange(function() { //when the hashtag changes...
    			    newTag = location.hash.replace("#", ""); //grab the new hashtag
    			    
    			    if(self.currentHashTag !== newTag) { //if the last hashtag is not the same as the current one...
    			        self.currentHashTag = newTag; //save the new tag
    			        self.frameHashIndex = $.inArray(self.currentHashTag, self.frameHashID); //get the index of the frame that matches the hashtag
    			        if(self.frameHashIndex !== -1) { //if the hashtag matches a Sequence frame ID...
    			            self.nextFrameID = self.frameHashIndex + 1; //set that frame as the next one
                            self.goTo(self.nextFrameID); //go to the next frame
    			        }
    			    }
    			});
			}

			if(self.settings.swipeNavigation && self.hasTouch) { //if using swipeNavigation and the device has touch capabilities...
				//jQuery TouchWipe v1.1.1 (http://www.netcu.de/jquery-touchwipe-iphone-ipad-library)
				var startX;
				var startY;
				var isMoving = false;

				function cancelTouch() {
					self.sequence.on("touchmove", onTouchMove);
					startX = null;
					isMoving = false;
				}	

				function onTouchMove(e) {
					if(self.settings.swipePreventsDefault) {
						e.preventDefault();
					}
					if(isMoving) {
						var x = e.originalEvent.touches[0].pageX;
						var y = e.originalEvent.touches[0].pageY;
						var dx = startX - x;
						var dy = startY - y;
						if(Math.abs(dx) >= self.settings.swipeThreshold) {
							cancelTouch();
							if(dx > 0) {
								self.initCustomKeyEvent(self.settings.swipeEvents.left);
							}else{
								self.initCustomKeyEvent(self.settings.swipeEvents.right);
							}
					 	}else if(Math.abs(dy) >= self.settings.swipeThreshold) {
							cancelTouch();
							if(dy > 0) {
								self.initCustomKeyEvent(self.settings.swipeEvents.down);
							}else{
								self.initCustomKeyEvent(self.settings.swipeEvents.up);
							}
						}
					}
				}

				function onTouchStart(e) {
					if(e.originalEvent.touches.length == 1) {
						startX = e.originalEvent.touches[0].pageX;
						startY = e.originalEvent.touches[0].pageY;
						isMoving = true;
						self.sequence.on("touchmove", onTouchMove);
					}
				}

				self.sequence.on("touchstart", onTouchStart);
			}
			//END EVENTS
		}
	} //END CONSTRUCTOR
	
	Sequence.prototype = {
		//trigger keyEvents, customKeyEvents and swipeEvents
		initCustomKeyEvent: function(event) {
			var self = this;
			switch(event) {
				case "next":
					self.next();
					break;
				case "prev":
					self.prev();
					break;
				case "pause":
					self.pause(true);
					break;
			}
		},
		
		/*
		modify the transition-duration and transition-delay properties of an element
		
		elementToReset = the element that is to have it's properties modified
		cssValue = the value to be given to the transition-duration and transition-delay properties
		*/
		modifyElements: function(elementToReset, cssValue) {
			var self = this;
				elementToReset.css(
				self.prefixCSS(self.prefix, {
					"transition-duration": cssValue,
					"transition-delay": cssValue
				})
			);
		},
		
		/*
		adds the browser vendors prefix onto multiple CSS properties
		
		prefix = the prefix for the browser Sequence is being viewed in (-webkit- for example)
		properties = the properties to be prefixed (transition-duration for example)
		*/
		prefixCSS: function(prefix, properties) {
			var css = {};
			for(property in properties) { //for each property to be modified...
				css[prefix + property] = properties[property]; //add the prefix to the property name
			}
			return css; //return the prefixed CSS
		},
		
		setTransitionProperties: function(frameChildren) {
			var self = this;
			frameChildren.each(function() {
				self.transitionProperties["transition-duration"] = $(this).css(self.prefix + "transition-duration");
				self.transitionProperties["transition-delay"] = $(this).css(self.prefix + "transition-delay");

				$(this).css(
					self.prefixCSS(self.prefix, self.transitionProperties)
				);
			});
		},

		/*
		start autoPlay -- causing Sequence to automatically change frame every x amount of milliseconds
		
		delay: a time in ms before starting the autoPlay feature (if unspecified, the default will be used)
		*/
		startAutoPlay: function(delay) {
			var self = this;
			var delay = (delay === undefined) ? self.settings.autoPlayDelay : delay; //if a delay isn't specified, use the default
			self.unpause();

			self.resetAutoPlay(); //stop autoPlay before starting it again
			self.autoPlayTimer = setTimeout(function() { //start a new autoPlay timer and...
				self.settings.autoPlayDirection === 1 ? self.next(): self.prev(); //go to either the next or previous frame
			}, delay); //after a specified delay
		},
		
		//stop causing Sequence to automatically change frame every x amount of seconds
		stopAutoPlay: function() {
			var self = this;
			self.pause(true);
			clearTimeout(self.autoPlayTimer); //stop the autoPlay timer
		},

		/*
		internal function used to start and stop autoPlay
		start: if true, autoPlay will be started, else it'll be stopped
		delay: a time in ms before starting the autoPlay feature (if unspecified, the default will be used)
		*/
		resetAutoPlay: function(start, delay) {
			var self = this;
			if(start === true) { //if starting autoPlay
				if(self.settings.autoPlay && !self.isPaused) { //if using autoPlay and Sequence isn't paused...
					clearTimeout(self.autoPlayTimer); //stop the autoPlay timer
					self.autoPlayTimer = setTimeout(function() { //start a new autoPlay timer and...
						self.settings.autoPlayDirection === 1 ? self.next(): self.prev(); //go to either the next or previous frame
					}, delay); //after a specified delay
				}
			}else{ //if stopping autoPlay
				clearTimeout(self.autoPlayTimer); //stop the autoPlay timer
			}
		},

		/*
		Toggle startAutoPlay (unpausing autoPlay) and stopAutoPlay (pausing autoPlay)

		hardPause: if true, Sequence's pauseOnHover will not execute. Useful for pause buttons.

		Note: Sequence 0.7.3 and below didn't have an .unpause() function -- .pause() would pause/unpause
		based on the current state. .unpause() is now included for clarity but the .pause() function will
		still toggle between paused and unpaused states.
		*/
		pause: function(hardPause) {
			var self = this;
			if(!self.isPaused) { //if pausing Sequence...
				if(self.pauseButton !== undefined) { //if a pause button is defined...
					self.pauseButton.addClass("paused"); //add the class of "paused" to the pause button
					if(self.pauseIcon !== undefined) { //if a pause icon is defined...
						self.pauseIcon.show(); //show the pause icon
					}
				}
				self.paused(); //callback when Sequence is paused
				self.isPaused = true;
				self.isHardPaused = (hardPause) ? true : false; //if hardPausing, set hardPause to true
				self.resetAutoPlay(); //stop autoPlay
			}else{ //if unpausing Sequence...
				self.unpause();
			}
		},

		/*
		Start the autoPlay feature, as well as deal with any changes to pauseButtons, pauseIcons and public variables etc
		
		callback: if false, the unpause callback will not be initiated (this is because unpause is used internally during the stop and start of each frame)
		*/ 
		unpause: function(callback) {
			var self = this;
			if(self.pauseButton !== undefined) { //if a pause button is defined...
				self.pauseButton.removeClass("paused"); //remove the class of "paused" from the pause button
				if(self.pauseIcon !== undefined) { //if a pause icon is defined...
					self.pauseIcon.hide(); //hide the pause icon
				}
			}

			self.isPaused = false;
			self.isHardPaused = false;

			if(!self.active) {
				if(callback !== false) {
					self.unpaused(); //callback when Sequence is unpaused
				}
				self.resetAutoPlay(true, self.settings.unpauseDelay); //start autoPlay after a delay specified via the unpauseDelay setting
			}else{
				self.delayUnpause = true; //Sequence is animating so delay the unpause event until the animation completes
			}
		},
		
		//Go to the frame ahead of the current one
		next: function() {
			var self = this;
			self.nextFrameID = (self.currentFrameID !== self.numberOfFrames) ? self.currentFrameID + 1 : 1; //work out the next frame
			self.goTo(self.nextFrameID, 1); //go to the next frame
		},
		
		//Go to the frame prior to the current one
		prev: function() {
			var self = this;
			self.nextFrameID = (self.currentFrameID === 1) ? self.numberOfFrames : self.currentFrameID - 1; //work out the prev frame
			self.goTo(self.nextFrameID, -1); //go to the prev frame
		},
		
		/*
		Go to a specific frame
		
		id: number of the frame to go to
		direction: direction to get to that frame (1 = forward, -1 = reverse)
		*/
		goTo: function(id, direction) {	
			var self = this;
			var id = parseFloat(id); //convert the id to a number just in case

			if((id === self.currentFrameID) //if the id of the frame the user is trying to go to is the same as the currently active one...
			|| (self.settings.navigationSkip && self.navigationSkipThresholdActive) //or navigationSkip is enabled and the navigationSkipThreshold is active (which prevents frame from being navigated too fast)...
			|| (!self.settings.navigationSkip && self.active) //or navigationSkip is disbaled but Sequence is animating...
			|| (!self.transitionsSupported && self.active) //or Sequence is in fallback mode and Sequence is animating...
			|| (!self.settings.cycle && direction === 1 && self.currentFrameID === self.numberOfFrames) //or cycling is disabled, the user is navigating forward and this is the last frame...
			|| (!self.settings.cycle && direction === -1 && self.currentFrameID === 1) //or cycling is disabled, the user is navigating backwards and this is the first frame...
			|| (self.settings.preventReverseSkipping && self.direction !== direction && self.active)) { //or Sequence is animating and the user is trying to change the direction of navigation...
				return false; //don't go to another frame
			}else if(self.settings.navigationSkip && self.active) { //if navigationSkip is enabled and Sequence is animating (a frame is being skipped before it has finished animating)...
				self.navigationSkipThresholdActive = true; //the navigationSkipThreshold is now active
				if(self.settings.fadeFrameWhenSkipped) { //if a frame should fade when skipped...
					self.nextFrame.stop().animate({"opacity": 0}, self.settings.fadeFrameTime); //fade
				}

				navigationSkipThresholdTimer = setTimeout(function() { //start the navigationSkipThreshold timer to prevent being able to navigate too quickly
					self.navigationSkipThresholdActive = false; //once the timer is complete, navigationSkip can occur again
				}, self.settings.navigationSkipThreshold);
			}

			if(!self.active || self.settings.navigationSkip) { //if there are no animations running or navigationSkip is enabled...
				self.active = true; //Sequence is now animating
				self.resetAutoPlay(); //stop any autoPlay timer that may be running
			
				if(id === self.numberOfFrames) { //if navigating to the last frame...
					self.beforeLastFrameAnimatesIn(); //callback
				}else if(id === 1) { //if navigating to the first frame...
					self.beforeFirstFrameAnimatesIn(); //callback
				}

				if(direction === undefined) { //if no direction to navigate was defined...
					self.direction = (id > self.currentFrameID) ? 1 : -1; //work out which way to go based on what frame is currently active
				}else{
					self.direction = direction; //go to the developer defined frame
				}
				
				self.currentFrame = self.sequence.children(".animate-in"); //find which frame is active -- the frame currently being viewed (and about to be animated out)
				self.nextFrame = self.sequence.children("li:nth-child("+id+")"); //grab the next frame
				self.frameChildren = self.currentFrame.children();	//save the child elements of the current frame
				self.nextFrameChildren = self.nextFrame.children(); //save the child elements of the next frame
				
				if(self.transitionsSupported) { //if the browser supports CSS3 transitions...							
					if(self.currentFrame.length !== undefined) { //if there is a current frame (one that is in it's animate-in position)...
						self.beforeCurrentFrameAnimatesOut(); //callback
						if(self.settings.moveActiveFrameToTop) { //if the active frame should move to the top...
						    self.currentFrame.css("z-index", 1); //move this frame to the bottom as it is now inactive
						}
						self.modifyElements(self.nextFrameChildren, "0s"); //give the next frame elements a transition-duration and transition-delay of 0s so they don't transition to their reset position
						if(!self.settings.reverseAnimationsWhenNavigatingBackwards || self.direction === 1) { //if user hit next button...
							self.nextFrame.removeClass("animate-out"); //reset the next frame back to its starting position
							self.modifyElements(self.frameChildren, "");  //remove any inline styles from the elements to be animated so styles via the "animate-out" class can take full effect		
						}else if(self.settings.reverseAnimationsWhenNavigatingBackwards && self.direction === -1) { //if the user hit prev button
							self.nextFrame.addClass("animate-out"); //reset the next frame back to its animate-out position
							self.setTransitionProperties(self.frameChildren);
						}
					}else{
						self.firstFrame = false; //no longer the first frame
					}

					self.active = true; //Sequence is now animating
					self.currentFrame.unbind(self.transitionEnd); //remove the animation end event
					self.nextFrame.unbind(self.transitionEnd); //remove the animation end event

					if(self.settings.fadeFrameWhenSkipped) { //if a frame may have faded out when it was previously skipped...
						self.nextFrame.css("opacity", 1); //show it again
					}
					
					self.beforeNextFrameAnimatesIn(); //callback
					if(self.settings.moveActiveFrameToTop) { //if an active frame should be moved to the top...
					    self.nextFrame.css({"z-index": self.numberOfFrames}); //move to the top of the z-index
					}

					//modifications to the current and next frame's elements to get them ready to animate
					if(!self.settings.reverseAnimationsWhenNavigatingBackwards || self.direction === 1) { //if user hit next button...
						setTimeout(function() { //50ms timeout to give the browser a chance to modify the DOM sequentially
							self.modifyElements(self.nextFrameChildren, ""); //remove any inline styles from the elements to be animated so styles via the "animate-in" class can take full effect
							self.waitForAnimationsToComplete(self.nextFrame, self.nextFrameChildren, "in"); //wait for the next frame to animate in
							if(self.afterCurrentFrameAnimatesOut !== "function () {}") { //if the afterCurrentFrameAnimatesOut is being used...
								self.waitForAnimationsToComplete(self.currentFrame, self.frameChildren, "out"); //wait for the current frame to animate out as well
							}
						}, 50);
					}else if(self.settings.reverseAnimationsWhenNavigatingBackwards && self.direction === -1) { //if the user hit prev button
						setTimeout(function() { //50ms timeout to give the browser a chance to modify the DOM sequentially
							self.modifyElements(self.nextFrameChildren, ""); //remove any inline styles from the elements to be animated so styles via the "animate-in" class can take full effect
							self.setTransitionProperties(self.frameChildren);
							self.waitForAnimationsToComplete(self.nextFrame, self.nextFrameChildren, "in"); //wait for the next frame to animate in
							if(self.afterCurrentFrameAnimatesOut != "function () {}") { //if the afterCurrentFrameAnimatesOut is being used...
								self.waitForAnimationsToComplete(self.currentFrame, self.frameChildren, "out"); //wait for the current frame to animate out as well
							}
						}, 50);
					}

					//final class changes to make animations happen
					if(!self.settings.reverseAnimationsWhenNavigatingBackwards || self.direction === 1) { //if user hit next button...			
						setTimeout(function() { //50ms timeout to give the browser a chance to modify the DOM sequentially
							self.currentFrame.toggleClass("animate-out animate-in");
							self.nextFrame.addClass("animate-in"); //add the "animate-in" class
						}, 50);
					}else if(self.settings.reverseAnimationsWhenNavigatingBackwards && self.direction === -1) { //if the user hit prev button
						setTimeout(function() { //50ms timeout to give the browser a chance to modify the DOM sequentially
							self.nextFrame.toggleClass("animate-out animate-in"); //add the "animate-in" class and remove the "animate-out" class
							self.currentFrame.removeClass("animate-in");
						}, 50);
					}
				}else{ //if the browser doesn't support CSS3 transitions...
					function animationComplete() {
			            self.setHashTag();	                
			            self.active = false;
			            self.resetAutoPlay(true, self.settings.autoPlayDelay);
				    }

				    self.beforeCurrentFrameAnimatesOut(); //callback	

				    switch(self.settings.fallback.theme) {
				    	case "fade": //if using the fade fallback theme...
				            self.sequence.children("li").css({"position": "relative"}); //this allows for fadein/out in IE
				            self.currentFrame.animate({"opacity": 0}, self.settings.fallback.speed, function() { //hide the current frame
				            	self.currentFrame.css({"display": "none", "z-index": "1"});
				            	self.beforeNextFrameAnimatesIn();
				            	self.nextFrame.css({"display": "block", "z-index": self.numberOfFrames}).animate({"opacity": 1}, 500, function() {
				            		self.afterNextFrameAnimatesIn();
				            	}); //make the next frame the current one and show it
				            	animationComplete();
				            });
				            
				            self.sequence.children("li").css({"position": "relative"}); //this allows for fadein/out in IE
				        break;

				        case "slide": //if using the slide fallback theme...
				        default:
                            //create objects which will save the .css() and .animation() objects
				            var animateOut = {};
				            var animateIn = {};
				            var moveIn = {};

				            //construct the .css() and .animation() objects
				            if(self.direction === 1) {
				                animateOut["left"] = "-100%";
				                animateIn["left"] = "100%";
				            }else{
				                animateOut["left"] = "100%";
				                animateIn["left"] = "-100%";
				            }

				            moveIn["left"] = "0";
				            moveIn["opacity"] = 1;

				            self.currentFrame = self.sequence.children("li:nth-child("+self.currentFrameID+")");
				            self.currentFrame.animate(animateOut, self.settings.fallback.speed); //cause the current frame to animate out
				            self.beforeNextFrameAnimatesIn(); //callback
				            self.nextFrame.show().css(animateIn);
				            setTimeout(function(){
				            	self.nextFrame.animate(moveIn, self.settings.fallback.speed, function() { //cause the next frame to animate in
				                	animationComplete();
				                	self.afterNextFrameAnimatesIn(); //callback
				            	});
				            }, 50);		            
				        break;
				    }
				}
				self.currentFrameID = id; //make the currentFrameID the same as the one that is to animate in				
			}
		},
		
		/*
			prevents the next frame from animating until the current frame has finished animating

			frame: the frame <li> which is animating
			frameChildren: the animated direct child elements of the frame
			direction: whether the elements are animating "in" to an active position or "out" of an active position
		*/
		waitForAnimationsToComplete: function(frame, frameChildren, direction) {
			var self = this;

			if(direction === "out") { //if waiting on a frame's element to animate out...
				var onceComplete = function() {
					self.afterCurrentFrameAnimatesOut(); //callback
				};
			}else if(direction === "in") { //if waiting on a frame's element to animate in...
				var onceComplete = function() {
					self.afterNextFrameAnimatesIn(); //callback
					self.setHashTag(); //set the hashtag to represent the newly active frame
					
					if(self.currentFrameID === self.numberOfFrames) { 
						self.afterLastFrameAnimatesIn(); //callback
					}else if(self.currentFrameID === 1) {
						self.afterFirstFrameAnimatesIn(); //callback
					}

					self.active = false; //Sequence is not animating

					if(!self.isHardPaused && !self.mouseover) { //if Sequence isn't hard paused (via a pause button for example) or being hovered over...
						if(!self.delayUnpause) { //if unpausing isn't delayed (Sequence wasn't animating when unpause was invoked)...
							self.unpause(false); //unpause Sequence but don't run the unpause callback
						}else{ //if unpausing was delay because Sequence was animating when unpause was invoked...
							self.delayUnpause = false;
							self.unpause(); //unpause Sequence
						}
					}
				};
			}

			frameChildren.data('animationEnded', false); // set the data attribute of each animated element to indicate that the animation has not yet ended
			frame.bind(self.transitionEnd, function(e) { //when an element finishes animating...
				$(e.target).data('animationEnded', true); // set the data attrbiute to indicate that the element has finished it's animation
			
				// now check if all elements have finished animating
				var allAnimationsEnded = true;
				frameChildren.each(function() { //for each element being animated within a frame...
					if($(this).data('animationEnded') === false) { //if the animation hasn't ended...
						allAnimationsEnded = false; //not all animations have ended yet
						return false; //break out of the animationEnded check early
					}
				});
			
				if(allAnimationsEnded) { //if all animations have ended...
					frame.unbind(self.transitionEnd); //stop waiting for animations to end
					onceComplete();
				}
			});
		},

		setHashTag: function() {
			var self = this;
			if(self.settings.hashTags) { //if hashTags is enabled...
			    self.currentHashTag = self.nextFrame.attr(self.getHashTagFrom); //get the hashtag name
			    self.frameHashIndex = $.inArray(self.currentHashTag, self.frameHashID); //get the index of the frame that matches the hashtag
			    if(self.frameHashIndex !== -1 && (self.settings.hashChangesOnFirstFrame || (!self.firstFrame || !self.transitionsSupported))) { //if the hashtag matches a Sequence frame ID...
			        self.nextFrameID = self.frameHashIndex + 1;
                    document.location.hash = "#"+self.currentHashTag;
			    }else{
			        self.nextFrameID = self.settings.startingFrameID;
			        self.firstFrame = false;
			    }					    
			}
		}
	}; //END PROTOTYPE

	$.fn.sequence = function(options) {
		var self = this;
		return self.each(function() {
			var sequence = new Sequence($(this), options, defaults, get);
			$(this).data("sequence", sequence); 
		});
	};
	
	//some external functions
	var get = {
		/* Modernizr 2.6.1 (Custom Build) | MIT & BSD
		 * Build: http://modernizr.com/download/#-svg-prefixed-testprop-testallprops-domprefixes
		 */
		modernizr: function() {
			;window.Modernizr=function(a,b,c){function x(a){i.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&i[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+m.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+n.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.6.1",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l="Webkit Moz O ms",m=l.split(" "),n=l.toLowerCase().split(" "),o={svg:"http://www.w3.org/2000/svg"},p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=self;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(self instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.svg=function(){return!!b.createElementNS&&!!b.createElementNS(o.svg,"svg").createSVGRect};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),h=j=null,e._version=d,e._domPrefixes=n,e._cssomPrefixes=m,e.testProp=function(a){return B([a])},e.testAllProps=D,e.prefixed=function(a,b,c){return b?D(a,b,c):D(a,"pfx")},e}(self,self.document);
		},
		
		defaultPreloader: function(prependTo, transitions, prefix) {
			var icon = '<div class="sequence-preloader"><svg class="preloading" xmlns="http://www.w3.org/2000/svg"><circle class="circle" cx="6" cy="6" r="6" /><circle class="circle" cx="22" cy="6" r="6" /><circle class="circle" cx="38" cy="6" r="6" /></svg></div>';
			
			$("head").append("<style>.sequence-preloader{height: 100%;position: absolute;width: 100%;z-index: 999999;}@"+prefix+"keyframes preload{0%{opacity: 1;}50%{opacity: 0;}100%{opacity: 1;}}.sequence-preloader .preloading .circle{fill: #ff9442;display: inline-block;height: 12px;position: relative;top: -50%;width: 12px;"+prefix+"animation: preload 1s infinite; animation: preload 1s infinite;}.preloading{display:block;height: 12px;margin: 0 auto;top: 50%;margin-top:-6px;position: relative;width: 48px;}.sequence-preloader .preloading .circle:nth-child(2){"+prefix+"animation-delay: .15s; animation-delay: .15s;}.sequence-preloader .preloading .circle:nth-child(3){"+prefix+"animation-delay: .3s; animation-delay: .3s;}.preloading-complete{opacity: 0;visibility: hidden;"+prefix+"transition-duration: 1s; transition-duration: 1s;}div.inline{background-color: #ff9442; margin-right: 4px; float: left;}</style>");
			prependTo.prepend(icon);
			if(!Modernizr.svg && !transitions) { //if SVG isn't supported, remain calm and add this fallback instead...
			    $(".sequence-preloader").prepend('<div class="preloading"><div class="circle inline"></div><div class="circle inline"></div><div class="circle inline"></div></div>');
			    setInterval(function(){
			        $(".sequence-preloader .circle").fadeToggle(500);
			    }, 500);
			}else if(!transitions){ //if transitions aren't supported, toggle the opacity instead  
			    setInterval(function(){
			        $(".sequence-preloader").fadeToggle(500);
			    }, 500);
			}
		},
		
		//a quick test to work out if Opera supports transitions properly (to work around the fact that Opera 11 supports transitions but doesn't return a transition value properly)
		operaTest: function() {
		    $("body").append('<span id="sequence-opera-test"></span>');
		    var $operaTest = $("#sequence-opera-test");
		    $operaTest.css("-o-transition", "1s");
		    //if the expected value isn't returned...
		    if($operaTest.css("-o-transition") != "1s") {
		        //cause Opera to go into the fallback theme
		        return false;
		    }else{
		        return true;
		    }
		    $operaTest.remove();
		}
	};
	
	var defaults = {
		//General Settings
		startingFrameID: 1, //The frame (the list item `<li>`) that should first be displayed when Sequence loads
		cycle: true, //Whether Sequence should navigate to the first frame after the last frame and vice versa
		animateStartingFrameIn: false, //Whether the first frame should animate in to its active position
		reverseAnimationsWhenNavigatingBackwards: true, //Whether animations should be reversed when a user navigates backwards by clicking a previous button/swiping/pressing the left key
		moveActiveFrameToTop: true, //Whether a frame should be given a higher `z-index` than other frames whilst it is active, to bring it above the others

		//Autoplay Settings
		autoPlay: true,
		autoPlayDirection: 1,
		autoPlayDelay: 5000,

		//Frame Skipping Settings
		navigationSkip: true, //Whether the user can navigate through frames before each frame has finished animating
		navigationSkipThreshold: 250, //Amount of time that must pass before the next frame can be navigated to
		fadeFrameWhenSkipped: true, //If a frame is skipped before it finishes animating, it will quickly fade out
		fadeFrameTime: 150, //If fadeFrameWhenSkipped is true, how quickly a frame should fade out when skipped (in milliseconds)
		preventReverseSkipping: false, //Whether the user can change the direction of navigation during frames animating (if navigating forward, the user can only skip forwards when other frames are animating).

		//Next/Prev Button Settings
		nextButton: false, //if dev settings are true, the nextButton will be ".next"
		showNextButtonOnInit: true,
		prevButton: false, //if dev settings are true, the prevButton will be ".prev"
		showPrevButtonOnInit: true,
		
		//Pause Settings
		pauseButton: false, //if dev settings are true, the pauseButton will be ".pause"
		unpauseDelay: null, //the time to wait before navigating to the next frame when Sequence is unpaused. Note that if an unpauseDelay is not specified, the default is the same as the autoPlayDelay setting
		pauseOnHover: true,
		pauseIcon: false, //this is an indicator to show Sequence is paused
		
		//Preloader Settings
		preloader: false,
		preloadTheseFrames: [1], //all images in these frames will load before Sequence initiates
		preloadTheseImages: [ //specify particular images to load before Sequence initiates
		    /* Example usage
		    "images/catEatingSalad.jpg",
		    "images/meDressedAsBatman.png"
		    */
		],
		/*Note: You can use preloadTheseFrames and preloadTheseImages together. You might want to load all images in frame 1 and just one big image from frame 2 for example*/
		hideFramesUntilPreloaded: true,
		prependPreloadingComplete: true,
		hidePreloaderUsingCSS: true,
		hidePreloaderDelay: 0,
		
		//Keyboard settings
		keyNavigation: true, //false prevents the following keyboard settings
		numericKeysGoToFrames: true,
		keyEvents: {
			left: "prev",
			right: "next"
		},
		customKeyEvents: {
			/* Example usage
			65: "prev",	//a
			68: "next",	//d
			83: "prev",	//s
			87: "next"	//w
			*/
		},
		
		//Touch Swipe Settings
		swipeNavigation: true,
		swipeThreshold: 20,
		swipePreventsDefault: false, //be careful if setting this to true
		swipeEvents: {
			left: "prev",
			right: "next",
			up: false,
			down: false
		},
		
		//hashTags Settings
		//when using hashTags, please include a reference to Ben Alman's jQuery HashChange plugin above your reference to Sequence.js
		
		//info: http://benalman.com/projects/jquery-hashchange-plugin/
		//plugin: https://raw.github.com/cowboy/jquery-hashchange/v1.3/jquery.ba-hashchange.min.js
		//GitHub: https://github.com/cowboy/jquery-hashchange
		hashTags: false, //when a frame is navigated to, change the hashtag to the frames ID
		hashDataAttribute: false, //false = the hashTag is taken from a frames ID attribute | true = the hashTag is taken from the data attribute "data-sequence-hash"	
		hashChangesOnFirstFrame: false,	
        		
		//Fallback Theme Settings (For browsers that don't support CSS3 transitions)
		fallback: {
			theme: "slide",
			speed: 500
		}
	};
})(jQuery);






