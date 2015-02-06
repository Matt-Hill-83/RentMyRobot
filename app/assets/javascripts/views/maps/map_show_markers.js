RentMyRobot.Views.MarkerMapShow = Backbone.View.extend({
  // Initialization
  attributes: {
    id: "map-canvas"
  },

  initialize: function () {
    this._markers = {};
    this.listenTo(this.collection, 'add remove sync', this.render); //qqq test

    // this.listenTo(this.collection, 'add', this.addMarker);
    // this.listenTo(this.collection, 'remove', this.removeMarker);
  },

  render: function () {
    var mapOptions = {
      center: { lat: 37.7833, lng: -122.4167},
      zoom: 12
    };

    this._map = new google.maps.Map(this.el, mapOptions);

    this.collection.each(this.addMarker.bind(this));
  },

  // Event handlers
  addMarker: function (robot) {
    if (this._markers[robot.id]) { return };
    var view = this;

    var latLng = new google.maps.LatLng(
      robot.get('lat'),
      robot.get('lng')
    );

    var marker = new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: latLng,
      map: this._map,
      title: robot.get('name')
    });

    google.maps.event.addListener(marker, 'click', function (event) {
      view.showMarkerInfo(event, marker);
    });

    this._markers[robot.id] = marker;
  },

  removeMarker: function (robot) {
    var marker = this._markers[robot.id];
    marker.setMap(null);
    delete this._markers[robot.id];
  },

  showMarkerInfo: function (event, marker) {
    // This event will be triggered when a marker is clicked. Right now it
    // simply opens an info window with the title of the marker. However, you
    // could get fancier if you wanted (maybe use a template for the content of
    // the window?)

    var infoWindow = new google.maps.InfoWindow({
      content: marker.title
    });

    infoWindow.open(this._map, marker);
  }
});
