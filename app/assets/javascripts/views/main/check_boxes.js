RentMyRobot.Views.CheckBoxes = Backbone.CompositeView.extend({
  template: JST['main/check_boxes'],

  initialize: function () {
    // this.listenTo(this.collection, 'sync', this.render);
    this.render;
  },

  render: function () {
    var content = this.template({
      collection: RentMyRobot.Collections.robots
    });
    this.$el.html(content);
    return this;
  }
});