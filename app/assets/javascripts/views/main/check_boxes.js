RentMyRobot.Views.CheckBoxes = Backbone.CompositeView.extend({
  template: JST['main/check_boxes'],
  className: 'checkBoxesInnerWrapper',

  initialize: function () {
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
