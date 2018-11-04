$(document).ready(function(){ // Ready Start
	
	if($("#banner .banner-content").length){
		$("#banner .banner-content").not(".slick-initialized").slick({
			 dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 5000

		});
	}


	if($("#affordable-packages .affordable-packages-wrap").length){
		$("#affordable-packages .affordable-packages-wrap").not(".slick-initialized").slick({
			 dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1
		});
	}

	if($("#premium-packages .premium-packages-wrap").length){
		$("#premium-packages .premium-packages-wrap").not(".slick-initialized").slick({
			 dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1
		});
	}

	function bannerParallax(){		
		var ypos = window.pageYOffset;
		$("#banner .banner-inner").css('transform', 'translate(0,' + ( ypos * .5) + 'px)');
	}

	var headerFixShowYPos = 0;
	function headerFixShow(){
		var currentYPos = window.pageYOffset;

		 if(currentYPos > headerFixShowYPos){
		 	$("#header").addClass("fixed-hide");
		 	$("#header").removeClass("fixed-show");
		 }
		 else if(currentYPos < headerFixShowYPos){
		 	$("#header").addClass("fixed-show");
		 	$("#header").removeClass("fixed-hide");
		 }

		 headerFixShowYPos = currentYPos;
	}

	window.addEventListener('scroll', bannerParallax);
	window.addEventListener('scroll', headerFixShow);
	
}); // Ready End
