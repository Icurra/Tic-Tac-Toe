const begin = document.querySelector("#begin");

begin.addEventListener("click", initialize);

const board = new Array(9).fill("");

const players = {
  X: {
    print: "X",
    name: null,
  },
  O: {
    print: "O",
    name: null,
  },
};
let currPlayer = "X"

function initialize(event) {

  event.preventDefault();

let p1Turn = document.querySelector("#p1");
let p2Turn = document.querySelector("#p2");
players.X.name = p1Turn.value;
players.O.name = p2Turn.value;

p1Turn.readOnly = true;
  p2Turn.readOnly = true;

  event.target.disable = true;

  checkReady()

  function checkReady() {
    if (p1Turn.value != "" && p1Turn.value != "") {
      p1Turn.hidden = true;
      p2Turn.hidden = true
      begin.hidden = true;
    } 
  }
  


const cells = document.querySelectorAll(".square");

  for (let square of cells) {
    square.addEventListener("click", turn);
  }

  turn()
}

function turn(event) {
console.log(event)
let selection = event.target;

if (selection.textContent) {
  return alert("That cell is taken!")
}

selection.textContent = players[currPlayer].print;

let cellNum = parseInt(selection.id);
board[cellNum] = players[currPlayer].print;


checkWin()

if (currPlayer == "X") {
  currPlayer = "O";
} else {
  currPlayer = "X";
}
}

function checkWin() {

  let checker = players[currPlayer].print;

if (
  (board[0] == checker && board[1] == checker && board[2] == checker) ||
    (board[3] == checker && board[4] == checker && board[5] == checker) ||
    (board[6] == checker && board[7] == checker && board[8] == checker) ||
    (board[0] == checker && board[3] == checker && board[6] == checker) ||
    (board[1] == checker && board[4] == checker && board[7] == checker) ||
    (board[2] == checker && board[5] == checker && board[8] == checker) ||
    (board[0] == checker && board[4] == checker && board[8] == checker) ||
    (board[2] == checker && board[4] == checker && board[6] == checker)
) {
end()
}
}

function end() {
if (p1Turn.value) {alert(`${players[currPlayer].name} is the winner!`)
} else {
  alert(`$`)
}
}