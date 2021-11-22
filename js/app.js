/* define constants here */

//constant to identify player cell with CSS class
const player = document.getElementById(`player`);
/* ghost Class */

class Ghost {
  constructor(type) {
    this.type = type;
  }
  ghostPositionStart(x, y) {
    document.getElementById(`${this.type}`).style.gridColumnStart = x;
    document.getElementById(`${this.type}`).style.gridRowStart = y;
  }
  createGhost() {
    document
      .querySelector(`.overlay`)
      .insertAdjacentHTML(
        `beforeend`,
        `<div class="ghost" id ="${this.type}"></div>`
      );
  }

  ghostPositionCurrent() {
    document.getElementById(`${this.type}`).style.gridColumnStart = 9;
    document.getElementById(`${this.type}`).style.gridRowStart = 2;
  }
}

const red = new Ghost(`redGhost`);
red.createGhost();
red.ghostPositionStart(14, 13);

const orange = new Ghost(`orangeGhost`);
orange.createGhost();
orange.ghostPositionStart(16, 13);

const pink = new Ghost(`pinkGhost`);
pink.createGhost();
pink.ghostPositionStart(15, 13);

const turquoise = new Ghost(`turquoiseGhost`);
turquoise.createGhost();
turquoise.ghostPositionStart(13, 13);

// const enemy = document.getElementById(`ghost`);
let gameActive = true;
let levelWin = 0;

const dotArray = [
  `2_2`,
  `2_3`,
  `2_4`,
  `2_5`,
  `2_6`,
  `2_7`,
  `2_8`,
  `2_9`,
  `2_10`,
  `2_11`,
  `2_12`,
  `2_13`,
  `2_16`,
  `2_17`,
  `2_18`,
  `2_19`,
  `2_20`,
  `2_21`,
  `2_22`,
  `2_23`,
  `2_24`,
  `2_25`,
  `2_26`,
  `2_27`,
  `3_2`,
  `3_7`,
  `3_13`,
  `3_16`,
  `3_22`,
  `3_27`,
  `4_2`,
  `4_7`,
  `4_13`,
  `4_16`,
  `4_22`,
  `4_27`,
  `5_2`,
  `5_7`,
  `5_13`,
  `5_16`,
  `5_22`,
  `5_27`,
  `6_2`,
  `6_3`,
  `6_4`,
  `6_5`,
  `6_6`,
  `6_7`,
  `6_8`,
  `6_9`,
  `6_10`,
  `6_11`,
  `6_12`,
  `6_13`,
  `6_14`,
  `6_15`,
  `6_16`,
  `6_17`,
  `6_18`,
  `6_19`,
  `6_20`,
  `6_21`,
  `6_22`,
  `6_23`,
  `6_24`,
  `6_25`,
  `6_26`,
  `6_27`,
  `7_2`,
  `7_7`,
  `7_10`,
  `7_19`,
  `7_22`,
  `7_27`,
  `8_2`,
  `8_7`,
  `8_10`,
  `8_19`,
  `8_22`,
  `8_27`,
  `9_2`,
  `9_3`,
  `9_4`,
  `9_5`,
  `9_6`,
  `9_7`,
  `9_10`,
  `9_11`,
  `9_12`,
  `9_13`,
  `9_16`,
  `9_17`,
  `9_18`,
  `9_19`,
  `9_22`,
  `9_23`,
  `9_24`,
  `9_25`,
  `9_26`,
  `9_27`,
  `10_7`,
  `10_13`,
  `10_16`,
  `10_22`,
  `11_7`,
  `11_13`,
  `11_16`,
  `11_22`,
  `12_7`,
  `12_10`,
  `12_11`,
  `12_12`,
  `12_13`,
  `12_14`,
  `12_15`,
  `12_16`,
  `12_17`,
  `12_18`,
  `12_19`,
  `12_22`,
  `13_7`,
  `13_10`,
  `13_19`,
  `13_22`,
  `14_7`,
  `14_10`,
  `14_19`,
  `14_22`,
  `15_2`,
  `15_3`,
  `15_4`,
  `15_5`,
  `15_6`,
  `15_7`,
  `15_8`,
  `15_9`,
  `15_10`,
  `15_19`,
  `15_20`,
  `15_21`,
  `15_22`,
  `15_23`,
  `15_24`,
  `15_25`,
  `15_26`,
  `15_27`,
  `16_7`,
  `16_10`,
  `16_19`,
  `16_22`,
  `17_7`,
  `17_10`,
  `17_19`,
  `17_22`,
  `18_7`,
  `18_10`,
  `18_11`,
  `18_12`,
  `18_13`,
  `18_14`,
  `18_15`,
  `18_16`,
  `18_17`,
  `18_18`,
  `18_19`,
  `18_22`,
  `19_7`,
  `19_10`,
  `19_19`,
  `19_22`,
  `20_7`,
  `20_10`,
  `20_19`,
  `20_22`,
  `21_2`,
  `21_3`,
  `21_4`,
  `21_5`,
  `21_6`,
  `21_7`,
  `21_8`,
  `21_9`,
  `21_10`,
  `21_11`,
  `21_12`,
  `21_13`,
  `21_16`,
  `21_17`,
  `21_18`,
  `21_19`,
  `21_20`,
  `21_21`,
  `21_22`,
  `21_23`,
  `21_24`,
  `21_25`,
  `21_26`,
  `21_27`,
  `22_2`,
  `22_7`,
  `22_13`,
  `22_16`,
  `22_22`,
  `22_27`,
  `23_2`,
  `23_7`,
  `23_13`,
  `23_16`,
  `23_22`,
  `23_27`,
  `24_2`,
  `24_3`,
  `24_4`,
  `24_7`,
  `24_8`,
  `24_9`,
  `24_10`,
  `24_11`,
  `24_12`,
  `24_13`,
  `24_14`,
  `24_15`,
  `24_16`,
  `24_17`,
  `24_18`,
  `24_19`,
  `24_20`,
  `24_21`,
  `24_22`,
  `24_25`,
  `24_26`,
  `24_27`,
  `25_4`,
  `25_7`,
  `25_10`,
  `25_19`,
  `25_22`,
  `25_25`,
  `26_4`,
  `26_7`,
  `26_10`,
  `26_19`,
  `26_22`,
  `26_25`,
  `27_2`,
  `27_3`,
  `27_4`,
  `27_5`,
  `27_6`,
  `27_7`,
  `27_10`,
  `27_11`,
  `27_12`,
  `27_13`,
  `27_16`,
  `27_17`,
  `27_18`,
  `27_19`,
  `27_22`,
  `27_23`,
  `27_24`,
  `27_25`,
  `27_26`,
  `27_27`,
  `28_2`,
  `28_13`,
  `28_16`,
  `28_27`,
  `29_2`,
  `29_13`,
  `29_16`,
  `29_27`,
  `30_2`,
  `30_3`,
  `30_4`,
  `30_5`,
  `30_6`,
  `30_7`,
  `30_8`,
  `30_9`,
  `30_10`,
  `30_11`,
  `30_12`,
  `30_13`,
  `30_14`,
  `30_15`,
  `30_16`,
  `30_17`,
  `30_18`,
  `30_19`,
  `30_20`,
  `30_21`,
  `30_22`,
  `30_23`,
  `30_24`,
  `30_25`,
  `30_26`,
  `30_27`
];

const gateArray = [`15_1`, `15_28`];
let score = 0;
/* define functions here */
//set player initial position
const initialPosition = () => {
  player.style.gridColumnStart = 13;
  player.style.gridRowStart = 21;
};
initialPosition();

/* no longer using enemy classification*/
// const enemyPosition = () => {
//   enemy.style.gridColumnStart = 9;
//   enemy.style.gridRowStart = 2;
// };
// enemyPosition();

//retrieve any sprite position at any time
const getSpritePosition = (sprite) => {
  let x = sprite.style.gridColumnStart;
  let y = sprite.style.gridRowStart;
  return `${y}_${x}`;
};

// retrieve player position at any time
const getPosition = () => {
  let x = document.querySelector(`.player`).style.gridColumnStart;
  let y = document.querySelector(`.player`).style.gridRowStart;
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

gridMaker(32, 29);

const gateSetup = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    document.getElementById(arr[i]).setAttribute('class', 'gate');
  }
};

gateSetup(gateArray);

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
  let x = parseInt(document.querySelector(`.player`).style.gridColumnStart) + a;
  let y = parseInt(document.querySelector(`.player`).style.gridRowStart) + b;
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

const playerXCoord = () => {
  return player.style.gridColumnStart;
};
const playerYCoord = () => {
  return player.style.gridRowStart;
};

const ghostXCoord = (sprite) => {
  return sprite.style.gridColumnStart;
};
const ghostYCoord = (sprite) => {
  return sprite.style.gridRowStart;
};
const smartGhostMove = (sprite) => {
  let choiceArray = [0, 1, 2, 3];
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
  let smartChoice = 0;

  if (
    playerXCoord() < ghostXCoord(sprite) &&
    !(spriteAdjacentPosition(sprite, -1, 0) === `wall`)
  ) {
    console.log(`${sprite} left`);
    smartChoice = 2;
  } else if (
    playerXCoord() > ghostXCoord(sprite) &&
    !(spriteAdjacentPosition(sprite, 1, 0) === `wall`)
  ) {
    console.log(`${sprite} right`);
    smartChoice = 3;
  } else if (
    playerYCoord() < ghostYCoord(sprite) &&
    !(spriteAdjacentPosition(sprite, 0, -1) === `wall`)
  ) {
    console.log(`${sprite} up`);
    smartChoice = 0;
  } else if (
    playerYCoord() > ghostYCoord(sprite) &&
    !(spriteAdjacentPosition(sprite, 0, 1) === `wall`)
  ) {
    console.log(`${sprite} down`);
    smartChoice = 1;
  } else {
    console.log(`random`);
    smartChoice = Math.floor(Math.random() * choiceArray.length);
  }

  switch (smartChoice) {
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
  deathCheck();
};

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
      if (spriteAdjacentPosition(sprite, -1, 0) === `gate`) {
        sprite.style.gridColumnStart = 2;
        sprite.style.gridRowStart = 15;
      } else if (spriteAdjacentPosition(sprite, -1, 0) === `wall`) {
        return;
      } else {
        sprite.style.gridColumnStart =
          parseInt(sprite.style.gridColumnStart) - 1;
        break;
      }
      break;
    case 3:
      if (spriteAdjacentPosition(sprite, 1, 0) === `gate`) {
        sprite.style.gridColumnStart = 27;
        sprite.style.gridRowStart = 15;
      } else if (spriteAdjacentPosition(sprite, 1, 0) === `wall`) {
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
  deathCheck();
};

const moveFunc = (e) => {
  switch (e.key) {
    case `ArrowUp`:
      // console.log(adjacentPosition(0, -1));
      if (adjacentPosition(0, -1) === `wall`) {
        return;
      } else {
        player.animate(
          [{ transform: `translateY(100%)` }, { transform: `translateY(0)` }],
          {
            duration: 250,
            iterations: 1
          }
        );
        player.style.gridRowStart = parseInt(player.style.gridRowStart) - 1;
        break;
      }
      break;
    case `ArrowDown`:
      // console.log(adjacentPosition(0, 1));
      if (adjacentPosition(0, 1) === `wall`) {
        return;
      } else {
        player.animate(
          [{ transform: `translateY(-100%)` }, { transform: `translateY(0)` }],
          {
            duration: 250,
            iterations: 1
          }
        );
        player.style.gridRowStart = parseInt(player.style.gridRowStart) + 1;
        break;
      }
      break;
    case `ArrowLeft`:
      // console.log(adjacentPosition(-1, 0));
      if (adjacentPosition(-1, 0) === `gate`) {
        player.style.gridColumnStart = 27;
        player.style.gridRowStart = 15;
      } else if (adjacentPosition(-1, 0) === `wall`) {
        return;
      } else {
        player.animate(
          [{ transform: `translateX(100%)` }, { transform: `translateX(0)` }],
          {
            duration: 250,
            iterations: 1
          }
        );
        player.style.gridColumnStart =
          parseInt(player.style.gridColumnStart) - 1;
        break;
      }
      break;
    case `ArrowRight`:
      // console.log(adjacentPosition(1, 0));
      if (adjacentPosition(1, 0) === `gate`) {
        player.style.gridColumnStart = 2;
        player.style.gridRowStart = 15;
      } else if (adjacentPosition(1, 0) === `wall`) {
        return;
      } else {
        player.animate(
          [{ transform: `translateX(-100%)` }, { transform: `translateX(0)` }],
          {
            duration: 250,
            iterations: 1
          }
        );
        player.style.gridColumnStart =
          parseInt(player.style.gridColumnStart) + 1;
        break;
      }
      break;
    default:
      return;
  }
  eatDot(getPosition());
  deathCheck();
  levelWinCheck();
};

const ghostAi = () => {
  let ghostArray = document.querySelectorAll(`.ghost`);
  for (let i = 0; i < ghostArray.length; i++) {
    ghostMove(ghostArray[i]);
  }
};
const ghostPace = () => {
  setInterval(ghostAi, 500);
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

const deathCheck = () => {
  let ghostArray = document.querySelectorAll(`.ghost`);
  for (let i = 0; i < ghostArray.length; i++) {
    if (getPosition() === getSpritePosition(ghostArray[i])) {
      alert(`uh oh, you lost`);
      gameActive = false;
    }
  }
};
const gameOver = () => {
  alert(`uh oh, you lost`);
};
/* add eventListeners here */
document.addEventListener(`keydown`, moveFunc);

/* player animation */
// document.body.addEventListener(`keydown`, (event) => {
//   switch (event.key){
//     case `ArrowUp`:
//       style.top
//   }
//   let anim = player.animate(
//     { transform: `translate(${event.clientX}px, ${event.clientY}px)` },
//     { duration: 500, fill: 'forwards' }
//   );

//   anim.commitStyles();

//   //anim.persist()

//   anim.onremove = function () {
//     console.log('Animation removed');
//   };

//   console.log(anim.replaceState);
// });

playerMoveAnim = new AnimationEvent(`animationstart`, {
  animationName: moveforward,
  elapsedTime: 0,
  pseudoElement: ``
});
