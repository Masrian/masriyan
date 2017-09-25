<html>
<head>
<title>Javascript</title>
</head>
<body>
<!-- Script Chatango -->
<b:if cond='data:blog.pageType != &quot;item&quot;'><script>
//<![CDATA[
var relatedTitles=new Array();var relatedTitlesNum=0;var relatedUrls=new Array();function related_results_labels(json){for(var i=0;i<json.feed.entry.length;i++){var entry=json.feed.entry[i];relatedTitles[relatedTitlesNum]=entry.title.$t;for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){relatedUrls[relatedTitlesNum]=entry.link[k].href;relatedTitlesNum++;break;}}}}
function removeRelatedDuplicates(){var tmp=new Array(0);var tmp2=new Array(0);for(var i=0;i<relatedUrls.length;i++){if(!contains(tmp,relatedUrls[i])){tmp.length+=1;tmp[tmp.length-1]=relatedUrls[i];tmp2.length+=1;tmp2[tmp2.length-1]=relatedTitles[i];}}
relatedTitles=tmp2;relatedUrls=tmp;} function contains(a,e){for(var j=0;j<a.length;j++)if(a[j]==e)return true;return false;}
function printRelatedLabels(){var r=Math.floor((relatedTitles.length-1)*Math.random());var i=0;document.write('<ul>');while(i<relatedTitles.length&&i<20){document.write('<li><a href="'+relatedUrls[r]+'">'+relatedTitles[r]+'</a></li>');if(r<relatedTitles.length-1){r++;}else{r=0;}
i++;}
document.write('</ul>');document.write();}//]]>
</script></b:if>
<script type='text/javascript'>
$(function () {
  // TinyNav.js 1
  $(&#39;#navigation&#39;).tinyNav({
	active: &#39;active&#39;,
	header: &#39;Menu&#39;
});});
</script>
<script type='text/javascript'>
       //<![CDATA[
       if (typeof(jQuery) == 'undefined') {document.write("<scr" + "ipt type=\"text/javascript\" src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></scr" + "ipt>");}
       //]]>
</script>
<script type='text/javascript'>//<![CDATA[
function loadCSS(e,t,o){"use strict";var n=window.document.createElement("link"),i=t||window.document.getElementsByTagName("script")[0];n.rel="stylesheet",n.href=e,n.media="only x",i.parentNode.insertBefore(n,i),setTimeout(function(){n.media=o||"all"})}loadCSS("//maxcdn.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css"),loadCSS("https://fonts.googleapis.com/css?family=PT+Serif|Open+Sans+Condensed:700"),function(e,t,o,n){var i=e(t);e.fn.lazyload=function(r){function a(){var t=0;l.each(function(){var o=e(this);if(!c.skip_invisible||o.is(":visible"))if(e.abovethetop(this,c)||e.leftofbegin(this,c));else if(e.belowthefold(this,c)||e.rightoffold(this,c)){if(++t>c.failure_limit)return!1}else o.trigger("appear"),t=0})}var f,l=this,c={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:t,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return r&&(n!==r.failurelimit&&(r.failure_limit=r.failurelimit,delete r.failurelimit),n!==r.effectspeed&&(r.effect_speed=r.effectspeed,delete r.effectspeed),e.extend(c,r)),f=c.container===n||c.container===t?i:e(c.container),0===c.event.indexOf("scroll")&&f.bind(c.event,function(){return a()}),this.each(function(){var t=this,o=e(t);t.loaded=!1,(o.attr("src")===n||o.attr("src")===!1)&&o.is("img")&&o.attr("src",c.placeholder),o.one("appear",function(){if(!this.loaded){if(c.appear){var n=l.length;c.appear.call(t,n,c)}e("<img />").bind("load",function(){var n=o.attr("data-"+c.data_attribute);o.hide(),o.is("img")?o.attr("src",n):o.css("background-image","url('"+n+"')"),o[c.effect](c.effect_speed),t.loaded=!0;var i=e.grep(l,function(e){return!e.loaded});if(l=e(i),c.load){var r=l.length;c.load.call(t,r,c)}}).attr("src",o.attr("data-"+c.data_attribute))}}),0!==c.event.indexOf("scroll")&&o.bind(c.event,function(){t.loaded||o.trigger("appear")})}),i.bind("resize",function(){a()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&i.bind("pageshow",function(t){t.originalEvent&&t.originalEvent.persisted&&l.each(function(){e(this).trigger("appear")})}),e(o).ready(function(){a()}),this},e.belowthefold=function(o,r){var a;return a=r.container===n||r.container===t?(t.innerHeight?t.innerHeight:i.height())+i.scrollTop():e(r.container).offset().top+e(r.container).height(),a<=e(o).offset().top-r.threshold},e.rightoffold=function(o,r){var a;return a=r.container===n||r.container===t?i.width()+i.scrollLeft():e(r.container).offset().left+e(r.container).width(),a<=e(o).offset().left-r.threshold},e.abovethetop=function(o,r){var a;return a=r.container===n||r.container===t?i.scrollTop():e(r.container).offset().top,a>=e(o).offset().top+r.threshold+e(o).height()},e.leftofbegin=function(o,r){var a;return a=r.container===n||r.container===t?i.scrollLeft():e(r.container).offset().left,a>=e(o).offset().left+r.threshold+e(o).width()},e.inviewport=function(t,o){return!(e.rightoffold(t,o)||e.leftofbegin(t,o)||e.belowthefold(t,o)||e.abovethetop(t,o))},e.extend(e.expr[":"],{"below-the-fold":function(t){return e.belowthefold(t,{threshold:0})},"above-the-top":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-screen":function(t){return e.rightoffold(t,{threshold:0})},"left-of-screen":function(t){return!e.rightoffold(t,{threshold:0})},"in-viewport":function(t){return e.inviewport(t,{threshold:0})},"above-the-fold":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-fold":function(t){return e.rightoffold(t,{threshold:0})},"left-of-fold":function(t){return!e.rightoffold(t,{threshold:0})}})}(jQuery,window,document),$(function(){$(".shine").lazyload({effect:"fadeIn"}),$(".post-body img").lazyload({effect:"fadeIn"})});
function bp_thumbnail_resize(t,e){var i=130,a=130;return image_tag='<img width="'+i+'" height="'+a+'" src="'+t.replace("/s72-c/","/w"+i+"-h"+a+"-c/")+'" alt="'+e+'" title="'+e+'"/>',""!=t?image_tag:""}
//]]>
</script>
<b:if cond='data:blog.pageType != &quot;item&quot;'><b:if cond='data:blog.pageType != &quot;static_page&quot;'>
<script type='text/javascript'>
//<![CDATA[
!function(n){var e=n("#blog-pager"),l=n(".blog-posts");e.find("#blog-pager-newer-link").remove(),e.on("click","#blog-pager-older-link a",function(){return n.get(this.href,{},function(o){var i=n(n(o).find(".post").length?o:"<div></div>");l.append(i.find(".blog-posts").html()),e.html(i.find("#blog-pager-older-link").clone())},"html"),n(this),!1})}(jQuery);
//]]></script></b:if></b:if>
<script type='text/javascript'>
//<![CDATA[
function downloadJSAtOnload(){var e=document.createElement("script");e.src="https://cdn.rawgit.com/bungfrangki/highlight/master/highlight2.js",document.body.appendChild(e)}window.addEventListener?window.addEventListener("load",downloadJSAtOnload,!1):window.attachEvent?window.attachEvent("onload",downloadJSAtOnload):window.onload=downloadJSAtOnload;
//]]>
</script>
<script>            
$(window).scroll(function() {if($(this).scrollTop() &gt; 200) {
$(&#39;#back-to-top&#39;).fadeIn();
}else {
$(&#39;#back-to-top&#39;).fadeOut();
}});
$(&#39;#back-to-top&#39;).hide().click(function() {
$(&#39;html, body&#39;).animate({scrollTop:0}, 1000); 
return false;});
//<![CDATA[
// Lazy Load
(function(a){a.fn.lazyload=function(b){var c={threshold:0,failurelimit:0,event:"scroll",effect:"show",container:window};if(b){a.extend(c,b)}var d=this;if("scroll"==c.event){a(c.container).bind("scroll",function(b){var e=0;d.each(function(){if(a.abovethetop(this,c)||a.leftofbegin(this,c)){}else if(!a.belowthefold(this,c)&&!a.rightoffold(this,c)){a(this).trigger("appear")}else{if(e++>c.failurelimit){return false}}});var f=a.grep(d,function(a){return!a.loaded});d=a(f)})}this.each(function(){var b=this;if(undefined==a(b).attr("original")){a(b).attr("original",a(b).attr("src"))}if("scroll"!=c.event||undefined==a(b).attr("src")||c.placeholder==a(b).attr("src")||a.abovethetop(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.rightoffold(b,c)){if(c.placeholder){a(b).attr("src",c.placeholder)}else{a(b).removeAttr("src")}b.loaded=false}else{b.loaded=true}a(b).one("appear",function(){if(!this.loaded){a("<img />").bind("load",function(){a(b).hide().attr("src",a(b).attr("original"))[c.effect](c.effectspeed);b.loaded=true}).attr("src",a(b).attr("original"))}});if("scroll"!=c.event){a(b).bind(c.event,function(c){if(!b.loaded){a(b).trigger("appear")}})}});a(c.container).trigger(c.event);return this};a.belowthefold=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).height()+a(window).scrollTop()}else{var d=a(c.container).offset().top+a(c.container).height()}return d<=a(b).offset().top-c.threshold};a.rightoffold=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).width()+a(window).scrollLeft()}else{var d=a(c.container).offset().left+a(c.container).width()}return d<=a(b).offset().left-c.threshold};a.abovethetop=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).scrollTop()}else{var d=a(c.container).offset().top}return d>=a(b).offset().top+c.threshold+a(b).height()};a.leftofbegin=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).scrollLeft()}else{var d=a(c.container).offset().left}return d>=a(b).offset().left+c.threshold+a(b).width()};a.extend(a.expr[":"],{"below-the-fold":"$.belowthefold(a, {threshold : 0, container: window})","above-the-fold":"!$.belowthefold(a, {threshold : 0, container: window})","right-of-fold":"$.rightoffold(a, {threshold : 0, container: window})","left-of-fold":"!$.rightoffold(a, {threshold : 0, container: window})"})})(jQuery);$(function(){$("img").lazyload({placeholder:"https://1.bp.blogspot.com/-nexBjYukT1M/Wb35_cGZm-I/AAAAAAAAAF0/AA2nRi52RhEPx5clALDhBSSBbYDXYz6JACLcBGAs/s1600/Kang%2Biyan.gif",effect:"fadeIn",threshold:"-50"})});
(function(a,c,d){a.fn.tinyNav=function(e){var b=a.extend({active:"selected",header:"",label:""},e);return this.each(function(){d++;var e=a(this),h="tinynav"+d,k=".l_"+h,g=a("<select/>").attr("id",h).addClass("tinynav "+h);if(e.is("ul,ol")){""!==b.header&&g.append(a("<option/>").text(b.header));var f="";e.addClass("l_"+h).find("a").each(function(){f+='<option value="'+a(this).attr("href")+'">';var b;for(b=0;b<a(this).parents("ul, ol").length-1;b++)f+="- ";f+=a(this).text()+"</option>"});g.append(f);b.header||
g.find(":eq("+a(k+" li").index(a(k+" li."+b.active))+")").attr("selected",!0);g.change(function(){c.location.href=a(this).val()});a(k).after(g);b.label&&g.before(a("<label/>").attr("for",h).addClass("tinynav_label "+h+"_label").append(b.label))}})}})(jQuery,this,0);
//]]>
</script>
<!-- END Script Chatango -->
</body>
</html>