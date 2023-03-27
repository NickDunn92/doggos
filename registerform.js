const form = document.querySelector("form");
const inputs =  document.getElementsByTagName("input");
const firstName = document.getElementById("firstname");
const firstNameError = document.querySelector("#firstname + span.error");

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("click", function() {
    console.log("Click!");
  });
}

firstName.addEventListener("input", (event) => {
  if (firstName.validity.valid) {
    firstNameError.textContent("");
    firstNameError.className("error");
  } else {
    showError();
  }
});

form.addEventListener("submit", (event) => {
  if (!firstName.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (firstName.validity.valueMissing) {
    firstNameError.textContent = "Please enter your first name"; 
  } else (firstName.validity.typeMismatch) 
    firstName.textContent = "Please enter a valid name";
}