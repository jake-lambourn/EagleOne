$(document).ready(function() {
	console.log("TEST");
	$(".dropdownDate .dropdownDate").combodate({
		minYear: 2017,
		maxYear: 2020,
		minuteStep: 30
	});   
});