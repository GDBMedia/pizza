function OrderInfo(name, street, city, state, zip){
	this.name = name; 
	this.street = street;
	this.city = city;  
	this.state = state;
	this.zip = zip; 
}
function Pizza(size, arrayOfTop) {
	this.size = size
	this.array = arrayOfTop;
}
Pizza.prototype.price = function(){
	var price;
	if(this.size === 1){
		price = 8.99;
	}
	else if(this.size === 2){
		price = 11.99;
	}
	else if(this.size === 3){
		price = 14.99;
	}
	else if(this.size === 4){
		price = 18.99;
	}
	if(this.array.length > 3 ){
		price += ((this.array.length) - 3) * 0.85; 
	}
	
	return price;
}
Pizza.prototype.name = function(){
	var name
	if(this.size === 1){
		name = "Midget";
	}
	else if(this.size === 2){
		name = "Petite Pizza";
	}
	else if(this.size === 3){
		name = "Average Joe";
	}
	else if(this.size === 4){
		name = "Behemoth";
	}
	return name;
}
$(function(e){
	var arrayOfPizza = [];
	var grandTotal = 0;
	$("#getdeliver").click(function(e){
		
		$("#getdeliver").hide();
		$("#order").hide();
		$("#create").fadeIn("slow");
		$("#orderform").fadeIn("slow");
		

	});
	$("#orderform").submit(function(e){
		var topArray = [];
		
		var sizeInput = parseInt($("#size").val());
		console.log(sizeInput);
		$('input[name="toppings"]:checked').each(function() {
		   topArray.push(this.value);
		});
		
		arrayOfPizza.push(new Pizza(sizeInput, topArray));
		var arrayIndex = (arrayOfPizza.length - 1)
		var pizzaPrice = arrayOfPizza[arrayIndex].price();
		var pizzaName = arrayOfPizza[arrayIndex].name();
		var topnum = arrayOfPizza[arrayIndex].array.length;
		grandTotal += pizzaPrice;
		$("#create").hide();
		$("#receipt").fadeIn("slow");
		$("#orderform").hide();
		$("#totalDisplay").fadeIn("slow");
		$("#display").append("<div class='pizza'><h1>1 " + pizzaName + " with " + topnum + " Toppings</h1><h2>Price: $" + pizzaPrice.toFixed(2) + "</h2><br><br><br></div><div><hr></div>")
		$(".total").fadeIn("slow");
		$("#total").text("$" + (grandTotal + 2.99).toFixed(2));

		$("#orderform")[0].reset();
		return false;
	});
	$("#place").click(function(){
		$("#receipt").hide();
		$("#placeorder").fadeIn("slow");
		$("#totalDisplay").hide();
		$("#infoform").fadeIn("slow");
		

	});
	$("#infoform").submit(function(e){
		var nameInput = $("#name").val();
		var streetInput = $("#street").val();
		var cityInput = $("#city").val();
		var stateInput = $("#state").val();
		var zipInput = $("#zip").val();

		var newOrderInfo = new OrderInfo(nameInput, streetInput, cityInput, stateInput, zipInput);
		console.log(newOrderInfo.name);
		console.log(newOrderInfo.street);
		console.log(newOrderInfo.city);
		console.log(newOrderInfo.state);

		$("#infoform").hide();
		$("#placeorder").hide();
		$("#orderplaced").fadeIn("slow");
		$("#deliverymessage").fadeIn("slow");
		$("#namedisplay").text(newOrderInfo.name);
		$("#streetdisplay").text(newOrderInfo.street);
		$("#endingtotal").text("Paid Price: $" + grandTotal.toFixed(2));
		$("#addressdisplay").text(newOrderInfo.city + ", " + newOrderInfo.state + " " + newOrderInfo.zip);
		$("#infoform")[0].reset();
		return false;
	});
	$("#refresh").click(function(){
		location.reload();
		

	});
	$("#add").click(function(){
		$("#totalDisplay").hide();
		$("#receipt").hide();
		$("#create").fadeIn("slow");
		$("#orderform").fadeIn("slow");
		

	});
});
