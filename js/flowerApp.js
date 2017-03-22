var redRoses = new app.singleFlower({
    name: "Red Roses",
    price: 39.95,
    color: "Red",
    img: "images/flower1.jpg",
    link: "redRose"
});

var rainbowRoses = new app.singleFlower({
    name: "Rainbow Roses",
    price: 29.95,
    color: "orange",
    link: "rainbowRose"
});

var heirloomRoses = new app.singleFlower({
    name: "Heirloom Roses",
    price: 19.95,
    img: "images/flower2.jpg",
    link: "heirloomRose"
});

//INIT COLLECTION
var flowerGroup = new app.FlowersCollection([
	redRoses, rainbowRoses, heirloomRoses
]);

//REMOVE FROM COLLECTION
//flowerGroup.remove(heirloomRoses);

//CONSOLE LOG COLLECTION
//console.log(flowerGroup.toJSON());

//ADD TO COLLECTION
//flowerGroup.add(heirloomRoses);

//CONSOLE LOG COLLECTION
//console.log(flowerGroup.toJSON()); 

//rainbowRoses.set('price', 20); 
//redRoses.set('link', 'redRoses'); 


//DISPLAY
var flowerGroupView = new app.allFlowersView({ collection: flowerGroup});
$('#allFlowers').html(flowerGroupView.render().el); 