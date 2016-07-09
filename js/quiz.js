$(document).ready(function() {

  var score = 0;
  var userAnswer = 0;
  var currentIndex = 0;

  var quiz = {
      /* declare object quiz, with properties Question, Answer, Correct Answer Value per ordered list  */
      Q:["<p>Cocoa is:</p>", "<p>People have enjoyed treats made from cocoa since:</p>", "<p>Before cocoa beans are made into chocolate they are: </p>", "<p>The following statement about chocolate is true: </p>", "<p>Studies have shown the benefits of chocolate include: </p>"],
      A:["<li>A small town in Florida</li><li>An ingredient required to make chocolate</li><li>Apple’s object­-oriented API for OS X</li><li>All of the above</li>", "<li>The height of the Roman empire, about 100 A.D.</li><li>Europeans found it in South America in 1517</li><li>The Late Bronze Age, about 2000 B.C.</li><li>The Hershey chocolate factory was built in 1879</li>", "<li>Fermented</li><li>Broiled</li><li>Soaked</li><li>Boiled</li>", "<li>It's always been enjoyed as a candy bar.</li><li>Napolean drank 50 cups of chocolate daily.</li><li>We buy 58 million pounds of it on Valentine’s Day.</li><li>It cannot be sold legally in North Korea.</li>", "<li>Anti-aging properties</li><li>Improved LDL cholesterol levels</li><li>Improved athletic performance</li><li>Better scores on quizzes about chocolate</li>"],
      correctAnsValue:[4, 3, 1, 3, 2]
  };

  /* define function to display question and answer pair on quizCard */
  function displayQandA(currentIndex) {
    $('#quizCard').show();
    $('.qAnda').html(quiz.Q[currentIndex] + "<ol>" + quiz.A[currentIndex] + "</ol>");
  }

  /* define function to user answer against correct answer value and display feedback */
  function checkAnswer(userAnswer,currentIndex) {
    if (parseInt(userAnswer) == quiz.correctAnsValue[currentIndex]) {
        $("<p><br>You're right!</p>").appendTo('.qAnda>ol');
        score++;
    } else {
        $("<p><br>Ooops; believe it or not, the answer is # " + (quiz.correctAnsValue[currentIndex]) + "!</p>").appendTo('.qAnda>ol');
    }
  }
  $('#final').hide();

  doWork(0);

  function doWork(currentIndex) {

    if(currentIndex < 5) {

        displayQandA(currentIndex);

        $('input[type="submit"]').click(function() {
            // assign input to a variable
            var textInput = $('input[name="userAnswer"]');
            var userAnswer = textInput.val();
            $('input[type="submit"]').off('click');
            checkAnswer(userAnswer,currentIndex);
        });

        // allow user to select "next question" before displaying next Q and A pair
        $('.nextQuestion').on('click', function() {
            currentIndex++;
            $('input[type="text"]').val('');
            $('.nextQuestion').off('click');
            doWork(currentIndex);
      });
    } else {
        $('.nextQuestion').off('click');
        $('#quizCard').hide();
        $('.score').val('');
        $('.tryAgain').val('');
        $('#final').show();
        $("<p>You answered " + score + " out of 5 correctly.</p>" + "<p>Not too bad!</p>").appendTo('.score');
        $("<p>Try again</p>").appendTo('.tryAgain');

    }
  }

  $('.tryAgain').click(function() {
        score = 0;
        userAnswer = 0;
        var currentIndex = 0;
        $('#final').hide();
        doWork(currentIndex);
      });
});
