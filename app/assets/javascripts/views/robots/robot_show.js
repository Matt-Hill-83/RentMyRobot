RentMyRobot.Views.RobotShow = Backbone.CompositeView.extend({
  className: 'clearfix',

  template: JST['robots/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },


  render: function () {
    var content = this.template({
      robot: this.model
    });
    this.$el.html(content);
    return this;
  },


});
