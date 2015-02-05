GoogleMapsDemo.Collections.Listings = Backbone.Collection.extend({
  model: GoogleMapsDemo.Models.Listing,

  url: 'api/listings/search'
});
