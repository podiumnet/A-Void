var canvas = document.querySelector("#gamevas");
canvas.width = Math.max(document.documentElement.clientWidth,
  window.innerWidth || 0);
canvas.height = Math.max(document.documentElement.clientHeight,
  window.innerHeight || 0);
var ctx = canvas.getContext("2d");
var difficulty = 1, ticks = 0, player;
var screen = { x: 0, y: 0, width: canvas.width, height: canvas.height};
var toload = JSON.parse(localStorage.urls || "[]");
document.querySelector("#extras").onclick = function () {
  var load = prompt("Enter your Extra URL:");
  toload.push(load);
  localStorage.urls = JSON.stringify(toload);
  window.location.reload();
};
var levelSwitch = function (newlevel) {
  difficulty = newlevel;
  engn.keys.reset();
  setGame();
};
var startGame = function () {
  engn.makeDPad();
  var loop = new engn.Loop(60);
  setGame();
  loop.onUpdate(gameUpdate).onRender(gameRender).unfreeze();
};
var loaded = 0;
toload.forEach(function(url){
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    loaded++;
    eval(xhr.responseText);
    if (loaded === toload.length) startGame();
  };
  xhr.open("GET", url);
  xhr.send();
});
if (!toload.length) startGame();
