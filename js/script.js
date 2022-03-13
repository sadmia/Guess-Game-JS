"use strict";

let countTry = document.getElementById('countTry');
let countSelect = document.getElementById("CountSelect");

let btnList = document.querySelectorAll(".btn");
let warnintTextHL = document.getElementById("warnintTextHL");
let selectNumberShow = document.getElementById("SelectNumberShow");

let wineMessage = document.getElementById("wineMessage");
let guessNumberShow = document.getElementById("guessNumberShow");

let playBackBtn = document.getElementById("playBackBtn");

let firstDiv = document.querySelector(".firstDiv");
let lastDiv = document.querySelector(".lastDiv");

let rendome = Math.random();
let rendomeNumber = Math.floor(rendome * 10);

let clickCount = 0;
function countVlu(n) {
	let countCountNumber = n;

	if (countCountNumber >= 5) {
		wineMessage.innerText = "Yippie you Fall!";
		firstDiv.style.display = "none";
		lastDiv.style.display = "block";
		guessNumberShow.innerText = rendomeNumber;
		countTry.innerText = countCountNumber;
	} else {
		countTry.innerText = countCountNumber;
	}

}



btnList[0].addEventListener("click", function(){
	inputNumber(0);
	countVlu(clickCount = clickCount + 1);
})
btnList[1].addEventListener("click", function(){
	inputNumber(1);
	countVlu(clickCount = clickCount + 1);
})
btnList[2].addEventListener("click", function(){
	inputNumber(2);
	countVlu(clickCount = clickCount + 1);
})
btnList[3].addEventListener("click", function(){
	inputNumber(3);
	countVlu(clickCount = clickCount + 1);
})
btnList[4].addEventListener("click", function(){
	inputNumber(4);
	countVlu(clickCount = clickCount + 1);
})
btnList[5].addEventListener("click", function(){
	inputNumber(5);
	countVlu(clickCount = clickCount + 1);
})
btnList[6].addEventListener("click", function(){
	inputNumber(6);
	countVlu(clickCount = clickCount + 1);
})
btnList[7].addEventListener("click", function(){
	inputNumber(7);
	countVlu(clickCount = clickCount + 1);
})
btnList[8].addEventListener("click", function(){
	inputNumber(8);
	countVlu(clickCount = clickCount + 1);
})
btnList[9].addEventListener("click", function(){
	inputNumber(9);
	countVlu(clickCount = clickCount + 1);
})



function inputNumber(inputNumber) {
	let clickNumber = inputNumber;
	matchNumber(clickNumber);

	selectNumberShow.innerText = clickNumber;
}

function matchNumber(VluNumber) {
	if (VluNumber > rendomeNumber) {
		warnintTextHL.innerText = "You guess is too high.";
	} else if (VluNumber < rendomeNumber) {
		warnintTextHL.innerText = "You guess is too low.";
	} else if (VluNumber == rendomeNumber) {
		wineMessage.innerText = "Yippie you Win!";
		firstDiv.style.display = "none";
		lastDiv.style.display = "block";
		guessNumberShow.innerText = rendomeNumber;
	}
}

playBackBtn.addEventListener("click", function() {
	firstDiv.style.display = "block";
	lastDiv.style.display = "none";
	clickCount = 0;
	countTry.innerText = 0;
	location.reload();
})