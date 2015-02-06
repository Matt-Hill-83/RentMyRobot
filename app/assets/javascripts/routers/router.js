RentMyRobot.Routers.Router = Backbone.Router.extend({
  initialize: function() {
    this.$rootEl = $('#main');
  },

  routes: {
    '': 'robotsIndex',
    'robots/:id': 'robotShow',
    'basic': 'basicMapShow',
    'markers': 'markerMapShow',
    'events': 'eventsMapShow',
    'search': 'searchShow'
  },

  robotsIndex: function () {
    RentMyRobot.Collections.robots.fetch();
    var view = new RentMyRobot.Views.RobotsIndex({
      collection: RentMyRobot.Collections.robots
    });

    this._swapView(view);
  },

  robotShow: function (id) {
    var robot = RentMyRobot.Collections.robots.getOrFetch(id);
    var view = new RentMyRobot.Views.RobotShow({
      model: robot
    });

    this._swapView(view);
  },

  ////////////////new stuff

  basicMapShow: function () {
    var view = new RentMyRobot.Views.BasicMapShow();
    this._swapView(view);
  },

  markerMapShow: function () {
    // RentMyRobot.Collections.robots.fetch(); //qqq do I need this?

    var view = new RentMyRobot.Views.MarkerMapShow({
      collection: RentMyRobot.Collections.robots
    });
    this._swapView(view);
  },

  searchShow: function () {
    // var listings = new RentMyRobot.Collections.Listings();
    // listings.fetch();
    RentMyRobot.Collections.robots.fetch();

    var view = new RentMyRobot.Views.SearchShow({
      collection: RentMyRobot.Collections.robots //qqq do I need to do a fetch here?
    });
    this._swapView(view);
  },
  //
  // eventsMapShow: function () {
  //   var listings = new RentMyRobot.Collections.Listings();
  //   listings.fetch();
  //   var view = new RentMyRobot.Views.EventMapShow({
  //     collection: listings
  //   });
  //   this._swapView(view);
  // },



  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;

    // Because of how the Google Map resizes, we must insert the view's `$el`
    // before initializing the map object. Beware of this in any views that
    // contain a map subview.
    this.$rootEl.html(view.$el);
    view.render();
  }
});
