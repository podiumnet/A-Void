var Player = function () {
  this.x = 0;
  this.y = 0;
  this.speed = 5.5;
  this.direction = 0;
};
Player.prototype = {
  color: "#0f0",
  width: 20,
  height: 20,
  update: function () {
    if (this.wearoff === ticks) this.speed = 5.5;

    // Add key-based player movement.
    if (engn.keys.right) this.direction = 1;
    if (engn.keys.left) this.direction = 2;
    if (engn.keys.down) this.direction = 3;
    if (engn.keys.up) this.direction = 4;
    switch(this.direction) {
      case 1:
        this.x += this.speed;
        break;
      case 2:
        this.x -= this.speed;
        break;
      case 3:
        this.y += this.speed;
        break;
      case 4:
        player.y -= this.speed;
    }
  },
  trap: true,
  render: 'rect'
};
