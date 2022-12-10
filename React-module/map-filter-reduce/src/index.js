var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

numbers.map((x)=>{
  return x*2;
})

//Filter - Create a new array by keeping the items that return true.
var newNums = numbers.filter((num)=>{
  return num<10;
});

//Reduce - Accumulate a value by doing something to each item in an array.

var newNums2 = numbers.reduce((acc,num)=>{
  return acc+num;
})

//Find - find the first item that matches from an array.

var newNums3 = numbers.find((num)=>{
  return num>10;
})

//FindIndex - find the index of the first item that matches.
