$(document).ready(function(){

	$('a[href^=#]').on("click",function(e){
	    var t= $(this.hash);
	    var t=t.length&&t||$('[name='+this.hash.slice(1)+']');
	    if(t.length){
	        var tOffset=t.offset().top;
	        $('html,body').animate({scrollTop:tOffset-20},'slow');
	        e.preventDefault();
	    }
	});

	var imgLoad = imagesLoaded(document.querySelectorAll('.lazy'));

	imgLoad.on('done', function(instance) {

  		$('.banner').addClass('active').unslider({
		    speed: 500,
		    delay: 4000,
		    fluid: true 
		});

		
	});


});