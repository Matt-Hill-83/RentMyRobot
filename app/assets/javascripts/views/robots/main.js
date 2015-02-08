RentMyRobot.Views.Main = Backbone.CompositeView.extend({
  template: JST['robots/main'],

  className: 'main-class', // gets assigned to $el, which is a div by default

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.addSidebar();
  },

  //
  // addTest: function () {
  //   testView = new RentMyRobot.Views.TestView({
  //     collection: RentMyRobot.Collections.robots
  //     // mycontent: 'Zippy Dippy Doo!'
  //   });
  //   this.addSubview('#sidebar-container', testView);
  // },

  addSidebar: function () {
    sideBarView = new RentMyRobot.Views.SideBar({
      collection: RentMyRobot.Collections.robots
    });
    this.addSubview('sidebar-container', sideBarView);
  },


  render: function () {
    debugger
    var content = this.template({
      collection: RentMyRobot.Collections.robots
    } ); // grab the template
    
    this.$el.html(content); // stick the template content into this view's $el
    this.attachSubviews();
    return this;
  }
});
