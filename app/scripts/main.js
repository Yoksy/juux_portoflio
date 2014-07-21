"use strict";

$(document).ready(function(){

	$('a[href^=#]').not('.fancybox').on("click",function(e){
	    var t= $(this.hash);
	    var t=t.length&&t||$('[name='+this.hash.slice(1)+']');
	    if(t.length){
	        var tOffset=t.offset().top;
	        $('html,body').animate({scrollTop:tOffset-20},'slow');
	        e.preventDefault();
	    }
	});

	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none',
		autoSize: false,
		width: 960,
		arrows : true,
		helpers : {
        	overlay : {
	            css : {
	                'background' : 'rgba(255, 255, 255, 0.7)'
	            }
        	}
    	}
	});
	// $("#slides").slidesjs({
 //    	width: 940,
 //    	height: 528,
 //    	navigation: {
 //    		active: true,
 //    		effect: "slide"
 //    	},
 //    	pagination: {
 //    		active: true,
 //    		effect: "slide"
 //    	}
 //    });
});