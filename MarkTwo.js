var readlineSync=require('readline-sync');
console.log("Welcome To Hero Fandom game");
Name=readlineSync.question("Tell me your name ");
console.log(Name);
console.log("You get 1 correct point for every correct answer");
var points=0;

var Questions=["How many Infinity Stones are there?(write in letters) :","Where is Captain America from? :","Who is Tony Starks father? :","What type of doctor is Doctor Strange:","Captain America's shield and Bucky's arm are made of what?:"];
var Answers=["six","Brooklyn","Howard Stark","A neurosurgeon","Vibranium"];


for(var i=0;i<=4;i++){

	function QnA(){

		if (readlineSync.question(Questions[i]).toUpperCase()==Answers[i].toUpperCase()) {
	
		points++
		console.log("Correct you get "+points+"points");
	
		
	}else{
		points=points;
		console.log("Correct answer is "+Answers[i]);
	}

}
QnA();
}
console.log("Total score is "+points);







