

var qArray=[
			 "Who was the charachter of Tommy Boy played by?", 
			 "In the movie Great Outdoors, what was the size of the steak John Candy ate?",
			 "In the show Saved by the Bell, what was the name of the high school?",    
			 "In the show Saved By the Bell, What is Screech's last name?", 
			 "In the 80's movie Back to School, what was the name of Rodney Dangerfield's charachter?", 
		   	 "In the movie What's Eating Gilbert Grape, what actor played Arnie?", 
			 "In the movie Cool Runnings, what was the meaning of the phrase Cool Runnings?",
			 "In the movie Can't Hardley Wait, what actor played the charachter Amanda Beckitt", 
			 "In the movie Homeward Bound, what were the names of the three animals?",
			 "What was the name of the first movie AL Pacino acted in?"];


var q1Array =["Mathew Modine",    
			  "72 oz",
			  "Valley",
			  "Belding",
			  "Mike Danzi",
			  "Brad Pitt",
			  "Kiss my lucky egg",
			  "Jennifer Love Hewitt",
			  "Squince, Mouth and Mendoza",
			  "The Panic in Needle Park"];



var q2Array =["Davide Spade",
			  "20 oz",
			  "Intermediate East",
			  "Powers",
			  "Isaac Hayes",
			  "Leonardo Decaprio",
			  "Angel Eyes",
			  "Jennifer Aniston",
			  "Chance,Babe and Camille",
			  "Serpico"];


var q3Array= ["Chris Farley",
			  "100 oz",
			  "Bayside",
			  "Slater",
			  "Henry Slane",
			  "Johnny Depp",
			  "Peace Be The Journey",
			  "Sarah Jesica Parker",
			  "Otis, Betty and Shadow",
			  "Scarface"];


var q4Array= ["Tom Cruise",
			  "48 oz",
			  "Hoover",
			  "Morris",
			  "Thorton Melon",
			  "Heath Ledger",
			  "The Good Run",
			  "Molly Ringwold",
			  "Chance,Shadow and Sassy",
			  "Scent of a Women"];


var correctArray=["Chris Farley",
				  "72 oz",
				  "Bayside",
				  "Powers",
				  "Thorton Melon",
				  "Leonardo Decaprio",
				  "Peace Be The Journey",
				  "Jennifer Love Hewitt",
				  "Chance,Shadow and Sassy",
				  "The Panic in Needle Park"];

var pics = ["assets/images/giphy.gif","assets/images/giphy1.gif","assets/images/giphy(2).gif","assets/images/giphy(3).gif","assets/images/giphy(4).gif","assets/images/giphy(5).gif","assets/images/giphy(6).gif","assets/images/cant-hardley.jpg","assets/images/giphy(8).gif","assets/images/giphy(9).gif"];
var time= 15;
var intervalId;
var endTime= 0;
var count = 0;
var correct= 0;
var wrong=0;
var interval;
var clicked= false;
 
$('#audio1')[0].play();
$("#display").html(time);
$("#tally").html(count);
$("#show").html("<img src='assets/images/trivia.gif'>");
$("#question").html("90's Movie Trivia");  	
$("#A").html("P");
$("#B").html("L");
$("#C").html("A");
$("#D").html("Y");



function BeginGame(){
	start();
	Questions();
}

function ResetGame(){
	time=16;
	count=0;
	confirm("ARE YOU READY TO PLAY");
	start();
	Questions();
}


 function Reset(){
 	 time=15;
     count++;
     console.log(correct);
  if(count===10){
     console.log(correct);
    $("#question").html("Your Score is " + ((correct / 10)*100) + "%");
     $("#tally").html("-");
     $("#display").html("-");
     clearInterval(intervalId);
     setTimeout(GameOver,4000);
     	//$("#question").html(Math.floor(correct / 100) + "%");
	//setTimeout(GameOver,2000);
  }
    
  else{
     $("#display").html(time);
     Questions();
     start(); 
   }
 }  

 function start() {
 intervalId =setInterval(Counter, 1000);
 }

  function stop() {

 $("#display").html("-");
  clearInterval(intervalId);
  setTimeout(Reset,1000);
 }
 

 function Counter() {
  	time--;
  	$("#display").html(time);
 if(time === endTime) {
  	$("#display").html("TIMES UP!!");
  	setTimeout(stop,1000);		
 }
};


  function Questions (){
    console.log(count);
    $("#show").html("<img src=" + pics[count] + ">");
    $("#tally").html(count+1);
 	$("#question").html(qArray[count]);  	
 	$("#A").html(q1Array[count]);
 	$("#B").html(q2Array[count]);
 	$("#C").html(q3Array[count]);
 	$("#D").html(q4Array[count]);
 };


$("#buttonA").on("click", function(){
if(q1Array[count]===correctArray[count]){
	correct++;
	$("#A").html("<img src= assets/images/green.png width='24px'>");
	$("#correct").html(correct);
//$('#audio')[0].play();
}

else{
	 $("#A").html("<img src= assets/images/wrong.png width='24px'>"); 
}
setTimeout(stop,1000);
  });


$("#buttonB").on("click", function(){
if(q2Array[count]===correctArray[count]){
	correct++;
	$("#B").html("<img src= assets/images/green.png width='24px'>");
	$("#correct").html(correct);
//$('#audio')[0].play();
}

else{
	 $("#B").html("<img src= assets/images/wrong.png width='24px'>");
}
 setTimeout(stop,1000);
 });
 

$("#buttonC").on("click", function(){
if(q3Array[count]===correctArray[count]){
	correct++;
	$("#C").html("<img src= assets/images/green.png width='24px'>");
	$("#correct").html(correct);
//$('#audio')[0].play();
}

else{
	 $("#C").html("<img src= assets/images/wrong.png width='24px'>"); 
}
 setTimeout(stop,1000);
 });

$("#buttonD").on("click", function(){
if(q4Array[count]===correctArray[count]){
 	correct++;
	$("#D").html("<img src= assets/images/green.png width='24px'>");
	$("#correct").html(correct);
//$('#audio')[0].play();
}

else{
	 $("#D").html("<img src= assets/images/wrong.png width='24px'>");  
}
 setTimeout(stop,1000);
 });



function GameOver(){
	count=0;
	time=0;
	clearInterval(intervalId);
	$("#audio1").trigger('pause');
	var c= confirm("GAME OVER.....Press OK to Play Again?");
if (c===true){
     // ResetGame();
    document.location.reload();
}

else{
      clearInterval(intervalId);
      $("#A").html("*");
 	  $("#B").html("*");
 	  $("#C").html("*");
 	  $("#D").html("*");
 	  $("#tally").html("-");
      $("#display").html("-");
 	  $("#question").html("Game Over");
 	  $("#show").html("<img src='assets/images/trivia.gif'>");
	}
};





















