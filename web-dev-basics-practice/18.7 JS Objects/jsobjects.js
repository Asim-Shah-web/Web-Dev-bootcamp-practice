/*   js object
var houseKeeper1 = {
    name: "ruby",
    age: 56,
    workingreportoir: [cleaning,sweeping],
    experienced: true
} 
    // constructor function in js;
function HouseKeeper(name,age,workingreportoir,experienced) {
    this.name= name;
    this.age= age;
    this.workingreportoir=workingreportoir;
    this.experienced=experienced;
}
    //  putting values into objects using constructor function ;
var houseKeeper2=new HouseKeeper("rani",60,["bathroom","kitchen"],true);
      // calling an object variables;
      houseKeeper2.name;
*/
/*
//js objects     and methods;
var houseKeeper1 = {
    name: "ruby",
    age: 56,
    workingreportoir: [cleaning,sweeping],
    experienced: true,
   sayfunc: function(){
        alert("how are you");
        anotherfinction();
    } 
} 
//calling method from an object
//
houseKeeper1.sayfunc();
\//
*/
//      objects , Methods() and the dot notation
function HouseKeeper(name, age, workingReportoir, experienced) {
  this.name = name;
  this.age = age;
  this.workingReportoir = workingReportoir;
  this.experienced = experienced;
  this.sayfunc = function () {
    alert("how are you");
    anotherfunction();
  };
}
var houseKeeper3 = new HouseKeeper("abai",70,["lobby", "balcony", "bathroom"],true);
