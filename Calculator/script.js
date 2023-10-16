
const btn0 = document.querySelector("#btn-no17");
const btn1 = document.querySelector("#btn-no13");
const btn2 = document.querySelector("#btn-no14");
const btn3 = document.querySelector("#btn-no15");
const btn4 = document.querySelector("#btn-no9");
const btn5 = document.querySelector("#btn-no10");
const btn6 = document.querySelector("#btn-no11");
const btn7 = document.querySelector("#btn-no5");
const btn8 = document.querySelector("#btn-no6");
const btn9 = document.querySelector("#btn-no7");
let inputValue = document.querySelector("[input-data]");
let expWindow = document.querySelector("#curr-2");
const allClear =document.querySelector("#btn-no1");

const addBtn =document.querySelector("#btn-no16");
const subBtn =document.querySelector("#btn-no12");
const multiBtn =document.querySelector("#btn-no8");
const divBtn =document.querySelector("#btn-no4");
const solveBtn =document.querySelector("#btn-no19");
const deciBtn = document.querySelector('#btn-no18');
const clearBtn = document.querySelector("#btn-no2");
const signBtn = document.querySelector("#btn-no3");

let flag = false;
let sign="";

let result=0;
let exp="";



const digitArray = [btn0,btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9];

function makeExp(input){
    if(input === " "){expWindow.innerText+=(" "); return;}

    expWindow.innerText+=String(input);
}

function insertValue(data){
    inputValue.innerText+=data;
}

function getresult(input){
    console.log(input.innerText);
}

let index=1;

for(let i=0;i<digitArray.length;i++){
    digitArray[i].addEventListener('click',()=>{
        insertValue(i);
    });
}

allClear.addEventListener('click',()=>{
    inputValue.innerText="";
    expWindow.innerText="";
})

addBtn.addEventListener('click',()=>{
    if(inputValue.innerText === "") return;
    if(flag){
        expWindow.innerText = "";
        flag=0;
    }
    makeExp(inputValue.innerText);
    makeExp("+");
    inputValue.innerText="";
})
subBtn.addEventListener('click',()=>{
    if(inputValue.innerText === "") return;
    if(flag){
        expWindow.innerText = "";
        flag=0;
    }
    makeExp(inputValue.innerText);
    makeExp("-");
    inputValue.innerText="";
})

multiBtn.addEventListener('click',()=>{
    if(inputValue.innerText === "") return;
    if(flag){
        expWindow.innerText = "";
        flag=0;
    }
    makeExp(inputValue.innerText);
    makeExp("*");
    inputValue.innerText="";
})
divBtn.addEventListener('click',()=>{
    if(inputValue.innerText === "") return;
    if(flag){
        expWindow.innerText = "";
        flag=0;
    }
    makeExp(inputValue.innerText);
    makeExp("/");
    inputValue.innerText="";
})
solveBtn.addEventListener('click',()=>{
    makeExp(inputValue.innerText);
    if(flag){
        expWindow.innerText = "";
        flag=0;
    }
    makeExp("=");
    let tmp = expWindow.innerText;
    let a = tmp.slice(0,tmp.length-1);
    result = eval(a);
    let resultToString = String(result);
    if(resultToString.length >= 10){
        let tmp = resultToString.slice(0,9);
        inputValue.innerText=tmp;flag=true;return;
    }
    inputValue.innerText=result;
    flag=true;
})
deciBtn.addEventListener('click',()=>{
    insertValue('.');
})
clearBtn.addEventListener('click',()=>{
    if(inputValue.innerText === "") return;
    let a = inputValue.innerText;
    a=a.slice(0,-1);
    inputValue.innerText = a;
})
signBtn.addEventListener('click',()=>{
   if(sign === ""){
        sign= "-";
        inputValue.innerText = sign+inputValue.innerText;
    }
    else{
        let tmp = inputValue.innerText;
        tmp = tmp.slice(1,inputValue.length);
        inputValue.innerText = tmp;
        sign="";
    }

})