var readlineSync=require('readline-sync');
console.log("Welcome To My Game, Do You Know Me");
Name=readlineSync.question("Tell me your name ");
console.log(Name);
console.log("You get 1 correct point for every correct answer");
var points=0;

var Questions=["What is my nickname :","What I want to be :","What is my school name :","What is my hobby:","What is my dream car:"];
var Answers=["don","programmer","REHS","Travelling","Mustang"];


for(var i=0;i<=4;i++){

	function QnA(){

		if (readlineSync.question(Questions[i])==Answers[i]) {
	
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







