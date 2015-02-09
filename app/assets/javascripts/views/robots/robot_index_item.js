RentMyRobot.Views.RobotIndexItem = Backbone.CompositeView.extend({
  template: JST['robots/robot_index_item'],

  className: 'robot-index-element-div', // gets assigned to $el, which is a div by default

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render); //qqq do I need this at this conatiner level?
  },

  render: function () {
      // var that = this;
      // debugger
    var content = this.template({
      collection: this.collection,
      // collection: RentMyRobot.Collections.robots,
      // robot: RentMyRobot.Collections.robots.get(1) // fixme: pass in a single robot
      robot: this.model
    });

    this.$el.html(content);
    return this;
  }
});
