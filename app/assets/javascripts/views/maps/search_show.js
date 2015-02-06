RentMyRobot.Views.SearchShow = Backbone.View.extend({
  // Initialization
  template: JST['search/show'],

  className: 'full-size',

  initialize: function () {
    this.listingsIndex = new RentMyRobot.Views.ListingsIndex({
      collection: this.collection
    });




    //uncomment this --------
    // this.mapView = new RentMyRobot.Views.EventMapShow({
    RentMyRobot.Collections.robots.fetch();
    //qqq how do I get this to happen after the fetch is complete?
    this.mapView = new RentMyRobot.Views.MarkerMapShow({
      collection: RentMyRobot.Collections.robots //qqq do I need to do a fetch here?
      // collection: this.collection
    });
    //uncomment this --------
  },

  // events: {
  //   'click a.remove-listing': 'destroyListing',
  //   'click a.listing-name': 'panToListing',
  //   'mouseenter a.listing-name': 'startBounce',
  //   'mouseleave a.listing-name': 'stopBounce'
  // },
  //
  // // Event handlers
  // startBounce: function (event) {
  //   var listingId = $(event.currentTarget).data('listing-id');
  //   this.mapView.startBounce(listingId);
  // },
  //
  // stopBounce: function (event) {
  //   var listingId = $(event.currentTarget).data('listing-id');
  //   this.mapView.stopBounce(listingId);
  // },
  //
  // destroyListing: function (event) {
  //   var listingId = $(event.currentTarget).data('listing-id');
  //   var listing = this.collection.get(listingId);
  //   listing.destroy();
  // },
  //
  // panToListing: function (event) {
  //   var listingId = $(event.currentTarget).data('listing-id');
  //   var marker = this.mapView._markers[listingId];
  //   this.mapView._map.panTo(marker.getPosition());
  // },

  render: function () {
    // Because we render the `mapView` here, we MUST NOT re-render this view.
    var content = this.template();
    this.$el.html(content);
    this.$('.sidebar').html(this.listingsIndex.render().$el);
    this.$('.map').html(this.mapView.$el);
    this.mapView.render();
    return this;
  },

  remove: function () {
    Backbone.View.prototype.remove.call(this);
    this.mapView.remove();
    this.listingsIndex.remove();
  }
});
