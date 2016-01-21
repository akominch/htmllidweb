(function($) {
    $(function() {
        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();
                    /*height = carousel.innerHeight();*/

                if (width >= 962) {
                    width = width / 4.2;
                } else if (width >= 677) {
                    width = width / 3;
                } else if (width >= 350) {
                    width = width / 2;
                }
				
				/*if (height < 247) {
					height = height-20;
				}*/
				
                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
                $('.slide_content').css('width', Math.ceil(width-10) + 'px');
                
               /* $('.slide_content').css('height', Math.ceil(height) + 'px');*/
              /* $('.slide_content').height(jcarousel('items'));*/
               
            })
            .jcarousel({
                wrap: 'circular'
            });




        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    });
})(jQuery);