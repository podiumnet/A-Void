var canvas = document.querySelector("#gamevas");
canvas.width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
canvas.height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var ctx = canvas.getContext("2d");
var player, enemies, goal, held = 0, difficulty = 1, ticks = 0;
var screen = { x: 0, y: 0, width: canvas.width, height: canvas.height};
engn.makeDPad();
var levelSwitch = function (text, newlevel) {
  difficulty = newlevel;
  engn.keys.reset();
  setGame();
};
var renderThing = function (thing) {
  ctx.fillStyle = thing.color;
  ctx.fillRect(thing.x, thing.y, thing.width, thing.height);
};
var loop = new engn.Loop(60);
setGame();
loop.onUpdate(gameUpdate).onRender(gameRender).unfreeze();
