// querySelector
// this selector performs the operation on the first element
const div = document.querySelector("div");
div.innerHTML = "<h1> This is h1 Tag. </h1>";
console.log(div.innerHTML);

const code = document.querySelector("code");
code.innerHTML = alert("hello");