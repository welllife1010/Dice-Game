/*

	遊戲JavaScript文件
	
*/
//if we put dice variable in global execution context, 
//we will only get one single result, nomatter how many time 
//we click the eventListner 
// var dice = Math.floor(Math.random() * 6) + 1; // Random Number 1 - 6
// console.log(dice);

var currentPlayer = 1;
//DOM - Document Object Model

// document.querySelector('#play1-current-score').textContent = dice;
// document.querySelector('#play' + currentPlayer + '-current-score').textContent = dice;
// document.querySelector('#play' + currentPlayer + '-current-score').innerHTML = '<h1>' + dice + '</h1>';

// document.querySelector('.dice').style.display = 'none';
document.querySelector('.dice').style = 'display: none';
document.querySelector('.winner1').style.display = 'none';
document.querySelector('.winner2').style.display = 'none';

// Event 監聽 - 當所有的 Execution Context 都執行完後, 才會被添加到 Execution Context Stack 的 隊伍裡
document.querySelector('.roll').addEventListener('click', function(){

	var dice = Math.floor(Math.random() * 6) + 1;
	console.log(dice);
	document.querySelector('.dice').style = 'display: block';
	document.querySelector('.dice').src = 'dice' + dice + '.png';
});