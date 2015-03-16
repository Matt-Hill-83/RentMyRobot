RentMyRobot.Views.RobotShow = Backbone.CompositeView.extend({
  className: 'robot-show-modal',

  template: JST['robots/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    'click .cancel-modal': 'close',
    // 'click .main-class': 'close', // This needs to be at a higher level scope.

  },



  close: function(){
  	$('.robot-show-modal').remove();
  	// $(window).off('keyup');
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
