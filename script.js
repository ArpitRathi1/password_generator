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
