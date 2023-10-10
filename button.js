document.addEventListener("DOMContentLoaded", function() {
    // Your code here
// Get a reference to the button element by its id
  var counter = 1;
var addButton = document.getElementById("button");

// Get a reference to the container where new divs will be added
var container = document.getElementById("container");

// Function to create and append a new div element
function addNewDiv() {
    var newDiv = document.createElement("newDiv"); // Create a new <div> element
    newDiv.textContent = "test " + counter; 
  counter++;
 ;// Set the content of the div (you can customize this)
    container.appendChild(newDiv); // Append the new div to the container
}

// Add a click event listener to the button
addButton.addEventListener("click", addNewDiv);
});