// New TicTacToe Game

//  Step 1 :
const gameSquaresArray = [
  "top-left",
  "top-center",
  "top-right",
  "center-left",
  "center-center",
  "center-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];

//Array of all possible winning conditions(horizonal, diagonal, vertical)
let winArray = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

console.log(gameSquaresArray);

//Map winArray with X or O using index of clickedElement
function mapWinArray(clickedElementIndex) {
  let child = clickedElementIndex;
  let parent = child.parentNode;
  const items = Array.prototype.indexOf.call(parent.children, child);
  const index = items;
  console.log(index);
  
  /*Loop through winArray to locate all indexes and replace with clickedElementIndex.innerText (X or O) */
  const winArraySearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] == target) {
          arr[i][j] = clickedElementIndex.innerText;
          
        }
      }
    }
  };
  
winArraySearch(winArray, index);
console.log(winArray);
 
}

/*Check for winner. Loop through array and use allEqual to see if all items in array are equal.
*/
function checkforWinner() {
  const allEqual = (arr) => arr.every((val) => val === arr[0]);
  
 for(let i = 0; i < winArray.length; i++) {
  if (allEqual(winArray[i]) === true && winArray[i] !== "") {
    winAlert();
  } 
 }
}

//Winner alert
function winAlert() {
  alert("You Win!");
}

// Step 2 :
let isItXTurn = true;

//Step 3 :
function handleSquareClick(squaredId) {
  const clickedElement = document.getElementById(squaredId);
  if (isItXTurn && clickedElement.innerText === "") {
    clickedElement.innerText = "X";
    clickedElement.style.color = "lightblue";
    mapWinArray(clickedElement);
    checkforWinner();
    isItXTurn = false;

  } else if (!isItXTurn && clickedElement.innerText === "") {
    clickedElement.innerText = "O";
    clickedElement.style.color = "lightyellow";
    mapWinArray(clickedElement);
    checkforWinner();
    isItXTurn = true;

  } else {
    alert(
      "You cannnot click on a square that has already been clicked. Try Again!"
    );
  }
}


// Step 4 :
function newGameButtonAlert() {
  alert("The New Game Button was clicked");
}

// Step 5 :
function newGameSquaresSetup() {
  winArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  gameSquaresArray.forEach((squaredId) => {
    const clickedElement = document.getElementById(squaredId);
    clickedElement.innerText = "";
  });
}


// Step 6 :
function forfeitButtonAlert() {
  alert("The Forfeit Button was clicked");
}


// Step 7 :
function loadSquares() {
  const gameArea = document.getElementById("game-area");
  gameSquaresArray.forEach((square) => {
    const squareElement = document.createElement("section");
    squareElement.setAttribute("id", square);
    gameArea.appendChild(squareElement);
    squareElement.addEventListener("click", () => {
      handleSquareClick(square);
    });
  });
}


// Step 8 :
const forfeitGameBtn = document.getElementById("forfeit-game-btn");
forfeitGameBtn.addEventListener("click", forfeitButtonAlert);
forfeitGameBtn.addEventListener("click", newGameSquaresSetup);

// Step 9 :
const newGameBtn = document.getElementById("new-game-btn");
newGameBtn.addEventListener("click", newGameButtonAlert);
newGameBtn.addEventListener("click", newGameSquaresSetup);


// Step 10 :
window.addEventListener("load", loadSquares);

