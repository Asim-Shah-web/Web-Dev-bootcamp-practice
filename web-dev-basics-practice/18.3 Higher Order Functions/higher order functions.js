// HIGHER ORDER FUNCTIONS:: Higher order functions are the functions that can take other functions as input.
function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function division(num1,num2){
    return num1/num2;
}
function calculator(num1,num2,operator){
    return operator(num1,num2);
}

//$0.addEventListener("click",function(){alert("ok")});  calling the selected element in browser chrome developer tools by using $0;