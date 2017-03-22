var app = app || {};

app.singleFlowerView = Backbone.View.extend({
	
	
	
	tagName: "div",
	className: "span33",

	template: _.template($("#flowerElement").html()),

	render: function(){
		var flowerTemplate = this.template(this.model.toJSON());
		this.$el.html(flowerTemplate);
		return this;
	},
	
	
	events: {
		'mouseover' : 'addBgColor',
		'mouseout' : 'removeBgColor'
	},

	addBgColor: function(){
		this.$el.addClass("bgColorImage");
	},

	removeBgColor: function(){
		this.$el.removeClass("bgColorImage");
	}
	
});