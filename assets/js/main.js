$(document).ready(function(){
	$('.menu__btn').on('click', function(){
		$(this).toggleClass('menu__btn--active');
		$('.menu__list').stop(true, true).slideToggle(300);
	});
});

$(".scroll").on("click", function (event) {
	event.preventDefault();
	const blockID = $(this).attr("href");
	$(blockID)[0].scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
});