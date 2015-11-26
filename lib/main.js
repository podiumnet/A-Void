var canvas = document.querySelector("#gamevas");
canvas.width = Math.max(document.documentElement.clientWidth,
  window.innerWidth || 0);
canvas.height = Math.max(document.documentElement.clientHeight,
  window.innerHeight || 0);
var ctx = canvas.getContext("2d");
var difficulty = 1, ticks = 0, player;
var screen = { x: 0, y: 0, width: canvas.width, height: canvas.height};
var toload = localStorage.extras ? localStorage.extras.split("\n") : [];
engn.keys.bind(window);
engn.keys.ignore("textarea");
document.querySelector("#extras").onclick = function () {
  document.querySelector("#extrasdlg").style.display = "block";
  document.querySelector("#extrastext").value = localStorage.extras;
};
document.querySelector("#closeextras").onclick = function () {
  localStorage.extras = document.querySelector("#extrastext").value;
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
    if (xhr.responseText) eval(xhr.responseText);
    if (loaded === toload.length) startGame();
  };
  xhr.open("GET", url);
  try {
    xhr.send();
  } catch (e) {
    loaded++;
    if (loaded === toload.length) startGame();
    console.log("Failed to load Extension: " + e);
  }
});
if (!toload.length) startGame();
