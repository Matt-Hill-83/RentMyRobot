// RentMyRobot.Views.RobotIndexElement = Backbone.CompositeView.extend({
//   className: 'clearfix',
//
//   template: JST['robots/index_element'],
//   tagName: 'li',
//
//   initialize: function () {
//     this.listenTo(this.model, 'sync', this.render);
//   },
//
//   render: function () {
//     if (!this.model.get('name')){ //qqq why am I checking for the name?
//       return this;
//     }
//
//     var content = this.template({
//       robot: this.model
//     });
//
//     this.$el.html(content);
//
//       return this;
//   },
//
//
// });
