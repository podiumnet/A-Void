var canvas = document.querySelector("#gamevas");
canvas.width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
canvas.height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var ctx = canvas.getContext("2d");
var player, enemies, boosts, goal, held = 0, difficulty = 1, ticks = 0;
var screen = { x: 0, y: 0, width: canvas.width, height: canvas.height};
engn.makeDPad();
var levelSwitch = function (text, newlevel) {
  difficulty = newlevel;
  engn.keys.reset();
  setGame();
};
var renderRect = function (thing) {
  ctx.fillStyle = thing.color;
  ctx.fillRect(thing.x, thing.y, thing.width, thing.height);
};
var renderCircle = function (thing) {
  ctx.fillStyle = thing.color;
  ctx.beginPath();
  ctx.ellipse(thing.x - thing.width / 2, thing.y - thing.height / 2,
    thing.width / 2, thing.height / 2, 0, 0, Math.PI * 2);
  ctx.fill();
};
var loop = new engn.Loop(60);
setGame();
loop.onUpdate(gameUpdate).onRender(gameRender).unfreeze();
