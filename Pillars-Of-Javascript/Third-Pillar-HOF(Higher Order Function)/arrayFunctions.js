// creating an array arr
const arr = [2,4,6,8,10];

function square(element)
{
    return element*element;
}

const result = arr.map(square);
console.log(result);