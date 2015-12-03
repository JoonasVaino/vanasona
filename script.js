var pageColor = "#"+Math.random().toString(16).slice(2, 8);
var pageHeight = parseInt($(window).height()+1);
// vanasonad.js has the array
var vanasona = vanasonad[Math.floor(Math.random()*vanasonad.length)];
fonts = ['Shadows Into Light', "Lobster", "Indie Flower", "Kreon"];
font = fonts[Math.floor(Math.random()*fonts.length)];
var counter= 0;
var color="";

var invertColor = function(hexTripletColor) {
    color = hexTripletColor;
    color = color.substring(1);
//color= color.substring(3,7);
//color=color.substring(1,4);           // remove #
    color = parseInt(color, 16);          // convert to integer
    color = 0xFFFFFF ^ color;             // invert three bytes
    color = color.toString(16);           // convert to hex
    color = ("000000" + color).slice(-6); // pad with leading zeros
    color = "#" + color;                  // prepend #
    return color;
}

var addPage = function(){
	counter= counter+1;
	vanasona = vanasonad[Math.floor(Math.random()*vanasonad.length)];
	$(".content").append("<div class='page'><p class='tekst'>"+counter+". "+vanasona+"</p></div>");
	pageColor = "#"+Math.random().toString(16).slice(2, 8);	
	$(".page").last().css({ "background-color" : pageColor, "padding" : "3em 0"});
	pageColor = "#"+Math.random().toString(16).slice(2, 8);
	invertColor(pageColor);// gets color
	font = fonts[Math.floor(Math.random()*fonts.length)];
	$(".page").last().find("p").css({"color": color, "text-align" : "center", "font-family" : font+", cursive"});
}


$( document ).ready(function() {
	$(".content").append("<div class='page hello'><p class='tekst'>Tere Tulemast Minu õppe eesmärkidel tehtud vanasõna lehele, have fun ya'll</p><p class='tekst'>Just scroll down</p></div>");
	$(".page").css({"display" : "block", "height" : pageHeight+"px" , "background-color" : pageColor });
	$(".page").find("p").css({"padding-top" : "5em", "font-family" : "Lobster"});
	addPage();
	$(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() == $(document).height()) {
       			addPage();
		}
	});
});
