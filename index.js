// global handle to board div and controls div
// so we dont have to look it up every time
let boardNode;
let controlsNode;
// if AI goes first, need to know what players mark is
let playerMark = "X";

// holds the board buttons in nested arrays
// accessed like board[0][0] (top left button)
const board = [];

// assoc array of the other buttons
// accessed like controls.aiFirst or controls.reload
const controls = {};

// no return or params
// picks an open button and sets it as the AIs mark
// always sets aiFirst button to disabled
const aiGo = () => {

}

// return X, O, or - if game is over
// returns false if game isnt over
const checkEnd = () => {

}

// isnt an arrow function because this way it can use 'this' 
// to reference the button clicked.
// always sets aiFirst button to disabled
// sets button state (disabled and inner html)
// checks for end state (and possible ends game)
// calls aiGo
// checks for end state (and possible ends game)
const boardOnClick = function(){
	console.log("Successfully entered this function!");
}

// changes playerMark global, calls aiGo
const aiFirstOnClick = () => {

}

// takes in the return of checkEnd (X,O,-) if checkEnd isnt false
// disables all board buttons, shows message of who won (or cat game) in the control node
// using a new div and innerHTML
const endGame = (state)=>{

}

// ✓ called when page finishes loading
// ✓ populates the boardNode and controlsNode with getElementById calls
// ✓ builds out buttons and saves them in the board global array, and adds them into the boardNode
// builds out buttons and saves them in control assoc array, and adds them into controlsNode
// attaches the functions above as button.onclick as appropriate
const load = ()=>{
	boardNode = document.getElementById("board");
	controlsNode = document.getElementById("controls");

	for(let y = 0; y < 3; y++) {
		for(let x = 0; x < 3; x++) {
			boardNode.insertAdjacentHTML('beforebegin', '<button type="button" class="tile" id="' + x + "_" + y + '" onclick="boardOnClick()"></button>');
			board.push("");
		}
	}
}

// ✓ this says 'when the page finishes loading call my load function'
window.addEventListener("load", load); 