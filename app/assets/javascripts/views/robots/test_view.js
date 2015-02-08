RentMyRobot.Views.TestView = Backbone.CompositeView.extend({

  className: 'clearfix',
  template: JST['robots/test'],

  initialize: function() {
    // this.listenTo(this.model, 'sync', this.render);
  },

  render: function() {
    var content = this.template({
      // collection: 'ducks'
      collection: RentMyRobot.Collections.robots
    });
    this.$el.html(content);
    return this;
  }
});
