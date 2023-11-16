document.addEventListener("DOMContentLoaded", () => {
  const signNowButton = document.getElementById("sign-now-button");
  const signatures = document.getElementById("signatures");
  const counter = document.getElementById("support-counter");

  signNowButton.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email");
    const hometown = document.getElementById("home").value;

    const petitionInputs = document.getElementById("sign-petition").elements;
    let hasError = false;

    for (let i = 0; i < petitionInputs.length; i++) { //code so it makes an error for inputs that are below 2 characters
      if (petitionInputs[i].value.length < 2) {
        petitionInputs[i].classList.add('error');
        hasError = true;
      } else {
        petitionInputs[i].classList.remove('error');
      }
    }
    
    if (!email.value.includes('.com')) {  //.com checker
      email.classList.add('error');
      hasError = true;
    }
    else {
      email.classList.remove('error')
    }

    if (!hasError) {  //if no error than can make element
      const newSignature = document.createElement("p");
      newSignature.textContent = `🖊️ ${name} from ${hometown} supports this.`;
      signatures.appendChild(newSignature);

      counter.textContent = `${signatures.children.length} people support our petition`;

      // Clear the form inputs after adding the signature
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("home").value = "";
    }

    
  });
});



