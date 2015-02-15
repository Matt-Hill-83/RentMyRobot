window.RentMyRobot = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function() {
    new RentMyRobot.Routers.Router
    Backbone.history.start();
  }
};
