/* define constants here */
//constant to identify player sprite with CSS class
const player = document.querySelector(`.sprite`);

/* define functions here */

//* directional functions*//

const moveUp = () => {
  player.style.gridRowStart += 1;
};
const moveDown = () => {
  player.style.gridRowStart -= 1;
};

const moveLeft = () => {
  player.style.gridColumnStart -= 1;
};
const moveRight = () => {
  player.style.gridColumnStart += 1;
};

/* add eventListeners here */
// document.addEventListener(`keydown`,)
const log = document.getElementById('log');
function logKey(e) {
  console.log(` ${e.code}`);
}

document.addEventListener('keydown', logKey);
