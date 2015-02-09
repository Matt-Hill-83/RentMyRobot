RentMyRobot.Views.Slider = Backbone.CompositeView.extend({
  template: JST['main/slider'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render); //qqq do I need this at this conatiner level?
  },

//
// <p>
//   <label for="amount">Price range:</label>
//   <input type="text" id="amount" readonly style="border:0; color:#f6931f; font-weight:bold;">
// </p>
//
// <div id="slider-range"></div>

  render: function () {

    var content = this.template({
      collection: RentMyRobot.Collections.robots
    });
    this.$el.html(content);
    // add slider
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      // slide: function( event, ui ) {
      //   $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      // }
    });
    // this.attachSubviews();
    return this;
  }
});
