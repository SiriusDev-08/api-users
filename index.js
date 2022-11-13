var redGamePiece, blueGamePiece, yellowGamePiece;

function startGame() {
  redGamePiece = new component(75, 75, "red", 10, 10);
  yellowGamePiece = new component(75, 75, "yellow", 50, 60);
  blueGamePiece = new component(75, 75, "blue", 10, 110);
  myGameArea.start();
  myGameTitle.start();
}

var myGameArea = {
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

function updateGameArea() {
  myGameArea.clear();
  redGamePiece.update();
  yellowGamePiece.update();
  blueGamePiece.update();
}
