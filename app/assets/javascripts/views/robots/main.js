RentMyRobot.Views.Main = Backbone.CompositeView.extend({
  template: JST['robots/main'],

  className: 'main-class', // gets assigned to $el, which is a div by default

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'sync', this.addTest);
  },


  addTest: function () {
    testView = new RentMyRobot.Views.TestView({
      collection: RentMyRobot.Collections.robots
      // mycontent: 'Zippy Dippy Doo!'
    });
    this.addSubview('#sidebar-container', testView);
  },


  render: function () {
    var content = this.template(); // grab the template
    this.$el.html(content); // stick the template content into this view's $el
    this.attachSubviews();
    return this;
  }
});
