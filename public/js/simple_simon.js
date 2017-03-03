var randomNumber;
var turn = 1;
var clickedNumber = 0;
var gamesColors = [];
var myColors = [];
function flash(buttonId) {
	console.log('buttonId is: ' + buttonId)
	$("#" + buttonId).animate({
		opacity: '1.0'
	}, 500).animate({
		opacity: '0.4'
	}, 500)};

// RANDOM NUMBER IS GENERATED 1-4, NUMBER IS PUSHED TO GAMESCOLORS ARRAY
function random() {
	randomNumber = Math.floor((Math.random() * 4) + 1);
	gamesColors.push(randomNumber);
	gameSequence();
};

// NUMBER 1-4 TO COLORS, FLASHES THE COLOR
function gameSequence() {
	var i = 0;
	var intervalId = setInterval(function() {
		if(gamesColors[i] == 1) {
				flash('buttonGreen');
		}
		else if(gamesColors[i] == 2) {
				flash('buttonRed');
		}
		else if(gamesColors[i] == 3) {
				flash('buttonYellow');
		}
		else if(gamesColors[i] == 4) {
				flash('buttonBlue');
		};

		if(i == gamesColors.length) {
			clearInterval(intervalId);
			userInput();
		}else{
			i++;	
		}
	console.log(turn);
	}, 1000);
};

// STARTS THE GAME
$('#buttonMiddle').click(function(event) {
	random();
});

// BUTTON USER CLICKED WILL FLASH, IF CORRECT: CONTINUE
function userInput() {
	$('.button').on("click", function() {
		console.log("click id: " + this.id);
		flash(this.id);
		console.log(this.id);
		if($(this).attr('data') == gamesColors[clickedNumber]) {
			console.log('Correct');
			if(clickedNumber == gamesColors.length - 1) {
				clickedNumber = 0;
				random();
			$('.button').off('click');
			}else{
				clickedNumber++;
			}
		} else {
			gamesColors = [];
			clickedNumber = 0;
			$('.button').off('click');
			console.log('Fail');
		}
	});
};