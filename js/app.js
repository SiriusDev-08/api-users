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
      //div with game over text
      const gameOver = document.createElement("div");
      gameOver.id = "gameOver";
      gameOver.style.height = "100vh";
      gameOver.style.width = "100vw";
      gameOver.style.position = "absolute";
      gameOver.style.backgroundColor = "black";
      gameOver.style.display = "flex";
      gameOver.style.justifyContent = "center";
      gameOver.style.alignItems = "center";
      gameOver.style.color = "white";
      gameOver.style.fontSize = "50px";
      gameOver.innerHTML = "Game Over";
      game.appendChild(gameOver);
      //button to restart the game
      const restart = document.createElement("button");
      restart.id = "restart";
      restart.style.height = "50px";
      restart.style.width = "100px";
      restart.style.backgroundColor = "black";
      restart.style.color = "white";
      restart.style.border = "none";
      restart.style.fontSize = "20px";
      restart.innerHTML = "Restart";
      gameOver.appendChild(restart);
      restart.addEventListener("click", () => {
        location.reload();
      });
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

// destroy element when it reaches the bottom of the game div
const destroyElement = () => {
  const enemy = document.querySelector("#enemy1");
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
