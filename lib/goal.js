var Goal = function () {
  this.x = canvas.width - 20;
  this.y = canvas.height - 20;
};
Goal.prototype = {
  width: 20,
  height: 20,
  color: "#00f",
  collision: function (obj) {
    if (obj instanceof Player)
      levelSwitch(difficulty + 1);
  },
  render: 'rect',
};
Goal.genAmount = function () {
  return 1;
};
inserts.push(Goal);
