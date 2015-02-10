RentMyRobot.Views.Main = Backbone.CompositeView.extend({
  template: JST['robots/main'],

  className: 'main-class',
  id: 'main-div',

  events: {
    // 'click a.remove-listing': 'destroyListing',
    'click a.listing-name': 'panToListing',
    'mouseenter div.robot-index-element-div': 'startBounce',
    'mouseleave a.listing-name': 'stopBounce'
  },


  initialize: function () {
    // this.listenTo(this.collection, 'sync', this.render);
    this.addSidebar();
  },


  startBounce: function (event) {
    console.log('test');
    this.mapView.startBounce(event);
  },

  addSidebar: function () {
    var sideBarView = new RentMyRobot.Views.SideBar({
      collection: RentMyRobot.Collections.robots
    });
    this.addSubview('#sidebar-container', sideBarView);
  },

  addMap: function () {
    // mapView = new RentMyRobot.Views.MarkerMapShow({
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
