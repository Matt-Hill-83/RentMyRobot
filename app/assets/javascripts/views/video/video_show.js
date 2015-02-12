RentMyRobot.Views.VideoShow = Backbone.CompositeView.extend({
	template: JST['video/show'],

	initialize: function() {
	},

	// events: {
	// 	"click .modal-submit-btn": "goToMain"
	// },

	render: function() {
		var content = this.template();
		this.$el.html(content);
		return this;
	},
});
