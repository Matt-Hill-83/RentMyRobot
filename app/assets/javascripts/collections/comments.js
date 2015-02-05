RentMyRobot.Collections.Comments = Backbone.Collection.extend({
  model: RentMyRobot.Models.Comment,
  url: 'api/comments',

  initialize: function (model, options) {
    this.board = options.board;
  }
});
