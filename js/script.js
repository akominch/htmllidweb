function number_format(number, decimals, dec_point, thousands_sep) {
  number = (number + '')
    .replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return '' + (Math.round(n * k) / k)
          .toFixed(prec);
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
    .split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '')
      .length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1)
      .join('0');
  }
  return s.join(dec);
}

$(document).ready(function () {

	//Заменяем кнопку <button>рассчитать стоимость</button> на <span class="cur"></span>, в который будет подставляться рассчитанная сумма
	$('.price-button').click(function() {
		var boxPrice = $(this).closest('.col-md-4');

		function hideButton () {
			$(boxPrice).find('.price-button').hide();
			$(boxPrice).find('.footer-price').append('<h4>Итог: <span class="cur">0</span> <span class="rub">р.</span></h4>');

		};
		//анимация раскрытия блока с параметрами
		$(boxPrice).find('.box-price').animate({height: '390px'}, {'duration': 500}, {'easing': 'linear'}, hideButton());

	});

	//отслеживаем выделение параметра, чтобы в блоке был только 1 выделенный элемент


	////////////Калькулятор
	//получаем значения параметров
	function valParam ($this) {
  
  	$this.toggleClass('check-param');
  
   	var isChecked = $this.hasClass('check-param');
    var total = parseInt($('.cur').html());
    var param = $this.data('param');    
    var group = $this.closest('div.way');
  	var groupList = $(group).find('.check-param');
    
    if (groupList.length > 1) {
    	for (var i = 0; i < groupList.length; i++) {
      	var $el = $(groupList[i]);
        var elCheked = $(groupList[i]).hasClass('check-param');
      	if (elCheked) {
          $el.removeClass('check-param');
          total = total - $el.data('param'); 
        }          
      }
      total = total + $this.data('param'); 
      $this.addClass('check-param');
    }
    
    

    if (isChecked) {
    	total = total + param;
    } else {
    	total = total - param;
    }

			$('.cur').html(total);
			$('.rub').show();
		};


	//отслеживаем изменение данных
	$('.item').on('click', function() {
  	valParam($(this))
  });

})
