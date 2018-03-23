//#1
var input = prompt("Your name please", "anon");
if (input == "Abraham Lincoln") {
    alert("Four score and seven years ago");
}

//#2
var num = prompt("Pick a number greater than 22");
if (Number(num) > 22) {
    alert("This number is greater than 22");
}

//#3
var newNum = prompt("Pick a number larger than 100 and less than 2000");
if (100 < Number(newNum) > 2000) {
    alert("You are amazingly correct!");
} else {
    alert("Awww, it looks that number is not correct…. Try again!");
}

//#4
var fingers = prompt("Choose a number between 1 and 5");
if (Number(fingers) == 1 || 2) {
    alert("You have just won a car!");
} else if (Number(fingers) == 3 || 4) {
    alert("You have just won a gallon of milk!")
} else if (Number(fingers) == 5) {
    alert("“Awww, sorry… it seems like you didn’t choose the right number… No worries! Try again!");
}