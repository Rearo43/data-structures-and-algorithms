# `Array Shift`

### Challenge
- [x] Takes in an array plus the value to be added (outside of array)

- [x] Add the new value into the middle index position (ex: 4 index positions, new value is added to index position 2)

- [x] Return new array

- [x] Don't use an built-in methods that do this exactly what is being asked

### Approach & Efficiency
- Used Math.ceil to round up when the given array has an odd number of index positions. Using the length of the array divided by two, along with the method previously mentioned targets the middle of the array.

    Using a for loop where "i" has to be less than the value of the middle of the array allows for the first half of the given array to be pushed into a new array. To finished out the problem if Value is pushed into the array after the first loop Value at the moment is the end of the array and will become the middle of the array after the second for loop. 
    
    The second for loop starts at the index position previously targeted as the middle (let i = middle; i < arr.length) and continues pushing the second half of the given array into the new array.

### Solution
