RentMyRobot.Views.RobotShow = Backbone.CompositeView.extend({
  className: 'clearfix',

  template: JST['robots/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },


  render: function () {
    if (!this.model.get('image_url')){
      return this;
    }
      var content = this.template({
        robot: this.model
      });
      this.$el.html(content);

      // add nested comments
      var that = this;
      this.collection.each(function (robot) {
        var view = new RentMyRobot.Views.RobotComment({ model: robot });
        that.$el.append(view.render().$el);
      });

      return this;
  },


});
