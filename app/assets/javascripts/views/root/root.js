RentMyRobot.Views.Root = Backbone.CompositeView.extend({
	template: JST['root/root'],

	initialize: function() {
	},

	events: {
		'click button#glogin-root': 'guestLogIn',
		'click .root-small-image-container': 'guestLogIn',
		'click button#login-root': 'goToMain'
		// 'click #image-overlay-txt': 'guestLogIn'
	},

	guestLogIn: function(event){
		event.preventDefault();
		console.log('test');

		$('#sign-in-email').val('bfuller@robitx.com');
		$('#sign-in-password').val('123456');
		setTimeout(function(){
			$('#login-root').click();
		}, 1500);
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
