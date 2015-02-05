RentMyRobot.Models.Robot = Backbone.Model.extend({
  urlRoot: 'api/robots',

  comments: function () {
    if (!this._comments) {
      this._comments = new RentMyRobot.Collections.Comments([], { robot: this });
    }

    return this._comments;
  },

  parse: function (response) {
    if (response.comments) {
      this.comments().set(response.comments, { parse: true });
      delete response.comments;
    }

    return response;
  }
});
