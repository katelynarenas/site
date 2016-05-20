var main = function(){

	var output = function(text){
		$("#calculatorOutput").text(text);
	}
	$("#ladybug").click(function(){
		$(this).removeClass("")
		$(this).addClass("black");

		output("But did you ask Keith");
	})
	$("#android").click(function(){
		$("#calculatorOutput").text("I think that's just how that works on Android");

	})
	$("#crash").click(function(){
		$("#calculatorOutput").text("But can you reproduce it");
	})
	$("#usability").click(function(){
		$("#calculatorOutput").text("Haven't heard about it from CS");
	})
	$("#freeze").click(function(){
		$("#calculatorOutput").text("Are you sure it's not like that in production");
	})
	$("#memory").click(function(){
		$("#calculatorOutput").text("I didn't even touch that");
	})
	$("#data").click(function(){
		$("#calculatorOutput").text("I think it's supposed to look like that");
	})
	$("#error").click(function(){
		$("#calculatorOutput").text("Well it doesn't let them save like that so");
	})
	$("#apple").click(function(){
		$("#calculatorOutput").text("That's actually expected behavior");
	})
	
}
$(document).ready(main);