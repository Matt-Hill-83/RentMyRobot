RentMyRobot.Views.BoardsIndex = Backbone.View.extend({
  template: JST['robots/index'],

  className: 'robots-index',

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    $('body').css('background-color', 'rgb(255, 255, 255)')
  },

  render: function () {
    var content = this.template({
      robots: this.collection
    });

    this.$el.html(content);
    return this;
  }
});
