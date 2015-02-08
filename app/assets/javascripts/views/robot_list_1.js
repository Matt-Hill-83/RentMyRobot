RentMyRobot.Views.RobotsList1 = Backbone.CompositeView.extend({
  template: JST['robots/robot_list_1'],

  // className: 'sidebar-class', // gets assigned to $el, which is a div by default

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render); //qqq do I need this at this conatiner level?
    // this.collection.each(this.addRobotItem.bind(this));
  },


  addRobotItem: function (robot) {
    robotListView = new RentMyRobot.Views.RobotIndexItem({
    collection: RentMyRobot.Collections.robots

    });
    this.addSubview('#robot-list', robotListView);
  },

  render: function () {
    var that = this;
    this.collection.each( function (robot) {
      console.log(robot);
      that.addRobotItem(robot);
    });
    var content = this.template({
      collection: RentMyRobot.Collections.robots
    }); // grab the template
    this.$el.html(content); // stick the template content into this view's $el
    this.attachSubviews();
    
    return this;
  }
});
