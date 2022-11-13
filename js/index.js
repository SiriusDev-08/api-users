let redGamePiece, blueGamePiece, yellowGamePiece;
let playerPiece;

function startGame() {
  redGamePiece = new component(75, 75, "red", 50, 10);
  yellowGamePiece = new component(75, 75, "yellow", 250, 60);
  blueGamePiece = new component(75, 75, "blue", 450, 110);
  playerPiece = new spriteComponent(75, 75, "green", 50, 10);
  myGameArea.start();
  /* mySpritePlayer.start(); */
  myGameTitle.start();
}

const myGameArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 600;
    this.canvas.height = 500;
    this.canvas.x = 10000;
    this.canvas.y = 100;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

const myGameTitle = {
  title: document.createElement("h1"),
  start: function () {
    this.title.innerHTML = "River Raid";
    this.title.height = 100;
    this.title.width = 800;
    document.body.insertBefore(this.title, document.body.childNodes[0]);
    this.title.childNodes[0].style.textAlign = "center";
    this.title.childNodes[0].style.fontSize = "50px";
    this.title.childNodes[0].style.fontFamily = "Arial";
    this.title.childNodes[0].style.color = "white";
  },
};

const mySpritePlayer = {
  img: document.createElement("img"),
  start: function () {
    this.img.src = "_assets/playerPiece.png";
    this.img.height = 75;
    this.img.width = 75;
    document.body.insertBefore(this.img, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.update = function () {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
}

function spriteComponent(width, height, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  // this create element with img tag
  this.img = document.createElement("img");
  this.img.src = "_assets/playerPiece.png";
  this.img.height = 75;
  this.img.width = 75;
  document.body.insertBefore(this.img, document.body.childNodes[0]);
  // this update the player piece
  this.update = function () {
    ctx = myGameArea.context;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
}

function updateGameArea() {
  myGameArea.clear();
  redGamePiece.update();
  yellowGamePiece.update();
  blueGamePiece.update();
  playerPiece.update();
}
