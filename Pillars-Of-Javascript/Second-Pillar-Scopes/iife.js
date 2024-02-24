// IIFE => Immediate Invoked Function Expression
// Author => Jatin Munjal
(function log(message) {
  console.log("Hello");
  let arr = [10, 20, 30, 40, 50];
  console.log(arr);
  console.log(message);
})("Bye!");

// log();
function factorial(val) {
  return val < 1 ? 1 : factorial(val - 1) * val;
}
(function () {
  const arr = [1, 2, 3, 4, 5];
  arr.map(factorial);
  console.log(arr);
  console.trace();
})();

(function sqaure(val) {
  let result = val * val;
  // return result;
  console.log(result);
})(10);

let test = function () {};
