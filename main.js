const dob = document.querySelector("#dob");
const luckyNum = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check");
const output = document.querySelector("#output");

console.log(dob,luckyNum,checkBtn);

checkBtn.addEventListener("click",() => {
    const dateStr = dob.value;
    //converting num of type string to number
    const num = Number(luckyNum.value);
    //validation for input
    if(dateStr&& num) {
        checkIfLucky(dateStr, num);
    } else {
        output.innerHTML = "Please fill input!"
    }
})

function checkIfLucky(dateStr, num) {
    const sum = addDate(dateStr);
    console.log("num: " + num);
    console.log("sum % num: " + sum % num);
    if(sum % num === 0) {
        output.innerHTML = "lucky"
    } else {
        output.innerHTML = "unlucky"
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