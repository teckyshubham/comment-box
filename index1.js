// function myFunction() {
//   // document.getElementById("demo").innerHTML= "Hello World";
//   // var name=
//   // var comment=;
//   var today = new Date();
//   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//   let object={
//     "firstname":document.getElementById("fname").value,
//     "comment":document.getElementById("comment").value,
//     "time":time
//   }
  
  
//   document.getElementById("demo").innerHTML= JSON.stringyfy(object)" " +time;
// }
let comments=[];
function myFunction() {
   myFunction.preventDefault(); 
  let comment={
    time: Date.now(),
    firstname:document.getElementById("fname").value,
    lastname:document.getElementById("comment").value
  }
  comments.push(comment);
  document.form[0].reset();
  alert("Comment added");
  let pre=document.getElementById("demo");
  pre.textContent='\n'+JSON.stringify(comments,'\t',2);
  // body...
}