var setGame = function () {
  held = 0;
  player = {
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    color: "#0f0",
    speed: 5.5,
    direction: 0
  };
  enemies = [];
  for (var i = 0; i < (canvas.width * canvas.height / 200000) + difficulty / 2; i++) {
    enemies.push({
      x: Math.floor(100 + Math.random() * (canvas.width - 80)),
      y: Math.floor(100 + Math.random() * (canvas.height - 80)),
      width: Math.floor(15 + Math.random() * 40),
      height: Math.floor(15 + Math.random() * 40),
      color: 'rgba(' + Math.floor(20 + Math.random() * 230) + ',' + Math.floor(5 + Math.random() * 100) + ',' + Math.floor(5 + Math.random() * 150) + ', 0.8)',
      speed: difficulty / 7 + 1.8 + Math.floor(Math.random() * 2.5),
      move: Math.floor(Math.random() * 5),
      dirx: false,
      diry: true
    });
  }
  goal = {
    x: canvas.width - 20,
    y: canvas.height - 20,
    width: 20,
    height: 20,
    color: "#00f"
  };
};
