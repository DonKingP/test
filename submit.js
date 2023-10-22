
let myForm = document.getElementById("discussionBox");

  
function onSubmit(event)  {


  var post = document.getElementById("newInput").value;
  console.log(post);
   event.preventDefault();
}
myForm.addEventListener("submit", onSubmit);
