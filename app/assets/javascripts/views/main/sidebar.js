RentMyRobot.Views.SideBar = Backbone.CompositeView.extend({
  template: JST['main/sidebar'],

  className: 'sidebar-class row search-item-list', // gets assigned to $el, which is a div by default

  events: {
    "change form": "searchRobots"
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

  render: function () {
    var content = this.template({
      collection: RentMyRobot.Collections.robots
    }); // grab the template
    this.$el.html(content); // stick the template content into this view's $el
    this.attachSubviews();
    return this;
  }
});


// give ids to all relevant fields
// set up listeners to ids
// function (event) {
//  var $data = $(event.currentTarget).serializeJSON();

// }
