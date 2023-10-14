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

function format_result(question, result) {
    document.getElementById(question).style.borderStyle = 'solid'
    document.getElementById(question).style.borderWidth = '2px 0px 0px 10px'
    document.getElementById(question).style.width = '30%'
    if (result == true) {
        document.getElementById(question).innerHTML = " correct";
        document.getElementById(question).style.borderColor = 'rgb(49, 195, 49)'
    } else {
        document.getElementById(question).innerHTML = " incorrect";
        document.getElementById(question).style.borderColor = 'red'
    }
}

document.getElementById("question1").addEventListener("click", function(event) {
    // console.log("clicked");
    // document.getElementById("q1answer").innerHTML = "incorrect";
    let choice = checkbutton("1").value
    // console.log(choice)
    /* .style {
    border-style: solid;
    border-width: 2px 0px 0px 10px;
    width: 30%;
    border-color: rgb(49, 195, 49);
} */
    if (choice == 'thirdchoice') {
        format_result("q1answer", true)
    } else {
        format_result("q1answer", false)
    }
})

document.getElementById("question2").addEventListener("click", function(event) {
    // console.log("clicked");
    // document.getElementById("q1answer").innerHTML = "incorrect";
    let choice = checkbutton("2").value
    // console.log(choice)
    if (choice == 'secondchoice') {
        format_result("q2answer", true)
    } else {
        format_result("q2answer", false)
    }
})

document.getElementById("question3").addEventListener("click", function(event) {
    // console.log("clicked");
    // document.getElementById("q1answer").innerHTML = "incorrect";
    let choice = checkbutton("3").value
    // console.log(choice)
    if (choice == 'firstchoice') {
        format_result("q3answer", true)
    } else {
        format_result("q3answer", false)
    }
})