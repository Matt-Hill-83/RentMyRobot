RentMyRobot.Views.Root = Backbone.CompositeView.extend({
	template: JST['root/root'],

	initialize: function() {
	},

	events: {
		'click button#glogin-root': 'guestLogIn',
		'click button#login-root': 'goToMain'
	},

	guestLogIn: function(event){
		event.preventDefault();

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
