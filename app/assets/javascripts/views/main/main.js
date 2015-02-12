RentMyRobot.Views.Main = Backbone.CompositeView.extend({
  template: JST['robots/main'],

  className: 'main-class',
  id: 'main-div',

  events: {
    'click div.robot-index-element-wrapper': 'panToListing',
    'mouseenter div.robot-index-element-wrapper': 'startBounce',
    'mouseleave div.robot-index-element-wrapper': 'stopBounce'
  },

  initialize: function () {
    this.addSidebar();
  },

  startBounce: function (event) {
    // console.log('start bounce');
    this.mapView.startBounce(event);
  },

  stopBounce: function (event) {
    // console.log('stop bounce');
    this.mapView.stopBounce(event);
  },

  addSidebar: function () {
    var sideBarView = new RentMyRobot.Views.SideBar({
      collection: RentMyRobot.Collections.robots
    });
    this.addSubview('#sidebar-container', sideBarView);
  },

  addMap: function () {
    this.mapView = new RentMyRobot.Views.SearchShow({
      collection: RentMyRobot.Collections.robots
    });
    this.$el.find('#map-container').html(this.mapView.$el);
    this.mapView.render();
  },

  render: function () {
    var content = this.template({
      collection: RentMyRobot.Collections.robots
    } );

    this.$el.html(content);
    this.attachSubviews();

    //qqq how do I put my map into a subview?
    this.addMap();

    return this;
  }
});
