RentMyRobot.Views.RobotsIndex = Backbone.CompositeView.extend({
  template: JST['robots/robot_list_1'],

  // className: 'sidebar-class', // gets assigned to $el, which is a div by default

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render); //qqq do I need this at this conatiner level?
    collection.each(this.addRobotItem.bind(this));

  },


  addRobotItem: function () {
    robotListView = new RentMyRobot.Views.RobotIndexItem({
      collection: this.collection // qqq should I define the collection explicitly here?
    });
    this.addSubview('#robot-list', robotListView);
  },

  render: function () {
    var content = this.template({
      collection: RentMyRobot.Collections.robots
    }); // grab the template
    this.$el.html(content); // stick the template content into this view's $el
    return this;
  }
});
