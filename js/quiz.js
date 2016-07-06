$(document).ready(function(){

  var score = 0;
  var userAnswer = 0;
  var currentIndex = 0;

  var quiz = {
      /* declare object quiz, with properties Question, Answer, Correct Answer Value per ordered list  */
      Q:["<p>Cocoa is...</p>", "<p>People have been enjoying cocoa since </p>", "<p>To prepare cocoa beans for making chocolate they are </p>", "<p>The following statments about chocolate consumption are true: </p>", "<p>The following benefits of cocoa have been studied: </p>"],
      A:["<li>A small town in Florida.</li><li>An ingredient required to make chocolate</li><li>Apple’s object­-oriented API for OS X.</li><li>All of the above.</li>", "<li>The height of the Roman empire, circa 100 A.D.</li><li>Europeans found it in South America in 1517.</li><li>The middle of the Late Bronze Age, about 2000 B.C.</li><li>The Hershey family started making chocolate in 1879.</li>", "<li>Fermented</li><li>Dried</li><li>Conched</li><li>Tempered</li><li>All of the above</li>", "<li>Chocolate was consumed as a liquid, not a solid, for 90% of its history.</li><li>The Aztec emperor Montezuma II drank more than 50 cups of chocolate every day.</li><li>Americans buy more than 58 million pounds of chocolate on Valentine’s Day.</li><li>In one form or another, we consume 3 million tons of cocoa beans annually.</li><li>All of the above</li>", "<li>Is rich in antioxidants that may have antiaging properties.</li><li>Contains a high level of flavonoids which may contribute to cardiovascular health.</li><li>May reduce blood pressure and benefit LDL cholesterol levels.</li><li>May benefit brain health, as reflected inlearning and memory.</li><li>All of the above.</li>"],
      correctAnsValue:[4, 3, 5, 5, 5]
  };

  /* define function display question and answer pair on quizCard */
  function displayQandA(currentIndex) {
    $('.qAnda').html(quiz.Q[currentIndex] + "<ol>" + quiz.A[currentIndex] + "</ol>");
    console.log("Q is " + quiz.Q[currentIndex]);
  }

  function checkAnswer(userAnswer) {
    console.log("answer to check is " + userAnswer + " and correct answer is " + quiz.correctAnsValue[currentIndex]);
    if (parseInt(userAnswer) == quiz.correctAnsValue[currentIndex]) {
        $("<p><br>You're right!</p>").appendTo('.qAnda');
        score++;
    } else {
        $("<p><br>Sorry; the correct answer is #</p>" + (parseInt(quiz.correctAnsValue[currentIndex]))).appendTo('.qAnda');
        console.log(quiz.correctAnsValue[currentIndex]);
    }
  }

  $('input[type="submit"]').click(function() {
    // assign input to a variable
    var textInput = $('input[name="userAnswer"]');
    var userAnswer = textInput.val();
    console.log("userAnswer is " + userAnswer);
    console.log("correct answer is " + quiz.correctAnsValue[currentIndex]);
    checkAnswer(userAnswer);
    $('form').hide();
  });

  $('.nextQuestion').click(function() {
    currentIndex++;
    doWork();
  });

  // entry point
  doWork();

  function doWork() {
    if(currentIndex < 5) {
        displayQandA(currentIndex);
    }
  }
});
