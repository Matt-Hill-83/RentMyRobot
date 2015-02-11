RentMyRobot.Views.RobotShow = Backbone.CompositeView.extend({
  className: 'clearfix',

  template: JST['robots/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    if (!this.model.get('name')){ //qqq why am I checking for the name?
      return this;
    }
    var content = this.template({
      robot: this.model
    });

    this.$el.html(content);

    if (this.model.comments()){
        // add nested comments
        var that = this;
        this.model.comments().each(function (comment) {
          var view = new RentMyRobot.Views.CommentShow({ model: comment });
          that.$el.find('#test-ul').append(view.render().$el);
        });
     }

    // if (this.model.comments()){
    //     // var view = new RentMyRobot.Views.CommentShow({ model: this.model.comments().models[1] });
    //     var view = new RentMyRobot.Views.CommentShow({ model: this.model.comments().models[1] });
    //     this.$el.append(view.render().$el);
    //  }
    return this;
  },
});
