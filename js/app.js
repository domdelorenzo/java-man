/* define constants here */
//constant to identify player sprite with CSS class
const player = document.getElementById(`sprite`);

const initialPosition = () => {
  player.style.gridColumnStart = 2;
  player.style.gridRowStart = 2;
};
initialPosition();

/* define functions here */
//* directional functions*//

const moveFunc = (e) => {
  console.log(e.key);
  // let position = parseInt(player.style.gridRowStart);
  console.log(player.style.gridRowStart);
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
