RentMyRobot.Views.Root = Backbone.CompositeView.extend({
	template: JST['root/root'],

	initialize: function() {
		this.locationSelected = false;
	},

	events: {
		"submit form.form-search": "submitSearch",
		"click .root-city": "searchByCity"
	},

	submitSearch: function(event) {
		event.preventDefault();
		if (this.handleErrors()) {
			Backbone.history.navigate("search", {trigger: true})
		}
	},

	searchByCity: function(event){
		locationSearchFilter.lat = parseFloat($(event.currentTarget).data("lat"));
		locationSearchFilter.lng = parseFloat($(event.currentTarget).data("lng"));
		debugger;
		Backbone.history.navigate("search", {trigger: true});
	},

	handleErrors: function() {
		var errors = false;

		if (!this.locationSelected) {
			toastr.error("Please enter a location");
			errors = true;
		}

		if (typeof otherSearchFilters.startDate === "undefined" ) {
			toastr.error("Please enter a starting date");
			errors = true;
		}

		if (typeof otherSearchFilters.endDate === "undefined") {
			toastr.error("Please enter an ending date");
			errors = true;
		} else if (otherSearchFilters.endDate < otherSearchFilters.startDate){
			toastr.error("Please enter a valid date range");
			errors = true;
		}

		return (errors ? false : true)

	},

	render: function() {
		var content = this.template();
		this.$el.html(content);
		this.attachSearchBox();
		this.attachDatepickers();
		this.addNavbar();

		return this;
	},

	attachDatepickers: function() {
		var that = this;
		this._datepicker = this.$('.input-daterange').datepicker({
	    startDate: "-infinity",
	    orientation: "bottom auto",
	    autoclose: true,
	    todayHighlight: true
		}).on('changeDate', that.parseDate.bind(that))
	},

	parseDate: function(ev){
		var target = ev.target.name;
		if (target === "start") {
			otherSearchFilters.startDate = ev.date;
			this.$('.root-end-date').datepicker('show')
		} else {
			otherSearchFilters.endDate = ev.date;
		}
	},

	addNavbar: function() {
		var navbarView = new ScareBnb.Views.RootNavbar();
		this.addSubview(".navbar-vw", navbarView);
	},

	attachSearchBox: function() {
		var input = this.$('#map-search');
	  var searchBox = new google.maps.places.Autocomplete(input[0]);
		var that = this;
		google.maps.event.addListener(searchBox, 'place_changed', function() {
			var bounds = this.getPlace().geometry.location;
			locationSearchFilter.lng = bounds.lng();
			locationSearchFilter.lat = bounds.lat();
			that.locationSelected = true;
		});
	}
});
