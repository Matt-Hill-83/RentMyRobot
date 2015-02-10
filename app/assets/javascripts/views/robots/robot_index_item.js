RentMyRobot.Views.RobotIndexItem = Backbone.CompositeView.extend({
  attributes: function () {
    return { 'data-robot-id': this.model.id };
  },

  template: JST['robots/robot_index_item'],

  className: 'robot-index-element-div',

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      collection: this.collection,
      robot: this.model
    });

    this.$el.html(content);
    return this;
  }
});
