
var stepIntoTheOctagon = [];
var selectedVillian = [];
var attack = [];
var hitPoints = [];
var selectedGoodGuy = [];



$(document).ready(function(){

	
	var villianArray = {
	"negan":{	
	
	name: "Negan",
	image: "negan.jpg",
	hitPoints: 160,
	attackPower: 7,
	counterAttackPower: 24
	
	}, 
	"Governor": {
	
	name: "Governor"
	image: "Governor.jpg",
	hitPoints: 155,
	attackPower: 6,
 	counterAttackPower: 23


	}, 
	"Gareth": {
	
	name: "Gareth",
	image: "Gareth.jpg",
	hitPoints: 126,
	attackPower: 8,
	counterAttackPower: 21

	}, 
	"Shane"{
		
		name: "Shane",
		image: "shane.jpg",
		hitPoints: 180,
		attackPower: 5,
		counterAttackPower: 22

	} 

 };

var selectedGoodGuy;
var selectedVillian;
var combatants = [];
var indexOfSelChar;
var attackResult;
var turnCounter = 1;
var killCount = 0;

//var villianImages = [
	//shane.jpg]

var completeCharacter = function(dude, getReadyToRumbleArea, createDude){
	var dudeDiv = $("<div class="character' data-name=' " + dude.name + "'>');
	var dudeName = $("<div class=' character-name'>").text(dude.name);
	var dudeImage = $("<img alt='image' class='character-image'>").attr("scr", character.image);
	var dudeHealth = $("<div class=' cahracter-health'>").text(character.health);
	dudeDiv.appemd(dude.name).append(dudeImage).append(dudeHealth);
	$(getReadyToRumbleArea).append(dudeDiv);

	if (createDude == 'enemy') {
		$(dudeDiv).addClass('enemy');
	}else if (createDude == 'defender') {
		selectedVillian = dude;
		$(dudeDiv).addClass('target-enemy');
	}
	};

	var captureMessage = function(message) {
		var readyToSendMessage = $("#gameMessage");
		var newMessage = $("<div>").text(message);
		reaedyToSendMessage.append(newMessage);

		if(message == 'clearMessage') {
			readyToSendMessage.text('');
		}
	}

var captureDudes = funtion(dudeObject, rumbleArea) {
	if(rumbleArea == '#character-selection') {
		$(rumbleArea).empty();

	}
}

if (rumbleArea == '#selected-character') {
	$('#selected-character').prepend("Your bad ass villian");
	completeCharacter(getReadyToRumbleArea, rumbleArea, '');
	$('attack').css('visibility', 'visible');
}

if (rumbleArea == '#villiansWaitingToGetBeat') {
	$('villiansWaitingToGetBeat').prepend("Choose who is getting the next ass whooping");
	for (var i = 0; i < dudeObject.length; i++) {
		completeCharacter(dudeObject[i], rumbleArea, 'enemy');
	}
$(document).on('click', 'enemy', function(){
	name = ($(this).data('name'));
	if ($('#defneder').children().length === 0) {
		captureDudes(name, 'defender');
		$(this).hide();
		captureMessage("clearMessage");
	}
});
}


//render defender








$("#shane-image").on("click", function(){
	$("#governor-image").hide();
	$("#gareth-image").hide();
	$("#negan-image").hide();
	
	$("#villiansWaitingToGetBeat").append("<img id='negan-image' src='negan.jpg'>");     
		
	$("#villiansWaitingToGetBeat").append("<img id='gareth-image' src='Gareth.jpg'>");  		

	$("#villiansWaitingToGetBeat").append("<img id='governor-image' src='Governor.jpg'>");  















			//var villiansImagesArray = ["shane.jpg", "Governor.jpg", "Gareth.jpg", "negan.jpg"];
	//$("#governor-image",  "#gareth-image",  "#negan-image").append($("#villiansWaitingToGetBeat"));

	//var createThreeVillians = document.createElement("IMG")
	//createThreeVillians.setAttribute("src", "Governor.jpg", "Gareth.jpg", "negan.jpg");
	//var newShaneImageDiv = $("<div>" + createThreeVillians + "</div>");
	//var newShaneImage = $("#villiansWaitingToGetBeat")
	//newShaneImage.append(newShaneImageDiv);

	//$("#governor-image", "#gareth-image", "#negan-image").append($("#villiansWaitingToGetBeat"))
	
	


	//var newShaneImage = $("#villiansWaitingToGetBeat")
	
	//var newShaneImageDiv = $("<div>" + villiansImagesArray + "</div>");
	
	//newShaneImage.append(newShaneImageDiv);

});


});
