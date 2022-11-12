var myGamePiece;

function startGame() {
  myGameArea.start();
  myGameTitle.start();
  myGamePiece = new component(30, 30, "red", 10, 120);
}

const myGameArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 400;
    this.canvas.height = 300;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
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
  ctx = myGameArea.context;
  ctx.fillStyle = color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
}
