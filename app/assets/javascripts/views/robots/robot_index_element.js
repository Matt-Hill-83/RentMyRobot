RentMyRobot.Views.RobotIndexElement = Backbone.CompositeView.extend({
  className: 'clearfix',

  template: JST['robots/index_element'],

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
          that.$el.append(view.render().$el);
        });
     }


      return this;
  },


});
