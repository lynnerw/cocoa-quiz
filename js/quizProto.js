
var someQuiz = function(quizItem) /* quizItem consists of question string, an answer string, and an answer value */ {
  this.quizItem = quizItem;
}

someQuiz.prototype.quizLength = function(qtyOfquizItems) {
  var quizLength = "";
  for (var i=0; i<quizLength; i++) {
      quizLength += this.quizItem[i % this.quizItem.qtyOfquizItems] + " ";
  }
  console.log(quizLength);
}

var cocoaQuizQs = function() {
    someQuiz.call(this, ["what is cocoa?", "how long have we been enjoying cocoa?", "how do your process cocoa beans?"])
    this.questions = 3;
  };

cocoaQuizQs.prototype = Object.create(someQuiz.prototype);
cocoaQuizQs.prototype.constructor = cocoaQuizQs;

var cocoaQuizAs = function() {
    someQuiz.call(this, ["1) an ingredient in chocolate, 2) a town in Florida, 3) a type of software, 4) all of the above"])
    this.answers = 12;  /* 4 answers for each question */
  };

cocoaQuizAs.ptototype = Object.create(someQuiz.prototype);
cocoaQuizAs.prototype.constructor = cocoaQuizAs;
