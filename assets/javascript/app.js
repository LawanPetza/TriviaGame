$(document).ready(function(){

    //timer
    var timerNumber = 30;

    //score
    var numberCorrect = 0;
    var numberIncorrect = 0;
    var numberAnswered = 0;
    var numberUnanswered = 0;

    //aquestion and answer variables

    var answers = [];
    var currentQuestion = 0;

    var trivia = [

        q1 = {
            question: 'In 2011, which country hosted a Formula 1 race for the first time?',
            correct: 3,
            multChoice: ['Japan', 'Korea', 'Thailand', 'India'],

        },

        q2 = {
            question: 'In football, who was nicknamed "The Divine Ponytail"?',
            correct: 0,
            multChoice: ['Roberto Baggio', 'Pele', 'Cristiano Ronaldo', 'Ronalinho'],

        },

        q3 = {
            question: 'What flavour is Cointreau?',
            correct: 1,
            multChoice: ['Lemon', 'Orange', 'Cranberry', 'Lime'],
            
        },
        q4 = {
            question: 'If you had Lafite-Rothschild on your dinner table, what would it be?',
            correct: 0,
            multChoice: ['Wine', 'Whiskey', 'Sangria', 'Prosecco'],

        },
        q5 = {
            question: 'When did Margaret Thatcher become Prime Minister?',
            correct: 3,
            multChoice: ['1982', '1980', '1975', '1979'],

        },

        q6 = {
            question: 'Name the three primary colors.',
            correct: 1,
            multChoice: ['Blue, green, and yellow', 'Red, yellow, and blue', 'Red, blue, and green', 'Green, blue, and red'],

        },

        q7 = {
            question: 'What is the largest ocean in the world?',
            correct: 0,
            multChoice: ['Pacific', 'Arctic', 'Atlantic', 'None of above'],

        },

        q8 = {
            question: 'What is the longest river in the world?',
            correct: 2,
            multChoice: ['Nile', 'Yellow', 'Amazon', 'Mekong'],

        },

        q9 = {
            question: 'What is the capital city of Spain?',
            correct: 1,
            multChoice: ['Barcelona', 'Madrid', 'Valencia', 'Seville'],

        },

        q10 = {
            question: 'Where would you find the Sea of Tranquility?',
            correct: 0,
            multChoice: ['The Moon', 'Pluto', 'Jupiter', 'The Sun'],

        }

        
    ];
    

})