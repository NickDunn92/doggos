const form = document.querySelector("form");
const inputs =  document.getElementsByTagName("input");
const firstName = document.getElementById("firstname");
const firstNameError = document.querySelector("#firstname + span.error");

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("click", function() {
    console.log("Click!");
  });
  inputs[i].addEventListener('input', function() { 
    document.getElementById("inputText").value;
    console.log("Hi!");
  });
};

