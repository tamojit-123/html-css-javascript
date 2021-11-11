// provide the validation code here

//Provide the solution code here

let contacts = [];

// listen to click of addContact button and add maximum of two additional inputs for inputting Contact Nos.
let fName= document.getElementById('firstname');
let lName= document.getElementById('lastname');
let email= document.getElementById('email');
let homeno=document.querySelector('#homeNo'); 
let workno=document.querySelector('#workNo');
let notes=document.getElementById('notes');
let date=document.getElementById('birthdate');
let validFName=false;
let validLName=false;
let validEmail=false;
let validHomeno=false;
let validWorkno=false;
let validNotes=false;
let validDate=false;
// let addbtn=document.getElementById('addContactNo')

// addbtn.addEventListener('click',(e)=>{
// 
//     e.preventDefault();
//     addbtn.style.display='none'
//    let contactdiv= document.getElementById('contactNos');
//    let innerdiv=contactdiv.appendChild('div');
//     innerdiv.classList.add('col-md-6');
//    let myinput= innerdiv.appendChild('input');
//    myinput.classList.add('form-control form-control-sm');
//    myinput.innerText='id=homeNo';
//    myinput.placeholder='Enter Contact No - Home';

   
// })

const submitContact = (event) => {
    event.preventDefault();
    //contact object captures all the inputs provided
    let contactobj={firstname:fName.value,lastname:lName.value,email:email.value,homeno:homeno.value,workno:workno.value,notes:notes.value,birthdate:date.value};
    //errors object captures all the validation errors

    //display validation summary with error messages

    //if no errors, push the contact to contacts array
    if(validFName && validLName && validEmail && validHomeno && validWorkno && validNotes &&validDate){
        contacts.push(contactobj);

        document.getElementsByTagName('form').item(0).reset();
    }
    //contacts can be logged on to console, or can even be updated on UI
    contacts.forEach(x=>{console.log(x);})
}


    


//function to display validation summary with error messages provided

//function to display error messages alongside the input fields
fName.addEventListener('change',firstNameValidate);
lName.addEventListener('change',lastNameValidate);
email.addEventListener('change',emailValidate);
homeno.addEventListener('change',homenoValidate);
workno.addEventListener('change',worknoValidate);
date.addEventListener('change',dateValidate);
notes.addEventListener('change',notesValidate);

//function to validate firstName
function firstNameValidate(){
   let fNameError=document.getElementById('firstNameError');
   let regex=/(^([a-zA-Z\.]+)$)/;
   
   if(regex.test(fName.value)){
        fNameError.innerText='';
        validFName=true;
   }
   else{
        fNameError.innerText='First name can not contain any number'  
        validFName=false;
   }
}

//function to validate lastName
function lastNameValidate(){
    let lNameError=document.getElementById('lastNameError');
    let regex=/(^([a-zA-Z\.]+)$)/;
    
    if(regex.test(lName.value)){
        lNameError.innerText='';
        validLName=true
    }
     else{
        validLName=false
        lNameError.innerText='Last name can not contain any number'
    }
}
//function to validate email
function emailValidate(){
    let emailError=document.getElementById('emailError');
    let regex=/^([a-zA-Z0-9\.\-]+)@([a-z]+)\.([c][o][m])/;
    
    if(regex.test(email.value)){
        emailError.innerText='';
        validEmail=true;
    }
    else{
        emailError.innerText='enter valid mail';
        validEmail=false;
    }
 }
//function to validate home no
function homenoValidate(){   
    let homeNoError=document.getElementById('homeNoError');
    let regex=/[\+1][\s]?[(]?[0][0-9]{2}[.]?[)]?[\s]?[-]?[0-9]{3}[.]?[\s]?[-]?[0-9]{4}/;
    
    if(regex.test(homeno.value)){
        homeNoError.innerText=''
        validHomeno=true
    }
    else{
        homeNoError.innerText='enter valid phone no.'
        validHomeno=false
    }
}
//function to validate work no
function worknoValidate(){
    let workNoError=document.getElementById('workNoError'); 
    let regex=/[\+1][\s]?[(]?[0][0-9]{2}[.]?[)]?[\s]?[-]?[0-9]{3}[.]?[\s]?[-]?[0-9]{4}/;
    
    if(regex.test(workno.value)){
        workNoError.innerText=''
        validWorkno=true;
    }
    else{
        workNoError.innerText='enter valid work no'
        validWorkno=false;
    }

}
//function to validate additional contact no

//function to validate additional contact no

//function to validate notes
function notesValidate(){
    let notesError=document.getElementById('notesError');   
    if(notes.value.length<=200){
        notesError.innerText='';
        validNotes=true;
    }
    else{
        notesError.innerText='enter words less than 200';
        validNotes=false;
    }
}
//disable all dates for whom age is less than 18
function dateValidate(){
    let birthdateError=document.getElementById('birthdateError');
    if(new Date().getFullYear()-date.value.slice(0,4)>=18){
        birthdateError.innerText=''
        validDate=true;
    }
    else{
        birthdateError.innerText='Age must be equal or greater than 18 '
        validDate=false;    
    }
}

