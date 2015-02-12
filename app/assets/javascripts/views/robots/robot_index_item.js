RentMyRobot.Views.RobotIndexItem = Backbone.CompositeView.extend({
  // Create an attribute on this $el so that I can store the robot id
  // in the DOM.  Then when I hover on the element, I can grab the
  // robot id from the even and use it to make the right pin bounce.
  attributes: function () {
    return { 'data-robot-id': this.model.id };
  },

  template: JST['robots/robot_index_item'],
  className: 'robot-index-element-wrapper',

  events: {
    'click .btn-video': 'videoShow',
    // 'mouseleave .btn-video': 'videoKill'
  },

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  videoShow: function (event) {
    this.videoView = new RentMyRobot.Views.VideoShow({
      model: this.model
    });
    $('#video-container').html(this.videoView.render().$el);
  },

  videoKill: function (event) {
    this.videoView.remove();
    this.videoView = null;
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
