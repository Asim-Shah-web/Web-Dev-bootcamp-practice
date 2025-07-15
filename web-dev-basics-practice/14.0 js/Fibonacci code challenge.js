var listofno = [];
//var n=prompt("Enter number of items you want in list: ");
var n = 10;
if (n == 0) {
  console.log(listofno);
} else if (n == 1) {
  listofno.push(0);
  console.log(listofno);
} else if (n == 2) {
  listofno.push(0, 1);
  // listofno.push(1);
  console.log(listofno);
} else if (n > 2) {
  let z = 0;
  let x = 1;
  let y = 0;
  listofno = [0, 1];
  for (var i = 0; i < n - 2; i++) {
    x = listofno[i];
    z = listofno[i + 1];
    y = x + z;                                    //output.push(output[output.length-2]+output[output.length-1]);
    listofno.push(y);
  }
  console.log(listofno);
}
