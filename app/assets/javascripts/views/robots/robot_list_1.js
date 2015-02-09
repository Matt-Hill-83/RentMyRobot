RentMyRobot.Views.RobotsList1 = Backbone.CompositeView.extend({
  template: JST['robots/robot_index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render); //qqq do I need this at this conatiner level?
  },

  addRobotItem: function (robot) {
    robotListView = new RentMyRobot.Views.RobotIndexItem({
      collection: RentMyRobot.Collections.robots
    });
    this.addSubview('#robot-item-container', robotListView); // container must be inside this template
  },

  render: function () {
    var that = this;
    this.collection.each( function (robot) {
      that.addRobotItem(robot);
    });
    var content = this.template({
      collection: RentMyRobot.Collections.robots
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
