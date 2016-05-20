var main = function(){

	$("#ladybug").click(function(){
		$("#calculatorOutput").text("but did you ask Keith");
	})
	$("#android").click(function(){
		$("#calculatorOutput").text("I think that's just how that works on Android");

	})
	$("#crash").click(function(){
		$("#calculatorOutput").text("but can you reproduce it");
	})
	$("#usability").click(function(){
		$("#calculatorOutput").text("haven't heard about it from CS");
	})
	$("#freeze").click(function(){
		$("#calculatorOutput").text("are you sure it's not like that in production");
	})
	$("#memory").click(function(){
		$("#calculatorOutput").text("I didn't even touch that");
	})
	$("#data").click(function(){
		$("#calculatorOutput").text("I think it's supposed to look like that");
	})
	$("#error").click(function(){
		$("#calculatorOutput").text("well it doesn't let them save like that so");
	})
	$("#apple").click(function(){
		$("#calculatorOutput").text("that's actually expected behavior");
	})
	
}
$(document).ready(main);