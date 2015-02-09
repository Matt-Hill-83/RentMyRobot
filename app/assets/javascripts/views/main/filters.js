RentMyRobot.Views.Filters = Backbone.CompositeView.extend({
  template: JST['main/filters'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render); //qqq do I need this at this conatiner level?
    this.addSlider();
    this.addCheckBoxes();
  },

  addSlider: function (robot) {
    sliderView = new RentMyRobot.Views.Slider({
      collection: RentMyRobot.Collections.robots
    });
    this.addSubview('#slider-container', sliderView); // container must be inside this template
  },

  addCheckBoxes: function (robot) {
    sliderView = new RentMyRobot.Views.CheckBoxes({
      collection: RentMyRobot.Collections.robots
    });
    this.addSubview('#check-boxes-container', sliderView); // container must be inside this template
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
