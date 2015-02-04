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
    'robots/:id': 'robotShow'
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

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
