window.RentMyRobot = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {},

  // debugger
  initialize: function() {
    new RentMyRobot.Routers.Router
    Backbone.history.start();
  }
};
