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

// generate a random symbol 
function generateSymbol(){
    let randNum=getRndInteger(0,symbols.length);
    return symbols.charAt(randNum);
}

// calculates strength of password and display color accordingly.
function calcStrength(){
    let hasUpper=false;
    let hasLower=false;
    let hasNum=false;
    let hasSym=false;
    if (uppercaseCheck.checked) hasUpper=true;
    if (lowercaseCheck.checked) hasLower=true;
    if (numberCheck.checked) hasNum=true;
    if (symbolCheck.checked) hassym=true;

    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8){
        setIndicator("#0f0");
    }
    else if ((hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >= 6){
        setIndicator("#ff0");
    } else {
        setIndicator("#f00");
    }
}

// to copy the generated password.
async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value)
        copyMsg.innerText="copied";
    }
    catch(e){
        copyMsg.innerText="failed";
    }
    copyMsg.classList.add("active");
    setTimeout(()=>{
        copyMsg.classList.remove("active")
    },2000)
}

// to identify a particuler check box is checked or not.
function handleCheckboxChange(){
    checkCount=0;
    allCheckBox.forEach((checkbox)=>{
        if (checkbox.checked){
            checkCount++;
        }
    })

    if(passwordLength<checkCount){
        passwordLength=checkCount;
        handleSlider()
    }
}

// to shuffle the generated password.
function shufflePassword(array){
    // Fisher yates method
    for (let i=array.length-1;i>0;i--){
        let j = Math.floor(Math.random() * (i+1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str="";
    array.forEach((el)=>(str += el));
    return str
}

allCheckBox.forEach((checkbox)=>{
    checkbox.addEventListener("change",handleCheckboxChange)
})

inputSlider.addEventListener("input",(e)=>{
    passwordLength=e.target.value;
    handleSlider();
})