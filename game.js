/*

	遊戲JavaScript文件
	
*/
//if we put dice variable in global execution context, 
//we will only get one single result, nomatter how many time 
//we click the eventListner. 
// var dice = Math.floor(Math.random() * 6) + 1; // Random Number 1 - 6
// console.log(dice);

var currentPlayer = 1;
var play1TotalScore = 0; //全局的變量
var play2TotalScore = 0; //全局的變量

var counter = 1;

var isPlayingGame = true;

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
	if (isPlayingGame) {

		var dice = Math.floor(Math.random() * 6) + 1;
		// console.log(dice);
		document.querySelector('.dice').style = 'display: block';
		document.querySelector('.dice').src = 'dice' + dice + '.png';

		if (currentPlayer === 1) {

			document.getElementById('play' + currentPlayer + '-current-score').textContent = dice;
			
			play1TotalScore += dice;
			document.getElementById('play' + currentPlayer + '-total-score').textContent = play1TotalScore;

			document.querySelector('.panel-' + currentPlayer).classList.remove('active');
			currentPlayer = 2;
			document.querySelector('.panel-' + currentPlayer).classList.add('active');

		} else {

			document.getElementById('play' + currentPlayer + '-current-score').textContent = dice;
			
			play2TotalScore += dice;
			document.getElementById('play' + currentPlayer + '-total-score').textContent = play2TotalScore;

			document.querySelector('.panel-' + currentPlayer).classList.remove('active');
			currentPlayer = 1;
			document.querySelector('.panel-' + currentPlayer).classList.add('active');

		}

		counter += 1;
		// console.log(counter);

		if (counter === 7) {

			if (play1TotalScore > play2TotalScore) {

				document.querySelector('.winner1').style.display = 'block';
				document.getElementById('play1-current-score').style = 'margin-top: 0px';
				isPlayingGame = false;

			} else if (play1TotalScore < play2TotalScore) {

				document.querySelector('.winner2').style.display = 'block';
				document.getElementById('play2-current-score').style = 'margin-top: 0px';
				isPlayingGame = false;

			} else {

				document.querySelector('.roll').textContent = '平手';
				isPlayingGame = false;

			}


		}

	} else {

		
		isPlayingGame = true;

	}


});