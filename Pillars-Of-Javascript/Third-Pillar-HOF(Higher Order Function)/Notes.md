## map function

map is a higher order function that is avaiable with arrays.

- map takes a function as an argument -> f
- it returns an array in which every value is actually poplulated by calling the function f with original array element as argument
-
- Every element of the original array is passed one by one in the argument function f
- and then whatever is the output for each individual element, we populate that output in an array
-
- map internally iterates/loops over every element of the given origianl array
- pass that element in the argument function f and then store the returned value inside an array
- - if the function that we are passing inside the map(HOF) function takes two arguments

* then the first argument will be accessing the actual value
* and the second argument will be accessing the index of the value

## sort function

sort is a HOF(Higher order fcuntion) also available with arrays.
the default implementation of digits.sort() fucntion is going to sort the array in lexicographical order or dictionary order

- 0 -> A
- 1 -> B
- 2 -> C
- 3 -> D
- 4 -> E
- 5 -> F
- 6 -> G
- 7 -> H
- 8 -> I
- 9 -> J
- .....
- **_[B, BA, J, BAA, BAAA, BB, BC, BD, BE, C, D] and the sort() function sorts the array according to the dictionary order_**
- [B, BA, BAA, BAAA, BB, BC, BD, BE, C, D, J];
