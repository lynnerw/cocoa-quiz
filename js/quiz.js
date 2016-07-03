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

for (i = 0; i < 5, i++)

    /* quiz.Q is an array of single strings; quiz.A is an array of ordered list */
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

 end for loop */

display on quizCard ("Your score was " + score + " out of 5.")


});
