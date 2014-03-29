// Example of a Callback
//*

function(num){
  console.log(num);
};

function something (cb){
  cb(Math.random() * 100);
}

//Call function Something
something(function(num){
  console.log(num);
});
//*/


// Rewrite Chat and Display as one command
//*
Chat.fetch // goes to server then passes an array of strings to its callback , doesn't return 
Chat.display // takes a string and appends to page doesn't return 

// Insert Code
var fetchAndDisplay = function() {

  Chat.fetch(function(msgArray){
    msgArray.forEach(Chat.display);
  });
}
// End Code

fetchAndDsiplay();

//*/

//* ANSWER
Chat.fetch // goes to server then passes an array of strings to its callback , doesn't return 

Chat.display // takes a string and appends to page doesn't return 

var fetchAndDisplay = function(){
  // go to the server and get the array of strings

  Chat.fetch(function(msgArray){
  // breakdown the array into individual strings
  // print each string
  msgArray.forEach(Chat.display);
  [1,2,3].forEach(console.log);
  
  for (var i=0; i < arr.length; i++) {
      func( arr[i],i , arr);
  }
    
  });

  fetchAndDisplay();
//*/

// Create the EACH callback 

//* This is the outcome:
// Each takes an array and then performs to EACH item in the array (e.g. console.log)
each([1,2,3], function(element, index, array){
  console.log(element, index, array); // do anything
});

// Ouput
// 1 0 [1,2,3]
// 2 1 [1,2,3]
// 3 2 [1,2,3]

//*/

//* Create the EACH Function. Insert ANSWER


//*/

//* ANSWER 1
var each = function(arr, func) {
  // perform the function across all elements in the loop
  for (var i=0; i< arr.length; i++) {
    func(arr[i],i,arr);
  }
}
//*/

//* 3. CREATE A MAP
//* MAP takes an array, takes a component, apply the call back to it, and then returns a new array
//* Produces a new array of values by mapping each value in list through a transformation function (iterator). 
// EXAMPLE
map([1,2,3], function(element){
  return element * Math.floor(Math.random() * element); // do anything
});

// OUTPUT
// [2,4,6]

//*/

//* INSERT YOUR CODE DOWN HERE
var map = function(arr, func) {
  // Create a new string
  var mapResult = [];

  // Reads the item in an array, 
  // Performs the function to it
  // Attaches the output to a string
  for (var i=0; i<arr.length; i++) {
    mapResult.push(func(value));
  };

  // Return the String
  return mapResult;

}
//*/

//* ANSWER 1
var map = function(arr, func) {
  // Create a new string
  var mapResult = [];

  // Reads the item in an array, 
  // Performs the function to it
  // Attaches the output to a string
  for (var i=0; i<arr.length; i++) {
    mapResult.push(func(value));
  };

  // Return the String
  return mapResult;
//*/

//* ANSWER 2
var map = function(arr, func) {
  // Create a new string
    var mappedArray = [];
    
    // take each component, apply the call back it.   
    each(arr, function(value){
      mappedArray.push(func(value));
    });
    
    // map return new array
    return mappedArray;
//*/
  
//* WRITE REDUCE
//* Overview: Also known as inject and foldl, reduce boils down a list of values into a single value.

//* EXAMPLE:
var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
=> 6
//*/

//* INSERT YOUR CODE HERE!
var reduce = function(arr, func, seed) {
  // perform an operation that takes the seed with each item in the array
  for (i=0; i < arr.length; i++) {
    seed = func(seed,arr[i]);
  }
  return seed;
}
//*/

//* Answer 1
var reduceMe = function(arr, func, seed) {
  // perform an operation that takes the seed with each item in the array
  for (i=0; i < arr.length; i++) {
    seed = func(seed,arr[i]);
  }
  return seed;
}
//*/

//* ANSWER 2 ** UNVERIFIED ** 
var reduce = function(arr, func, seed) {
  each(arr, function(value) {
    seed += value;
  })
}
//*/

 _.reduce = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });

    return memo;
  };

