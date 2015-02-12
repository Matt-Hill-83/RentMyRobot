RentMyRobot.Views.Slider = Backbone.CompositeView.extend({
  template: JST['main/slider'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  setupSlider: function () {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
  },

  render: function () {
    var content = this.template({
      collection: RentMyRobot.Collections.robots
    });
    this.$el.html(content);
    this.setupSlider();
    return this;
  }
});
