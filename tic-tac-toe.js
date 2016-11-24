$(function() {
	var turn = 0;

	$('td').on('click', function() {
		if (!$(this).hasClass('x') && !$(this).hasClass('o')) {
			if (turn % 2 === 0) {
				$(this).html('X');
				$(this).addClass('x');
			} else {
				$(this).html('O');
				$(this).addClass('o');
			}
			turn++;
		} else {
		}
	});



	// if (('td .1').attr('X') === 'X') {
	// 	console.log("it worked")
	// }
});


// can't double click same box - click only if value is nil
// win conditions
// reset button
// draw conditions
// *text that says who's turn it is
