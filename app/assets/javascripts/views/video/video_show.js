RentMyRobot.Views.VideoShow = Backbone.CompositeView.extend({
	template: JST['video/show'],

	initialize: function() {
	},

	render: function() {
		var content = this.template({
			model: this.model
		});
		this.$el.html(content);
		return this;
	},
});
