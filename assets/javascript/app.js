$(document).ready(function () {

    var messages = {
        correct: "Correct, good job!",
        incorrect: "No, that's not correct!",
        endTime: "out of time!",
        finished: "All done! Let's see how well you did"

    }

    var currentQuestion;
    var correctAnswer;
    var incorrectAnswer;
    var unanswered;
    var seconds;
    var time;
    var answered;
    var userSelect;

    $('#start-button').on('click', function () {
        $(this).hide();
        newGame();
    });

    $('#startOverBtn').on('click', function () {
        $(this).hide();
        newGame();
    });

    function newGame() {
        $('#finalMessage').empty();
        $('#correctAnswers').empty();
        $('#incorrectAnswers').empty();
        $('#unAnswered').empty();
        currentQuestion = 0;
        correctAnswer = 0;
        incorrectAnswer = 0;
        unanswered = 0;
        newQuestion();

    }

    function newQuestion() {
        $('#message').empty();
        $('#correctedAnswer').empty();
        answered = true;

        $('#currentQuestion').html('Question #' + (currentQuestion + 1) + '/' + TriviaQuestions.length);
        $('.question').html('<h2>' + TriviaQuestions[currentQuestion].question + '</h2>');
        for (var i = 0; i < 4; i++) {
            var Choices = $('<div>');
            Choices.text(TriviaQuestions[currentQuestion].multChoice[i]);
            Choices.attr({ 'data-index': i });
            Choices.addClass('thisChoice');
            $('.multChoice').append(Choices);

        }

        countdown();
        $('.thisChoice').on('click', function () {
            userSelect = $(this).data('index');
            clearInterval(time);
            answerPage();
        });


    }

    function countdown() {
        seconds = 15;
        $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
        answered = true;
        time = setInterval(showCountDown, 1000);
    }

    function showCountDown() {
        seconds--;
        $('#timeleft').html('<h3>Time Remaining: ' + seconds + '</h3>');
        if (seconds < 1) {
            clearInterval(time);
            answered = false;
            answerPage();
        }
    }

    function answerPage() {

        $('#currentQuestion').empty();
        $('.thisChoice').empty();
        $('.question').empty();

        var rightAnswerText = TriviaQuestions[currentQuestion].multChoice[TriviaQuestions[currentQuestion].answer];
        var rightAnswerIndex = TriviaQuestions[currentQuestion].answer;

        if ((userSelect === rightAnswerIndex) && (answered === true)) {
            correctAnswer++;
            $('#message').html(messages.correct);

        } else if ((userSelect !== rightAnswerIndex) && (answered === true)) {
            incorrectAnswer++;
            $('#message').html(messages.inCorrect);
            $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
        } else {
            unanswered++;
            $('#message').html(messages.endTime);
            $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
            answered = true;
        }

        if (currentQuestion === (TriviaQuestions.length - 1)) {
            setTimeout(scoreBoard, 5000);
        } else {
            currentQuestion++;
            setTimeout(newQuestion, 5000);
        }

    }

    function scoreBoard() {
        $('#timeLeft').empty();
        $('#message').empty();
        $('$correctedAnswer').empty();

        $('#finalMessage').html(messages.finished);
        $('#correctAnswers').html("Correct Answers: " + correctAnswer);
        $('#incorrectAnswers').html("Incorrect Answers: " + inCorrectAnswer);
        $('#unAnswered').html("Unanswered: " + Unanswered);
        $('#startOverBtn').addClass('reset');
        $('#startOverBtn').show();
        $('#startOverBtn').html('Start Over?');

    }

    var TriviaQuestions = [{
        question: 'In 2011, which country hosted a Formula 1 race for the first time?',
        answer: 3,
        multChoice: ['Japan', 'Korea', 'Thailand', 'India'],

    }, {
        question: 'In football, who was nicknamed "The Divine Ponytail"?',
        answer: 0,
        multChoice: ['Roberto Baggio', 'Pele', 'Cristiano Ronaldo', 'Ronalinho'],

    }, {
        question: 'What flavour is Cointreau?',
        answer: 1,
        multChoice: ['Lemon', 'Orange', 'Cranberry', 'Lime'],

    }, {
        question: 'If you had Lafite-Rothschild on your dinner table, what would it be?',
        answer: 0,
        multChoice: ['Wine', 'Whiskey', 'Sangria', 'Prosecco'],

    }, {
        question: 'When did Margaret Thatcher become Prime Minister?',
        answer: 3,
        multChoice: ['1982', '1980', '1975', '1979'],

    }, {
        question: 'Name the three primary colors.',
        answer: 1,
        multChoice: ['Blue, green, and yellow', 'Red, yellow, and blue', 'Red, blue, and green', 'Green, blue, and red'],

    }, {
        question: 'What is the largest ocean in the world?',
        answer: 0,
        multChoice: ['Pacific', 'Arctic', 'Atlantic', 'None of above'],

    }, {
        question: 'What is the longest river in the world?',
        answer: 2,
        multChoice: ['Nile', 'Yellow', 'Amazon', 'Mekong'],

    }, {
        question: 'What is the capital city of Spain?',
        answer: 1,
        multChoice: ['Barcelona', 'Madrid', 'Valencia', 'Seville'],

    }, {
        question: 'Where would you find the Sea of Tranquility?',
        answer: 0,
        multChoice: ['The Moon', 'Pluto', 'Jupiter', 'The Sun'],

    }];
})
    




