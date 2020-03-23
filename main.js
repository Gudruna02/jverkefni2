function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

// N� � spurningu
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

// F� stig ef svara r�tt
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

// Svara �llum spurningum
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

// Svarar r�tt
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}

function populate() {
    // S�na stig ef b�i�
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // S�na sprningu
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // S�na m�guleika
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
            if(choices.length == 4){
                document.getElementById("btn2").style.visibility = "visible";
                document.getElementById("btn3").style.visibility = "visible";
			}
            if(choices.length == 2){
                document.getElementById("btn2").style.visibility = "hidden";
                document.getElementById("btn3").style.visibility = "hidden";
			}
        }
        // Kalla � f�ll showProgress
        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    // �egar �ta � button
    button.onclick = function() {
        // Breyta um lit
        document.getElementById(id).style.backgroundColor = "#0149ff";
        quiz.guess(guess);
        var delayInMilliseconds = 1000; //1 sek
        setTimeout(function() {
        document.getElementById(id).style.backgroundColor = "#01BBFF";
        populate()
        }, delayInMilliseconds);        
    }
};

// S�na � hva�a spurningu
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

// S�na stig
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// B�a til n�ja spurningar
var questions = [
    new Question("What is 1+1?", ["0", "1", "2", "11"], "2"),
    new Question("Is the Earth a sphere?", ["Yes", "No"], "Yes"),
];

// B�a til quiz
var quiz = new Quiz(questions);

populate();