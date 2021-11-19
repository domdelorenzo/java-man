/* define constants here */
//constant to identify player sprite with CSS class
const player = document.getElementById(`sprite`);
const enemy = document.getElementById(`ghost`);
let gameActive = true;
let levelWin = 0;
const dotArray = [
  `2_3`,
  `2_2`,
  `2_4`,
  `2_5`,
  `2_6`,
  `2_7`,
  `2_8`,
  `2_9`,
  `3_9`,
  `4_9`,
  `5_3`,
  `5_4`,
  `5_5`,
  `5_6`,
  `5_7`,
  `5_8`,
  `5_9`,
  `6_9`,
  `7_9`,
  `8_9`,
  `9_9`,
  `9_8`,
  `9_7`,
  `9_6`,
  `9_5`,
  `9_4`,
  `9_3`,
  `9_2`,
  `8_2`,
  `7_2`,
  `6_2`,
  `5_2`,
  `4_2`,
  `3_2`
];
let score = 0;
/* define functions here */
//set sprite initial position
const initialPosition = () => {
  player.style.gridColumnStart = 2;
  player.style.gridRowStart = 2;
};
initialPosition();

const enemyPosition = () => {
  enemy.style.gridColumnStart = 9;
  enemy.style.gridRowStart = 2;
};
enemyPosition();

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
  if (currentSquare.className === `dot`) {
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
    }
  }
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

const spriteAdjacentPosition = (sprite, a, b) => {
  let x = parseInt(sprite.style.gridColumnStart) + a;
  let y = parseInt(sprite.style.gridRowStart) + b;
  let adjSquareID = `${y}_${x}`;
  return document.getElementById(adjSquareID).className;
};

//* directional functions*//

//ghost move function
const ghostMove = (sprite) => {
  let choiceArray = [0, 1, 2, 3];
  //detect available paths and remove invalid options from choiceArray
  if (spriteAdjacentPosition(sprite, 0, -1) === `wall`) {
    choiceArray.splice(choiceArray.indexOf(0), 1);
  }
  if (spriteAdjacentPosition(sprite, 0, 1) === `wall`) {
    choiceArray.splice(choiceArray.indexOf(1), 1);
  }
  if (spriteAdjacentPosition(sprite, -1, 0) === `wall`) {
    choiceArray.splice(choiceArray.indexOf(2), 1);
  }
  if (spriteAdjacentPosition(sprite, 1, 0) === `wall`) {
    choiceArray.splice(choiceArray.indexOf(3), 1);
  }
  //set switch options from available paths
  let randomChoice = Math.floor(Math.random() * choiceArray.length);
  switch (choiceArray[randomChoice]) {
    case 0:
      if (spriteAdjacentPosition(sprite, 0, -1) === `wall`) {
        return;
      } else {
        sprite.style.gridRowStart = parseInt(sprite.style.gridRowStart) - 1;
        break;
      }
      break;
    case 1:
      if (spriteAdjacentPosition(sprite, 0, 1) === `wall`) {
        return;
      } else {
        sprite.style.gridRowStart = parseInt(sprite.style.gridRowStart) + 1;
        break;
      }
      break;
    case 2:
      if (spriteAdjacentPosition(sprite, -1, 0) === `wall`) {
        return;
      } else {
        sprite.style.gridColumnStart =
          parseInt(sprite.style.gridColumnStart) - 1;
        break;
      }
      break;
    case 3:
      if (spriteAdjacentPosition(sprite, 1, 0) === `wall`) {
        return;
      } else {
        sprite.style.gridColumnStart =
          parseInt(sprite.style.gridColumnStart) + 1;
        break;
      }
      break;
    default:
      return;
  }
};

const moveFunc = (e) => {
  switch (e.key) {
    case `ArrowUp`:
      // console.log(adjacentPosition(0, -1));
      if (adjacentPosition(0, -1) === `wall`) {
        return;
      } else {
        player.style.gridRowStart = parseInt(player.style.gridRowStart) - 1;
        break;
      }
      break;
    case `ArrowDown`:
      // console.log(adjacentPosition(0, 1));
      if (adjacentPosition(0, 1) === `wall`) {
        return;
      } else {
        player.style.gridRowStart = parseInt(player.style.gridRowStart) + 1;
        break;
      }
      break;
    case `ArrowLeft`:
      // console.log(adjacentPosition(-1, 0));
      if (adjacentPosition(-1, 0) === `wall`) {
        return;
      } else {
        player.style.gridColumnStart =
          parseInt(player.style.gridColumnStart) - 1;
        break;
      }
      break;
    case `ArrowRight`:
      // console.log(adjacentPosition(1, 0));
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
  levelWinCheck();
};

const ghostAi = () => {
  // while (gameActive) {
  ghostMove(enemy);
  // }
  // alert(`ghostAI`);
};
const ghostPace = () => {
  setInterval(ghostAi, 1000);
};

ghostPace();

/*Game win/lose checking*/

const levelWinCheck = () => {
  let remainingDots = document.querySelectorAll(`.dot`);
  if (remainingDots.length === 0) {
    levelWin++;
    gameActive = false;
  }
};

const gameOver = () => {
  alert(`uh oh, you lost`);
};
/* add eventListeners here */
document.addEventListener(`keydown`, moveFunc);
// document.addEventListener(`keydown`, ghostPace);

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
// let newDiv = document.createElement(`div`);
// newDiv.setAttribute('id', `${i}_${j}`);
// // newDiv.className = 'dot';
// // newDiv.style.gridRowStart = y + 1;
// // newDiv.style.gridColumnStart = x + 1;
// console.log('new div created');
// document.querySelector(`.map`).appendChild.newDiv;
// // document.querySelector(`.map`).insertAdjacentHTML(`afterbegin`,`<div class="dot"></div>`)

// document.querySelector(`.map`).insertAdjacentHTML(`afterbegin`,`<div class="dot"></div>`)
