RentMyRobot.Views.RobotIndexItem = Backbone.CompositeView.extend({
  template: JST['robots/robot_item_1'],
  tagName: 'li',

  // className: 'sidebar-class', // gets assigned to $el, which is a div by default

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render); //qqq do I need this at this conatiner level?
  },

  render: function () {
    var content = this.template({
      collection: RentMyRobot.Collections.robots
    });
    debugger
    this.$el.html(content);
    return this;
  }
});
