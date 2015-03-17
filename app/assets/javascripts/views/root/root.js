RentMyRobot.Views.Root = Backbone.CompositeView.extend({
	template: JST['root/root'],

	initialize: function() {
	},

	events: {
		'click button#glogin-root': 'guestLogIn',
		'click .root-small-image-container': 'smallImageLogIn',
		'click button#login-root': 'goToMain'
	},

	guestLogIn: function(event){
		event.preventDefault();
		console.log('test');

		$('#sign-in-email').val('bfuller@robitx.com');
		$('#sign-in-password').val('123456');
		setTimeout(function(){
			$('#login-root').click();
		}, 1000);
	},

	smallImageLogIn: function(event){
		event.preventDefault();
		console.log('test');

		$('#sign-in-email').val('bfuller@robitx.com');
		$('#sign-in-password').val('123456');
		setTimeout(function(){
			$('#login-root').click();
		}, 0);
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
