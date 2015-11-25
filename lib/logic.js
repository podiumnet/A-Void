var inserts = [];
var setGame = function () {
  objects = [];
  inserts.forEach(function(thing) {
    for (var i = 0; i < thing.genAmount(); i++) {
      objects.push(new thing());
    }
  });
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
