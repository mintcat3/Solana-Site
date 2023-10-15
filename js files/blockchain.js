function getRotationalValue(item) {
    let rotationValue = window.getComputedStyle(item, null).getPropertyValue("transform")
    // console.log(rotationValue)
    let values = rotationValue.split('(')[1].split(')')[0].split(',')
    // console.log(values)
    let adjacent = values[0]
    let opposite = values[1]
    let angle = Math.round(Math.atan2(opposite, adjacent) * (180/Math.PI));
    // console.log(angle)
    return angle
}


var collapsible = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < collapsible.length; i++) {
    collapsible[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropDownArrow = this.getElementsByClassName("dropdown-arrow")[0]
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
            for (i = 0; i < 180; i++) {
                setTimeout(() => {
                    let rotate = getRotationalValue(dropDownArrow) - 1
                    // console.log(rotate)
                    dropDownArrow.style.transform = "rotate(" + rotate.toString() + "deg)"
                }, 100);
              }
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            for (i = 0; i < 180; i++) {
                setTimeout(() => {
                    let rotate = getRotationalValue(dropDownArrow) + 1
                    // console.log(rotate)
                    dropDownArrow.style.transform = "rotate(" + rotate.toString() + "deg)"
                }, 100);
            }
            
        } 
    });
}






