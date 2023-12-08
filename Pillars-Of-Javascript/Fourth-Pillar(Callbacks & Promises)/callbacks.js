/**
 * fn => callback function
 * x => variable
 */

function fun(x, fn) {
  for (let i = 0; i < x; i++) {
    console.log(i);
  }
  fn(); // calling the callback function (fn) passed
}

fun(10, function exec() {
  console.log(`I am the exec function passed to a function`);
});
