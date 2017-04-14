// Do your work in this file.
function boxClicked() {
    console.log("Box clicked");
}

var boxes = document.querySelectorAll(".box");


console.log(boxes.length);


var numberOfBoxes = boxes.length;


for (var i = 0; i < numberOfBoxes; i++) {
    boxes[i].addEventListener("click", boxClicked);
}


if (numberofBoxes >= 201 && numberofBoxes <= 300) {
    boxes[i].style.backgroundColor = "yellow";
}
if (numberofBoxes >= 301 , numberofBoxes <= 400) {
    boxes[i].style.backgroundColor = "green";
}
if (numberofBoxes >= 401 , numberofBoxes <= 500) {
    boxes[i].style.backgroundColor = "orange";
}
if (numberofBoxes >= 501 , numberofBoxes <= 600) {
    boxes[i].style.backgroundColor = "pink";
}
if (numberofBoxes >= 601 , numberofBoxes <= 700) {
    boxes[i].style.backgroundColor = "black";
}
if (numberofBoxes >= 701 , numberofBoxes <= 800){
    boxes[i].style.backgroundColor = "brown";
}
if (numberofBoxes >= 801 , numberofBoxes <= 900) {
    boxes[i].style.backgroundColor = "blue";
}






