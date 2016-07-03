$(document).ready(function(){

/* on click within the ordered list, hide the Q and A and show correctAns */
$('li' ).on('click', function() {
  console.log("user selected answer #");
    $(this).toggle('.flipped', '.back');
});

/* quiz is array of question and answer pairs */

var quiz = {
    Q:["Cocoa is...", "People have been enjoying cocoa since ", "Before cocoa beans can be used for chocolate they are ", "The following statments about chocolate consumption are true: ", "The following benefits of cocoa have been studied: "]
    A:[]
    correctA:[4, 3, 5, 5, 5]
}

var score = 0;

//setTimeout, setInterval
var currentIndex = 0;

$('.fa-check').click(function () {
  var chosenId = $(this).parent('li').attr('id');
  // compare to correctA
  // logic to get the index of the chosen answer.
  // comparison logic
  // updating our score
});

$('.next-question').click(function () {
    currentIndex++;
    displayQuestion(currentIndex);
});

displayQuestion(currentIndex);

function displayQuestion(index) {
  // populate the HTML with the question.
  // loop through all answers for the question & for every answer:
    // each answer : <li id = "answer_index"><i class = "fa-check"></i></li>

  $('quizCard').html(quiz.Q[i] + quiz.A[i])

  input userAnswer (userAnswer = onclick # of li)

  $('quizCard').hide(quizQ[i], quizA[i])

  function checkAnswer(userAnswer) {
      if (userAnswer == quizA[i].correctA) {
          score++;
      }
      else {
          prepend( "Oops. ") to quizA[i].correctA
      },
  display quizA[i].correctA on quizCard,
  display funFact card,
  display nextQ button,
  on button click, hide(quizA[i].correctA and funFact)
}

    /* quiz.Q is an array of single strings; quiz.A is an array of ordered list */

display on quizCard ("Your score was " + score + " out of 5.")


});
