var randomNumber;
var turn = 4;
var i = 0;
function flash(buttonId) {
	$(buttonId).animate({
		opacity: '1.0'
	}, 500).animate({
		opacity: '0.4'
	}, 500)};

// RANDOM NUMBER IS GENERATED 1-4, CORRESPONDING WITH COLORS OF BUTTONS
function random() {randomNumber = Math.floor((Math.random() * 4) + 1);
	if(randomNumber == 1) {
			flash('#buttonGreen');
	}
	else if(randomNumber == 2) {
			flash('#buttonRed');
	}
	else if(randomNumber == 3) {
			flash('#buttonYellow');
	}
	else if(randomNumber == 4) {
			flash('#buttonBlue');
	};
};

// BUTTON CLICKED WILL FLASH
$('.button').click(function() {
	flash(this);
});

// RANDOM SEQUENCE BASED ON WHAT TURN IT IS, 1 TURN = 1 FLASH
var intervalId = setInterval(function() {
	if(i >= turn - 1) {
		clearInterval(intervalId)
	}
	random();
	i++;
	}, 1000);