const inputSlider=document.querySelector("[data-lengthSlider]");
const lengthDisplay=document.querySelector("[data-lengthNumber");
const passwordDisplay=document.querySelector("[data-passwordDisplay]");
const copyBtn=document.querySelector("[data-copy]");
const copyMsg=document.querySelector("[data-copyMsg]");
const uppercaseCheck=document.querySelector("#uppercase");
const lowercaseCheck=document.querySelector("#lowercase");
const symbolCheck=document.querySelector("#symbols");
const numberCheck=document.querySelector("#numbers");
const indicator=document.querySelector("[data-indicator]");
const generateBtn=document.querySelector(".generator-button");
const allCheckBox=document.querySelectorAll("input[type=checkbox]");
const symbols='!#$%^&+=';

let password="";
let passwordLength=10;
let checkCount=1;
handleSlider();
setIndicator("#ccc")
// sets password length accoding to sider.
function handleSlider(){
    inputSlider.value=passwordLength;
    lengthDisplay.innerText=passwordLength; 
    const min=inputSlider.min;
    const max=inputSlider.max;
    inputSlider.style.backgroundSize = ( (passwordLength - min)*100/(max - min)) + "%"
}

// change color of indicator.
function setIndicator(color){
    indicator.style.backgroundColor=color;
    indicator.style.boxShadow =`0px 0px 12px 1px ${color}`
}

// generate a random integer value.
function getRndInteger(min,max){
    return Math.floor(Math.random()*(max-min)) + min
}

// generate a random number between 0 to 9.
function generateRandomNumber(){
    return getRndInteger(0,9);
}

// generate a random lower case alphabate using ASCII code
function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97,123));
}

// generate a random upper case alphabate using ASCII code
function generateUpperCase(){
    return String.fromCharCode(getRndInteger(65,91));
}