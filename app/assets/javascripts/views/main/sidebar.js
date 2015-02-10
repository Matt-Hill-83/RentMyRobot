RentMyRobot.Views.SideBar = Backbone.CompositeView.extend({
  template: JST['main/sidebar'],

  className: 'sidebar-class row', // gets assigned to $el, which is a div by default

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render); //qqq do I need this at this conatiner level?
    this.addRobotsIndex();
    this.addFilters();
  },

  addRobotsIndex: function () {
    robotListView = new RentMyRobot.Views.RobotList({
      collection: RentMyRobot.Collections.robots
    });
    this.addSubview('#robot-list-container', robotListView);
  },

  addFilters: function () {
    filtersView = new RentMyRobot.Views.Filters({
      collection: RentMyRobot.Collections.robots
    });
    this.addSubview('#filters-container', filtersView);
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
