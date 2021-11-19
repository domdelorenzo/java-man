/* define constants here */
//constant to identify player sprite with CSS class
const player = document.getElementById(`sprite`);

const dotArray = [`1_2`, `1_3`, `1_4`, `2_4`];

/* define functions here */
//set sprite initial position
const initialPosition = () => {
  player.style.gridColumnStart = 2;
  player.style.gridRowStart = 2;
};
initialPosition();
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

const gridMaker = (x, y) => {
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      document
        .querySelector(`.map`)
        .insertAdjacentHTML(
          `afterbegin`,
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

gridMaker(30, 30);

const layDots = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    document.getElementById(arr[i]).setAttribute('class', 'dot');
  }
};

layDots(dotArray);

//* directional functions*//

const moveFunc = (e) => {
  switch (e.key) {
    case `ArrowUp`:
      player.style.gridRowStart = parseInt(player.style.gridRowStart) - 1;
      break;
    case `ArrowDown`:
      player.style.gridRowStart = parseInt(player.style.gridRowStart) + 1;
      break;
    case `ArrowLeft`:
      player.style.gridColumnStart = parseInt(player.style.gridColumnStart) - 1;
      break;
    case `ArrowRight`:
      player.style.gridColumnStart = parseInt(player.style.gridColumnStart) + 1;
      break;
    default:
      return;
  }
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
