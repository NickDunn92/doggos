const inputs =  document.getElementsByTagName("input");

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("click", function() {
    console.log("Click!");
  })
}

// var inputClick = inputs[0].addEventListener("click", function onClick() {
//   console.log("Clicked!");
//   document.getElementsByClassName("sname");
// })

// const inputList = document.querySelectorAll("input");

// // const inputArray = [...inputList];

// // inputArray.forEach(input => {
// //   console.log("Clicked!"); 
// // })

// inputs.addEventListener("click", (event) => {});
// onclick = (event) => {};
