$(document).ready(function() {

    $('#datepicker').datepicker({
        dateFormat: "yy-mm-dd",
        minDate: new Date($('#hiddendelivdate').val()),
        monthNames: ['Січень', 'Лютий', 'березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
        dayNamesMin: ['НД', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    });
});

$('.sl').slick({
    dots: true,
    prevArrow: false,
    nextArrow: false,
});
menu.onclick = function myFunction() {
	var x = document.getElementById('myTopnav');

	if (x.className === "bottomnav"){
		 x.className += " responsive";
		}
		  else {
		  	x.className = "bottomnav";
		  }

	};
     $('.button__top').on('click', function() {
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false; 
 });


