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

    $( "#slider-range" ).slider();

    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
//
// <p>
//   <label for="amount">Price range:</label>
//   <input type="text" id="amount" readonly style="border:0; color:#f6931f; font-weight:bold;">
// </p>
//
// <div id="slider-range"></div>





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
