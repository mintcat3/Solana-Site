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
let correct_string = 'Correct: Solana allows for a faster transaction process and data transfer'
let incorrect_string = 'Incorrect: this defeats the whole purpose of Solana'
if (choice == 'firstchoice') {
    format_result("q1answer", true , correct_string)
    highlight_choice(2, "1", 1, 'rgb(49, 195, 49)')
} 
if (choice =='secondchoice') {
    format_result("q1answer", false, incorrect_string)
    highlight_choice(2, "1", 2, 'red')
}
})

document.getElementById("question2").addEventListener("click", function(event) {
let choice = checkbutton("2").value
let correct_string = 'Correct: Blockchain is the core-concept that allows for such speedy processes'
let incorrect_string = 'Incorrect: Without blockchains, how would Solana be so efficient?'
if (choice == 'firstchoice') {
    format_result("q2answer", true, correct_string)
    highlight_choice(2, "2", 1, 'rgb(49, 195, 49)')
} 
if (choice =='secondchoice') {
    format_result("q2answer", false, incorrect_string)
    highlight_choice(2, "2", 2, 'red')
}
})

document.getElementById("question3").addEventListener("click", function(event) {
let choice = checkbutton("3").value
let correct_string = 'Correct: You are able to utilize Solana in all of the following, including much more!'
let incorrect_string = 'Incorrect: Although this is true, there are more than just this option.'
if (choice == 'firstchoice') {
    format_result("q3answer", false, incorrect_string)
    highlight_choice(4, "3", 1, 'red')
} 
if (choice =='secondchoice') {
    format_result("q3answer", false, incorrect_string)
    highlight_choice(4, "3", 2, 'red')
}
if (choice == 'thirdchoice') {
    format_result("q3answer", false, incorrect_string)
    highlight_choice(4, "3", 3, 'red')
} 
if (choice == 'fourthchoice') {
    format_result("q3answer", true, correct_string)
    highlight_choice(4, "3", 4, 'rgb(49, 195, 49)')
} 
})