// Provide persistence solution code here

function fetchData(){
    let xhr=new XMLHttpRequest();

    xhr.open('GET','http://localhost:3000/posts',false);

    let m;
    xhr.onload=function(){
        
        if(xhr.status==200){
           console.log(JSON.parse(xhr.responseText));
          m=JSON.parse(xhr.responseText);
        }
        else{
            console.log("Error");
        }
        
    } 
    xhr.send();
    return m;
}

function showPersistedData(){
    
        let xhr=new XMLHttpRequest();
    
        xhr.open('POST','http://localhost:3000/posts',true);
    
        xhr.setRequestHeader('Content-type','application/json');
        xhr.onload=function(){
            // console.log('llll')
            if(xhr.status==200 || xhr.status==201){
                console.log(JSON.parse(xhr.responseText));
            }
            else{
                console.log("Error");
            }
                    
        }
         
        let params=JSON.stringify({"firstname":fName.value,"lastName":lName.value,"email":email.value,"phone":homeno.value}); 
        xhr.send(params);
      
    
    
}
