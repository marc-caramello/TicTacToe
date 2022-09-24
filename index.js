// ✓ global handle to board div and controls div, so we dont have to look it up every time
let boardNode;
let controlsNode;

let aiFirstNode;
let gameResultNode;
let posNode;

// ✓ if AI goes first, need to know what players mark is
let aiMark;
let playerMark;

// ✓ holds the board buttons in nested arrays
const board = [];

// ✓ no return or params
// ✓ picks an open button and sets it as the AIs mark
const aiGo = () => {
	let aiPos;
	do{
		aiPos = Math.floor(Math.random() * 9) + 1;
	} while(board[aiPos] != "");

	posNode = document.getElementById("pos" + aiPos);
	posNode.setAttribute('disabled', '');
	posNode.innerHTML = aiMark;
	board[aiPos] = aiMark;
}

// ✓ return X, O, or - if game is over
// ✓ returns false if game isnt over
const checkEnd = () => {
	if (board[0] == board[1] == board[2]) {
		return board[0];
	}
	else if (board[3] == board[4] == board[5]) {
		return board[3];
	}
	else if (board[6] == board[7] == board[8]) {
		return board[6];
	}
	else if (board[0] == board[3] == board[6]) {
		return board[0];
	}
	else if (board[1] == board[4] == board[7]) {
		return board[1];
	}
	else if (board[2] == board[5] == board[8]) {
		return board[2];
	}
	else if (board[0] == board[4] == board[8]) {
		return board[0];
	}
	else if (board[2] == board[4] == board[6]) {
		return board[2];
	}
	else if (!board.includes("")) {
		return "-";
	}
	else {
		return false;
	}
}

// ✓ always sets aiFirst button to disabled
// ✓ sets button state (disabled and inner html)
// ✓ checks for end state (and possible ends game)
// ✓ calls aiGo
// ✓ checks for end state (and possible ends game)
const boardOnClick = function(posId){
	aiFirstNode.setAttribute('disabled', '');
	aiFirstNode.setAttribute('hidden', '');

	posNode = document.getElementById(posId);
	posNode.setAttribute('disabled', '');
	posNode.innerHTML = playerMark;
	board[posId.substring(3)] = playerMark;
	
	let checkEndVal_1 = checkEnd();
	if (checkEndVal_1 != false) {
		endGame(checkEndVal_1);
	}
	aiGo();
	let checkEndVal_2 = checkEnd();
	if (checkEndVal_2 != false) {
		endGame(checkEndVal_2);
	}
}

// ✓ changes playerMark global, calls aiGo
const aiFirstOnClick = () => {
	aiFirstNode.setAttribute('disabled', '');
	aiFirstNode.setAttribute('hidden', '');

	aiMark = "X";
	playerMark = "O";
	aiGo();
}

// ✓ takes in the return of checkEnd (X,O,-) if checkEnd isnt false
// ✓ disables all board buttons, shows message of who won (or cat game) in the control node
// ✓ using a new div and innerHTML
const endGame = (state)=>{
	for(let i = 0; i < 9; i++) {
		posNode = document.getElementById("pos" + i);
		posNode.setAttribute('disabled', '');
	}
	if(state == "-") {
		gameResultNode.innerHTML = "Tie"
	}
	else if(state == playerMark) {
		gameResultNode.innerHTML = "You win"
	}
	else {
		gameResultNode.innerHTML = "AI wins"
	}
}

// ✓ called when page finishes loading
// ✓ populates the boardNode and controlsNode with getElementById calls
// ✓ builds out buttons and saves them in the board global array, and adds them into the boardNode
// ✓ attaches the functions above as button.onclick as appropriate
const load = ()=>{
	boardNode = document.getElementById("board");
	controlsNode = document.getElementById("controls");

	aiFirstNode = document.getElementById('aiFirst');
	gameResultNode = document.getElementById('gameResult');

	aiMark = "O";
	playerMark = "X";

	for(let i = 0; i < 9; i++) {
		boardNode.insertAdjacentHTML('beforebegin', '<button type="button" class="tile" id="pos' + i + '" onclick="boardOnClick(\'pos' + i + '\')"></button>');
		board[i] = "";
	}
}

// ✓ this says 'when the page finishes loading call my load function'
window.addEventListener("load", load);