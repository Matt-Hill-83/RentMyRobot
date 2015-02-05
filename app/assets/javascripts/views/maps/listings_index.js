RentMyRobot.Views.ListingsIndex = Backbone.View.extend({
  // Initialization
  className: 'listings-index full-size',

  template: JST['listings/index'],

  initialize: function () {
    this.listenTo(this.collection, 'add remove sync', this.render);
    $(window).on('resize', this.setListingsHeight.bind(this));
  },

  setListingsHeight: function () {
    // Dynamically sized scrollable div.
    var height = this.$el.height() - this.$('.sidebar-info').innerHeight();
    this.$('.listings').outerHeight(height);
  },

  // Rendering
  render: function () {
    var content = this.template({
      listings: this.collection
    });
    this.$el.html(content);
    this.setListingsHeight();
    return this;
  },

  remove: function() {
    // Removes the listener for dynamically sizing the listings pane.
    $(window).unbind("resize.app");
    Backbone.View.prototype.remove.call(this);
  }
});
