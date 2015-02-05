window.RentMyRobot = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {},

  initialize: function() {
    new RentMyRobot.Routers.Router
    Backbone.history.start();
  }
};
