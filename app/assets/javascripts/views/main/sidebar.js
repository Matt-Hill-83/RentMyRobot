RentMyRobot.Views.SideBar = Backbone.CompositeView.extend({
  template: JST['main/sidebar'],

  className: 'sidebar-class', // gets assigned to $el, which is a div by default

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render); //qqq do I need this at this conatiner level?
    this.addRobotsIndex();
  },


  addRobotsIndex: function () {
      robotListView = new RentMyRobot.Views.RobotsList1({
      collection: RentMyRobot.Collections.robots

      // collection: this.collection // qqq should I define the collection explicitly here?
    });
    this.addSubview('#robot-list-container', robotListView);
  },

  render: function () {
    var content = this.template({
      collection: RentMyRobot.Collections.robots
    }); // grab the template
    this.$el.html(content); // stick the template content into this view's $el
    this.attachSubviews();
    return this;
  }
});
