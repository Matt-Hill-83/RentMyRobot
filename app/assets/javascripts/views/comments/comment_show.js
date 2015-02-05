RentMyRobot.Views.CommentShow = Backbone.CompositeView.extend({
  className: 'clearfix',
  template: JST['comments/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },


  render: function () {
    if (!this.model.get('title')){
      return this;
    }
      var content = this.template({
        robot: this.model
      });

      this.$el.html(content);

      return this;
  },


});
