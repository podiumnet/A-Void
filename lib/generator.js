var setGame = function () {
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
      x: Math.floor(100 + Math.random() * (canvas.width - 200)),
      y: Math.floor(100 + Math.random() * (canvas.height - 200)),
      width: Math.floor(15 + Math.random() * 40),
      height: Math.floor(15 + Math.random() * 40),
      color: 'rgba(' + Math.floor(20 + Math.random() * 230) + ',' + Math.floor(5 + Math.random() * 100) + ',' + Math.floor(5 + Math.random() * 150) + ', 0.8)',
      speed: difficulty / 7 + 1.8 + Math.floor(Math.random() * 2.5),
      move: Math.floor(Math.random() * 7),
      dissapear: Math.random() > 0.8,
      dirx: false,
      diry: true
    });
  }
  boosts = [];
  for (i = 0; i < (canvas.width * canvas.height / 200000) - difficulty / 10; i++) {
    boosts.push({
      x: Math.floor(100 + Math.random() * (canvas.width - 200)),
      y: Math.floor(100 + Math.random() * (canvas.height - 200)),
      width: 15,
      height: 15,
      color: 'rgba(' + Math.floor(20 + Math.random() * 230) + ',' + Math.floor(5 + Math.random() * 100) + ',' + Math.floor(5 + Math.random() * 150) + ', 0.5)',
      type: Math.random() > 0.5 ? 1 : 0
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
