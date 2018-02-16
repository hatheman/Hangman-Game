
//first create an array of correct answers. 

//     var questions= {
//     q1: ["honda"],
//     q2: ["hyundai"],
//     q3: ["lexus"],
//     q4: ["fiat"],
//   }

var answers= ["honda", "hyundai", "lexus", "fiat"]

var alphabet= ("abcdefghijklmnopqrstuvwxyz").split("");


console.log(alphabet)
//     q1: ["honda"],
//     q2: ["hyundai"],
//     q3: ["lexus"],
//     q4: ["fiat"]
// }
var answer = answers[Math.floor(Math.random() * answers.length)];



var score = 0;

var questionIndex = 0;

var answerArray = [];
for (var i=0; i<answer.length; i++) {
    answerArray[i] = "_";
    document.getElementById("word-blanks").innerHTML = answerArray
}

var remainingLetters = answer.length;





// for (var j=0; j<answer.length; j++) {
    // System.out.print(answerArray[j]);
// }





// function renderQuestion() {
//      if (questionIndex <= (answers.length -1)) {
//          document.querySelector("#word-blanks").innerHTML = answers[questionIndex][0];
//     }
//      else {
//         document.querySelector("#win-counter").innerHTML = "Final Score: " + score;
//      }
//  }
//     function updateScore(){
//         document.querySelector("#win-counter").innerHTML = "Score: " + score;
    
//     }



// renderQuestion();
// updateScore();

// var wordBlanks = $("#word-blanks"); 






 document.onkeyup = function(event) {
     if (questionIndex === answers.length) {
        return;
    }
    var userInput = String.fromCharCode(event.which).toLowerCase();


// //for (var i=0; i<correctAnswers.length; i++) {
  

    
       
      if (answer.indexOf(userInput) > -1) {
          
        for (var j=0; j<answer.length; j++) {
            if (answer[j] === userInput) {
                answerArray[j] = userInput;
                document.getElementById("word-blanks").innerHTML = answerArray
            }}
        
        // if (userInput === answer[i]) {
            // var str= document.getElementById("word-blanks").innerHTML
           // var res = str.replace(answerArray[i], userInput)
            // document.getElementById("word-blanks").innerHTML = res
        
            
            
            score++;
            // updateScore()
           console.log("it is correct")

            }
        
        else {
           var newDiv = $("<div>" + "wrong:" + userInput +  "</div>")
           $("#wrong-guesses").append(newDiv)

        }
        
     }


        // questionIndex++;
        //renderQuestion();
    
        

       
   
    




    //if ((userText == "h") || (userText == "o") || (userText == "n") || (userText == "d") || (userText == "a")) {
       // var answer = str.replace("_", 'h,o,n,d,a' )
       // document.write(answer)


    
