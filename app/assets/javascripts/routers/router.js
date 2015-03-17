RentMyRobot.Routers.Router = Backbone.Router.extend({
  initialize: function() {
    this.$rootEl = $('#main');
  },

  routes: {
    '':'showRoot',
    'main': 'main',
  },

  showRoot: function(){
    this._rootView = new RentMyRobot.Views.Root({});
    this._swapView(this._rootView);
  },

  main: function () {
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    RentMyRobot.Collections.robots.fetch();
    var view = new RentMyRobot.Views.Main({
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
    this._currentView && this._currentView.remove();
    this._currentView = view;

    // Because of how the Google Map resizes, we must insert the view's `$el`
    // before initializing the map object. Beware of this in any views that
    // contain a map subview.
    this.$rootEl.html(view.$el);
    view.render();
  }
});
