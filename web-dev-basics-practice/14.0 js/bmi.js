/*
function func_bmi(weight, height) {
  return Math.floor(weight / Math.pow(height, 2)); //return Math.floor(weight/Math.pow(height,2));
}

var weight = 24;
var height = 1;
// console.log("Your BMI is: "  + Math.floor(func_bmi(weight,height)));
//var BMI = func_bmi(98, 5);
 var BMI = func_bmi(weight,height);
if (BMI < 18.5) {
  console.log("Your BMI is " + BMI + ", so you are underweight.");
} else if (BMI > 18.5 && BMI <= 24.9) {
  console.log("Your BMI is " + BMI + ", so you have a normal weight.");
} else if (BMI > 24.9) {
  console.log("Your BMI is " + BMI + ", so you are over weight.");
}

function func_bmi(weight, height) {
  return Math.floor(weight / Math.pow(height, 2)); //return Math.floor(weight/Math.pow(height,2));
}
*/
var output = [];
var count=1
function fizzbuzz() {
    //output[0]=1;
   //2 output.push(count);
 // output.push((output));
 if(count%3!==0 && count%5!==0){
    output.push(count);
 }
else if(count%3===0 && count%5===0){
    output.push("fizzbuzz");
 }
else  if(count%3===0){
    output.push("fizz");
 }
 else if(count%5===0){
    output.push("buzz");
 }
console.log(output);
  count++;

}
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();
fizzbuzz();