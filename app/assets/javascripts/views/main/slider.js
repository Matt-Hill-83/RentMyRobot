RentMyRobot.Views.Slider = Backbone.CompositeView.extend({
  template: JST['main/slider'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.priceRange = [1000, 2000];
  },

  initializePriceRange: function () {
    this.$( "#min-price" ).html( '$' + this.priceRange[0]);  // fixme need to reorder these renders
    this.$( "#max-price" ).html( '$' + this.priceRange[1]);  // fixme need to reorder these renders
  },

  setupSlider: function () {
    $( "#slider-range" ).slider({
      range: true,
      min: 1000,
      max: 2000,
      values: this.priceRange,
      slide: this.updatePriceRange.bind(this),
      stop: this.fetchFilteredCollection.bind(this)
    });
  },

  updatePriceRange: function (event, ui) {
    var priceRange = ui.values;
    this.$( "#min-price" ).html( '$' + ui.values[0]);
    this.$( "#max-price" ).html( '$' + ui.values[1]);
  },

  fetchFilteredCollection: function (event, ui) {
    this.priceRange = ui.values;
    // Set slider values to dummy inputs in form so that they will trigger a form change
    // event and get set to the robot controller as the data in the fetch and
    // be used to filter the data that is requested from the database.
    this.$( "#slider_min_value" ).val(ui.values[0]);
    this.$( "#slider_max_value" ).val(ui.values[1]);
    $("#filters-container").change();
  },

  render: function () {
    var content = this.template({
      collection: RentMyRobot.Collections.robots
    });
    this.$el.html(content);
    this.setupSlider();
    this.initializePriceRange();
    return this;
  }
});
