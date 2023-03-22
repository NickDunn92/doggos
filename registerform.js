var click =  document.getElementsByClassName("input");

// click[0].addEventListener("click", function onClick() {
//   console.log("Clicked!");
//   document.getElementsByClassName("sname");
// })

const inputList = document.querySelectorAll("input");

const inputArray = [...inputList];

inputArray.forEach(input => {
  console.log("Clicked!"); 
})
