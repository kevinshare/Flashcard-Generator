function ClozeCard (text, cloze){
	this.text = text;
	this.cloze = cloze;
	this.partial = function remove(){
		var newText = text.replace(cloze, "...");
		return newText;
	};
	this.printCloze = function print(){
		console.log("Front side: " + newText + "\n");
		console.log("Back side: " + text + "\n")
		

	};
	

};


function BasicCard (front, back){
	this.front = front;
	this.back = back;
	this.printBasic = function print(){
		console.log("Front side: " + front + "\n");
		console.log("Back side: " + back + "\n")
};




var inquirer = require("inquirer");
var askQuestion = function() {
  // if statement to ensure that our questions are only asked five times
	if (count < 8){
	  	console.log("Create a new flash card: ");
	    // runs inquirer and asks the user a series of questions whose replies are
	    // stored within the variable answers inside of the .then statement
	  inquirer.prompt([
	      {
	        name: "cardType",
	        message: "Would you like a baic or cloze card? "
	      }
	      ]).then(function(answers) {
	      // initializes the variable newguy to be a programmer object which will
	      // take in all of the user's answers to the questions above

	     	if(answers.cardType === "basic"){
	     		inquirer.prompt([
	      			{
	        			name: "front",
	        			message: "What will be the front of the card?"
	        		}
	        		{
	        			name: "back",
	        			message: "What will be the back of the card?"
	        		}
	        	]).then(function(answers) {
	        		var card = new ClozeCard(
	      				answers.front,
	      				answers.back,

	      			

	      			);
	      			BasicCard.printBasic();
	        	});

	        }


	      	else{
	     		inquirer.prompt([
	      			{
	        			name: "front",
	        			message: "What will be the full answer?"
	        		}
	        		{
	        			name: "back",
	        			message: "What part do you want to leave out?"
	        		}
	      		]).then(function(answers) {
	      			var card = new ClozeCard(
	      				answers.front,
	      				answers.back,

	      			);

	      			ClozeCard.printCloze();
			


	        
	      
	    });
	      		count ++;
	      		askQuestion();
	}
	else if {

		console.log("Thats enough for a test!");

	}
};

