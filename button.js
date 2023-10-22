document.addEventListener("DOMContentLoaded", function() {

var addButton = document.getElementById("button");


var container = document.getElementById("container");

function addNewForm() {
    var newForm = document.createElement("form"); 
    var newLabel = document.createElement("label");
    var newInput = document.createElement("input");
    var newSubmit = document.createElement("input")
      newForm.setAttribute("id" , "discussionBox");
      newLabel.setAttribute("for" , "newLabel");

      newInput.setAttribute("type","text");
      newInput.setAttribute("id", "newInput");
newInput.setAttribute("placeholder","Enter your ideas");
  newInput.setAttribute("name","newInput");
newSubmit.setAttribute("type","Submit");
  
  newLabel.textContent = "New Discussion";
    container.appendChild(newForm);
    newForm.appendChild(newLabel);
    newForm.appendChild(newInput);
    newForm.appendChild(newSubmit);
}

// Add a click event listener to the button
addButton.addEventListener("click", addNewForm);
});