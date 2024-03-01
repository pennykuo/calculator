let firstOpen=true;
let currentOperator=0;
let currentOpBool=false;
let beforOperator=0;

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const textUp=document.getElementById("text_up");
const textDown=document.getElementById("text_down");
const btnDel=document.querySelector(".btn_del");
const btnClr=document.querySelector(".btn_clr");
btnDel.addEventListener('click',getDel);
btnClr.addEventListener('click',getClr);

numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
)
operatorButtons.forEach((button)=>
    button.addEventListener('click',()=>setOperator(button.textContent))
)


function getDel(){
    textDown.textContent=textDown.textContent.toString().slice(0,-1);
}
function getClr(){
    textUp.textContent='';
    textDown.textContent=0;
    firstOpen=true;
    currentOperator=0;
    currentOpBool=false;
    remeber_Ans=0;
}
function appendNumber(number){
    if(textDown.textContent==='0' || firstOpen==true){
        textDown.textContent='';
        firstOpen=false;
    }
    textDown.textContent += number;

}
function roundResult(){
    console.log(beforOperator);
        if(currentOperator==1){
            textDown.textContent=Number(textUp.textContent.toString().slice(0,-1))+Number(textDown.textContent);
        }else if(currentOperator==2){
            textDown.textContent=Number(textUp.textContent.toString().slice(0,-1))-Number(textDown.textContent);
        }else if(currentOperator==3){
            textDown.textContent=Number(textUp.textContent.toString().slice(0,-1))*Number(textDown.textContent);
        }else if(currentOperator==4){
            textDown.textContent=Number(textUp.textContent.toString().slice(0,-1))/Number(textDown.textContent);
        }
    
}
function setOperator(operator){
    if(operator==='+'){
        textUp.textContent = textDown.textContent+operator;
        currentOperator=1;
        firstOpen=true;
        currentOpBool=true;
    }else if(operator === '-'){
        textUp.textContent = textDown.textContent+operator;
        currentOperator=2;
        firstOpen=true;
        currentOpBool=true;
    }else if (operator ==='×'){
        textUp.textContent = textDown.textContent+operator;
        currentOperator=3;
        firstOpen=true;
        currentOpBool=true;
    }else if (operator ==='÷'){
        textUp.textContent = textDown.textContent+operator;
        currentOperator=4;
        firstOpen=true;
        currentOpBool=true;
    }else if (operator ==='='){
        let copyDown=textDown.textContent;
        roundResult();
        textUp.textContent += copyDown;
        // currentOperator=5;
        firstOpen=true;
        currentOpBool=true;
    }else if (operator ==='.'){
        textDown.textContent+=operator;
        firstOpen=false;
        // currentOperator=6;
    }
}
