RentMyRobot.Views.SearchShow = Backbone.View.extend({
  // Initialization
  template: JST['search/show'],

  className: 'full-size',

  initialize: function () {
    this.mapView = new RentMyRobot.Views.EventMapShow({
      collection: this.collection
    });

    // this.listingsIndex = new GoogleMapsDemo.Views.ListingsIndex({
    //   collection: this.collection
    // });
  },

  // events: {
  //   // 'click a.remove-listing': 'destroyListing',
  //   'click a.listing-name': 'panToListing',
  //   'mouseenter a.robot-index-image': 'startBounce',
  //   'mouseleave a.listing-name': 'stopBounce'
  // },

  // Event handlers
  startBounce: function (event) {

    var robotId = $(event.currentTarget).data('robot-id');
    this.mapView.startBounce(robotId);
  },

  stopBounce: function (event) {
    var listingId = $(event.currentTarget).data('listing-id');
    this.mapView.stopBounce(listingId);
  },

  // destroyListing: function (event) {
  //   var listingId = $(event.currentTarget).data('listing-id');
  //   var listing = this.collection.get(listingId);
  //   listing.destroy();
  // },

  panToListing: function (event) {
    var listingId = $(event.currentTarget).data('listing-id');
    var marker = this.mapView._markers[listingId];
    this.mapView._map.panTo(marker.getPosition());
  },

  render: function () {
    // Because we render the `mapView` here, we MUST NOT re-render this view.
    var content = this.template();
    this.$el.html(content);
    this.$('#map').html(this.mapView.$el);
    this.mapView.render();
    return this;
  },

  remove: function () {
    Backbone.View.prototype.remove.call(this);
    this.mapView.remove();
    // this.listingsIndex.remove();
  }
});
