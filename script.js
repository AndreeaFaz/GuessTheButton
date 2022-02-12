var number = Math.floor((Math.random() * 3) + 1);

function randomWinner(idButton){	
	if(number == idButton) {
		document.getElementById("result").style.color ="green";
		document.getElementById("result").innerHTML ="You won. Lucky you!";
	} else {
		document.getElementById("result").style.color ="red";
		document.getElementById("result").innerHTML ="You lost. Not your lucky day :(";
	}
}