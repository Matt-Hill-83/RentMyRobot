RentMyRobot.Views.Filters = Backbone.CompositeView.extend({
  template: JST['main/filters'],
  className: 'filtersInnerWrapper',

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.addSlider();
    this.addCheckBoxes();
  },

  addSlider: function (robot) {
    sliderView = new RentMyRobot.Views.Slider({
      collection: RentMyRobot.Collections.robots
    });
    this.addSubview('#slider-container', sliderView);
  },

  addCheckBoxes: function (robot) {
    sliderView = new RentMyRobot.Views.CheckBoxes({
      collection: RentMyRobot.Collections.robots
    });
    this.addSubview('#check-boxes-container', sliderView);
  },

  render: function () {
    var content = this.template({
      collection: RentMyRobot.Collections.robots
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
