$(document).ready(function(){
 /* init quiz score */
var score = 0;
 /* init index for array of Q and A pairs */
var currentIndex = 0;
  /* declare object quiz, with properties Question, Answer, Correct Answer Value per ordered list  */
var quiz = {
    Q:["<p>Cocoa is...</p>", "<p>People have been enjoying cocoa since </p>", "<p>To prepare cocoa beans for making chocolate they are </p>", "<p>The following statments about chocolate consumption are true: </p>", "<p>The following benefits of cocoa have been studied: </p>"],
      /* only including array of strings for a quiz[0] answers while testing this approach */
    A:[["<li>A small town in Florida.</li><li>An ingredient required to make chocolate</li><li>Apple’s object­-oriented API for OS X.</li><li>All of the above.</li>"], ["<li>The height of the Roman empire, circa 100 A.D.</li>", "<li>Europeans found it in South America in 1517.</li>",
    "<li>The middle of the Late Bronze Age, about 2000 B.C.</li>", "<li>The Hershey family started making chocolate in 1879.</li>"], ["<li>Fermented</li><li>Dried</li><li>Conched</li><li>Tempered</li><li>All of the above</li>"], ["<li>Chocolate was consumed as a liquid, not a solid, for 90% of its history.</li><li>The Aztec emperor Montezuma II drank more than 50 cups of chocolate every day.</li><li>Americans buy more than 58 million pounds of chocolate on Valentine’s Day.</li><li>In one form or another, we consume 3 million tons of cocoa beans annually.</li><li>All of the above</li>"], ["<li>Is rich in antioxidants that may have antiaging properties.</li><li>Contains a high level of flavonoids which may contribute to cardiovascular health.</li><li>May reduce blood pressure and benefit LDL cholesterol levels.</li><li>May benefit brain health, as reflected inlearning and memory.</li><li>All of the above.</li>"]],
    correctAnsValue:[4, 3, 5, 5, 5]
};
  /* define function display question and answer pair on quizCard */
function displayQandA() {
    $(quiz.Q[currentIndex] + "<ol>" + quiz.A[currentIndex] + "</ol>").insertBefore('form');
    // console.log("correctAnsValue is " + quiz.correctAnsValue[currentIndex]);
}

displayQandA(currentIndex);

var userAnswer = 0;
$('input[type="submit"]').click(function() {
     // assign input to a variable
     var userAnswer = $('input[name="userAnswer"]', $(this).parent('form') );
     var userAnswer = userAnswer.val();
   console.log("userAnswer is " + userAnswer);
   console.log("# of correct answer is " + quiz.correctAnsValue[currentIndex]);

});

function checkAnswer() {
    if (parseInt(userAnswer) == quiz.correctAnsValue[currentIndex]) {
      $("You're right!").appendTo('quizCard');
        score++;
        return;
    }
    else {
//        $(quiz.A[currentIndex].correctAns).prepend("Oops. ");
    //    $("Sorry; the correct answer is " + quiz.A[parseInt(quiz.correctAnsValue[currentIndex])]).appendTo('quizCard');
        $("sorry").appendTo('quizCard');
        return;
    }
      /* hide currentIndex Q and A pair and show correct answer string */
    $('quiz.Q[currentIndex]').hide();
    $('quiz.A[currentIndex]').hide();
    return;
    //$('.quizCard').show(quiz.A[currentIndex].correctAns);
    //$('funFact').show(quiz.funFact[currentIndex]);
}

checkAnswer(userAnswer, quiz.correctAnsValue[currentIndex]);

  /* allow user to select "next question" before displaying next Q and A pair */
$('.nextQuestion').click(function() {
    currentIndex++;
    console.log("currentIndex is " + currentIndex);

});

/*
display on quizCard ("Your score is " + score + " out of 5.")
*/

});
