document.querySelector
var thirditem=document.firstElementChild.lastElementChild.lastElementChild.lastElementChild;
thirditem.innerHTML="ASIM"
var thirditem=document.firstElementChild.querySelector("body").lastElementChild.lastElementChild;
thirditem.innerHTML="ASIM"
//document.querySelector("button").style.backgroundColor="yellow";
/*
document.querySelector("h1").classList.toggle("huge");
document.querySelector("h1").classList.remove("huge");
document.querySelector("h1").classList.add("huge");
*/

/*

document.querySelectorAll("ul li");      selects all items inside list;
*/
/*
document.querySelector("ul").style.color="yellow";   only select list items and not the one with "a" tag ;
*/
/*
by selecting list items inside a list you just selects the first list item;
document.querySelector("ul li").innerHTML;
'\n        <a href="https://www.google.com">Google</a>\n  
*/
/*
.innerHTML also selects the whole tags inside the li tags i.e: StorageManager,em; we can change the whole html code with this tag;
document.querySelector("ul").lastElementChild.innerHTML="<em>text after javascript</em>"; 
*/
/*
the .textContent only changes the content inside HTML;
document.querySelector("ul").lastElementChild.textContent="text after javascript"; 
'text after javascript'
*/
/*
document.querySelector("a");
<a href=​"https:​/​/​www.google.com">​Google​</a>​
*/
/*
this only gets the first element "a" attribute
document.querySelector("a").getAttribute("href");
'https://www.google.com'
*/
/*
sets the new attribute value;
document.querySelector("a").setAttribute("href","https://www.youtube.com/feed/downloads");
*/
/*
calling an array 
document.getElementsByName("li");

*/
/*
an array stylesheet cannot be changed by this PaymentMethodChangeEvent;
document.getElementsByName("li").style.color="red";
ans:
VM441:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:45
(anonymous) @ VM441:1Understand this error;
*/
/*
by this way u can call a single Element;
document.getElementsByName("li")[2].style.color="red";
*/