$(document).ready(function() {

//Скрипт для показа и скрытия мобильного меню
	//Создает переменные для кнопки и для меню
	var pull = $("#navigation-toggle");
	var nav = $(".navigation ul");

	//Описываем событие при нажатии на кнопку
	$(pull).on("click", function(e){

		// Отменяем стандартное поведение ссылки в браузере
		e.preventDefault();

		// Открываем/скрываем меню
		$(nav).slideToggle();

		//Добавляем модификатор --active
		$(this).toggleClass('navigation__toggle-button--active');
	});

	// При изменении размера окна в большую сторону, если меню было скрыто, показываем его
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 720 && nav.is(':hidden')) {
			nav.removeAttr('style');
		}
	});

//Вызов слайдера Owl-carousel
	$('#top-slider').owlCarousel({
		singleItem: true,
		navigation: true,
		theme: "top-slider-theme",
		navigationText: ["", ""],
		slideSpeed: 600
	});

});