RentMyRobot.Routers.Router = Backbone.Router.extend({
  initialize: function() {
    // var dropDownView = new RentMyRobot.Views.DropDownView({
    //   collection: RentMyRobot.Collections.robots
    // });
    // $('#add-dropdown').append(dropDownView.render().$el);
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

  // markerMapShow: function () {
  //   var listings = new GoogleMapsDemo.Collections.Listings();
  //   listings.fetch();
  //   var view = new GoogleMapsDemo.Views.MarkerMapShow({
  //     collection: listings
  //   });
  //   this._swapView(view);
  // },
  //
  // eventsMapShow: function () {
  //   var listings = new GoogleMapsDemo.Collections.Listings();
  //   listings.fetch();
  //   var view = new GoogleMapsDemo.Views.EventMapShow({
  //     collection: listings
  //   });
  //   this._swapView(view);
  // },
  //
  // searchShow: function () {
  //   debugger
  //   var listings = new GoogleMapsDemo.Collections.Listings();
  //   listings.fetch();
  //   var view = new GoogleMapsDemo.Views.SearchShow({
  //     collection: listings
  //   });
  //   this._swapView(view);
  // },
  //


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
