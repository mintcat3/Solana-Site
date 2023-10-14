// HTML TEMPLATE TO USE
{/* <section class="Quiz">
        <h3>Questions goes here</h3>
            <div class="radio-buttons">
                <div id='quiz-choices' class="quiz-choices">
                    <input type="radio" name="temp" id="temp1" value="firstchoice"> Text <br> 
                    <input type="radio" name="temp" id="temp2" value="secondchoice"> Text <br> 
                    <input type="radio" name="temp" id="temp3" value="thirdchoice"> Text 
                </div>
                
                <div id="q1answer"></div>
            </div> 
    </section>

    <script src=script files goes here></script> */}


function checkbutton () {
        return document.querySelector('input[name="temp"]:checked');
}  
 
document.getElementById("quiz-choices").addEventListener("click", function(event) {
    // console.log("clicked");
    // document.getElementById("q1answer").innerHTML = "incorrect";
    let choice = checkbutton().value
    // console.log(choice)
    if (choice == 'thirdchoice') {
        document.getElementById("q1answer").innerHTML = "correct";
    } else {
        document.getElementById("q1answer").innerHTML = "incorrect";
    }
})