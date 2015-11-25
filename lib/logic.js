var setGame = function () {
  objects = [];
  objects.push(new Player());
  for (var i = 0; i < (canvas.width * canvas.height / 200000) + difficulty / 2; i++) {
    objects.push(new Enemy());
  }
  objects.push(new Goal());
};
var gameUpdate = function(){
  ticks++;
  objects.forEach(function(obj) {
    if (obj.update) obj.update();
    if (obj.collision) objects.forEach(function(other) {
        if (engn.checkIntersection(obj, other)) obj.collision(other);
    });
    if (obj.trap) engn.trap(obj, screen);
  });
};
