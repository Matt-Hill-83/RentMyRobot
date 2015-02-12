RentMyRobot.Views.SearchShow = Backbone.View.extend({
  template: JST['search/show'],
  className: 'full-size',

  initialize: function () {
    this.mapView = new RentMyRobot.Views.EventMapShow({
      collection: this.collection
    });
  },

  startBounce: function (event) {
    var robotId = $(event.currentTarget).data('robot-id');
    this.mapView.startBounce(robotId);
  },

  stopBounce: function (event) {
    var listingId = $(event.currentTarget).data('robot-id');
    this.mapView.stopBounce(listingId);
  },

  panToListing: function (event) {
    var listingId = $(event.currentTarget).data('robot-id');
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
  }
});
