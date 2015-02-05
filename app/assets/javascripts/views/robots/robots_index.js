RentMyRobot.Views.RobotsIndex = Backbone.View.extend({
  template: JST['robots/index'],

  className: 'robots-index',

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    $('body').css('background-color', 'rgb(255, 255, 255)')
  },

  tagName: 'ul',
  render: function () {
    var content = this.template();
    this.$el.html(content);

    var that = this;
    this.collection.each(function (robot) {
      var view = new RentMyRobot.Views.RobotIndexElement({ model: robot });
      that.$el.append(view.render().$el);
    });
    return this;
  }
});
