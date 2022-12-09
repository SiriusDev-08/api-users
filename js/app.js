const game = document.querySelector(".game");

const createPlayer = () => {
  const player = document.createElement("img");
  player.src = "_assets/playerPiece.png";
  player.id = "player";
  player.height = 75;
  player.width = 75;
  player.style.left = "50%";
  player.style.top = "50%";
  player.style.position = "absolute";
  player.style.transform = "translate(-50%, -50%)";
  game.appendChild(player);
  let playerLife = true;
};

//moving the player
const movePlayer = () => {
  const player = document.querySelector("#player");
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
      player.style.top = parseInt(player.style.top) - 30 + "px";
    } else if (e.key === "ArrowDown") {
      player.style.top = parseInt(player.style.top) + 30 + "px";
    } else if (e.key === "ArrowRight") {
      player.style.left = parseInt(player.style.left) + 30 + "px";
    } else if (e.key === "ArrowLeft") {
      player.style.left = parseInt(player.style.left) - 30 + "px";
    }
  });
};

const createEnemy = () => {
  let i = 0;
  const enemy = document.createElement("img");
  enemy.id = `enemy1`;
  enemy.className = "enemy";
  enemy.src = "_assets/enemy1.png";
  enemy.height = 75;
  enemy.width = 75;
  enemy.style.left = Math.floor(Math.random() * 800) + "px";
  enemy.style.top = "0%";
  enemy.style.position = "absolute";
  game.appendChild(enemy);
  i++;
  updateEnemyPosition();
};

//collision detection
//update enemy position every 1 second
const updateEnemyPosition = () => {
  const enemy = document.querySelector(`#enemy1`);
  setInterval(() => {
    enemy.style.top = parseInt(enemy.style.top) + 10 + "px";
  }, 1000);
};

const checkPlayerLife = () => {
  const enemy = document.querySelector("#enemy1");
  const player = document.querySelector("#player");
  setInterval(() => {
    if (
      parseInt(enemy.style.left) < parseInt(player.style.left) &&
      parseInt(enemy.style.left) + 75 > parseInt(player.style.left) &&
      parseInt(enemy.style.top) < parseInt(player.style.top) &&
      parseInt(enemy.style.top) + 75 > parseInt(player.style.top)
    ) {
      playerLife = false;
      enemy.remove();
      player.remove();
      alert("Game Over");
    }
  }, 1000);
};

//updating the background every 1 second
const updateBackground = () => {
  const background = document.querySelector(".game");
  setInterval(() => {
    background.style.backgroundPositionY = parseInt(
      background.style.backgroundPositionY
    )
      ? parseInt(background.style.backgroundPositionY) + 1 + "px"
      : 1 + "px";
  }, 1000);
};

// destroying elements when they are out of the game area
const destroyElement = () => {
  const enemy = document.querySelector("#enemy1");
  const player = document.querySelector("#player");
  if (parseInt(enemy.style.top) > 600) {
    enemy.remove();
  }
};

//updating the score

//start the game

const startGame = () => {
  createPlayer();
  movePlayer();
  createEnemy();
  updateEnemyPosition();
  checkPlayerLife();
  updateBackground();
  updateScore();
};

// Path: js\app.js

// Path: js\app.js
