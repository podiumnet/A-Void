var gameRender = function(){
  // Clear the canvas.
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Render the stuff on the screen.
  renderRect(player);
  renderRect(goal);
  enemies.forEach(function(enemy){renderRect(enemy);});
  boosts.forEach(function(boost){renderCircle(boost);});

  // If the player is in it's starting position, show the intro text.
  if (!(player.x > 10 || player.y > 10)) {
    ctx.textAlign = "center";
    ctx.fillStyle = "#000";
    ctx.font = "20px sans-serif";
    ctx.fillText("← Get This Guy", 104, 17);
    ctx.fillText("To This Goal →", goal.x - 80, goal.y + 15);
    ctx.font = "50px sans-serif";
    ctx.fillText("A-VOID", canvas.width / 2, canvas.height / 2 - 30);
    ctx.fillText("Level " + difficulty, canvas.width / 2, canvas.height / 2 + 30);
  }
};
