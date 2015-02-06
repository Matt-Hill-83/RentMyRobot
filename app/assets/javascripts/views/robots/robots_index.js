RentMyRobot.Views.RobotsIndex = Backbone.View.extend({
  template: JST['robots/index'],

  className: 'robots-index', // gets assigned to $el, which is a div by default
  // tagName: 'ul', //changes the default div to a ul

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    $('body').css('background-color', 'rgb(255, 255, 255)')
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);

    // add Google Map
    map = new RentMyRobot.Views.MarkerMapShow({
      collection: RentMyRobot.Collections.robots
    });
    // this.$el.html(map.$el);
    this.$el.find('#map-canvas2').html(map.$el);
    map.render();


    var that = this;
    this.collection.each(function (robot) {
      var view = new RentMyRobot.Views.RobotIndexElement({ model: robot });
      that.$el.find('#list-of-robots').append(view.render().$el);
    });

    return this;
  }
});
