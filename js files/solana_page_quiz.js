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
    console.log("clicked");
    // document.getElementById("q1answer").innerHTML = "incorrect";
    let choice = checkbutton("1").value
    // console.log(choice)
    if (choice == 'firstchoice') {
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
    if (choice == 'firstchoice') {
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