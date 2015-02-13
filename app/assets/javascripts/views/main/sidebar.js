RentMyRobot.Views.SideBar = Backbone.CompositeView.extend({
  template: JST['main/sidebar'],

  className: 'sidebar-class row search-item-list', // gets assigned to $el, which is a div by default

  events: {
    "change #filters-container": "searchRobots"
  },

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);

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

  searchRobots: function (event) {
    event.preventDefault();
    var $data = $('#filters-container').serializeJSON();
    this.collection.fetch({
      data: $data
    });
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
