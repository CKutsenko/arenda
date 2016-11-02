window.$ = window.jQuery =  require('jquery');

jQuery(document).ready(function($){

  /* Hamburger */
  $('.hamburger').click(function(e){
    e.preventDefault();
    $('.nav__wrapper').toggle();
    $('.hamburger').toggleClass('hamburger-active');
  });

    $(window).resize(function() {
                if ($(window).width() <= '1120'){
           $('.nav__wrapper').css('display','none')
            return this;}
         else   {
              $('.nav__wrapper').css('display','block')
            }
    });

    //   $('body').click(function(){
    //   $('.hamburger').removeClass('hamburger-active');
    // });


  /* плавный скролл" */
      $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
  var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); // анимируем скроолинг к элементу scroll_el
        }
      return false; // выключаем стандартное действие
    });

});



jQuery(function($){
   $(".contacts__input").mask("+7 (999) 999-9999");
});

$('.support__features').on('click', function(){
 if( $(this).closest('.support__item').is('.active') ){
  $(this)
    .closest('.support__list')
    .find('.support__item')
    .removeClass('active');
  }
  else {
    $(this)
     .closest('.support__list')
     .find('.support__item')
     .removeClass('active');
    $(this).closest('.support__item').addClass('active')
  }
});

