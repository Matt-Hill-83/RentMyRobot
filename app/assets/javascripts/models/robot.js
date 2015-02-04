RentMyRobot.Models.Robot = Backbone.Model.extend({
  urlRoot: 'api/robots',

  // lists: function () {
  //   if (!this._lists) {
  //     this._lists = new RentMyRobot.Collections.Lists([], { robot: this });
  //   }
  //
  //   return this._lists;
  // },

  // parse: function (response) {
  //   if (response.lists) {
  //     this.lists().set(response.lists, { parse: true });
  //     delete response.lists;
  //   }
  //
  //   return response;
  // }
});
