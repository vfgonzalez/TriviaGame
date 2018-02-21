var correct = 0


var questionArr = [
    {
        question: "What is the Color of Darth Vader's Lightsaber?",
        guesses: [" Red ", " Purple "," Green "," Blue "],
        answer: [1,0,0,0]
    },
    {
        question: "What planet is Anakin Skywalker From?",
        guesses: [" Naboo "," Alderraan "," Tatooine "," Endor "],
        answer: [0,1,0,0]
    },
    {
        question: "What planet is Anakin Skywalker From?",
        guesses: [" Naboo "," Alderraan "," Tatooine "," Endor "],
        answer: [0,0,0,1]
    }
]


function initGame(){
    for (var i=0; i<questionArr.length; i++){
        $("#form1").append("<div id='Questfill'>"+questionArr[i].question+"</div><input type='radio' name='radio"+[i]+"' value='"+questionArr[i].answer[0]+"'>"+questionArr[i].guesses[0]+"<input type='radio' name='radio"+[i]+"' value='"+questionArr[i].answer[1]+"'>"+questionArr[i].guesses[1]+"<input type='radio' name='radio"+[i]+"' value='"+questionArr[i].answer[2]+"'>"+questionArr[i].guesses[2]+"<input type='radio' name='radio"+[i]+"' value='"+questionArr[i].answer[3]+"'>"+questionArr[i].guesses[3]+"<br>")
        
    }
            $('#form1 input').on('change', function() {
            
                // alert($('input:checked', "#form1").val());
                console.log($('input[name="radio'+[i]+'"]:checked', "#form1").val())
                correct += parseInt($('input:checked', "#form1").val())
            
                console.log("Correct value" +correct)   
            })
}
initGame()

