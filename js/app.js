/* define constants here */
//constant to identify player sprite with CSS class
const player = document.getElementById(`sprite`);

const dotArray = [`1_2`, `1_3`, `1_4`, `2_2`, `2_4`, `2_5`, `3_5`];
let score = 0;
/* define functions here */
//set sprite initial position
const initialPosition = () => {
  player.style.gridColumnStart = 2;
  player.style.gridRowStart = 2;
};
initialPosition();

// retrieve sprite position at any time
const getPosition = () => {
  let x = document.querySelector(`.sprite`).style.gridColumnStart;
  let y = document.querySelector(`.sprite`).style.gridRowStart;
  return `${y}_${x}`;
};

// change dots to blank background and increment score
const incrementScore = () => {
  score++;
  document.querySelector(`.score`).innerText = score;
};
const eatDot = (coord) => {
  let currentSquare = document.getElementById(coord);
  if ((currentSquare.className = coord)) {
    currentSquare.className = `path`;
    incrementScore();
  }
};
/* Generate Grid*/
const gridMaker = (x, y) => {
  for (let i = 1; i < x; i++) {
    for (let j = 1; j < y; j++) {
      document
        .querySelector(`.map`)
        .insertAdjacentHTML(
          `beforeend`,
          `<div class="wall" id ="${i}_${j}"></div>`
        );
      // let newDiv = document.createElement(`div`);
      // newDiv.setAttribute('id', `${i}_${j}`);
      // // newDiv.className = 'dot';
      // // newDiv.style.gridRowStart = y + 1;
      // // newDiv.style.gridColumnStart = x + 1;
      // console.log('new div created');
      // document.querySelector(`.map`).appendChild.newDiv;
      // // document.querySelector(`.map`).insertAdjacentHTML(`afterbegin`,`<div class="dot"></div>`)
    }
  }
  // document.querySelector(`.map`).insertAdjacentHTML(`afterbegin`,`<div class="dot"></div>`)
};

gridMaker(11, 11);
/* establish dots*/
const layDots = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    document.getElementById(arr[i]).setAttribute('class', 'dot');
  }
};

layDots(dotArray);

/* detect walls */
//get class of adjacent square
const adjacentPosition = (a, b) => {
  let x = parseInt(document.querySelector(`.sprite`).style.gridColumnStart) + a;
  let y = parseInt(document.querySelector(`.sprite`).style.gridRowStart) + b;
  let adjSquareID = `${y}_${x}`;
  return document.getElementById(adjSquareID).className;
};

//* directional functions*//

const moveFunc = (e) => {
  switch (e.key) {
    case `ArrowUp`:
      console.log(adjacentPosition(0, -1));
      if (adjacentPosition(0, -1) === `wall`) {
        return;
      } else {
        player.style.gridRowStart = parseInt(player.style.gridRowStart) - 1;
        break;
      }
      break;
    case `ArrowDown`:
      console.log(adjacentPosition(0, 1));
      if (adjacentPosition(0, 1) === `wall`) {
        return;
      } else {
        player.style.gridRowStart = parseInt(player.style.gridRowStart) + 1;
        break;
      }
      break;
    case `ArrowLeft`:
      console.log(adjacentPosition(-1, 0));
      if (adjacentPosition(-1, 0) === `wall`) {
        return;
      } else {
        player.style.gridColumnStart =
          parseInt(player.style.gridColumnStart) - 1;
        break;
      }
      break;
    case `ArrowRight`:
      console.log(adjacentPosition(1, 0));
      if (adjacentPosition(1, 0) === `wall`) {
        return;
      } else {
        player.style.gridColumnStart =
          parseInt(player.style.gridColumnStart) + 1;
        break;
      }
      break;
    default:
      return;
  }
  eatDot(getPosition());
};

/* add eventListeners here */
document.addEventListener(`keydown`, moveFunc);

/* test function to log keystrokes
const log = document.getElementById('log');
function logKey(e) {
  console.log(` ${e.code}`);
}

document.addEventListener('keydown', logKey);
*/

/* Generate Grid*/
// const newDiv = document.createElement(`div`);
// const board = document.querySelector(`.map`);
// newDiv.setAttribute('id', '1_1');
// board.appendChild.newDiv;
// const newDiv = document.createElement(`div`);
// const board = document.querySelector(`.map`);
// newDiv.setAttribute('id', '1_2');
// board.appendChild.newDiv;
// const newDiv = document.createElement(`div`);
// const board = document.querySelector(`.map`);
// newDiv.setAttribute('id', '1_3');
// board.appendChild.newDiv;
