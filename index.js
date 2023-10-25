const userInputEl = document.querySelector("#user-input");
const resultsLengthEl = document.querySelector("#results-length-el");
const compLengthEl = document.querySelector("#comp-length-el");
const resultsVolumeEl = document.querySelector("#results-volume-el");
const compVolumeEl = document.querySelector("#comp-volume-el");
const resultsMassEl = document.querySelector("#results-mass-el");
const compMassEl = document.querySelector("#comp-mass-el");




const userNum = [];





userInputEl.addEventListener("keyup", function(event) {
let num = Number(event.key);
if (event.key === "Backspace") {
    userNum.pop();
    write()
} else if (num >= 0) {
    userNum.push(num);
    write()
} else {
    console.log("you should not see this");
}   write()
});






function write() {
    let str;
    for (i = 0; i < userNum.length; i ++)
    str += userNum[i];
    userInputEl.textContent = str;
}

