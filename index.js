// ✓ global handle to board div and controls div, so we dont have to look it up every time
let boardNode;
let controlsNode;

// ✓ if AI goes first, need to know what players mark is
let playerMark = "X";
let aiMark = "O";

// ✓ holds the board buttons in nested arrays
const board = [];

// assoc array of the other buttons
// accessed like controls.aiFirst or controls.reload
const controls = {};

// ✓ no return or params
// ✓ picks an open button and sets it as the AIs mark
const aiGo = () => {
	let aiPos;
	do{
		aiPos = Math.floor(Math.random() * 9) + 1;
	} while(board[aiPos] != "");

	let posNode = document.getElementById("pos" + aiPos);
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
	let aiFirstNode = document.getElementById('aiFirst');
	aiFirstNode.setAttribute('disabled', '');
	aiFirstNode.setAttribute('hidden', '');

	let posNode = document.getElementById(posId);
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
	let aiFirstNode = document.getElementById('aiFirst');
	aiFirstNode.setAttribute('disabled', '');
	aiFirstNode.setAttribute('hidden', '');

	aiMark = "X";
	playerMark = "O";
	aiGo();
}

// ✓ takes in the return of checkEnd (X,O,-) if checkEnd isnt false
// disables all board buttons, shows message of who won (or cat game) in the control node
// using a new div and innerHTML
const endGame = (state)=>{

}

// ✓ called when page finishes loading
// ✓ populates the boardNode and controlsNode with getElementById calls
// ✓ builds out buttons and saves them in the board global array, and adds them into the boardNode
// builds out buttons and saves them in control assoc array, and adds them into controlsNode
// ✓ attaches the functions above as button.onclick as appropriate
const load = ()=>{
	boardNode = document.getElementById("board");
	controlsNode = document.getElementById("controls");

	for(let i = 0; i < 9; i++) {
		boardNode.insertAdjacentHTML('beforebegin', '<button type="button" class="tile" id="pos' + i + '" onclick="boardOnClick(\'pos' + i + '\')"></button>');
		board.push("");
	}
}

// ✓ this says 'when the page finishes loading call my load function'
window.addEventListener("load", load);