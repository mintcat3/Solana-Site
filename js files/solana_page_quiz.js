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

document.getElementById("question1").addEventListener("click", function(event) {
    let choice = checkbutton("1").value
    let correct_string = 'Correct: '
    let incorrect_string = 'Incorrect: '
    if (choice == 'firstchoice') {
        format_result("q1answer", true, correct_string)
    } else {
        format_result("q1answer", false, incorrect_string)
    }
})


document.getElementById("question2").addEventListener("click", function(event) {
    let choice = checkbutton("2").value
    let correct_string = 'Correct: '
    let incorrect_string = 'Incorrect: '
    if (choice == 'firstchoice') {
        format_result("q2answer", true, correct_string)
    } else {
        format_result("q2answer", false, incorrect_string)
    }
})


document.getElementById("question3").addEventListener("click", function(event) {
    let choice = checkbutton("3").value
    let correct_string = 'Correct: '
    let incorrect_string = 'Incorrect: '
    if (choice == 'firstchoice') {
        format_result("q3answer", true)
    } else {
        format_result("q3answer", false)
    }
})