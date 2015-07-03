$(document).ready(function(){

var count = 0;
var sizex = prompt("How wide?");
var sizey = prompt("How high?");
$('#container').width(sizex*10+1);
$('#container').height(sizey*10+1);

$("#newBox").click(function(){

	

	$('body').append('<div id="container"></div>');

	var count = 0;

	var sizex = prompt("How wide?");

	var sizey = prompt("How high?");

	$('#container').width(sizex*10+1);

	$('#container').height(sizey*10+1);

	$(".grid").removeClass('highlighted');

for (count=0; count<sizex*sizey; count++){

	$("#container").append("<div class='grid'></div>");

}
});
for (count=0; count<sizex*sizey; count++){

	$("#container").append("<div class='grid'></div>");

};

$(".grid").mouseenter(function(){
	$(this).addClass('highlighted');
});

$("#clear").click(function(){
	$(".grid").removeClass('highlighted');
});



})
