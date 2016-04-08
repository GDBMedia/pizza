$(function(e){
	$("#infoform").submit(function(e){
		var nameInput = $("#name").val();
		var streetInput = $("#street").val();
		var cityInput = $("#city").val();
		var stateInput = $("#state").val();
		var zipInput = $("#zip").val();

		$("#infoform").hide();
		$("#order").hide();
		$("#create").fadeIn("slow");
		$("#infoform")[0].reset();
		return false;
	});
});