$(document).ready(function () {

    var message = {
        correct: "Yes, that's right!",
        inCorrect: "No, that's not correct!",
        endTime: "out of time!",
        finished: "alright! Let's see how well you did"

    }

    var currentQuestion;
    var currentAnswer;
    var inCorrectAnswer;
    var Unanswered;
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
    });

    function newGame() {
        $('#finalMessage').empty();
        $('#correctAnswers').empty();
        $('#inCorrectAnswers').empty();
        $('#unAnswered').empty();
        currentQuestion = 0;
        inCorrectAnswer = 0;
        inCorrectAnswer = 0;
        Unanswered = 0;
        newQuestion();

    }

    function newQuestion() {
        $('#message').empty();
        $('#correctedAnswer').empty();
        answered = true;

        $('#currectQuestion').html('Question #' + (currentQuestion + 1) + '/' + questions.length);
        $('.question').html('<h2>' + questions[currentQuestion].question + '</h2>');
        for (var i = 0; i < 4; i++) {
            var multChoice = $('<div');
            multChoice.text(questions[currentQuestion].multChoice[i]);
            multChoice.attr({ 'data-index': i })
            multChoice.addClass('thismultChoice');
            $('.answerList').append(multChoice);

        }

        countdown();
        $('.thismultChoice').on('click', function () {
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
        $('.thismultChoice').empty();
        $('.question').empty();

        var rightAnswerText = questions[currentQuestion].multChoice[questions[currentQuestion].answer];
        var rightAnswerIndex = questions[currentQuestion].answer;

        if ((userSelect === rightAnswerIndex) && (answered === true)) {
            correctAnswer++;
            $('#message').html(message.correct);

        } else if ((userSelect !== rightAnswerIndex) && (answered === true)) {
            inCorrectAnswer++;
            $('#message').html(message.inCorrect);
            $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
        } else {
            Unanswered++;
            $('#message').html(message.endTime);
            $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
            answered = true;
        }

        if (currentQuestion === (questions.length - 1)) {
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

        $('#finalMessage').html(message.finished);
        $('#correctAnswer').html("Correct Answers: " + correctAnswer);
        $('#inCorrectAnswer').html("Incorrect Answers: " + inCorrectAnswer);
        $('#unAnswered').html("Unanswered: " + Unanswered);
        $('#startOverBtn').addClass('reset');
        $('#startOverBtn').show();
        $('#startOverBtn').html('Start Over?');

    }

    var questions = [{

        q1 = {
            question: 'In 2011, which country hosted a Formula 1 race for the first time?',
            answer: 3,
            multChoice: ['Japan', 'Korea', 'Thailand', 'India'],

        },

        q2 = {
            question: 'In football, who was nicknamed "The Divine Ponytail"?',
            answer: 0,
            multChoice: ['Roberto Baggio', 'Pele', 'Cristiano Ronaldo', 'Ronalinho'],

        },

        q3 = {
            question: 'What flavour is Cointreau?',
            answer: 1,
            multChoice: ['Lemon', 'Orange', 'Cranberry', 'Lime'],

        },
        q4 = {
            question: 'If you had Lafite-Rothschild on your dinner table, what would it be?',
            answer: 0,
            multChoice: ['Wine', 'Whiskey', 'Sangria', 'Prosecco'],

        },
        q5 = {
            question: 'When did Margaret Thatcher become Prime Minister?',
            answer: 3,
            multChoice: ['1982', '1980', '1975', '1979'],

        },

        q6 = {
            question: 'Name the three primary colors.',
            answer: 1,
            multChoice: ['Blue, green, and yellow', 'Red, yellow, and blue', 'Red, blue, and green', 'Green, blue, and red'],

        },

        q7 = {
            question: 'What is the largest ocean in the world?',
            answer: 0,
            multChoice: ['Pacific', 'Arctic', 'Atlantic', 'None of above'],

        },

        q8 = {
            question: 'What is the longest river in the world?',
            answer: 2,
            multChoice: ['Nile', 'Yellow', 'Amazon', 'Mekong'],

        },

        q9 = {
            question: 'What is the capital city of Spain?',
            answer: 1,
            multChoice: ['Barcelona', 'Madrid', 'Valencia', 'Seville'],

        },

        q10 = {
            question: 'Where would you find the Sea of Tranquility?',
            answer: 0,
            multChoice: ['The Moon', 'Pluto', 'Jupiter', 'The Sun'],

        }


    }];



  
})