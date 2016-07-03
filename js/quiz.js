$(document).ready(function(){

var score = 0;

var currentIndex = 0;

var quiz = {
    Q:["<p>Cocoa is...</p>", "<p>People have been enjoying cocoa since </p>", "<p>To prepare cocoa beans for making chocolate they are </p>", "<p>The following statments about chocolate consumption are true: </p>", "<p>The following benefits of cocoa have been studied: </p>"],
    A:[["<li>A small town in Florida.</li>", "<li>An ingredient required to make chocolate</li>", "<li>Apple’s object­-oriented API for OS X.</li>", "<li>All of the above.</li>"], ["<li>The height of the Roman empire, circa 100 A.D.</li>", "<li>Europeans found it in South America in 1517.</li>",
    "<li>The middle of the Late Bronze Age, about 2000 B.C.</li>", "<li>The Hershey family started making chocolate in 1879.</li>"]],
    correctAns:[3, 2, 4, 4, 4]
};

function displayQandA() {
    $(quiz.Q[currentIndex] + "<ol>" + quiz.A[currentIndex] + "</ol>").appendTo('.quizCard');
}

displayQandA(currentIndex);

$('.quizCard').click(function() {
   var userAnswer = $(this).parent('li');
});

/*  $('input[type="submit"]').click(function() {
       // assign text input to a variable
       var textInput = $('input[name="new-area-item"]', $(this).parent('form') );
       var newItem = textInput.val();
     }
*/

console.log(quiz.Q[currentIndex]);
console.log("userAnswer is " + quiz.Q[currentIndex]);

$('.nextQuestion').click(function() {
    currentIndex++;
});

function checkAnswer(userAnswer) {
    if (userAnswer == quizA[i].correctAns) {
        score++;
    }
    else {
        $( "Oops. ").prepend(quiz.A[currentIndex].correctAns);
    }
}

  // $('.fa-check').click(function () {
  // var chosenId = $(this).parent('li').attr('id');
  // compare to correctA
  // logic to get the index of the chosen answer.
  // comparison logic
  // updating our score

  // function displayQuestion(index) {
  // populate the HTML with the question.
  // loop through all answers for the question & for every answer:
  // each answer : <li id = "answer_index"><i class = "fa-check"></i></li>

/*
display on quizCard ("Your score was " + score + " out of 5.")
*/

});
