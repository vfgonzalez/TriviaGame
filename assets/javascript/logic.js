// Objective: Create a game multi trivia questionnaire
// 1. Create a group of questions and randomly sort them
// when presenting to user. Total # of Questions: 10.
// Must have 4 options, only 1 choice.


// Variables:

// var timer = setTimeout(function(){
//     alert("Hello times Up");
// },3000);

// var questions=[
//     q1:[
//         question, "answer", "guess", "guess", "guess"
//     ]
// ]


// Logic:

// Timer Countdown, begins at count
var n = 35


function countDown(){
   n--;
   if(n > 0){
      setTimeout(countDown,1000);
   }
   else if(n<=0){
       alert("Times Up!")
   }
   $(".timecount").html(n)
  
}



$(".begin-btn").on("click",function(){
    // action below will make button disappear
    $(this).click(false)
    initQuestions();
    countDown();
    $(this).click(false)
    $(this).empty()
    


})
// initQuestions loads set questions on to page with radio buttons to select
function initQuestions(){
    for (var i=0; i<questionArr.length;i++){
        // var num = (Math.floor(12/charArr.length))
        var questOrder = $("<br><div>"+questionArr[i].question+"</div><br><div class='guesses'><span><input type='radio' name='radAnswer"+[i]+"' id='guess1'>"+questionArr[i].guesses[0]+"<span><input type='radio' name='radAnswer"+[i]+"' id='guess2'>"+questionArr[i].guesses[1]+"<span><input type='radio'name='radAnswer"+[i]+"' id='guess3'>"+questionArr[i].guesses[2]+"<span><input type='radio'name='radAnswer"+[i]+"' id='guess4'>"+questionArr[i].guesses[3]+"</span><hr></div>")
        console.log(questionArr[i].question)
        $(".question-list").append(questOrder)
        console.log("answer: "+questionArr[i].answer)
        // Stuck on logic below
        if(answerchoice=== questionArr.answer){
            console.log("Selection Match")
        }
    }
    
}
//  unsure what below calls
var answerchoice = $('input[name="radAnswer"]').val();
   


var questionArr = [
    {
        question: "What is the Color of Darth Vader's Lightsaber?",
        guesses: [" Red ", " Purple "," Green "," Blue "],
        answer: 0
    },
    {
        question: "What planet is Anakin Skywalker From?",
        guesses: [" Naboo "," Alderraan "," Tatooine "," Endor "],
        answer: 2
    },
    {
        question: "How did Padme Die?",
        guesses: [" Eating Popcorn "," In Battle on Hoth "," Hiding in Jakku "," Giving birth to her Children "],
        answer:3
    },
    {
        question: "What was the power that Anakin was trying to learn from Senator Palpatine?",
        guesses: [" The power of Electric Shock "," The Power of Eternal Life "," Teleportation "," Power of Flight "],
        answer:1
    },
   
]