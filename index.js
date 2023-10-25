//elements from the HTML
const userInputEl = document.querySelector("#user-input");
const resultsLengthEl = document.querySelector("#results-length-el");
const resultsVolumeEl = document.querySelector("#results-volume-el");
const resultsMassEl = document.querySelector("#results-mass-el");
//the main input array - it is by default a number
const userNumArr = [];
//user string and number from array
let userStr;
let userNum;
const conversion = {length: 0.3048, volume: 3.7854, mass: 0.453592}


//this grabs every keypress in the input field, calls userInput after every check
//it logs out the user data only allowing numbers as well as pushes the numbers in an array
userInputEl.addEventListener("keydown", function(event) {
let num = Number(event.key);
if (event.key === "Backspace") {
    userNumArr.pop();
    userInput()
} else if (num >= 0 && num <= 9) {
    userNumArr.push(num);
    userInput()
} else {
    event.preventDefault();
    userInput()
} 
});

//calls out the value of the array and sets userStr and Num respectively
function userInput() {
    let raw = "";
    for (let i = 0; i < userNumArr.length; i++) {
    raw += userNumArr[i];
    }
    userStr = raw.trim()
    userInputEl.textContent = userStr;
    userNum = Number(userStr);
    resultsLengthEl.textContent = `${userStr} Meters = ${divide(conversion.length)} Feet | ${userStr} Feet = ${multi(conversion.length)} Meters`;
    resultsVolumeEl.textContent = `${userStr} Liters = ${divide(conversion.volume)} Gallons | ${userStr} Gallons = ${multi(conversion.volume)} Liters`;
    resultsMassEl.textContent = `${userStr} Kilograms = ${divide(conversion.mass)} Pounds | ${userStr} Pounds = ${multi(conversion.mass)} Kilograms`
}


function divide(x) {
    let sum = userNum / x;
    return sum
}
function multi(x) {
    let sum = userNum * x;
    return sum
}

