// Objective: Create a game multi trivia questionnaire
// 1. Create a group of questions and randomly sort them
// when presenting to user. Total # of Questions: 10.
// Must have 4 options, only 1 choice.


// correct counter, for every right choice, correct count goes up
var correct = 0
// Logic:

// Timer Countdown, begins at count
var n = 35

// Imperial March while questions are being guessed
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "./assets/images/march.mp3");
// Darth vader voice after time's up
var power = document.createElement("audio");
power.setAttribute("src", "./assets/images/power.mp3");



function countDown() {
    n--;
    if (n > 0) {
        setTimeout(countDown, 1000);
    }
    else if (n < 1) {
        // alert shows how many correct, and how many incorrect
        audioElement.pause()
        alert("Times Up!\n Correct Guesses: " + correct + "\n Incorrect: " + (questionArr.length - correct) + "\n Refresh Page to Begin New Game!")
        power.play()
    }
   
    $(".timecount").html(n)

}



$(".begin-btn").on("click", function () {
    // action below will make button disappear and begin game

    initQuestions();
    countDown();

    $(this).hide()
    audioElement.play()




})
// initQuestions loads set questions on to page with radio buttons to select
function initQuestions() {


    for (var i = 0; i < questionArr.length; i++) {
        $("#form1").append("<div id='Questfill'>" + questionArr[i].question +
         "</div><input class='guesses' type='radio' name='radio" + [i] + "' value='" 
         + questionArr[i].answer[0] + "'>" + questionArr[i].guesses[0] + "<input class='guesses'  type='radio' name='radio" + [i] + "' value='" 
         + questionArr[i].answer[1] + "'>" + questionArr[i].guesses[1] + "<input class='guesses'  type='radio' name='radio" + [i] + "' value='" + questionArr[i].answer[2] + "'>"
         + questionArr[i].guesses[2] + "<input class='guesses'  type='radio' name='radio" + [i] + "' value='" + questionArr[i].answer[3] + "'>" 
         + questionArr[i].guesses[3] + "<br><hr>")


        

    }
    
    // radio selection below should track value of radio button selected
    // increases value of correct if right choice, otherwise adds 0 to correct
    
        $('.guesses').on('click', function (event) {
            var userChoice= $(event.target).val()
            console.log("response " + $(event.target).val())
            correct += parseInt($(event.target).val())
            console.log("Correct value: " + correct)
 
        })

        $(":radio").click(function(){
            var radioName = $(this).attr("name"); //Get radio name
            console.log(radioName) //radio0
            

            $(":radio[name='"+ radioName+"']").attr("disabled", true); //Disable all with the same name
         });


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
        answer: [0, 0, 1, 0]
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
    },
    {
        question: "How Many Star Wars Episode Movies are there Currently?",
        guesses: [" 10 ", " 7 ", " 6 ", " 8 "],
        answer: [0, 0, 0, 1]
    },
    {
        question: "Who is Darth Maul's Master?",
        guesses: [" Darth Sidious ", " Senator Palpatine ", " General Grievous ", " Darth Vader "],
        answer: [1, 0, 0, 0]
    },
    {
        question: "Who is the genetic Template for the Clone Troopers?",
        guesses: [" Obi-Wan Kenobi ", " Boba Fett ", " Count Dooku ", " Jango Fett "],
        answer: [0, 0, 0, 1]
    },
    {
        question: "Who Kills Jabba The Hutt?",
        guesses: [" Han Solo ", " Lando Calrissian ", " Princess Leia ", " Luke Skywalker "],
        answer: [0, 0, 1, 0]
    },
    {
        question: "What substance is Han Solo frozen in?",
        guesses: [" Kryptonite  ", " Thermite ", " Kyber Crystals ", " Carbonite "],
        answer: [0, 0, 0, 1]
    },
    {
        question: " 'Do or Do Not, There is No ... ?' ",
        guesses: [" Try  ", " Maybe ", " Cry ", " Failing "],
        answer: [1, 0, 0, 0]
    },


]