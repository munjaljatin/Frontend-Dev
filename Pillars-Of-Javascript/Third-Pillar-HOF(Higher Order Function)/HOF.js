/*
Higher Order Functions -> There are functions that takes another functions as an arguments are called higher order functions
*/

function f(x, fn)
{
    console.log(x);
    fn();
}

f(10, function exec(){
    console.log("I am an expression passed to a HOF.")
})