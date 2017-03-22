var app = app || {};

app.Router = Backbone.Router.extend({

	routes: {
		"" : "noCopy",
		"heirloomRose" : "heirloomRoseMessage",
		"rainbowRose" : "rainbowRoseMessage",
		"redRose" : "redRoseMessage"
	},

	noCopy: function(){
		$("#copy").html("");
	},

	heirloomRoseMessage: function(){
		$("#copy").html("Heirloom Roses are a great Mother's Day flower");
	},

	rainbowRoseMessage: function(){
		$("#copy").html("Find Rainbow Roses for the perfect wedding gift");
	},

	redRoseMessage: function(){
		$("#copy").html("Red Roses were created for Valentine's Day");
	}
});