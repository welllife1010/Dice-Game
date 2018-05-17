/*

	遊戲JavaScript文件
	
*/

var dice = Math.floor(Math.random() * 6) + 1; // Random Number 1 - 6
console.log(dice);

var currentPlayer = 2;
//DOM - Document Object Model

// document.querySelector('#play1-current-score').textContent = dice;
document.querySelector('#play' + currentPlayer + '-current-score').textContent = dice;