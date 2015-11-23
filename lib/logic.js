var gameUpdate = function(){
  ticks++;
  // Add key-based player movement.
  if (engn.keys.right) player.direction = 1;
  if (engn.keys.left) player.direction = 2;
  if (engn.keys.down) player.direction = 3;
  if (engn.keys.up) player.direction = 4;
  switch(player.direction) {
    case 1:
      player.x += player.speed;
      break;
    case 2:
      player.x -= player.speed;
      break;
    case 3:
      player.y += player.speed;
      break;
    case 4:
      player.y -= player.speed;
  }
  // Keep the player on the screen.
  engn.trap(player, screen);

  // Win the level if the player touches the goal.
  if (engn.checkIntersection(player, goal))
    levelSwitch("You Win Level " + difficulty, difficulty + 1);

  // Check for intersection with each enemy.
  var isect = false;
  enemies.forEach(function(enemy){
    // Update the intersection found status.
    isect = engn.checkIntersection(player, enemy) || isect;
    if(enemy.move && (player.x > 10 || player.y > 10)) {
      if (enemy.move === 1) {
        if (ticks % 30 === 0) {
          enemy.dirx = Math.random() > 0.5;
          enemy.diry = Math.random() > 0.5;
        }
        enemy.x += enemy.dirx ? enemy.speed : -enemy.speed;
        enemy.y += enemy.diry ? enemy.speed : -enemy.speed;
      } else if (enemy.move === 2) {
        if (!enemy.target || engn.checkIntersection(enemy, enemy.target)) {
          enemy.target = enemies[Math.floor(Math.random() * enemies.length)];
        }
        enemy.x += enemy.target.x > enemy.x ? enemy.speed : -enemy.speed;
        enemy.y += enemy.target.y > enemy.y ? enemy.speed : -enemy.speed;
      } else if (enemy.move === 3) {
        if (!enemy.target || engn.checkIntersection(enemy, enemy.target)) {
          enemy.target = boosts[Math.floor(Math.random() * enemies.length)];
        }
        enemy.x += enemy.target.x > enemy.x ? enemy.speed : -enemy.speed;
        enemy.y += enemy.target.y > enemy.y ? enemy.speed : -enemy.speed;
      } else {
        enemy.x += player.x > enemy.x ? enemy.speed : -enemy.speed;
        enemy.y += player.y > enemy.y ? enemy.speed : -enemy.speed;
      }
    }
    // Keep the player on the screen.
    engn.trap(enemy, screen);
  });

  // Lose the level if the player is touching an enemy.
  if (isect) levelSwitch("You Lose Level " + difficulty, 1);
};
