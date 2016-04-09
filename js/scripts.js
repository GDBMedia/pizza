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
	$("body").fadeIn(1200);
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
		if(!sizeInput){
			$("#sizegroup").addClass("has-error");
		}else{
		
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
		}
		event.preventDefault();
	});
	$("#place").click(function(){
		$("#receipt").hide();
		$("#placeorder").fadeIn("slow");
		$("#totalDisplay").hide();
		$("#infoform").fadeIn("slow");
		

	});
	$("#sizegroup").click(function(){
		$("#sizegroup").removeClass("has-error");
	});
	$("#nameform").click(function(){
		$("#nameform").removeClass("has-error");
	});
	$("#addressform").click(function(){
		$("#addressform").removeClass("has-error");
	});
	$("#info").click(function(){
		$("#info").removeClass("has-error");
	});
	$("#infoform").submit(function(e){
		var nameInput = $("#name").val();
		var streetInput = $("#street").val();
		var cityInput = $("#city").val();
		var stateInput = $("#state").val();
		var zipInput = $("#zip").val();
		if(!nameInput){
			$("#nameform").addClass("has-error");
		}
		if(!streetInput){
			$("#addressform").addClass("has-error");
		}
		if((!cityInput) || (!stateInput) || (!zipInput)){
			$("#info").addClass("has-error");
		}else{
		var newOrderInfo = new OrderInfo(nameInput, streetInput, cityInput, stateInput, zipInput);

		$("#infoform").hide();
		$("#placeorder").hide();
		$("#orderplaced").fadeIn("slow");
		$("#deliverymessage").fadeIn("slow");
		$("#namedisplay").text(newOrderInfo.name);
		$("#streetdisplay").text(newOrderInfo.street);
		$("#endingtotal").text("Paid Price: $" + grandTotal.toFixed(2));
		$("#addressdisplay").text(newOrderInfo.city + ", " + newOrderInfo.state + " " + newOrderInfo.zip);
		$("#infoform")[0].reset();
		}
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
