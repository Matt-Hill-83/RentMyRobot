// GoogleMapsDemo.Router = Backbone.Router.extend({
//   initialize: function (options) {
//     this.$rootEl = $(options.rootEl);
//   },
//
//   routes: {
//     '': 'searchShow',
//     'basic': 'basicMapShow',
//     'markers': 'markerMapShow',
//     'events': 'eventsMapShow',
//     'search': 'searchShow'
//   },
//
//   basicMapShow: function () {
//     var view = new GoogleMapsDemo.Views.BasicMapShow();
//     this._swapView(view);
//   },
//
//   markerMapShow: function () {
//     var listings = new GoogleMapsDemo.Collections.Listings();
//     listings.fetch();
//     var view = new GoogleMapsDemo.Views.MarkerMapShow({
//       collection: listings
//     });
//     this._swapView(view);
//   },
//
//   eventsMapShow: function () {
//     var listings = new GoogleMapsDemo.Collections.Listings();
//     listings.fetch();
//     var view = new GoogleMapsDemo.Views.EventMapShow({
//       collection: listings
//     });
//     this._swapView(view);
//   },
//
//   searchShow: function () {
//     var listings = new GoogleMapsDemo.Collections.Listings();
//     listings.fetch();
//     var view = new GoogleMapsDemo.Views.SearchShow({
//       collection: listings
//     });
//     this._swapView(view);
//   },
//
//   _swapView: function (view) {
//     this._currentView && this._currentView.remove();
//     this._currentView = view;
//
//     // Because of how the Google Map resizes, we must insert the view's `$el`
//     // before initializing the map object. Beware of this in any views that
//     // contain a map subview.
//     this.$rootEl.html(view.$el);
//     view.render();
//   }
// });
