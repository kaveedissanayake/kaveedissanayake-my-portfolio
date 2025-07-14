var gtm4wp_datalayer_name = "dataLayer";
	var dataLayer = dataLayer || [];

{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://tamalsen.dev/","url":"https://tamalsen.dev/","name":"Tamal Sen - Software Engineer, Front-end & App Developer","isPartOf":{"@id":"https://tamalsen.dev/#website"},"about":{"@id":"https://tamalsen.dev/#/schema/person/b15e17da19241ea3ebf63b50a7d55bf7"},"primaryImageOfPage":{"@id":"https://tamalsen.dev/#primaryimage"},"image":{"@id":"https://tamalsen.dev/#primaryimage"},"thumbnailUrl":"https://tamalsen.dev/wp-content/uploads/2021/11/tamalsen.dev-link-preview.jpg","datePublished":"2020-06-16T13:55:39+00:00","dateModified":"2025-01-12T15:13:37+00:00","description":"Developer devoted to creating great web experiences focused on React, NextJS and Flutter based in Bangladesh, meet Tamal Sen","breadcrumb":{"@id":"https://tamalsen.dev/#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://tamalsen.dev/"]}]},{"@type":"ImageObject","inLanguage":"en-US","@id":"https://tamalsen.dev/#primaryimage","url":"https://tamalsen.dev/wp-content/uploads/2021/11/tamalsen.dev-link-preview.jpg","contentUrl":"https://tamalsen.dev/wp-content/uploads/2021/11/tamalsen.dev-link-preview.jpg","width":1200,"height":628},{"@type":"BreadcrumbList","@id":"https://tamalsen.dev/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home"}]},{"@type":"WebSite","@id":"https://tamalsen.dev/#website","url":"https://tamalsen.dev/","name":"Tamal Sen","description":"Just another WordPress site","publisher":{"@id":"https://tamalsen.dev/#/schema/person/b15e17da19241ea3ebf63b50a7d55bf7"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://tamalsen.dev/?s={search_term_string}"},"query-input":{"@type":"PropertyValueSpecification","valueRequired":true,"valueName":"search_term_string"}}],"inLanguage":"en-US"},{"@type":["Person","Organization"],"@id":"https://tamalsen.dev/#/schema/person/b15e17da19241ea3ebf63b50a7d55bf7","name":"tamalsen","image":{"@type":"ImageObject","inLanguage":"en-US","@id":"https://tamalsen.dev/#/schema/person/image/","url":"https://secure.gravatar.com/avatar/aea3bcaf87867a5478d0464cd7868dc12fbd21b32e0c87412a0d360e4f2bc3a4?s=96&d=mm&r=g","contentUrl":"https://secure.gravatar.com/avatar/aea3bcaf87867a5478d0464cd7868dc12fbd21b32e0c87412a0d360e4f2bc3a4?s=96&d=mm&r=g","caption":"tamalsen"},"logo":{"@id":"https://tamalsen.dev/#/schema/person/image/"},"sameAs":["https://tamalsen.dev"]}]}

var dataLayer_content = {"pagePostType":"frontpage","pagePostType2":"single-page","pagePostAuthor":"tamalsen"};
	dataLayer.push( dataLayer_content );

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TM6G5JD');

document.addEventListener("DOMContentLoaded", function() {
  var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(video) {
				console.log("Found a lazy video");
        if (video.isIntersecting) {
									console.log("video is intersecting");
          for (var source in video.target.children) {
            var videoSource = video.target.children[source];
            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
              videoSource.src = videoSource.dataset.src;
            }
          }

          video.target.load();
          video.target.classList.remove("lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function(lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
	AOS.init({
  disable: window.innerWidth < 768,
});
	console.log("overriding aos anim");
})

function setREVStartSize(e){
			//window.requestAnimationFrame(function() {				 
				window.RSIW = window.RSIW===undefined ? window.innerWidth : window.RSIW;	
				window.RSIH = window.RSIH===undefined ? window.innerHeight : window.RSIH;	
				try {								
					var pw = document.getElementById(e.c).parentNode.offsetWidth,
						newh;
					pw = pw===0 || isNaN(pw) ? window.RSIW : pw;
					e.tabw = e.tabw===undefined ? 0 : parseInt(e.tabw);
					e.thumbw = e.thumbw===undefined ? 0 : parseInt(e.thumbw);
					e.tabh = e.tabh===undefined ? 0 : parseInt(e.tabh);
					e.thumbh = e.thumbh===undefined ? 0 : parseInt(e.thumbh);
					e.tabhide = e.tabhide===undefined ? 0 : parseInt(e.tabhide);
					e.thumbhide = e.thumbhide===undefined ? 0 : parseInt(e.thumbhide);
					e.mh = e.mh===undefined || e.mh=="" || e.mh==="auto" ? 0 : parseInt(e.mh,0);		
					if(e.layout==="fullscreen" || e.l==="fullscreen") 						
						newh = Math.max(e.mh,window.RSIH);					
					else{					
						e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
						for (var i in e.rl) if (e.gw[i]===undefined || e.gw[i]===0) e.gw[i] = e.gw[i-1];					
						e.gh = e.el===undefined || e.el==="" || (Array.isArray(e.el) && e.el.length==0)? e.gh : e.el;
						e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
						for (var i in e.rl) if (e.gh[i]===undefined || e.gh[i]===0) e.gh[i] = e.gh[i-1];
											
						var nl = new Array(e.rl.length),
							ix = 0,						
							sl;					
						e.tabw = e.tabhide>=pw ? 0 : e.tabw;
						e.thumbw = e.thumbhide>=pw ? 0 : e.thumbw;
						e.tabh = e.tabhide>=pw ? 0 : e.tabh;
						e.thumbh = e.thumbhide>=pw ? 0 : e.thumbh;					
						for (var i in e.rl) nl[i] = e.rl[i]<window.RSIW ? 0 : e.rl[i];
						sl = nl[0];									
						for (var i in nl) if (sl>nl[i] && nl[i]>0) { sl = nl[i]; ix=i;}															
						var m = pw>(e.gw[ix]+e.tabw+e.thumbw) ? 1 : (pw-(e.tabw+e.thumbw)) / (e.gw[ix]);					
						newh =  (e.gh[ix] * m) + (e.tabh + e.thumbh);
					}
					var el = document.getElementById(e.c);
					if (el!==null && el) el.style.height = newh+"px";					
					el = document.getElementById(e.c+"_wrapper");
					if (el!==null && el) {
						el.style.height = newh+"px";
						el.style.display = "block";
					}
				} catch(e){
					console.log("Failure at Presize of Slider:" + e)
				}					   
			//});
		  };

const animation = document.querySelector('#circle-main');
    animation.addEventListener('animationend', () => {
  animation.classList.add('end');
  console.log("anim end");
    });

window.RS_MODULES = window.RS_MODULES || {};
			window.RS_MODULES.modules = window.RS_MODULES.modules || {};
			window.RS_MODULES.waiting = window.RS_MODULES.waiting || [];
			window.RS_MODULES.defered = true;
			window.RS_MODULES.moduleWaiting = window.RS_MODULES.moduleWaiting || {};
			window.RS_MODULES.type = 'compiled';

{"prefetch":[{"source":"document","where":{"and":[{"href_matches":"\/*"},{"not":{"href_matches":["\/wp-*.php","\/wp-admin\/*","\/wp-content\/uploads\/*","\/wp-content\/*","\/wp-content\/plugins\/*","\/wp-content\/themes\/ohio-child\/*","\/wp-content\/themes\/ohio\/*","\/*\\?(.+)"]}},{"not":{"selector_matches":"a[rel~=\"nofollow\"]"}},{"not":{"selector_matches":".no-prefetch, .no-prefetch a"}}]},"eagerness":"conservative"}]}

const lazyloadRunObserver = () => {
					const lazyloadBackgrounds = document.querySelectorAll( `.e-con.e-parent:not(.e-lazyloaded)` );
					const lazyloadBackgroundObserver = new IntersectionObserver( ( entries ) => {
						entries.forEach( ( entry ) => {
							if ( entry.isIntersecting ) {
								let lazyloadBackground = entry.target;
								if( lazyloadBackground ) {
									lazyloadBackground.classList.add( 'e-lazyloaded' );
								}
								lazyloadBackgroundObserver.unobserve( entry.target );
							}
						});
					}, { rootMargin: '200px 0px 200px 0px' } );
					lazyloadBackgrounds.forEach( ( lazyloadBackground ) => {
						lazyloadBackgroundObserver.observe( lazyloadBackground );
					} );
				};
				const events = [
					'DOMContentLoaded',
					'elementor/lazyload/observe',
				];
				events.forEach( ( event ) => {
					document.addEventListener( event, lazyloadRunObserver );
				} );

window.lazySizesConfig=window.lazySizesConfig||{};window.lazySizesConfig.loadMode=1;

var HappyLocalize = {"ajax_url":"https:\/\/tamalsen.dev\/wp-admin\/admin-ajax.php","nonce":"cff46546a5","pdf_js_lib":"https:\/\/tamalsen.dev\/wp-content\/plugins\/happy-elementor-addons\/assets\/vendor\/pdfjs\/lib"};

var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close","a11yCarouselWrapperAriaLabel":"Carousel | Horizontal scrolling: Arrow Left & Right","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Laptop","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Widescreen","value":2400,"default_value":2400,"direction":"min","is_enabled":false}},"hasCustomBreakpoints":false},"version":"3.24.6","is_static":false,"experimentalFeatures":{"additional_custom_breakpoints":true,"container_grid":true,"e_swiper_latest":true,"e_nested_atomic_repeaters":true,"e_onboarding":true,"theme_builder_v2":true,"home_screen":true,"ai-layout":true,"landing-pages":true,"link-in-bio":true,"floating-buttons":true,"display-conditions":true,"form-submissions":true},"urls":{"assets":"https:\/\/tamalsen.dev\/wp-content\/plugins\/elementor\/assets\/","ajaxurl":"https:\/\/tamalsen.dev\/wp-admin\/admin-ajax.php","uploadUrl":"https:\/\/tamalsen.dev\/wp-content\/uploads"},"nonces":{"floatingButtonsClickTracking":"49de121797"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":21460,"title":"Tamal%20Sen%20-%20Software%20Engineer%2C%20Front-end%20%26%20App%20Developer","excerpt":"","featuredImage":"https:\/\/tamalsen.dev\/wp-content\/uploads\/2021\/11\/tamalsen.dev-link-preview-1024x536.jpg"}};

(()=>{jQuery(window).on("elementor/frontend/init",function(){var s,i,l,n,e=elementorModules.frontend.handlers.Base.extend({bindEvents:function(){this.run()},getDefaultSettings:function(){return{direction:"alternate",easing:"easeInOutSine",loop:!0,targets:this.findElement(".elementor-widget-container").get(0)}},onElementChange:(s=function(t){-1!==t.indexOf("ha_floating")&&(this.anime&&this.anime.restart(),this.run())},i=400,function(){var t=this,e=arguments,a=l&&!n;clearTimeout(n),n=setTimeout(function(){n=null,l||s.apply(t,e)},i),a&&s.apply(t,e)}),getFxVal:function(t){return this.getElementSettings("ha_floating_fx_"+t)},run:function(){var t=this.getDefaultSettings();this.getFxVal("translate_toggle")&&((this.getFxVal("translate_x.size")||this.getFxVal("translate_x.sizes.to"))&&(t.translateX={value:[this.getFxVal("translate_x.sizes.from")||0,this.getFxVal("translate_x.size")||this.getFxVal("translate_x.sizes.to")],duration:this.getFxVal("translate_duration.size"),delay:this.getFxVal("translate_delay.size")||0}),this.getFxVal("translate_y.size")||this.getFxVal("translate_y.sizes.to"))&&(t.translateY={value:[this.getFxVal("translate_y.sizes.from")||0,this.getFxVal("translate_y.size")||this.getFxVal("translate_y.sizes.to")],duration:this.getFxVal("translate_duration.size"),delay:this.getFxVal("translate_delay.size")||0}),this.getFxVal("rotate_toggle")&&((this.getFxVal("rotate_x.size")||this.getFxVal("rotate_x.sizes.to"))&&(t.rotateX={value:[this.getFxVal("rotate_x.sizes.from")||0,this.getFxVal("rotate_x.size")||this.getFxVal("rotate_x.sizes.to")],duration:this.getFxVal("rotate_duration.size"),delay:this.getFxVal("rotate_delay.size")||0}),(this.getFxVal("rotate_y.size")||this.getFxVal("rotate_y.sizes.to"))&&(t.rotateY={value:[this.getFxVal("rotate_y.sizes.from")||0,this.getFxVal("rotate_y.size")||this.getFxVal("rotate_y.sizes.to")],duration:this.getFxVal("rotate_duration.size"),delay:this.getFxVal("rotate_delay.size")||0}),this.getFxVal("rotate_z.size")||this.getFxVal("rotate_z.sizes.to"))&&(t.rotateZ={value:[this.getFxVal("rotate_z.sizes.from")||0,this.getFxVal("rotate_z.size")||this.getFxVal("rotate_z.sizes.to")],duration:this.getFxVal("rotate_duration.size"),delay:this.getFxVal("rotate_delay.size")||0}),this.getFxVal("scale_toggle")&&((this.getFxVal("scale_x.size")||this.getFxVal("scale_x.sizes.to"))&&(t.scaleX={value:[this.getFxVal("scale_x.sizes.from")||0,this.getFxVal("scale_x.size")||this.getFxVal("scale_x.sizes.to")],duration:this.getFxVal("scale_duration.size"),delay:this.getFxVal("scale_delay.size")||0}),this.getFxVal("scale_y.size")||this.getFxVal("scale_y.sizes.to"))&&(t.scaleY={value:[this.getFxVal("scale_y.sizes.from")||0,this.getFxVal("scale_y.size")||this.getFxVal("scale_y.sizes.to")],duration:this.getFxVal("scale_duration.size"),delay:this.getFxVal("scale_delay.size")||0}),(this.getFxVal("translate_toggle")||this.getFxVal("rotate_toggle")||this.getFxVal("scale_toggle"))&&(this.findElement(".elementor-widget-container").css("will-change","transform"),this.anime=window.anime&&window.anime(t))}});elementorFrontend.hooks.addAction("frontend/element_ready/widget",function(t){elementorFrontend.elementsHandler.addHandler(e,{$element:t})})})})();

var ohioVariables = {"url":"https:\/\/tamalsen.dev\/wp-admin\/admin-ajax.php","view_cart":"View Cart","add_to_cart_message":"has been added to the cart","subscribe_popup_enable":"","notification_enable":""};

wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );

var ElementorProFrontendConfig = {"ajaxurl":"https:\/\/tamalsen.dev\/wp-admin\/admin-ajax.php","nonce":"8ef38ef59e","urls":{"assets":"https:\/\/tamalsen.dev\/wp-content\/plugins\/elementor-pro\/assets\/","rest":"https:\/\/tamalsen.dev\/wp-json\/"},"settings":{"lazy_load_background_images":true},"shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"mix":{"title":"Mix"},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"},"x-twitter":{"title":"X"},"threads":{"title":"Threads"}},"facebook_sdk":{"lang":"en_US","app_id":""},"lottie":{"defaultAnimationUrl":"https:\/\/tamalsen.dev\/wp-content\/plugins\/elementor-pro\/modules\/lottie\/assets\/animations\/default.json"}};

