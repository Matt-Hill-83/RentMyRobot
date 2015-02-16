RentMyRobot.Views.SideBar = Backbone.CompositeView.extend({
  template: JST['main/sidebar'],
  className: 'sidebar-class row search-item-list',
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
    // I need to grab the values from the slider here and
    // push them into the dummy variables that get pulled from
    // the form and sent as serialized JSON.
    // This is a work around until I can figure out why the values that
    // I am pushing to the form in the slider view are not available.
    var strMinValueFromSlider = $('#min-price').html();
    minValueFromSlider = parseInt(strMinValueFromSlider.substr(1),10);
    this.$( "#slider_min_value" ).val(minValueFromSlider);

    var strMaxValueFromSlider = $('#max-price').html();
    maxValueFromSlider = parseInt(strMaxValueFromSlider.substr(1),10);
    this.$( "#slider_max_value" ).val(maxValueFromSlider);

    var $data = $('#filters-container').serializeJSON();
    this.collection.fetch({
      data: $data
    });
  },

  render: function () {
    var content = this.template({
      collection: RentMyRobot.Collections.robots
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
