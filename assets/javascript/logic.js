// Objective: Create a game multi trivia questionnaire
// 1. Create a group of questions and randomly sort them
// when presenting to user. Total # of Questions: 10.
// Must have 4 options, only 1 choice.


// correct counter, for every right choice, correct count goes up
var correct = 0
// Logic:

// Timer Countdown, begins at count
var n = 35



function countDown() {
    n--;
    if (n > 0) {
        setTimeout(countDown, 1000);
    }
    else if (n <= 0) {
        // alert shows how many correct, and how many incorrect
        alert("Times Up!\n Correct Guesses: " + correct + "\n Incorrect: " + (questionArr.length - correct))

    }
    $(".timecount").html(n)

}



$(".begin-btn").on("click", function () {
    // action below will make button disappear and begin game

    initQuestions();
    countDown();

    $(this).hide()




})
// initQuestions loads set questions on to page with radio buttons to select
function initQuestions() {


    for (var i = 0; i < questionArr.length; i++) {
        $("#form1").append("<div id='Questfill'>" + questionArr[i].question + "</div><input type='radio' name='radio" + [i] + "' value='" + questionArr[i].answer[0] + "'>" + questionArr[i].guesses[0] + "<input type='radio' name='radio" + [i] + "' value='" + questionArr[i].answer[1] + "'>" + questionArr[i].guesses[1] + "<input type='radio' name='radio" + [i] + "' value='" + questionArr[i].answer[2] + "'>" + questionArr[i].guesses[2] + "<input type='radio' name='radio" + [i] + "' value='" + questionArr[i].answer[3] + "'>" + questionArr[i].guesses[3] + "<br><hr>")


        console.log(questionArr[i].question)

        console.log('radio' + [i] + '')
        console.log(questionArr[i].guesses)
        console.log("answers" + questionArr[i].answer)

    }

    // radio selection below should track value of radio button selected
    // increases value of correct if right choice, otherwise adds 0 to correct
    // **ERROR** current code only counts first choice, then doesnt continue to add
    $('#form1 input').on('change', function () {

        console.log("response " + parseInt($('input:checked', "#form1").val()))
        correct += parseInt($('input:checked', "#form1").val())
        console.log("Correct value" + correct)


    })

}






var questionArr = [
    {
        question: "What is the Color of Darth Vader's Lightsaber?",
        guesses: [" Red ", " Purple ", " Green ", " Blue "],
        answer: [1, 0, 0, 0]
    },
    {
        question: "What planet is Anakin Skywalker From?",
        guesses: [" Naboo ", " Alderraan ", " Tatooine ", " Endor "],
        answer: [0, 1, 0, 0]
    },
    {
        question: "How did Padme Die?",
        guesses: [" Eating Popcorn ", " In Battle on Hoth ", " Hiding in Jakku ", " Giving birth to her Children "],
        answer: [0, 0, 0, 1]
    },
    {
        question: "What was the power that Anakin was trying to learn from Senator Palpatine?",
        guesses: [" The power of Electric Shock ", " The Power of Eternal Life ", " Teleportation ", " Power of Flight "],
        answer: [0, 1, 0, 0]
    }

]