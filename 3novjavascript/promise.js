let posts=[
    {title:"post1",body:"this is post1"},
    {title:"post2",body:"this is post2"}
];
function getPosts(){
    setTimeout(()=>{
     let output='';
     posts.forEach((post,index)=>{
       
      output+=`<li>${post.title }</li>`;

     });
     document.body.innerHTML=output;
    },1000);
}
function createPost(post){

   return new Promise((resolve,reject)=>{
       setTimeout(()=>{
         posts.push(post);
         const error=true;
         if(!error){
             resolve();
         }
         else{
             reject(error);
         }

       },2000);
    })
   
}
createPost({title:"Post3",body:"This is Post 3"})
.then(getPosts)
.catch((err)=>{
console.log("My Error"+err);
});