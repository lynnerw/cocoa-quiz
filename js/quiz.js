$(document).ready(function(){
 /* init quiz score */
var score = 0;
 /* init index for array of Q and A pairs */
var currentIndex = 0;
  /* declare object quiz, with properties Question, Answer, Correct Answer value per ordered list, and corresponding fun fact string */
var quiz = {
    Q:["<p>Cocoa is...</p>", "<p>People have been enjoying cocoa since </p>", "<p>To prepare cocoa beans for making chocolate they are </p>", "<p>The following statments about chocolate consumption are true: </p>", "<p>The following benefits of cocoa have been studied: </p>"],
      /* only including array of strings for a quiz[0] answers while testing this approach */
    A:[["<li>A small town in Florida.</li><li>An ingredient required to make chocolate</li><li>Apple’s object­-oriented API for OS X.</li><li>All of the above.</li>"], ["<li>The height of the Roman empire, circa 100 A.D.</li>", "<li>Europeans found it in South America in 1517.</li>",
    "<li>The middle of the Late Bronze Age, about 2000 B.C.</li>", "<li>The Hershey family started making chocolate in 1879.</li>"], ["<li>Fermented</li><li>Dried</li><li>Conched</li><li>Tempered</li><li>All of the above</li>"]],
      /* need to rethink correct Ans with regard to ordered list value vs. string */
    correctAnsValue:[4, 3, 5, 5, 5]
//    correctAns:["<p>#4 is correct, but it's important to note that without cocoa, we wouldn't have chocolate.</p>", "<p>#3 is correct. There is evidence that the ancient Mayans were the first to enjoy cocoa, during the middle of the Late Bronze Age, about 2000 B.C.</p>"]
//    funFact:["<p><strong>Fun Fact:</strong> Cocoa comes from the tiny nib inside the cocoa seed(bean). There are 20-50 seeds inside a pod and a cocoa tree produces 5-7 pods annually.</p>", "<p><strong>Fun Fact:</strong> ​Cocoa beans were so valuable to the Aztec culture that they used them as currency; one fresh avocado was worth three beans.</p>", "<p><strong>Fun Fact:</strong> ​Chocolate gives you a more intense mental high and gets your heart pounding more than kissing does.</p>", "<p><strong>Fun Fact:</strong> Chocolate has over 600 flavor compounds, while red wine has just 200.</p>", "<p><strong>Fun Fact:</strong>.</p>"]
};
  /* define function display question and answer pair on quizCard */
function displayQandA() {
    $(quiz.Q[currentIndex] + "<ol>" + quiz.A[currentIndex] + "</ol>").insertBefore('form');
}

displayQandA(currentIndex);

//console.log("current question is " + quiz.Q[currentIndex]);

var userAnswer = 0;
$('input[type="submit"]').click(function() {
     // assign nput to a variable
     var userAnswer = $('input[name="userAnswer"]', $(this).parent('form') );
     var userAnswer = userAnswer.val();
   console.log("userAnswer is " + userAnswer);
});
console.log("# of correct answer is " + quiz.correctAnsValue[currentIndex]);

function checkAnswer() {
    if (parseInt(userAnswer) == quiz.A[currentIndex].correctAnsValue) {
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
    //$('.quizCard').show(quiz.A[currentIndex].correctAns);
    //$('funFact').show(quiz.funFact[currentIndex]);
}

checkAnswer();

  /* allow user to select "next question" before displaying next Q and A pair */
$('.nextQuestion').click(function() {
    currentIndex++;
    console.log("currentIndex is " + currentIndex);
});

/*
display on quizCard ("Your score is " + score + " out of 5.")
*/

  // $('.fa-check').click(function () {
  // var chosenId = $(this).parent('li').attr('id');
  // loop through all answers for the question & for every answer:
  // each answer : <li id = "answer_index"><i class = "fa-check"></i></li>

});
