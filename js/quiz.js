$(document).ready(function(){


  var score = 0;
  var userAnswer = 0;
  var currentIndex = 0;

  var quiz = {
      /* declare object quiz, with properties Question, Answer, Correct Answer Value per ordered list  */
      Q:["<p>Cocoa is...</p>", "<p>People have been enjoying cocoa since </p>", "<p>Before cocoa beans are made into chocolate they are </p>", "<p>The following statement about chocolate is true: </p>", "<p>The following benefits of cocoa have been studied: </p>"],
      A:["<li>A small town in Florida.</li><li>An ingredient required to make chocolate</li><li>Apple’s object­-oriented API for OS X.</li><li>All of the above.</li>", "<li>The height of the Roman empire, about 100 A.D.</li><li>Europeans found it in South America in 1517.</li><li>The Late Bronze Age, about 2000 B.C.</li><li>The Hershey family began making chocolate in 1879.</li>", "<li>Fermented</li><li>Broiled</li><li>Soaked</li><li>Boiled</li>", "<li>It was eaten as a candy bar for 90% of its history.</li><li>Napolean drank 50 cups of chocolate every day.</li><li>Americans buy 58 million pounds of it on Valentine’s Day.</li><li>10 million tons of cocoa beans are processed annually.</li>", "<li>Its antiaging properties.</li><li>Its benefit to athletic performance.</li><li>Its benefit LDL cholesterol levels.</li><li>Its benefit to brain health in learning and memory.</li><li>All of the above.</li>"],
      correctAnsValue:[4, 1, 5, 5, 5]
  };

  /* define function display question and answer pair on quizCard */
  function displayQandA(currentIndex) {
    $('.qAnda').html(quiz.Q[currentIndex] + "<ol>" + quiz.A[currentIndex] + "</ol>");
  }

  function checkAnswer(userAnswer) {
      // console.log("answer to check is " + userAnswer + " and correct answer is " + quiz.correctAnsValue[currentIndex]);
    if (parseInt(userAnswer) == quiz.correctAnsValue[currentIndex]) {
        $("<p><br>You're right!</p>").appendTo('feedback');
        score++;
    } else {
        $("<p><br>Sorry; the correct answer is #</p>" + (parseInt(quiz.correctAnsValue[currentIndex]))).appendTo('feedback');
        // console.log(quiz.correctAnsValue[currentIndex]);
    }
  }

  $('.nextQuestion').click(function() {
    currentIndex++;
    doWork();
  });

  // entry point
  doWork();

  function doWork() {

    if(currentIndex < 5) {
        displayQandA(currentIndex);

    $('input[type="submit"]').click(function() {
    // assign input to a variable
    var textInput = $('input[name="userAnswer"]');
    var userAnswer = textInput.val();
    console.log("userAnswer is " + userAnswer);
    console.log("correct answer is " + quiz.correctAnsValue[currentIndex]);
    checkAnswer(userAnswer);
    $('input[name="userAnswer"]').hide();
    });

          // allow user to select "next question" before displaying next Q and A pair
        $('.nextQuestion').click(function() {
        console.log("program registers a click and currentIndex is " + currentIndex);

      });

    } else {

        $("<p>Your score is </p>" + score + "<p> out of 5.</p>").html('.nextQuestion');
      }

    }
});
