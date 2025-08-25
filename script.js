let score = 0;

const cube = document.querySelector('#cube');
const scoreText = document.querySelector('#scoreText');

// Move the cube randomly within view
function moveCubeRandomly() {
  const x = (Math.random() - 0.5) * 2; // -1 to 1
  const y = Math.random() * 1 + 0.5;   // 0.5 to 1.5
  const z = -(Math.random() * 2 + 1);  // -1 to -3
  cube.setAttribute('position', `${x} ${y} ${z}`);
}

// On cube click
cube.addEventListener('click', () => {
  score++;
  scoreText.setAttribute('text', `value: Score: ${score};`);
  moveCubeRandomly();
});

// Move cube every few seconds even if user doesn’t click
setInterval(() => {
  moveCubeRandomly();
}, 5000); // every 5 seconds
