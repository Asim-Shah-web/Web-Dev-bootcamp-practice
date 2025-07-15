var name = "asIM";
console.log(name);
var char1st = name.slice(0,1);
char1st = char1st.toUpperCase();
var restname = name.slice(1,name.length);
restname = restname.toLowerCase();
var fname = char1st + restname; 
console.log(fname);
