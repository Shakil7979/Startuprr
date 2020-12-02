 $(window).ready(function(){
 	$('.skill-bar').pieChart({
 		barColor: '#1CA399',
 		trackColor: '#fff',
 		lineWidth: 3,
 		size: 100,
 		animate: { 
				  duration: 1000, 
				  enabled: true 
				},
 	});

 	// =====counter up 
 	$('.counter p').counterUp({
	 	time:1000  
	 });

 	// ======testimonials owl carousel 
 	$('.testimonials').owlCarousel({
 		items:1,
 		nav:true,
 		dots:false,
 		autoplay:true,
 		loop:true,
 	})
 	// ======company owl carousel 
 	$('.company').owlCarousel({
 		items:4,
 		nav:true,
 		dots:false,
 		autoplay:true,
 		loop:true,
 		responsive:{
	        0:{
	            items:1
	        },
	        576:{
	            items:2
	        },
	        767:{
	            items:3
	        }
	    }
 	})

 	//====== menu clik scroll
 	$('.menu ul li a').click(function(){
		$('html,body').animate({
			scrollTop:$($(this).attr('href')).offset().top
		},500)

		return false;
	})
	// ====mobile menu 
	$('.nav-icon').click(function(){
		$('.menu ul').slideToggle(1000);

		return false;
	}) 


	//========== magnificPopup
	$('.right-ovr').magnificPopup({
		  delegate: 'a', 
		  type: 'image' ,  
		  gallery:{
		    enabled:true
		  }
		});

	// =====header search
	$('.header-search i').click(function(){
		$('.search-header').show(); 
	})

	// ===========scroll btn
 	$('.scrollTop').click(function(){
 		 $('html,body').animate({
 		 	scrollTop:0
 		 },1000)
 		return false;
 	});
 	// ===========scroll down btn
 	$('.scrollDown').click(function(){
 		 $('html,body').animate({
 		 	scrollTop:600
 		 },1000)
 		return false;
 	});
	
 	
 }) 

 // =======FixedHeader
 $(window).scroll(function(){
	var value=$(this).scrollTop()

	if(value>600){
		$('.header-area').addClass('FixedHeader')
	}else{
		$('.header-area').removeClass('FixedHeader')
	}
})