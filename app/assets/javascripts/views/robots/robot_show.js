RentMyRobot.Views.RobotShow = Backbone.CompositeView.extend({
  className: 'clearfix',

  template: JST['robots/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    if (!this.model.get('name')){
      return this;
    }
    var content = this.template({
      robot: this.model
    });

    this.$el.html(content);
    // add nested comments
    if (this.model.comments()){
        var that = this;
        this.model.comments().each(function (comment) {
          var view = new RentMyRobot.Views.CommentShow({ model: comment });
          that.$el.find('#test-ul').append(view.render().$el);
        });
     }
    return this;
  },
});
