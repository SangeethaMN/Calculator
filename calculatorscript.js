const numb = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const display2 = document.querySelector(".dis2");
const display1 = document.querySelector(".dis1");
const equal = document.querySelector(".equal");
const ac = document.querySelector(".ac");
const del = document.querySelector(".del");

function appendno(number){
    if(display2.innerHTML == '0'){
        display2.innerText = number;
    }
   else if(number == '.' && display2.innerText.includes('.')){
        return;
    }
    else{
        display2.innerText = display2.innerText + number;
    }
}
function updatedisplay(operator){
    if(display1.innerText == ''){
    display1.innerText = display1.innerText + display2.innerHTML + operator;
    display2.innerText = '';
    }
    else{
        value = display1.innerText;
        sign = value[value.length-1];
        console.log(sign);
        if(sign == '+'){ 
            display1.innerText = parseFloat(value) + parseFloat(display2.innerText);
        }
        else if(sign == '-'){
            display1.innerText = parseFloat(value) - parseFloat(display2.innerText);
        }
        else if(sign == '*'){
            display1.innerText = parseFloat(value) * parseFloat(display2.innerText);
        }
        else if(sign == '/'){
            display1.innerText = parseFloat(value) / parseFloat(display2.innerText);
        }

        if(operator != '='){
        display1.innerText = display1.innerText + operator;
        display2.innerText = '';
        }
        else if(operator == '='){
            display2.innerText = display1.innerText;
            display1.innerText = '';
        }
    }
}


console.log("aaa");
for(const buttons of numb){
    buttons.addEventListener("click", () => {
        appendno(buttons.innerText);
    });
}

for(const oper of operator){
    oper.addEventListener("click", () =>{
        updatedisplay(oper.innerText);
    })
}

equal.addEventListener("click", () => {
    if(display1.innerText != '' && display2.innerText != ''){
        updatedisplay(equal.innerText);
    }
})

ac.addEventListener("click", () => {
    display1.innerText = '';
    display2.innerText = '0';
})

del.addEventListener("click", () =>{
    textnumber = display2.innerText;
    display2.innerText = textnumber.substring(0,textnumber.length-1);
})