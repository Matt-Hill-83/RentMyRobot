RentMyRobot.Views.Root = Backbone.CompositeView.extend({
	template: JST['root/root'],

	initialize: function() {
	},

	events: {
		"click .root-banner-image": "goToMain"
	},

	goToMain: function(event){
		Backbone.history.navigate("main", {trigger: true});
	},

	render: function() {
		var content = this.template();
		this.$el.html(content);
		return this;
	},
});
