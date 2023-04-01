const form = document.querySelector("form");
const inputs =  document.getElementsByTagName("input");

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("click", function() {
    console.log("Click!");
  });
  inputs[i].addEventListener('input', function() { 
    const firstName = document.getElementById("firstname").value;
    console.log(firstName);
  });
};

