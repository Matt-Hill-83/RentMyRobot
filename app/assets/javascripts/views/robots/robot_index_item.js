RentMyRobot.Views.RobotIndexItem = Backbone.CompositeView.extend({
  // Create an attribute on this $el so that I can store the robot id
  // in the DOM.  Then when I hover on the element, I can grab the
  // robot id from the event and use it to make the right pin bounce.
  attributes: function () {
    return { 'data-robot-id': this.model.id };
  },

  template: JST['robots/robot_index_item'],
  className: 'robot-index-element-wrapper',

  events: {
    'click .cancel-modal': 'close',

    'click .robot-index-image': 'robotShow',
    'click .main-show-div': 'showViewKill'
    // 'mouseleave .main-show-div': 'showViewKill'
  },

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  robotShow: function (event) {
    this.showView = new RentMyRobot.Views.RobotShow({
      model: this.model
    });
    $('#robot-show-container').html(this.showView.render().$el);
  },

  showViewKill: function (event) { // todo not implemented
    debugger
    console.log('test');
    this.showView.remove();
    this.showView = null;
  },



  render: function () {
    var content = this.template({
      collection: this.collection,
      robot: this.model
    });

    this.$el.html(content);
    return this;
  }
});
