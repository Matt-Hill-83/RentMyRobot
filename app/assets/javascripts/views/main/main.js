RentMyRobot.Views.Main = Backbone.CompositeView.extend({
  template: JST['robots/main'],

  className: 'main-class', // gets assigned to $el, which is a div by default

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.addSidebar();
  },

  addSidebar: function () {
    sideBarView = new RentMyRobot.Views.SideBar({
      collection: RentMyRobot.Collections.robots
    });
    this.addSubview('#sidebar-container', sideBarView);
  },

  addMap: function () {
    mapView = new RentMyRobot.Views.MarkerMapShow({
      collection: RentMyRobot.Collections.robots
    });
    // this.addSubview('#map-container', mapView.$el);
  },

  render: function () {
    var content = this.template({
      collection: RentMyRobot.Collections.robots
    } );

    this.$el.html(content);
    this.attachSubviews();

    //qqq how do I put my map into a subview?
    this.addMap();
    this.$el.find('#map-container').html(mapView.$el);
    mapView.render();

    return this;
  }
});
