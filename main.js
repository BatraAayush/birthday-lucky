const dob = document.querySelector("#dob");
const luckyNum = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check");
const output = document.querySelector("#output");

checkBtn.addEventListener("click",() => {
    const dateStr = dob.value;
    //converting num of type string to number
    const num = Number(luckyNum.value);
    //validation for input
    if(dateStr && num > 0) {
        checkIfLucky(dateStr, num);
    } else {
        output.innerHTML = "Please insert valid input!";
        output.style.color = "red";

    }
})

function checkIfLucky(dateStr, num) {
    const sum = addDate(dateStr);
    if(sum % num === 0) {
        output.innerHTML = "Yayyy!!!Your Birthdate is LUCKY &#128518;";
        output.style.color = "#163a54";

    } else {
        output.innerHTML = "Oops! Your Birthdate is UNLUCKY...<br>REMEMBER: You make your own LUCK &#128526;";
        output.style.color = "#163a54";
    }

}

function addDate(dateStr) {
    //removing hyphen from date string
    dateStr = dateStr.replaceAll("-","");
    let sum = 0;
    for(let i = 0; i < dateStr.length; i ++) {
        sum += Number(dateStr.charAt(i));
    }
    console.log("sum: " + sum);
    return sum;
}