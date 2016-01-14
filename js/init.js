//nav & sidebar-menu
	$('.brief').hover(function() {
		$(this).find('.brief__list').stop().fadeIn(250);
	}, function() {
		$(this).find('.brief__list').stop().fadeOut(250);
	});

	var pull = $('#pull'),
        nav = $('.nav__list'), 
        menuHeight  = nav.height(),
        sToggle = $('.sidebar-toggle'),
        sMenu = $('.side-menu');
         
        $(pull).on('click', function(e) {  
        e.preventDefault();  
        nav.slideToggle();  
    });  
    
    $('a.side-menu__link').click(function() {
		$(this).parent().siblings().find('ul').slideUp(300);
		$(this).next('ul').slideToggle(320);

		if ($(this).siblings().length) 
			return false;
	});
  
    $(sToggle).toggle(
    	function(e) {
	    	e.preventDefault();  
	    	sMenu.fadeIn(200);
	    }, function(e) {
	    	e.preventDefault(); 
	    	sMenu.fadeOut(200); 
	    }
    );  

    $(window).resize(function() {
    	var w = $(window).width();  

		if(w > 480 && nav.is(':hidden')) {  
		    nav.removeAttr('style');  
		}

		if(w > 480 && sMenu.is(':hidden')) {  
		    sMenu.removeAttr('style');  
		}
    });	