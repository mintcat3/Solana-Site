// HTML TEMPLATE TO USE
{/* <section class="Quiz">
        <h2>Quiz</h2>
        <h3>what da dog doing</h3>
        <div class="radio-buttons">
            <div id='question1' class="quiz-choices">
                <input type="radio" name="question1" id="question1choice1" value="firstchoice"> Summer <br> 
                <input type="radio" name="question1" id="question1choice2" value="secondchoice"> Winter <br> 
                <input type="radio" name="question1" id="question1choice3" value="thirdchoice"> Rainy
            </div>

            <div id="q1answer" class="result"></div>
        </div>

        <h3>what da dog doing2</h3>
        <div class="radio-buttons">
            <div id='question2' class="quiz-choices">
                <input type="radio" name="question2" id="question2choice1" value="firstchoice"> Summer <br> 
                <input type="radio" name="question2" id="question2choice2" value="secondchoice"> Winter <br> 
                <input type="radio" name="question2" id="question2choice3" value="thirdchoice"> Rainy
            </div>

            <div id="q2answer" class="result"></div>
        </div> <br>

        <h3>what da dog doing3</h3>
        <div class="radio-buttons">
            <div id='question3' class="quiz-choices">
                <input type="radio" name="question3" id="question3choice1" value="firstchoice"> Summer <br> 
                <input type="radio" name="question3" id="question3choice2" value="secondchoice"> Winter <br> 
                <input type="radio" name="question3" id="question3choice3" value="thirdchoice"> Rainy
            </div>

            <div id="q3answer" class="result"></div>
        </div> <br>
    </section> */}


function checkbutton(question_number) {
        let name = 'input[name="question' + question_number + '"]:checked'
        return document.querySelector(name);
}  

function format_result(question, result, string) {
    document.getElementById(question).style.borderStyle = 'solid'
    document.getElementById(question).style.borderWidth = '2px 0px 0px 10px'
    document.getElementById(question).style.width = '30%'
    if (result == true) {
        document.getElementById(question).innerHTML = string;
        document.getElementById(question).style.borderColor = 'rgb(49, 195, 49)'
    } else {
        document.getElementById(question).innerHTML = string;
        document.getElementById(question).style.borderColor = 'red'
    }
}

function highlight_choice(num_of_question, question_number, choice_num, color1, color2) {
    for (let i = 1; i <= num_of_question; i++) {
        var string = "question" + question_number + "choice" + i.toString() + "-text";
        if (i == choice_num) {
            document.getElementById(string).style.borderColor = color1
        } else {
            document.getElementById(string).style.borderColor = 'white'
        }
    }
    
}

document.getElementById("question1").addEventListener("click", function(event) {
     /* .style {
    border-style: solid;
    border-width: 2px 0px 0px 10px;
    width: 30%;
    border-color: rgb(49, 195, 49);
} */
    let choice = checkbutton("1").value
    let correct_string = 'Correct: Satoshi Nakamoto created Bitcoin in 2008.'
    let incorrect_string = 'Incorrect: They were integral to the creation of other popular cryptocurrency but not Bitcoin.'
    if (choice == 'firstchoice') {
        format_result("q1answer", false, incorrect_string)
        highlight_choice(3, "1", 1, 'red')
    } 
    if (choice =='secondchoice') {
        format_result("q1answer", false, incorrect_string)
        highlight_choice(3, "1", 2, 'red')
    }
    if (choice == 'thirdchoice') {
        format_result("q1answer", true, correct_string)
        highlight_choice(3, "1", 3, 'rgb(49, 195, 49)')
    } 
})

document.getElementById("question2").addEventListener("click", function(event) {
    let choice = checkbutton("2").value
    let correct_string = 'Correct: It contains the hash of the previous block.'
    let incorrect_string = 'Incorrect: Close, but it is not the data of the previous block.'
    if (choice == 'firstchoice') {
        format_result("q2answer", false, incorrect_string)
        highlight_choice(2, "2", 1, 'red')
    } 
    if (choice =='secondchoice') {
        format_result("q2answer", true, correct_string)
        highlight_choice(2, "2", 2, 'rgb(49, 195, 49)')
    }
})

document.getElementById("question3").addEventListener("click", function(event) {
    let choice = checkbutton("3").value
    let correct_string = 'Correct: Along with a strong encryption, you would need to hack every block in the chain.'
    let incorrect_string = 'Incorrect: Being decentralized does not come with the benefit of security.'
    if (choice == 'firstchoice') {
        format_result("q3answer", true, correct_string)
        highlight_choice(3, "3", 1, 'rgb(49, 195, 49)')
    } 
    if (choice =='secondchoice') {
        format_result("q3answer", false, incorrect_string)
        highlight_choice(3, "3", 2, 'red')
    }
    if (choice == 'thirdchoice') {
        format_result("q3answer", false, incorrect_string)
        highlight_choice(3, "3", 3, 'red')
    } 
})