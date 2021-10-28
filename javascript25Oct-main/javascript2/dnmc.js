var mydiv = document.createElement("div");
mydiv.textContent = "This is div1 inner"
var myheader = document.createElement("h1");
myheader.textContent = "This is heading 1 added dynamically";
mydiv.appendChild(myheader); //<div><h1></h1></div>
var mybody = document.getElementById("b1");
mybody.appendChild(mydiv);

mybody.style.backgroundColor = "red";