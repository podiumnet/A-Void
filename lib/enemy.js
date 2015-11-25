var Enemy = function () {
  this.x = Math.floor(100 + Math.random() * (canvas.width - 200));
  this.y = Math.floor(100 + Math.random() * (canvas.width - 200));
  this.width = Math.floor(15 + Math.random() * 40);
  this.height = Math.floor(15 + Math.random() * 40);
  this.color = 'rgba(' + Math.floor(20 + Math.random() * 230) + ',' +
    Math.floor(5 + Math.random() * 100) + ',' +
    Math.floor(5 + Math.random() * 150) + ', 0.8)';
  this.speed = difficulty / 7 + 1.8 + Math.floor(Math.random() * 2.5);
  this.move = Math.floor(Math.random() * 7);
  this.dissapear = Math.random() > 0.8;
};
Enemy.prototype = {
  dirx: false,
  diry: true,
  collision: function (obj) {
    if (obj instanceof Player) levelSwitch("You Lose Level " + difficulty, 1);
  },
  update: function () {
    if (this.dissapear) {
      if (ticks % 200 === 0) {
        if (!this.altcolor) this.altcolor = "#eee";
        var orig = this.color;
        this.color = this.altcolor;
        this.altcolor = orig;
      }
    }

    if(this.move && (objects[0].x > 10 || objects[0].y > 10)) {
      if (this.move === 1) {
        if (ticks % 30 === 0) {
          this.dirx = Math.random() > 0.5;
          this.diry = Math.random() > 0.5;
        }
        this.x += this.dirx ? this.speed : -this.speed;
        this.y += this.diry ? this.speed : -this.speed;
      } else {
        this.x += objects[0].x > this.x ? this.speed : -this.speed;
        this.y += objects[0].y > this.y ? this.speed : -this.speed;
      }
    }
  },
  trap: true,
  render: 'rect'
};
