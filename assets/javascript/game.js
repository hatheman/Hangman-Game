
//answers and variables
var answers= ["honda", "hyundai", "lexus", "fiat"]

var alphabet= ("abcdefghijklmnopqrstuvwxyz").split("");


console.log(alphabet)

//randomly input word for the question
var answer = answers[Math.floor(Math.random() * answers.length)];



var incScore = 0;

var decScore = 0;

var questionIndex = 0; 

var guesses = document.querySelector("#guesses-left").innerHTML

//create underscore for answer
var answerArray = [];
for (var i=0; i<answer.length; i++) {
    answerArray[i] = "_";
    document.getElementById("word-blanks").innerHTML = answerArray
} 


var remainingLetters = answer.length;







//function to increase winning score
function winScore(){
    document.querySelector("#win-counter").innerHTML = incScore
    if( incScore < 0) {
        incScore = 0
    }
        } 
//function to increase losing score
function loseScore() {
    document.querySelector("#loss-counter").innerHTML = decScore
    if(decScore < 0 ) {
        decScore = 0
    }
}
//function to decrease guesses left
function updateGuesses() {
    document.querySelector("#guesses-left").innerHTML = guesses 
    if(guesses < 0) {
        guesses = 0
    }
    }

    



document.onkeyup = function(event) {
    
    var userInput = String.fromCharCode(event.which).toLowerCase();



  if (remainingLetters === 0) {
    alert("i won")
    incScore++ 
    winScore()
    
    return;
    
      }
    if (guesses === 0) {
        alert("I lost")
        decScore++
        loseScore()
        return;
    }


    if (alphabet.indexOf(userInput) > -1) {
        guesses--
        updateGuesses()
        
        var index = alphabet.indexOf(userInput);
        if (index >= 0) {
        alphabet.splice( index, 1 );}


        
       if (answer.indexOf(userInput) > -1) {
          
        for (var j=0; j<answer.length; j++) {
            if (answer[j] === userInput) {
                answerArray[j] = userInput;
                document.getElementById("word-blanks").innerHTML = answerArray
                
                remainingLetters--
                
                
            }}
           
        
        
            
            

            }
        
        else {
           var newDiv = $("<div>" + userInput +  "</div>")
           $("#wrong-guesses").append(newDiv)
           
           

        }
        questionIndex++
     }
   
    }
    function myFunction() {
        document.getElementById("myForm").reset();}
   
    
        

       
   
    




   

    
