var app = app || {};

app.singleFlower = Backbone.Model.extend({
	defaults: {
		color: "pink",
		img: "images/default.png"
	},
	
	initialize: function() {
		console.log("A model instance named " + this.get('name') + " has been created and it costs " + this.get('price'));
		
		//change all
		this.on('change', function() {
			console.log('The item ' + this.get('name') + ' has changed.'); 
		});
		
		//change price
		this.on('change:price', function() {
			console.log('The price for ' + this.get('name') + ' has changed to ' + this.get('price')); 
		});
	}
});