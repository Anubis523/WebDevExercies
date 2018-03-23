//#1
function multiplier(x) {
    return (Number(x) * 25);
}

//#2
function fullName(firstName, lastName) {
    return (firstName + " " + lastName);
}

//#3
function fullNameAndAge(firstName, lastName, age) {
    var result = fullName(firstName, lastName);
    return (result + ", " + age);
}