RentMyRobot.Views.Main = Backbone.CompositeView.extend({
  template: JST['robots/main'],

  className: 'main-class', // gets assigned to $el, which is a div by default

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.addSidebar();
    this.addMap();
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
    // debugger
    // this.addSubview('#map-container', mapView);
  },
    //
    // // this.$el.html(map.$el);
    // this.$el.find('#map-canvas2').html(map.$el);
    // map.render();

  render: function () {


    var content = this.template({
      collection: RentMyRobot.Collections.robots
    } ); // grab the template

    this.$el.html(content); // stick the template content into this view's $el
    this.attachSubviews();





    // add Google Map
    map = new RentMyRobot.Views.MarkerMapShow({
      collection: RentMyRobot.Collections.robots
    });
    // this.$el.html(map.$el);
    debugger
    this.$el.find('#map-container').html(map.$el);
    map.render();

    return this;
  }
});
