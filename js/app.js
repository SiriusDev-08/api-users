const game = document.querySelector(".game");

const createPlayer = () => {
  const player = document.createElement("img");
  player.src = "_assets/playerPiece.png";
  player.height = 75;
  player.width = 75;
  player.style.left = "50%";
  player.style.top = "50%";
  player.style.position = "absolute";
  player.style.transform = "translate(-50%, -50%)";
  game.appendChild(player);
};

function startGame() {
  createPlayer();
}
