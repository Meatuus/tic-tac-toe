$(function() {
	var turn = 0;

	$('td').on('click', function() {
		if ($(this).hasClass('x') || $(this).hasClass('o')) {
			alert("you can't play there");
		} else {
			if (turn % 2 === 0) {
				$(this).html('X');
				$(this).addClass('x');
				$('.players-turn').text("Second Player's Turn!");
				winCheck('x');
				noWinner('x');
				turn++;
			} else {
				$(this).html('O');
				$(this).addClass('o');
				$('.players-turn').text("First Player's Turn!");
				winCheck('o');
				noWinner('o');
				turn++;
			}

		}
	});

	// var winConditions = [['.1', '.2', '.3'], ['.4', '.5', '.6'], ['.7', '.8', '.9'], ['.1', '.4', '.7'],
	// ['.2', '.5', '.8'], ['.3', '.6', '.9'], ['.1', '.5', '.9'], ['.3', '.5', '.7']];

	function winCheck(check) {
		if ($('.1').hasClass(check) && $('.2').hasClass(check) && $('.3').hasClass(check)) {
			$('.game-result').fadeIn('start');
			$('.players-turn').text("Winner Winner Chicken Dinner!!");
		} else if ($('.4').hasClass(check) && $('.5').hasClass(check) && $('.6').hasClass(check)) {
			$('.game-result').fadeIn('start');
			$('.players-turn').text("Winner Winner Chicken Dinner!!");
		} else if ($('.7').hasClass(check) && $('.8').hasClass(check) && $('.9').hasClass(check)) {
			$('.game-result').fadeIn('start');
			$('.players-turn').text("Winner Winner Chicken Dinner!!");
		} else if ($('.1').hasClass(check) && $('.4').hasClass(check) && $('.7').hasClass(check)) {
			$('.game-result').fadeIn('start');
			$('.players-turn').text("Winner Winner Chicken Dinner!!");
		} else if ($('.2').hasClass(check) && $('.5').hasClass(check) && $('.8').hasClass(check)) {
			$('.game-result').fadeIn('start');
			$('.players-turn').text("Winner Winner Chicken Dinner!!");
		} else if ($('.3').hasClass(check) && $('.6').hasClass(check) && $('.9').hasClass(check)) {
			$('.game-result').fadeIn('start');
			$('.players-turn').text("Winner Winner Chicken Dinner!!");
		} else if ($('.1').hasClass(check) && $('.5').hasClass(check) && $('.9').hasClass(check)) {
			$('.game-result').fadeIn('start');
			$('.players-turn').text("Winner Winner Chicken Dinner!!");
		} else if ($('.3').hasClass(check) && $('.5').hasClass(check) && $('.7').hasClass(check)) {
			$('.game-result').fadeIn('start');
			$('.players-turn').text("Winner Winner Chicken Dinner!!");
		} else {
		}
	}

	function noWinner() {
		if (($('.1').hasClass('x') || $('.1').hasClass('o')) && ($('.2').hasClass('x') || $('.2').hasClass('o'))
		 && ($('.3').hasClass('x') || $('.3').hasClass('o')) && ($('.4').hasClass('x') || $('.4').hasClass('o'))
		 && ($('.5').hasClass('x') || $('.5').hasClass('o')) && ($('.6').hasClass('x') || $('.6').hasClass('o'))
		 && ($('.7').hasClass('x') || $('.7').hasClass('o')) && ($('.8').hasClass('x') || $('.8').hasClass('o'))
		 && ($('.9').hasClass('x') || $('.9').hasClass('o'))) {
			$('.game-result').fadeIn('start');
			$('.players-turn').text("No winners here");
		}
	}

	$('button').on('click', function resetGame() {
		turn = 0;
		$('.game-result').fadeOut('start');
		$('td').removeClass('x');
		$('td').removeClass('o');
		$('td').html('');
	});

});

// *text that says who wins
// use array to check win conditions
// create method to replace 5 lines in if/else statement for 'td'.click function
