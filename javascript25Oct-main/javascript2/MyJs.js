/*
//getElementsByTagName will return collection of html elements by taking its name as parameter and can be accessed using array
var x=document.getElementsByTagName("p");
document.write("=====================Script output =====================<br>");
document.write(x[5].innerHTML);//check x[1]
document.write("<hr/></br>");

//getElementsByClassName will return the collection of elements having class name as arguments
var clsdata=document.getElementsByClassName("selectors");
document.write(clsdata[0].innerHTML);
document.write("<hr/>");

//getElementById*/
document.write("=====================Script output =====================<br>");
var MyData = document.getElementById("xx");

document.write("My Data :" + MyData.innerHTML);

document.write("<hr/>");

document.write("<hr/>");

//queryselector
var myinfo = document.querySelector("#xx");
document.write(myinfo.innerHTML)
document.write("<br/>================querySelectorAll==========================</br>");

var ex1 = document.querySelectorAll("#xx");


document.write(ex1[1].innerHTML + "<br>");

document.write("<br/>================querySelectorAll==========================");