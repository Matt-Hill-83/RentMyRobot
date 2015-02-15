RentMyRobot.Views.RobotList = Backbone.CompositeView.extend({
  template: JST['robots/robot_index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.collection.each( function (robot) {
      that.addRobotItem(robot);
    });
    this.listenTo(this.collection, 'add', this.addRobotItem);
    this.listenTo(this.collection, 'remove', this.removeRobotItem);
  },

  addRobotItem: function (robot) {
    robotListView = new RentMyRobot.Views.RobotIndexItem({
      collection: RentMyRobot.Collections.robots,
      model: robot
    });
    this.addSubview('#robot-item-container', robotListView);
  },

  removeRobotItem: function (robot) {
    var subview = _(this.subviews('#robot-item-container')).find(function (subview) {
      return subview.model === robot;
    })
    this.removeSubview('#robot-item-container', subview);
  },

  render: function () {
    var that = this;
    var content = this.template({
      collection: RentMyRobot.Collections.robots
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }

});
