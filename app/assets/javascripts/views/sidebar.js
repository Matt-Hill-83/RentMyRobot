RentMyRobot.Views.SideBar = Backbone.CompositeView.extend({
  template: JST['main/sidebar'],

  className: 'sidebar-class', // gets assigned to $el, which is a div by default

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render); //qqq do I need this at this conatiner level?
    this.render;
  },

  render: function () {
    var content = this.template(); // grab the template
    this.$el.html(content); // stick the template content into this view's $el
    debugger
    // this.attachSubviews();
    return this;
  }
});
