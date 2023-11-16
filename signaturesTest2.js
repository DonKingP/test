document.getElementById('sign-petition').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the default form submission

  // Get form values
  var name = document.getElementById('name').value;
  var home = document.getElementById('home').value;
  var email = document.getElementById('email').value;
  const signatures = document.getElementById("signatures");
  const counter = document.getElementById("support-counter");
  var hasError = false;
let person = {
name: name,
hometown: home,
email: email
};
  if (person.name.length < 2){
document.getElementById("name").classList.add("error");
    hasError = true;
  }
  else { document.getElementById("name").classList.remove("error");}
  
  if (person.hometown.length < 2) {
    document.getElementById("home").classList.add("error");
    hasError = true;
  }
  else{document.getElementById("home").classList.remove("error");}
  
  if (person.email.length < 2){
  
    document.getElementById("email").classList.add("error");
    hasError = true;
  }
    else if (!person.email.includes(".com")){
       document.getElementById("email").classList.add("error");
      hasError = true;
  }
  else{document.getElementById("email").classList.remove("error")}
  
  if (!hasError) {  //if no error than can make element
    const newSignature = document.createElement("p");
    newSignature.textContent = `🖊️ ${person.name} from ${person.hometown} supports this.`;
    signatures.appendChild(newSignature);

    counter.textContent = `${signatures.children.length} people support our petition`;

    // Clear the form inputs after adding the signature
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("home").value = "";
    toggleModal(person);

  }


  function toggleModal(person) {
    let modal = document.getElementById("thanks-modal");
    let modalContent = document.getElementById("thanks-modal-content");
    modalContent.textContent = `Thank you ${person.name} here is jackie chan`;
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.style.display = 'none';


        clearInterval(intervalId);
    }, 4000);

  }
   var intervalId = setInterval(scaleImage, 100);
  var scaleFactor = 1;
  var modalImage = document.getElementById("modalImage");
  function scaleImage() {
    modalImage.style.transform = `scale(${scaleFactor})`;
    scaleFactor += 0.3;
    if (scaleFactor > 5) {
      clearInterval(intervalId);
    }
  }


});
