console.log("Hello This is a demo of external Script");

//how to create an array
let Myarr = []; //empty array
console.log(Myarr);

//create an array with data
let Arr2 = [10, 56, 50, 90];

//length of array
let len = Arr2.length;
console.log("Length of the Array is : " + len);

//display an array directly
console.log(Arr2[5]);

//put value in an array using subscript
Arr2[4] = 100;
console.log(Arr2);
Arr2[3] = 55;
console.log(Arr2);

//traverse value from array using for in
for (indxval in Arr2) {
    console.log("The index value is" + indxval);
}

for (value of Arr2) {
    console.log("The  value of array isis" + value);
}

//forEach() is the best efficient method to traverse an array
function dispalyArray(item, index) {
    console.log("Item Stored in:" + index + "having Value:" + item);
}

Arr2.forEach(dispalyArray);
console.log("Adding value to an array using Push function");
console.log("Current value of Arr2 .....");
console.log(Arr2);

//push function to be used to add an element in an Array
Arr2.push("Saurabh"); //adding string value
console.log("The current value of the array is :");
console.log(Arr2);
Arr2[0] = "Tomojit";
console.log(Arr2);
Arr2.unshift("new Value");
console.log(Arr2);

//removal of value from Array
//pop ()
let delval = Arr2.pop();
console.log(Arr2);
console.log("Value deleted from Array is :" + delval);

//shift() to delete from array
let del = Arr2.shift();
console.log("Value deleted from Array is :" + del);