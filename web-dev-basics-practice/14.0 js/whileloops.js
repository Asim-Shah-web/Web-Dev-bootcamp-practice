var output = [];
var count=1
function fizzbuzz() {
    //output[0]=1;
   //2 output.push(count);
 // output.push((output));
 while(count<=100){
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
 count++;
}
console.log(output);
  

}
fizzbuzz();
