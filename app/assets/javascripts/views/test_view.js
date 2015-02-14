RentMyRobot.Views.TestView = Backbone.CompositeView.extend({
  template: JST['test/test'],
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    myModel = this.collection.models[1];
    var content = this.template({
      model: myModel
    });
    this.$el.html(content);
  },

});
