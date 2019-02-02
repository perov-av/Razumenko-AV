$(function () {

  // Вывод кнопки Купить в один клик
  $('.product-layout > .product-thumb').each(function (e) {
    e +=1;
    $(this).find('.button-group .rp-btn-compare').after('<a class="button toclick" href="#pp-item-' + e + '">Купить в один клик</a>');
    // Конец выводы кнопки купить в один клик
    $(this).parent().attr({
      'class': 'product-layout col-lg-4 col-md-4 col-sm-6 col-xs-12'
    });

  });
  
  $('.product-thumb h4').css('height', '').equalHeights();

  $('.rp-click').click( function(){ // ловим клик по ссылке с классом
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 800); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });

});

