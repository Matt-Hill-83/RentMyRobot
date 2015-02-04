RentMyRobot.Collections.Robots = Backbone.Collection.extend({
  model: RentMyRobot.Models.Robot,
  url: 'api/robots',

  getOrFetch: function (id) {
    var robot = this.get(id);

    if (!robot) {
      robot = new RentMyRobot.Models.Robot({ id: id });
      robot.fetch({
        success: function () {
          this.add(robot);
        }.bind(this)
      });
    } else {
      robot.fetch();
    }

    return robot;
  }
});

RentMyRobot.Collections.robots = new RentMyRobot.Collections.Robots
