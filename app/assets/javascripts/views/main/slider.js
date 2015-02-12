RentMyRobot.Views.Slider = Backbone.CompositeView.extend({
  template: JST['main/slider'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.priceRange = [0, 1000];
  },

  initializePriceRange: function () {
    this.$( "#min-price" ).html( '$' + this.priceRange[0]);  // fixme need to reorder these renders
    this.$( "#max-price" ).html( '$' + this.priceRange[1]);  // fixme need to reorder these renders
  },

  setupSlider: function () {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 1000,
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
    this.collection.fetch({
      data: { min_price: ui.values[0], max_price: ui.values[1] }
    });
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
