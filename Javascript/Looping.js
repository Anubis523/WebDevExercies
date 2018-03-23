//#1
for (i = 0; i < 10; i++) {
    console.log("I love making pizza pies!");
}

//#2
for (var counter = 1; counter < 101; counter++) {
    console.log(counter);
}

//#3
var fruitStand = ["apple", "pear", "orange", "banana", "mango"];
for (var i = 0; i < 5; i++) {
    console.log(fruitStand[i]);
}
//line break between these two for easier reading
console.log("\n");

//#3.5 Bonus Challenge
var j = 0;
while (j < 5) {
    console.log(fruitStand[j]);
    j++;
}

//#4
var match = "";
while (match != "NYCDA") {
    var guess = prompt("Guess a word");
    match = guess;
}