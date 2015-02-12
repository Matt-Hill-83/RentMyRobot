RentMyRobot.Views.Root = Backbone.CompositeView.extend({
	template: JST['root/root'],

	initialize: function() {
		this.locationSelected = false;
	},

	events: {
		// "submit form.form-search": "submitSearch",
		"click .root-banner-image": "searchByCity"
	},

	searchByCity: function(event){
		Backbone.history.navigate("main", {trigger: true});
	},

	render: function() {
		var content = this.template();
		this.$el.html(content);
		// this.addNavbar();

		return this;
	},

	addNavbar: function() {
		var navbarView = new ScareBnb.Views.RootNavbar();
		this.addSubview(".navbar-vw", navbarView);
	},

});
