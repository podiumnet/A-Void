var renderRect = function (thing) {
  ctx.fillStyle = thing.color;
  ctx.fillRect(thing.x, thing.y, thing.width, thing.height);
};
var renderCircle = function (thing) {
  ctx.fillStyle = thing.color;
  ctx.beginPath();
  ctx.ellipse(thing.x + thing.width / 2, thing.y + thing.height / 2,
    thing.width / 2, thing.height / 2, 0, 0, Math.PI * 2);
  ctx.fill();
};
var gameRender = function(){
  // Clear the canvas.
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Render the stuff on the screen.
  objects.forEach(function(obj){
    if (obj.render === 'rect') renderRect(obj);
    else if (object.render === 'circle') renderCircle(obj);
  });

  // If the player is in it's starting position, show the intro text.
  if (!(objects[0].x > 10 || objects[0].y > 10)) {
    ctx.textAlign = "center";
    ctx.fillStyle = "#000";
    ctx.font = "20px sans-serif";
    ctx.fillText("← Move This Guy", 104, 17);
    ctx.fillText("To This Goal →", canvas.width - 100, canvas.height - 5);
    ctx.font = "50px sans-serif";
    ctx.fillText("A-VOID", canvas.width / 2, canvas.height / 2 - 30);
    ctx.fillText("Level " + difficulty, canvas.width / 2,
      canvas.height / 2 + 30);
  }
};
